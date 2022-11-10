import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import style from "../styles/Intro.module.css"

const Intro = () => {
    const router = useRouter();
    const [text, setText] = useState("");

    useEffect(() => {
        const handleInput = () => {
            if (text === "whoIs") {
                router.push({
                    pathname: "/about",
                });
            }
        };
        handleInput();
    }, [router, text]);
    return (
        <div className={style.intro_container}>
            <AnimatePresence>
                <motion.div
                    className={style.intro_text}
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {
                            scale: 0.8,
                            opacity: 0,
                        },
                        visible: {
                            scale: 1,
                            opacity: 1,
                            transition: {
                                delay: 0.4,
                                duration: 0.4
                            }
                        }
                    }}
                >
                    <p>Hello I am</p>
                    <h1>André Macedo</h1>
                    <h3>full stack developer</h3>
                </motion.div>
            </AnimatePresence>
            <div className={style.intro_bottom}>
                <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {
                            x: "100px",
                            opacity: 0,
                        },
                        visible: {
                            x: 0,
                            opacity: 1,
                            transition: {
                                delay: 0.4,
                                duration: 0.4,
                            },
                        },
                    }}
                >
                    {" "}
                    write the code below to continue:
                </motion.p>
                <motion.div
                    style={{ display: "flex", flexDirection: "row" }}
                    whileHover={{
                        scale: [1, 1.4, 1.2],
                        transition: {
                            duration: 0.2,
                        },
                    }}
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {
                            x: "100px",
                            opacity: 0,
                        },
                        visible: {
                            x: 0,
                            opacity: 1,
                            transition: {
                                delay: 0.4,
                                duration: 0.4,
                            },
                        },
                    }}
                >
                    <p>&#x276F;</p>
                    <input
                        type="text"
                        placeholder="whoIs"
                        onChange={(e) => setText(e.target.value)} />
                </motion.div>
            </div>
        </div>
    )
}

export default Intro;