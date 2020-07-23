import Head from 'next/head'
import Navbar from "../component/navbar"
import Landing from "../component/landing"
import Projects from "../component/projects"
import Experience from "../component/experience"
import Education from "../component/education"
import Skills from "../component/skills"

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>罗倚天的主页</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <Navbar></Navbar>
      <Landing></Landing>
      <Projects></Projects>
      <Experience></Experience>
      <Education></Education>
      <Skills></Skills>
        
    </div>
  )
}
