import React, { useEffect, useState , Suspense, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import styled from 'styled-components';
import gsap from 'gsap'
import { Main } from './about';
import {BrowserRouter , Routes , Route, Link } from 'react-router-dom';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { ContactShadows, OrbitControls  } from '@react-three/drei';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faGit, faLinkedin, faSquareGithub, faSquareInstagram, faTwitterSquare, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Man from './Man'
import { Scene } from 'three';
import AnimatedModel from './Animationed';
import { Contact } from './contact';
import { CertMain } from './App';
import { All } from './all';
import { useGSAP } from '@gsap/react';
// import { Respo } from './respoi';
let root = ReactDOM.createRoot(document.getElementById('root'))
// function videos(){
//   return(
//     <div className='vid'>
//       <video src='3130284-uhd_3840_2160_30fps.mp4'></video>
//     </div>
//   )
// }

// function Animated() {
//   return (
//     <div className="canvas">
//       <Canvas>
//         <ambientLight />
//         <OrbitControls enableZoom={false} rotateSpeed={3}  />
//         <Suspense fallback={null}>
//           <AnimatedModel />
//         </Suspense>
//       </Canvas>
//     </div>
//   )
// }
export function Home(){
  return(
    <>
    {/* <Animated/> */}
    <SayName/>
    <Cursor/>
    <Apps/>
    <Resume/>
    <About/>
    <Imaged/>
    </>
  )
}
function Showcont(){
  const [content , upcontent] = useState(false)
  useEffect(()=>{
    const timer = setTimeout(()=>{
      upcontent(true)
    },5500);
    return ()=> clearTimeout(timer)
  },[])
  return(
    <div className='app'>
       {!content ? (
        <video className='intro-video' src='/welcome.mp4' autoPlay muted onEnded={()=>upcontent(true)}/>
      )
      :(
        <Home/>
      )}
    
    
    </div>
  )
}
function Cursor() {
  useEffect(() => {
    const cursor = document.getElementById('cursor');
     const butn = document.querySelector('#resu')
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
   butn.addEventListener('mouseenter', ()=>{
    gsap.to(cursor, { scale: 6.5, duration: 0.3 });
    cursor.style.backgroundColor = "#ffff"
    cursor.style.backgroundImage= `url("https://marketplace.canva.com/EAFzfwx_Qik/4/0/1131w/canva-blue-simple-professional-cv-resume-T9RPR4DPdiw.jpg")`
    cursor.style.backgroundSize= "cover"
    cursor.style.color = "black"
    })
    butn.addEventListener('mouseleave',function(){
      cursor.innerText = ""
      gsap.to(cursor,{
        scale:1,
        duration:0.2
      })
      cursor.style.backgroundImage= `url("")`
    })
    window.addEventListener("mousemove", updateMousePosition);
    animate(); 
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
 
  }, []);

  return (
    <>
      <div id="cursor"></div>
      <div id="main">
      </div>
    </>
  );
}
function Apps(){
  return(
    <div className='scrolling'>
      <div className='scroll'>
        <a href='https://wa.me/919347663579' target="_blank" rel='noopener noreferrer'>
       <FontAwesomeIcon  className='whatsapp' icon={faWhatsapp} size='3x' color='red' />
       </a>
       <div className='scroll'>
        <a href='https://github.com/hello-yashwanth' target='_blank' rel='noopener noreferrer'>
       <FontAwesomeIcon className='whatsapp'icon={faSquareGithub} size='3x' color='red' />
       </a>
       </div>
       <div className='scroll'>
        <a href='https://www.instagram.com/yashu_yaswanth.143?utm_source=qr&igsh=cmN3ampzYWI1OTVq' target='_blank' rel='noopener noreferrer'>
       <FontAwesomeIcon className='whatsapp' icon={faSquareInstagram} size='3x' color='blue' />
       </a>
       </div>
       <div className='scroll'>
       <a href='https://www.linkedin.com/in/yashwanth-siddanathi-25b575334/' target='_blank' rel='noopener noreferrer'>
       <FontAwesomeIcon className='whatsapp' icon={faLinkedin} size='3x' color='blue' />
       </a>
       </div>
      </div>
    </div>
  )
}
function SayHello() {
  return (
    <>
     <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Showcont />} />
        <Route path="/skill" element={<Main />} />
        <Route path="/certificate/*" element={<CertMain />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}
function Resume(){
  return(
    <div className='res'>
     <a href='/ResumeYash.docx' ><button id='resu' >Resume</button></a> 
    </div>
  )
}
export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-heading">My Website</h1>

      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>


      <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/skill" onClick={() => setMenuOpen(false)}>Skill</Link></li>
        <li><Link to="/certificate" onClick={() => setMenuOpen(false)}>Certificate</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
      </ul>
    </nav>
  );
}
// function Naviagator(){

//   useEffect(()=>{
//      gsap.to('.nav',{
//   y:30,
//   opacity:1,
//   ease: "slow(0.7,0.7,false)",
//   duration:1.5
//  })
//   },[]);

//   return(
//        <ul className='nav'>
//     <li><Link to="/">Home</Link></li>
//     <li><Link to="/skill">Skill</Link></li>
//     <li><Link to="/certificate">Certificates</Link></li>
//     <li><Link to="/contact">Contact</Link></li>
//    </ul>
//   )
// }
function About(){
    const gsapref = useRef()
    useGSAP(()=>{
        gsap.to(gsapref.current,{
      duration:2.5,
ease: "expoScale(0.5,7,none)",
y: -300
     })
    })
    const gsapref1 = useRef()
    useGSAP(()=>{
        gsap.from(gsapref1.current,{
            y:-200,
            duration:3,
            delay:1,
            opacity:0,
            scaleX:1
        })
    })
    return(
        <div  className="paragraph">
        <p ref={gsapref1}>Greetings. I'm Siddanathi Yaswanth 4th btech from Aditya college of Engineering.
            I've Done My job in mern stack i had learn lot of thing in mernstack like expressjs , nodejs , mongodb
            and frontend html css js react frameworks.
        </p>
        </div>
    )
}
function Imaged(){
    const image = useRef()
    useGSAP(()=>{
        gsap.from(image.current,{
            x:150,
            duration:3.2,
            delay:1,
            opacity:0
        })
    })
    return(
        <div className='imaged'>
            <div className='imaged1'>
                <img id='myimg' ref={image} src='./my.png' alt='myimage'></img>
            </div>
        </div>
    )
}
export function SayName(){
 const [typed , updateType] = useState('')
useEffect(()=>{
  const texts = ["Webdeveloper","Problem solving by c++" , "Aws Developer"]
  let index = 0;

const inter = setInterval(()=>{
  updateType(texts[index]);
  index = (index+1)%texts.length;
}, 3000);
gsap.to('.type',{ duration:2.5,
ease: "bounce.out",
y: 500})
gsap.to('.name',{
  x:500,
  opacity:1,
  scale:1.5,
  duration:4,
  delay:2.5  
})
gsap.to('.hell',{
  opacity:1,
  x:500,
  duration:2.5,
})
return ()=> clearInterval(inter)
} , []);
  return(
    <>
     <h2 className='hell'>Hello</h2>
     <div className='type'>
      <span className='first'>I am </span>
      <span className='second'>{typed}</span>
     </div>
    <h1 className='name'>I am YASH</h1>
    </>
  )
}



root.render(    <>
<SayHello />
</>
)


