import Input from "../form/Input"
import SubmitButton from "../form/SubmitButton"

import { useState } from "react"

import styles from "./ContactForm.module.css"

function ContactForm({ handleSubmit, btnText, messageBody }) {
    const [message, setMessage] = useState(messageBody || {})

    function handleChange(e){
        setMessage({ ...message, [e.target.name]: e.target.value })
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <Input 
            type="text"
            text="Nome"
            placeholder="Insira seu nome"
            name="name"
            handleOnChange={handleChange}
            value={message.name}
            />

            <SubmitButton 
            text="Enviar Mensagem"
            />
        </form>
    )
}

export default ContactForm