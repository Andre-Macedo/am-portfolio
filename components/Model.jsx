

import Script from 'next/script'

import style from "../styles/Model.module.css"
const Model = () => {

    return (
        <div className={style.canvasEl}>
            <Script src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js" />
            <model-viewer src="../public/model/Scene.glb" ar ar-modes="webxr scene-viewer quick-look" camera-controls shadow-intensity="1" animation-name="Armature.001|Armature.001|Armature.001|mixamo.com|Layer0|Armatu" autoplay>

            </model-viewer>
        </div>
    );
};

export default Model;