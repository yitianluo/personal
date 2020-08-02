import styles from "./education.module.css"
import ScrollAnimation from 'react-animate-on-scroll';

export default function Education(props){

    return(
        <ScrollAnimation animateIn="animate__fadeInRight" animateOnce="true">
        <div className={styles.experience} id="education">
            <div className={styles.imgDiv}>
            {props.isEn?<h1>Education</h1>:<img src="/xingkai/education.png"></img>}
                
            </div>
            <div className={styles.history}>
                <div className={styles.school}>
                    <div className={styles.date}>
                        <h1>2013 - 2014</h1>
                        {props.isEn?<p>M.S. Quantitative Finance</p>:<p>数量金融硕士学位</p>}
                    </div>

                    <div className={styles.dot}></div>

                    <div className={styles.content}>
                        {props.isEn?<h1>Rensselaer Polytechnic Institute</h1>:<h1>美国伦斯勒理工学院</h1>}
                        {props.isEn?
                        <ul>
                            <li>Serve as the President of Buttonwood Club and Mandarin Club. Hold annual debate competition and educational sessions on Bloomberg Terminal. Communicate with GARP.</li>
                            <li>GPA 3.9. Lead the winning team of Lally School financial modeling competition.</li>
                        </ul>
                        :<ul>
                            <li>担任研究生院学生会主席、中文社区负责人，组织Lally商学院金融辩论会，组织彭博机教学活动，与全球风险管理协会保持密切联系。</li>
                            <li>GPA 3.9。带领团队获得Lally商学院金融建模比赛第一名，并代表学校参与全美金融建模大赛。</li>
                        </ul>}
                    </div>
                </div>

                <div className={styles.school}>
                    <div className={styles.date}>
                        <h1>2009 - 2013</h1>
                        {props.isEn?<p>B.S. Automation</p>:<p>自动化学士学位</p>}
                    </div>

                    <div className={styles.dot}></div>

                    <div className={styles.content}>
                    {props.isEn?<h1>Shanghai Jiao Tong University</h1>:<h1>上海交通大学</h1>}
                    {props.isEn?
                        <ul>
                            <li>Serve as the leader of Youth Volunteer team and work as volunteer for 2010 Expo、Shanghai International Marathon and other events.  </li>
                            <li>Win the excellent student leader & outstanding student prizes.</li>
                        </ul>
                        :<ul>
                            <li>担任电子信息与电气工程学院团总支副书记，青年志愿者队副部长。组织校内外志愿者参加上海世博会、上海马拉松赛、聋哑学校帮扶等志愿者活动。</li>
                            <li>获得上海交通大学优秀学生干部、三好学生等荣誉称号。</li>
                        </ul>}
                    </div>
                </div>

            </div>
        </div>
        </ScrollAnimation>
    )
}