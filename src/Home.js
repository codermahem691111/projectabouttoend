import React from 'react'
import { Cards } from './Cards';
import { Footer } from './Footer';
import { Carousel } from './Carousel';
import {History} from './History';
import { Team } from './Team';
import {Doctors} from './Doctors'
import { How } from './How';
import { Dsc } from './Dsc';
import { Testo } from './Testo';
import  {Books} from './Books'
import { About } from './pages/About';
import {Faq}  from './pages/Faq'
import { Contact } from './pages/Contact';
import { Videotes } from './pages/Videotes';
import ReactDOM from "react-dom/client";
import { Link, Routes, Route } from 'react-router-dom';
import { Navbar } from './Navbar';
import  {Navbar2} from './Navbar2';
import { Study } from './Study';
import { Shop } from './Shop';
import { Blogs } from './Blogs';
export const Home = () => {
  return (
    <>
    
    
 <Navbar></Navbar>
  <Carousel></Carousel>
  <Cards></Cards>
  <History></History>
  <Team></Team>
  <Doctors></Doctors>
 <How></How>
 <Dsc></Dsc>
 <Testo></Testo>
 <Books></Books>
 <Study></Study>
 <Shop></Shop>
 <Blogs></Blogs>
 <Footer></Footer>
    
    
    
    </>
  )
}
