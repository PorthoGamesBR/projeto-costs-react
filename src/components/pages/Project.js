import styles from "./Project.module.css"

import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'

import Loading from "../layout/Loading.js"
import Container from "../layout/Container.js"
import ProjectForm from "../project/ProjectForm.js"

function Project() {
   const { id } = useParams()

   const [project, setProject] = useState([])
   const [showProjectForm, setShowProjectForm] = useState(false)

   useEffect(() => {
    setTimeout(() => {
        fetch(`http://localhost:5000/projects/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },   
        })
        .then((resp) => resp.json())
        .then((data) => {
            setProject(data)
        })
        .catch((err) => console.log(err))
        }, 300)
    },[id])

    function editPost(project){
        // Budget Validation
        if(project.budget < project.cost){
            // mensagem
        }

        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project)
        })
        .then((resp) => resp.json())
        .then((data) => {

            setProject(data)
            setShowProjectForm(false)
        })
        .catch((err) => console.log(err))
    }

    function toggleProjectForm(){
        setShowProjectForm(!showProjectForm)
    }

    return (
        <>
        {project.name ? 
        (
            <div className={styles.project_details}>
                <Container customClass="column">
                    <div className={styles.details_container}>
                        <h1>Projeto: {project.name}</h1>
                        <button onClick={toggleProjectForm} className={styles.btn}>
                            {!showProjectForm ? 'Editar Projeto' : 'Fechar'}
                        </button>
                        {!showProjectForm ? (
                            <div className={styles.project_info}>
                                <p>
                                    <span>Categoria:</span> {project.category.name}
                                </p>
                                <p>
                                    <span>Total de Orçamento:</span> R${project.budget}
                                </p>
                                <p>
                                    <span>Total Utilizado:</span> R${project.cost}
                                </p>
                            </div>
                        ) :  (
                            <div className={styles.project_info}>
                                <ProjectForm handleSubmit={editPost} btnText="Concluir Edição" projectData={project} />
                            </div>
                        )}
                    </div>
                </Container>
            </div>
        ) : <Loading />}
        </>
        
    )
}

export default Project