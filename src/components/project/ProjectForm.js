import Input from "../form/Input"
import Select from "../form/Select"
import SubmitButton from "../form/SubmitButton"
import styles from "./ProjectForm.module.css"

function ProjectForm({ btnText }) {
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
        <Select name="category_id" text="Selecione a categoria" />
        <SubmitButton text={btnText}/>
    </form>
    )
}

export default ProjectForm