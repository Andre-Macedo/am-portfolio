/* eslint-disable react/jsx-no-comment-textnodes */
import { motion } from "framer-motion";

import style from "../styles/About.module.css";



const AboutLeftComponent = () => {

    return (
        <div className={style.left}>
            <motion.div
                className={style.left_number}
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {
                        y: "100px",
                        opacity: 0,
                    },
                    visible: {
                        y: "-370px",
                        opacity: 1,
                        transition: {
                            type: "spring",
                            delay: 0.2,
                            duration: 2,
                        },
                    },
                }}
            >
                <span className={style.text_fade_01}>20</span>
                <span className={style.text_fade_01}>21</span>
                <span className={style.text_fade_01}>22</span>
                <span className={style.text_fade_01}>23</span>
                <span className={style.text_fade_01}>24</span>
                <span className={style.text_fade_01}>25</span>
                <span className={style.text_fade_01}>26</span>
                <span className={style.text_fade_01}>27</span>
                <span className={style.text_fade_01}>28</span>
                <span className={style.text_fade_01}>29</span>
                <span className={style.text_fade_01}>30</span>
                <span className={style.text_fade_01}>31</span>
                <span className={style.text_fade_01}>32</span>
                <span className={style.text_fade_01}>33</span>
                <span className={style.text_fade_01}>34</span>
                <span className={style.text_fade_01}>35</span>
                <span className={style.text_fade_02}>36</span>
                <span className={style.text_fade_03}>37</span>
                <span>38</span>
                <span>39</span>
                <span>40</span>
                <span>41</span>
                <span>42</span>
                <span>43</span>
                <span>44</span>
                <span>45</span>
                <span>46</span>
                <span>47</span>
                <span>48</span>
                <span>49</span>
                <span>50</span>
                <span>51</span>
                <span>52</span>
                <span className={style.text_fade_03}>53</span>
                <span className={style.text_fade_02}>54</span>
                <span className={style.text_fade_01}>55</span>
            </motion.div>
            <div className={style.left_line}></div>
            <div className={style.left_line2}></div>
            <motion.div
                className={style.left_about}
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {
                        y: "300px",
                        opacity: 0,
                    },
                    visible: {
                        y: "0px",
                        opacity: 1,
                        transition: {
                            type: "spring",
                            delay: 0.2,
                            duration: 3,
                        },
                    },
                }}
            >
                <span className={style.ml_2}>
                    /** </span>
                <span style={{ fontWeight: "bold" }}>* About me</span>
                <span>* Creative and self-starting Jr. Full-Stack Developer</span>
                <span>* Looking for employement.</span>
                {/* <span>* .</span> */}
                <span>* Proficient in HTML, CSS, JavaScript, React, Next</span>
                <span>* Node, C, Java, MongoDB plus modern libraries and frameworks.</span>
                <span className={style.ml_2}>*/
                </span>
            </motion.div>
        </div>
    );
};

export default AboutLeftComponent;