import styles from "./experience.module.css";
import ScrollAnimation from 'react-animate-on-scroll';

export default function Experience(props){
    return(
        <ScrollAnimation animateIn="animate__fadeInLeft">
        
        <div className={styles.experience} id="experience">
            <div className={styles.imgDiv}>
                {props.isEn?<h1>Experience</h1>:<img src="/xingkai/experience.png"></img>}
            </div>
            <div className={styles.history}>


                <div className={styles.job}>
                    <div className={styles.date}>
                        <h1>2018 - 2019</h1>
                        {props.isEn?<p>Fund Manager</p>:<p>基金总监</p>}
                    </div>

                    <div className={styles.dot}></div>

                    <div className={styles.content}>
                    {props.isEn?<h1>Nanhai Corporation</h1>:<h1>南海控股有限公司（00680.HK）</h1>}
                    {props.isEn? 
                        <ul>
                            <li>Lead the fund team and manage the operation of Orient Dadi PE fund. Successully exit from nearly 10 projects and secure the safety of investors' money.</li>
                            <li>Work with local government and financial institutes to establish PE fund focusing on culture and technology industries in the middle area of China.</li>
                            <li>Take responsibility for the issuing of USD Corporate Bond. Communicate with Moody's and prepare roadshow slides with securities company. </li>
                            <li>Evaluate and manage the currency swap agreemnt with Credit Suisse. </li>
                        </ul>:
                        <ul>
                            <li>带领团队全面负责北京东方大地影视投资基金的投资与投后管理，退出近十个项目。保障了投资人的资金安全。</li>
                            <li>与地方政府、金融机构合作，在华中地区成立文化科技领域股权投资基金。</li>
                            <li>组织公司海外美元债的发行。负责与评级机构Moodys及券商沟通，准备路演材料。</li>
                            <li>负责公司美元货币互换协议的价值评估与日常管理。对冲多币种汇率风险。</li>
                        </ul>}
                    </div>
                </div>

                <div className={styles.job}>
                    <div className={styles.date}>
                        <h1>2017 - 2018</h1>
                        {props.isEn?<p>Investment manager</p>:<p>投资经理</p>}
                    </div>

                    <div className={styles.dot}></div>

                    <div className={styles.content}>
                    {props.isEn? <h1>China Investment Financial Holdings</h1>:<h1>中投中财基金管理有限公司</h1>}
                    {props.isEn? 
                        <ul>
                            <li>Participate in the due diligence and fund establishment in AI、big data、intelligent manufacturing fields.</li>
                            <li>Participate in the private placement of listed company.</li>
                            <li>Participate in the WeDoctor Pre-IPO fund.</li>
                       </ul>:
                        <ul>
                            <li>参与人工智能、大数据、智能制造、军民融合等科技领域的项目尽职调查和基金组建。</li>
                            <li>参与上市公司欣旺达的定向增发。</li>
                            <li>参与互联网医疗公司微医的上市前尽调及基金投资。</li>
                        </ul>
                    }
                    </div>
                </div>

                <div className={styles.job}>
                    <div className={styles.date}>
                        <h1>2016 - 2017</h1>
                        {props.isEn?<p>Assistant President</p>:<p>总裁助理</p>}
                    </div>

                    <div className={styles.dot}></div>

                    <div className={styles.content}>
                    {props.isEn?<h1>Shanghai Fortune Capital</h1>:
                        <h1>上海裕禧股权投资管理有限公司</h1>}
                        {props.isEn? 
                        <ul>
                            <li>Corporate with listed company and local government to establish a venture capital fund. </li>
                        </ul>:
                        <ul>
                            <li>协调上市公司投资人与政府关系，撰写标书并参与公开招标答辩，成立政府引导基金参与的天使投资基金，完成基金管理人备案。参与公司的日常管理和拟投项目尽职调查。</li>
                        </ul>}
                    </div>
                </div>

            </div>
        </div>
        </ScrollAnimation>
    )
}