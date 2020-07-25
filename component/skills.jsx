import styles from "./skills.module.css"

export default function Skills(props){
    return(
        <div className={styles.skills} id="skills">
            <div className={styles.imgDiv}>
                {props.isEn? <h1>Skills</h1>:<img src="/xingkai/skills.png"></img>}
            </div>
            <div className={styles.skillDiv}>
                <div className={styles.row}>
                    <div className={styles.block}>
                        <div className={styles.mask}></div>
                        {props.isEn?<h2>Power Point - Pro</h2>:<h2>Power Point - 专业</h2>}
                    </div>

                    <div className={styles.block}>
                        <div className={styles.mask}>
                        </div>
                        {props.isEn?<h2>MS Excel & Word - Pro</h2>:<h2>MS Excel & Word - 专业</h2>}
                    </div>
                </div>
            </div>

            <div className={styles.skillDiv}>
                <div className={styles.row}>
                    <div className={styles.block}>
                        <div className={styles.mask}></div>
                        {props.isEn?<h2>English - Working Language</h2>:<h2>英语 - 工作语言</h2>}
                    </div>

                    <div className={styles.block}>
                        <div className={styles.mask}>
                        </div>
                        {props.isEn?<h2>JavaScript、Html、Css - Pro</h2>:<h2>JavaScript、Html、Css - 专业</h2>}
                    </div>
                </div>
            </div>

            <div className={styles.skillDiv}>
                <div className={styles.row}>
                    <div className={styles.block}>
                        <div className={styles.mask}></div>
                        {props.isEn?<h2>CFA II Candidate</h2>:<h2>CFA II 级候选人</h2>}
                    </div>

                    <div className={styles.block}>
                        <div className={styles.mask}>
                        </div>
                        {props.isEn?<h2>Certificate of Funds </h2>:<h2>基金从业资格</h2>}
                    </div>
                </div>
            </div>
        </div>
    )
}