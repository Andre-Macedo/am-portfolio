import { FiChevronRight, FiChevronDown } from "react-icons/fi";
import { BsFolderFill, BsMarkdownFill } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import style from "../styles/About.module.css";

const SkillComponent = (props) => {

    const iconColor = props.color;

    const [show, setShow] = useState(props.visible)

    return (
        <div className={style.skill}>
            <div
                onClick={(e) => setShow(!show)}
                className={style.dropdownSkill}
            >
                <span>
                    {show ? <FiChevronDown /> : <FiChevronRight />}
                </span>
                <span style={{ color: `${iconColor}` }}>
                    <BsFolderFill />
                </span>
                <span> {props.skillName}</span>
            </div>
            <AnimatePresence>
                {show && (
                    <motion.div
                        className={style.showSkill}
                        initial="hidden"
                        animate="visible"
                        exit="go"
                        variants={{
                            hidden: {
                                y: "-20px",
                                opacity: 0,
                            },
                            visible: {
                                y: "0",
                                opacity: 1,
                                transition: {
                                    type: "spring",
                                    delay: 0.2,
                                    duration: 0.5,
                                },
                            },
                            go: {
                                y: "-20px",
                                opacity: 0,
                                transition: {
                                    type: "spring",
                                    delay: 0.2,
                                    duration: 0.3,
                                },
                            },
                        }}
                    >
                        {
                            props.subSkill.map((subSkill) => (

                                <p key={subSkill}>
                                    <BsMarkdownFill /> {subSkill}
                                </p>
                            ))
                        }

                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default SkillComponent;