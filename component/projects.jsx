import styles from "./projects.module.css"

export default function Projects(props){
    return(
        <div className={styles.projects} id="project">
            <div className={styles.divTitle}>
                {props.isEn?<h1>Projects</h1>:<img src="/xingkai/project.png"></img>}
            </div>


            <div className={styles.projectDiv}>
                <div className={styles.finance}>
                    <h1>{props.isEn?"Finance":"金融领域"}</h1>
                    <div className={styles.fund}>
                        <h2>{props.isEn?"Shanghai Zefu Ventures":"上海泽阜投资中心"}</h2>
                        {props.isEn?<p>In 2016, the government of Shanghai Minhang district looked for fund companies to help with the government fund management through open tendering. I led a team to finish the bidding documents and eventually won the qualification. Then I worked with all the partners to finish the partnership agreement and establish the venture capital fund.</p>
                        :<p>2016年，上海市闵行区政府以引导基金出资，面向社会公开招标，征集基金管理人。我负责该项目，全程参与及主导标书撰写，招标答辩全流程并最终帮助公司成功中标。而后与基石投资人协议签订有限合伙协议，在中国基金业协会备案并成立有限合伙制的天使投资基金--上海泽阜投资中心。<a href="https://www.tianyancha.com/company/3063350650">(点击查看工商信息)</a></p>
                        }
                    </div>
                    <div className={styles.fund}>
                        <h2>{props.isEn?"WeDoctor Pre-IPO fund":"微医上市前融资"}</h2>
                        {props.isEn?<p>In 2018, the online medical giant WeDoctor was going to be listed on HKex and started a Pre-IPO round of financing. I participated in the due diligence and fund raising. Eventually, WeDoctor finished its 0.5 billion USD financing.</p>
                        :<p>2018年，腾讯旗下的互联网医疗平台微医控股有限公司有意港股上市，进行上市前融资。我作为团队成员参与尽职调查，材料撰写，成立专项基金投资该项目。最终在2018年5月，微医完成5亿美元战略融资。<a href="https://www.sohu.com/a/231081155_797701">（点击查看融资信息）</a></p>
                        }
                    </div>
                    <div className={styles.fund}>
                        <h2>Orient Dadi PE fund</h2>
                        {props.isEn?<p>Orient Dadi PE fund was founded by a subsidiary of China Orient Asset Management and the No.2 Cinema management company in China -- Dadi Group. I was the manager of the fund and took responsibility for the investment and management of the fund. I successfully exit from nearly 10 projects and saved investors lots of money. </p>
                        :<p>东方大地影视投资基金由四大AMC之一的东方资产旗下子公司与文化行业龙头企业大地电影共同设立，主要投资文化影视项目。我作为该基金负责人，带领团队进行基金的日常管理，进行项目投资，帮助已投项目有序退出。管理基金期间，成功退出约十个项目，为公司收回投资数千万元，有效地保障了投资人的资金安全。</p>
                        }
                        <div className={styles.four}>
                            <img src="/movie/pangzi.jpg"></img>
                            <img src="/movie/hhr.jpg"></img>
                            <img src="/movie/syst.jpg"></img>
                            <img src="/movie/xhgn.jpg"></img>
                        </div>
                        <div className={styles.two}>
                            <img src="/movie/lzzw.jpg"></img>
                            <img src="/movie/xhn.jpg"></img>

                        </div>
                    </div>
                </div>



                <div className={styles.other}>
                    <div className={styles.technology}>
                        <h1>{props.isEn?"Technology":"科技领域"}</h1>
                        <div className={styles.website}>
                            <h2>{props.isEn?"MEAN framework websites":"MERN架构网站"}</h2>
                            {props.isEn?<p>I'm familar with programming languages like Python, JavaScript, Swift,Matlab,etc. I developed several websites by myself using React as frontend, Node JS and Express as backend, and MongoDB as database. For example, I built a country encyclopedia websites, a website for Isun Technology Inc.,etc. </p>
                            :<p>我熟练掌握Python,JavaScript,Swift,Matlab等编程语言。曾自己开发并编写数个以React为前端，Node JS和Express为服务器，MongoDB为数据库的响应式网站。比如编写全球国家知识图谱网站，为Isun Technology编写公司主页等。</p>
                            }
                            <a href="https://country-nextjs.vercel.app/"><img src="/website/country.png"></img></a>
                            <a href="https://isun-next.vercel.app/"><img src="/website/isun.jpg"></img></a>
                        </div>
                    </div>
                    <div className={styles.education}>
                        <h1>{props.isEn?"Education":"教育领域"}</h1>
                        {props.isEn?<p>As the President of Alumni Association of Hefei No.1 high school and speech guest for Anhui Returnees Association, I always give speeches to sharing my knowledge and thoughts. I made a speech on TEDx with the topic "Recognition,change and self transcendence"<a href="https://www.ted.com/talks/yitian_luo_recognition_change_and_self_transcendence">(Watch Video)</a> </p>
                        :<p>作为合肥一中北京校友会会长及安徽海归联合会嘉宾，我常出席社会活动分享心得体悟。如在TEDx上做主题演讲“自我认知、改变和超越”<a href="https://www.ted.com/talks/yitian_luo_recognition_change_and_self_transcendence">（点击查看TEDx演讲）</a>。此外，我在今日头条和微信上经营公众号“倚天听说”，创作金融、经济、科技领域原创文章。</p>
                        }
                        <a href="https://www.ted.com/talks/yitian_luo_recognition_change_and_self_transcendence"><img src="/website/ted.png"></img></a>
                    </div>
                </div>
                </div>
        </div>
    )
}