import style from "../styles/Footer.module.css";
import { BsLinkedin, BsGithub, BsTwitter, BsEnvelope } from "react-icons/bs";
import ContactItem from "./ContactItem";
import Clock from "./Clock";

const Footer = () => {

    return (
        <footer className={style.footer}>
            <div>
                <p className={style.contact_label}>Contact Me:</p>
                <ContactItem contactIcon={BsLinkedin} contactLink="" />
                <ContactItem contactIcon={BsGithub} contactLink="https://github.com/Andre-Macedo" />
                <ContactItem contactIcon={BsTwitter} contactLink="" />
                <ContactItem contactIcon={BsEnvelope} contactLink="mailto:andrluis@proton.me" />
            </div>
            <Clock />
        </footer>
    );
};

export default Footer