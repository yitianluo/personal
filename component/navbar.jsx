import styles from "./navbar.module.css"


export default function Navbar(props){
    return(
        <div className={styles.navbar}>
            {props.isEn? <h1>Yitian Luo</h1>:<img src="/xingkai/name.png"></img>}
            {/* <p style={{fontWeight:"bold"}}>Yitianluo.com</p> */}
            <div className={styles.menu}>
                <div className={styles.switch}>
                    <div className={styles.lang} onClick={props.chooseCh} style={props.isEn ? {backgroundColor:"white",color:"var(--Text-Color)"}:{}}>
                        <p>中文</p>
                    </div>
                    <div className={styles.lang} onClick={props.chooseEn} style={props.isEn ? {}:{backgroundColor:"white",color:"var(--Text-Color)"}}>
                        <p>En</p>
                    </div>
                </div>
                <p><a href="#project">{props.isEn?"Projects":"项目经历"}</a></p>
                <p><a href="#experience">{props.isEn?"Experience":"工作经历"}</a></p>
                <p><a href="#education">{props.isEn?"Education":"教育经历"}</a></p>
                <p><a href="#skills">{props.isEn?"Skills":"技能及专长"}</a></p>
            </div>
        </div>
    )
}