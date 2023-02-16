import styles from "Contact.module.css"
import Container from "../layout/Container"

function Contact() {
    return (
    
    <div className={styles.contact_container}>
        <div className={styles.title_container}>
            <h1>Contato</h1>
            <p>Fale conosco</p>
        </div>
        <Container customClass="start">
            // barra de icones de redes sociais

            <div>
                // formulario de contato
            </div>
        </Container>
    </div>
    )
}

export default Contact