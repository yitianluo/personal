import styles from "./navbar.module.css"


export default function Navbar(){
    return(
        <div className={styles.navbar}>
            <h1>罗倚天</h1>
            <div className={styles.menu}>
                <p>项目经历</p>
                <p>工作经历</p>
                <p>教育经历</p>
                <p>技能及专长</p>
            </div>
        </div>
    )
}