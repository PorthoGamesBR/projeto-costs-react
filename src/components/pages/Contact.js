import styles from "./Contact.module.css"
import Container from "../layout/Container"

import ContactForm from "../contact/ContactForm"

function Contact() {
    return (
    
    <div className={styles.contact_container}>
        <div className={styles.title_container}>
            <h1>Contato</h1>
            <p>Entre em contato diretamente conosco!</p>
        </div>
        <Container customClass="column">
            <div className={styles.contact_form}>
                {
                <ContactForm />
                }
            </div>
            
        </Container>
        <div>
                {
                    // imagem apontando para as redes sociais abaixo
                }
        </div>
    </div>
    )
}

export default Contact