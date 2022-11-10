import dynamic from "next/dynamic";
import style from "../styles/Main.module.css";
import Intro from "./Intro.jsx";
import Model from "./Model.jsx";


const Main = () => {
    // const Model = dynamic(
    //     () => import('./Model'),
    //     {
    //         ssr: false,
    //     },
    // );

    return (
        <main className={style.container}>
            <div className={style.main}>
                <Intro></Intro>
                {/* <Model></Model> */}
            </div>
        </main>
    );
};

export default Main;