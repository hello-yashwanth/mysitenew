import React, { useEffect, useState , Suspense, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import styled from 'styled-components';
import gsap from 'gsap'
import { Main } from './about';
import {BrowserRouter , Routes , Route, Link } from 'react-router-dom';
import AnimatedModel from './Animationed';
import { Contact } from './contact';
import { CertMain } from './App';
let root = ReactDOM.createRoot(document.getElementById('root'))
export function Respo(){
  return(
    <div className='respo'>
      <ul>
      <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/certificate">Certificates</Link></li>
    <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  )
}
// root.render(<Respo/>)
