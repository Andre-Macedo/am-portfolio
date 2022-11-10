/* eslint-disable react/jsx-no-comment-textnodes */
import style from "../styles/About.module.css";
import AboutLeftComponent from "./AboutLeftComponent";
import AboutRightComponent from "./AboutRightComponent";

const AboutComponent = () => {

    return (
        <div className={style.about}>
            <AboutLeftComponent />
            <AboutRightComponent />
        </div>
    );
};

export default AboutComponent;