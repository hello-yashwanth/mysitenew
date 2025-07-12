import React, { useEffect, useRef } from 'react'
import './index.css'
import {SayName } from '.'
import { Respo } from './respoi'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ReactDOM from 'react-dom/client';
import {ScrollTrigger} from 'gsap/ScrollTrigger'
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHtml5 , faCss3 , faSquareJs , faReact, faJsSquare, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import {faDatabase} from '@fortawesome/free-solid-svg-icons'
import { CertMain } from './App'
import { BrowserRouter , Links } from 'react-router-dom'
let root = ReactDOM.createRoot(document.getElementById('root'))
export function Main(){
    return(
        <>
      <Myskill/>
      <Cursor/>
      <Journey/>
        </>
        
    )
}

export function Cursor() {
  useEffect(() => {
    const cursor = document.getElementById('cursor');
    const butn = document.querySelector('#myimg');
    const container1 = document.querySelector('.container1');
    const container2 = document.querySelector('.container2');
    const certi = document.querySelector('.certificate');
    const proj = document.querySelector('.project');

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const updateMousePosition = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.1;
      currentY += (mouseY - currentY) * 0.1;

      gsap.set(cursor, {
        x: currentX,
        y: currentY,
      });

      requestAnimationFrame(animate);
    };

    // Start animation and tracking
    window.addEventListener("mousemove", updateMousePosition);
    animate();

    // Hover effects
    const addHoverEffect = (element, text, scale = 4.5) => {
      if (!element) return;
      element.addEventListener('mouseenter', () => {
        gsap.to(cursor, {
          scale,
          duration: 0.4,
        });
        cursor.innerHTML = text;
      });
      element.addEventListener('mouseleave', () => {
        gsap.to(cursor, {
          scale: 1,
          duration: 0.4,
        });
        cursor.innerHTML = "";
      });
    };

    addHoverEffect(butn, "Profile");
    addHoverEffect(container1, "Frontend", 3.5);
    addHoverEffect(container2, "Backend", 3.5);
    addHoverEffect(certi, "Certificates", 3.5);
    addHoverEffect(proj, "Projects", 3.5);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <>
      <div
        id="cursor"
        style={{
          width: "60px",
          height: "60px",
          position: "fixed",
          top: 0,
          left: 0,
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          color: "white",
          fontSize: "12px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%",
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
          zIndex: 9999,
        }}
      ></div>
      <div id="main"></div>
    </>
  );
}


gsap.registerPlugin(ScrollTrigger)


function Myskill(){
    const Mygsap = useRef()
useGSAP(()=>{
    gsap.from(Mygsap.current,{
duration:2.5,
ease: "circ.out",
y: -250
      // scrollTrigger: {
      //   trigger: Mygsap.current,
      //   start: 'top 200%',
      //   end: 'top 40%',
      //   scrub: true,
      //  }
    })
})
    const Mygsap1 = useRef()
useGSAP(()=>{
    gsap.from(Mygsap1.current,{
   y: 300,
      opacity: 0,
      duration: 2.5,
      delay:1,

      // scrollTrigger: {
      //   trigger: Mygsap1.current,
      //   start: 'top 50%',
      //   end: 'top 100%',
      //   scrub: true,
      // markers:true
      //  }
    })
})
    return(
        <>
        <p id='skill'>My skills</p>
        <div className='container'>
            <div ref={Mygsap} className='container1'>
                <h1 id='front'>Front End </h1>
               <FontAwesomeIcon className='font' icon={faHtml5} size='3' color='orange' />
               <FontAwesomeIcon className='font' icon={faCss3} size='3' color='blue' />
               <FontAwesomeIcon className='font' icon={faJsSquare} size='3' color='yellow' />
               <FontAwesomeIcon className='font' icon={faReact} size='3' color='violet' />
            </div>
               <div ref={Mygsap1} className='container2'>
                <h1 id='front'>Back End </h1>
               <FontAwesomeIcon className='font' icon={faNodeJs} onAnimationEnd={3} size='3x' color='blue' />
               <FontAwesomeIcon className= 'font' icon={faDatabase} size='3x' color='red' />
               {/* <FontAwesomeIcon className='font' href='https://iconscout.com/icon/express-js-11217675_9200670'  size='3' color='blue' /> */}
            </div>
        </div>
        </>
    )
}
export default function Journey() {


    useEffect(() => {
    const cursor = document.getElementById('cursor');
    const edu = document.querySelector('.education');
    const inter = document.querySelector('.inter');
    const btech = document.querySelector('.btech');

    if (!cursor || !edu || !inter || !btech) return;

    const handleEnter = (url) => () => {
      gsap.to(cursor, { scale: 2.5 });
      cursor.style.backgroundImage = `url("${url}")`;
      cursor.style.backgroundSize = 'cover';
    };

    const handleLeave = () => {
      gsap.to(cursor, { scale: 1 });
      cursor.style.backgroundImage = '';
    };

    edu.addEventListener('mouseenter', handleEnter("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgcLJFAaEIsUBlOk_TdYT3kbrGKRgvPUgPdw&s"));
    edu.addEventListener('mouseleave', handleLeave);

    inter.addEventListener('mouseenter', handleEnter("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScDukWrjlX-8QrioanTha7fgS0ZIw_3QnsXg&s"));
    inter.addEventListener('mouseleave', handleLeave);

    btech.addEventListener('mouseenter', handleEnter("https://images.shiksha.com/mediadata/images/1548074175phpYVtfJa.png"));
    btech.addEventListener('mouseleave', handleLeave);

    return () => {
      edu.removeEventListener('mouseenter', handleEnter);
      edu.removeEventListener('mouseleave', handleLeave);
      inter.removeEventListener('mouseenter', handleEnter);
      inter.removeEventListener('mouseleave', handleLeave);
      btech.removeEventListener('mouseenter', handleEnter);
      btech.removeEventListener('mouseleave', handleLeave);
    };
  }, []);
  return (
    <>
      <div id="education0">
        <p className="education00">Journey</p>
      </div>

      <div className="education">
        <div className="education1">
          <p className="education2" data-aos="flip-right">EDUCATION</p>
          <p className="year" data-aos="flip-right">2019-2020</p>
          <p className="education3" data-aos="flip-right">SCHOOL</p>
          <p className="education4" data-aos="flip-right">
            I HAD PASSED SCHOOL IN YEAR 2020. I HAD GRADE 9.5 IN SSC. MY SCHOOL NAME WAS BHASHYAM EM HIGH SCHOOL IN KAKINADA.
          </p>
        </div>
      </div>

      <div className="inter">
        <div className="inter1">
          <p className="year1" data-aos="flip-right">2020-2022</p>
          <p className="education5" data-aos="flip-right">INTERMEDIATE</p>
          <p className="education6" data-aos="flip-right">
            I HAD PASSED INTERMEDIATE IN 2022 WITH 76 PERCENTAGE IN NARAYANA JUNIOR COLLEGE. THEN I HAD WRITTEN EAMCET. I HAD DECIDED TO JOIN ENGINEERING.
          </p>
        </div>
      </div>

      <div className="btech">
        <div className="btech1">
          <p className="year2" data-aos="flip-right">2022-2026</p>
          <p className="education7" data-aos="flip-right">BTECH</p>
          <p className="education8" data-aos="flip-right">
            I HAD JOINED ENGINEERING IN ADITYA COLLEGE OF ENGINEERING SURAMPALEM. THEN I WAS PASSED BTECH IN 2026 WITH 7 CGPA.
          </p>
        </div>
      </div>

      <div className="experience">
        <div className="experience1">
          <p className="education9" data-aos="flip-left">EXPERIENCE</p>
          <p className="education10" data-aos="flip-left">Aws Developer intern</p>
          <p className="education11" data-aos="flip-left">
            I had learned Aws development in Thub.I had 1yr of Experience about tools about aws.
            I also write the aws developer associative Exam and passed it. 
          </p>
        </div>
      </div>

      <div className="experience2">
        <div className="experience3">
          <p className="education12" data-aos="flip-left">Academor intern</p>
          <p className="education13" data-aos="flip-left">
            I had intern on academor platform for web development. It had four months of intenship
            I had learn the mern stack to get the experience . I had done some Projects from basics to advance.
          </p>
        </div>
      </div>

      <div  className="experience4">
        <div className="experience5">
          <p className="education15" data-aos="flip-left">Unified menter intern</p>
          <p className="education16" data-aos="flip-left">
            I completed a 2-month Data Analytics internship with Unified Mentor Platform, where I gained hands-on experience in analyzing real-world datasets and delivering actionable insights. During the internship.
          </p>
        </div>
      </div>

      <div className="pole">
        <div className="pole1">
          <div className="left">
            <div className="lef"></div>
            <div className="lef1"></div>
            <div className="lef2"></div>
          </div>
        </div>
      </div>
    </>
  );
}

root.render(<Main/>)