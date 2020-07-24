import styles from "./skills.module.css"

export default function Skills(){
    return(
        <div className={styles.skills} id="skills">
            <div className={styles.imgDiv}>
                <img src="/xingkai/skills.png"></img>
            </div>
            <div className={styles.skillDiv}>
                <div className={styles.row}>
                    <div className={styles.block}>
                        <div className={styles.mask}></div>
                        <h2>Power Point - 专业</h2>
                    </div>

                    <div className={styles.block}>
                        <div className={styles.mask}>
                        </div>
                        <h2>Microsoft Excel & Word - 专业</h2>
                    </div>
                </div>
            </div>

            <div className={styles.skillDiv}>
                <div className={styles.row}>
                    <div className={styles.block}>
                        <div className={styles.mask}></div>
                        <h2>英语 - 工作语言</h2>
                    </div>

                    <div className={styles.block}>
                        <div className={styles.mask}>
                        </div>
                        <h2>JavaScript、Html、Css - 专业</h2>
                    </div>
                </div>
            </div>

            <div className={styles.skillDiv}>
                <div className={styles.row}>
                    <div className={styles.block}>
                        <div className={styles.mask}></div>
                        <h2>CFA II 级候选人</h2>
                    </div>

                    <div className={styles.block}>
                        <div className={styles.mask}>
                        </div>
                        <h2>基金从业资格</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}