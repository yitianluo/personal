import styles from "./navbar.module.css"


export default function Navbar(){
    return(
        <div className={styles.navbar}>
            <img src="/xingkai/name.png"></img>
            <div className={styles.menu}>
                <p><a href="#project">项目经历</a></p>
                <p><a href="#experience">工作经历</a></p>
                <p><a href="#education">教育经历</a></p>
                <p><a href="#skills">技能及专长</a></p>
            </div>
        </div>
    )
}