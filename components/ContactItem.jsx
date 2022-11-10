
const ContactItem = props => {

    const { contactIcon, contactLink } = props

    const BsIcon = contactIcon;
    return (
        <>
            <a
                href={contactLink}
                target="_blank"
                rel="noopener noreferrer"
            >
                <BsIcon />
            </a>
        </>

    );
};

export default ContactItem;