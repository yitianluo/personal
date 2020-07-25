import styles from "./landing.module.css"

export default function Landing(props){
    return(
         <div>
            <div className={styles.landing}>
                <img src="/background.jpg"></img>
                
                
                <div className={styles.mask}></div>
                    <div className={styles.namecard}>
                        <div className={styles.photo}>
                            <img src="/photo.jpg"></img>
                        </div>
                        <div className={styles.introduction}>
                            <div className={styles.row}>
                            {props.isEn?<div className={styles.person}>
                                <h1>Yitian Luo</h1>
                                <h2>Investor、Developer、Educator</h2>
                            </div> : <img src="/xingkai/person.png"></img>}
                                
                            </div>
                            <div className={styles.row}>
                                <h3>{props.isEn? "Mobile":"移动电话"}</h3>
                                <p>18621906435</p>
                            </div>
                            <div className={styles.row}>
                                <h3>{props.isEn? "Email":"电子邮件"}</h3>
                                <p>yitianluo1991@163.com</p>
                            </div>
                            <div className={styles.row}>
                                <h3>{props.isEn? "DOB":"出生日期"}</h3>
                                <p>1991.7</p>
                            </div>
                        </div>
                    </div>
                    
            </div>

            <div className={styles.socialDiv}>
                <div className={styles.social}>
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" className="svg-inline--fa fa-twitter fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="white" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook" className="svg-inline--fa fa-facebook fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="white" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg>
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" className="svg-inline--fa fa-instagram fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="white" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="envelope" className="svg-inline--fa fa-envelope fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="white" d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path></svg>
                </div>
            </div>

            <div className={styles.aboutme}>
                
                    {props.isEn? <div className={styles.intro}>
                        <h1>Hello, I'm Yitian</h1> 
                        <p>I keep learning new knowledge & technologies to become a professional with diversified skills. I got my bechelor degree in automation from Shanghai Jiao Tong university and graduated from Rensslaer Polytechnic Institute with a master degree in Quantitative Finance. I act as a developer and educator while developing my career as a financial professional. I raised a VC fund, a PE fund and managed a PE fund. I also built several websites using MERN framework. I shared my knowledge with people by giving TEDx speech and run my social media accounts.</p>
                        </div>:
                    <div className={styles.intro}>
                        <img src="/xingkai/hello.png"></img>
                        <p>我一直致力于成为一名全方位发展的人才。我本科毕业于上海交通大学自动化专业，研究生毕业于美国伦斯勒理工学院金融工程专业。工作以来，我在从事金融行业的同时，也努力成为一名优秀的全端开发者和教育者。在金融领域，我主导募集并成立过一支政府引导基金参与的天使投资基金，参与一支PE基金，带领团队负责过一支基金的投资与管理。科技领域，我独立完成数个网站的前端和后端的建设，熟练掌握多种编程语言。教育领域，我多次参与演讲等社会活动，并经营自己的微信公众号。</p>
                    </div>}
            
                
                   
                
                
            </div>

        </div>
    )
}