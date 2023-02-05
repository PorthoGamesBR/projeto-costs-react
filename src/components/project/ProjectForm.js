import Input from "../form/Input"
import styles from "./ProjectForm.module.css"

function ProjectForm() {
    return (
    <form className={styles.form}>
        <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira nome do projeto"/>
        <Input
        type="number"
        text="Orçamento do projeto"
        name="budget"
        placeholder="Insira o orçamento do projeto"/>
        <div>
            <select name="category_id">
                <option disabled selected> Selecione a categoria</option>
            </select>
        </div>
        <div>
            <input type="submit" value="Criar projeto" />
        </div>
    </form>
    )
}

export default ProjectForm