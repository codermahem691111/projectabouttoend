import React from 'react'
import { Carousel } from '../Carousel';
import { Footer } from '../Footer';
import  {YoutubeEmbed} from './YoutubeEmbed';
export const Videotes = () => {
  return (
    <>
    <Carousel></Carousel>
    <div className='mt-10 ml-20'>
    <h2 className='text-2xl text-sky-400 text-center  mt-10 mb-10'>Wellcome to video testomonial</h2>
    <YoutubeEmbed  embedId="8HslUzw35mc"></YoutubeEmbed>
   
    </div>
    <Footer></Footer> 
    
    </>
  )
}
