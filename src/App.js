import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Cursor } from './about';
import { others as Others } from './others';
import { Internships } from './intenships';
import { All } from './all';
import { offerletters as Offered } from './offers';

export function CertMain() {
  return (
    <>
      <MyProjects />
      <Cursor />

      <div className="buz">
        <ul>
          <li><Link to="all">All</Link></li>
          <li><Link to="internships">Internships</Link></li>
          <li><Link to="offerletters">Letters</Link></li>
          <li><Link to="others">Others</Link></li>
        </ul>
      </div>

      <Routes>
        <Route index element={<All />} />
        <Route path="all" element={<All />} />
        <Route path="internships" element={<Internships />} />
        <Route path="offerletters" element={<Offered />} />
        <Route path="others" element={<Others />} />
      </Routes>
    </>
  );
}

function MyProjects() {
  const projects = [
    { src: '/todolist.png', title: 'Todolist', text: "html css js", link: "https://github.com/hello-yashwanth/gymwebsite.git" },
    { src: '/wheather.png', title: 'WheatherApp', text: "html css js", link: "https://github.com/hello-yashwanth/weather.git" },
    { src: '/crud.png', title: 'crud operations', text: "html css js", link: "https://github.com/hello-yashwanth/cruded.git" },
    { src: '/cal.png', title: 'calculator', text: "html css js", link: "https://github.com/hello-yashwanth/calculator.git" },
    { src: '/shop.png', title: 'shopping website', text: "html css js database", link: "https://github.com/hello-yashwanth/shopping.git" },
    { src: '/form.png', title: 'form', text: "html css js php", link: "https://github.com/hello-yashwanth/form.git" },
    { src: '/gym.png', title: 'Gym website', text: "html css js mysql", link: "https://github.com/hello-yashwanth/gymwebsite.git" },
    { src: '/doctor.png', title: 'Doctorprescription', text: "React bootstrap mongodb express", link: "https://github.com/hello-yashwanth/doctorprecption.git" },
  ];

  return (
    <>
      <p id='proj'>My projects</p>
      <div className='project'>
        {projects.map((proj, index) => (
          <div key={index} className='projects1'>
            <img id='projimg' src={proj.src} alt='projects' />
            <p className='tit'>Title: {proj.title}</p>
            <p id='req'>Requirements: {proj.text}</p>
            {proj.disabled ? (
              <button disabled style={{ backgroundColor: "gray", cursor: "not-allowed" }}>Coming soon</button>
            ) : (
              <a id='lin' href={proj.link}><button>Link</button></a>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
