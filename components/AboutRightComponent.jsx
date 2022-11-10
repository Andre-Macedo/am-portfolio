import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import { useState } from "react"
import { motion } from "framer-motion";
import SkillComponent from "./SkillComponent";
import style from "../styles/About.module.css";

const AboutRightComponent = () => {

    const [showMenu, setShowMenu] = useState(true);

    return (
        <>
            <div className={style.skill_menu} onClick={(e) => setShowMenu(!showMenu)}>
                {" "}
                {showMenu ? <AiOutlineClose /> : <HiOutlineMenu />}
            </div>

            {showMenu && (
                <motion.div
                    className={style.right}
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {
                            x: "100px",
                            opacity: 0,
                        },
                        visible: {
                            x: "0",
                            opacity: 1,
                            transition: {
                                type: "spring",
                                delay: 2,
                            },
                        },
                    }}
                >
                    <div className={style.right_container}>
                        <h3>Explorer</h3>
                        <div className={style.right_interest}>
                            <span>
                                <FiChevronDown />
                            </span>
                            <span style={{ marginLeft: "5px" }}>MY INTERESTS</span>
                            <SkillComponent
                                skillName="React"
                                visible={true}
                                color="rgb(235,203,139)"
                                subSkill={[
                                    "reusable components.md",
                                    "routing.md",
                                    "fetching api.md",
                                    "context api.md",
                                    "redux.md",
                                    "next js.md"
                                ]}
                            />
                            <SkillComponent
                                skillName="Html and CSS"
                                visible={false}
                                color="rgb(163,190,140)"
                                subSkill={[
                                    "responsive websties.md",
                                    "grid flexbox.md",
                                ]}
                            />
                            <SkillComponent
                                skillName="Libraries"
                                visible={false}
                                color="rgb(191,97,106)"
                                subSkill={[
                                    "material ui.md",
                                    "bootstrap.md",
                                    "framer motion.md",
                                    "three js.md"
                                ]}
                            />
                            <SkillComponent
                                skillName="Free Time"
                                visible={false}
                                color="whitesmoke"
                                subSkill={[
                                    "footbal.md",
                                    "play video game.md",
                                    "play D&D.md",
                                    "go to the beach.md",
                                    "hang out with friends.md",
                                    "learn new things.md"
                                ]}
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </>
    )
}

export default AboutRightComponent;

