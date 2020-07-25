import Head from 'next/head'
import Navbar from "../component/navbar"
import Landing from "../component/landing"
import Projects from "../component/projects"
import Experience from "../component/experience"
import Education from "../component/education"
import Skills from "../component/skills"
import {useState} from "react"

export default function Home() {

  const [isEn,setIsEn] = useState(true); 

  function chooseEn(){
    console.log("en");
    var root = $(":root");
    root.css("--Font-Text","Avenir Book");
    root.css("--Font-Title","Avenir Black");
    root.css("--Font-Detail","Avenir Roman");
    setIsEn(true);
  }

  function chooseCh(){
    console.log("ch");
    var root = $(":root");
    root.css("--Font-Text","KaiTi, 楷体, STKaiti, 华文楷体,Kai,sans-serif");
    root.css("--Font-Title","KaiTi, 楷体, STKaiti, 华文楷体,Kai,sans-serif");
    root.css("--Font-Detail","Fangsong, 仿宋, STFangsong, 华文仿宋, sans-serif");
    setIsEn(false);
  }

  return (
    <div className="container">
      <Head lang="zh-CN" >
        <title>{isEn? "Yitian Luo's Page":"罗倚天的主页"}</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="/jquery-3.5.1.min.js"></script>
      </Head>

      
      <Navbar chooseCh={chooseCh} chooseEn={chooseEn} isEn={isEn}></Navbar>
      <Landing isEn={isEn}></Landing>
      <Projects isEn={isEn}></Projects>
      <Experience isEn={isEn}></Experience>
      <Education isEn={isEn}></Education>
      <Skills isEn={isEn}></Skills>
        
    </div>
  )
}
