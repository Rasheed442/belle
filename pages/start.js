import React, {useEffect, useState} from 'react'
import style from '../styles/start.module.css'
import {BsFillSunFill, BsMoonStars} from 'react-icons/bs'
import Aos from 'aos'
import 'aos/dist/aos.css'
function start() {
    const [light, setLight] = useState(false)
    const [img, setImg] = useState(false)
    const [img1, setImg1] = useState(false)
    const [img2, setImg2] = useState(false)
    const [img3, setImg3] = useState(false)
    const [img4, setImg4] = useState(false)
    // another click events
    const [open, setOpen] = useState(false)
    const [open1, setOpen1] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)
    const [open4, setOpen4] = useState(false)
    useEffect(() =>{ 
        Aos.init({duration: 2000});
    }, []);
  return (
    <>
<div className={style.container} style={{backgroundColor: light ? "white" : "black", transition:"0.5s"}}> 

      <div className={style.head}  style={{backgroundColor: light ? "white" : "black",  transition:"0.5s"}}>
        <h1 data-aos="fade-right" onClick={()=>{
          window.location="/"
        }}>BELLE</h1>
        <div data-aos="fade-down" className={style.icon}  
        style={{color: light ? "black" : "white"}}
        onClick={()=>{
        setLight(!light)
         }}>
           {light ?<BsMoonStars/>: <BsFillSunFill/>  }
        </div>
        </div>
 
 <div className={style.out} data-aos="fade-right">
         <div className={style.heading} id='heading' >

            <div style={{border: light ? "1px solid black":""}} className={style.conty}>
        <div className={style.main}>
         <img  style={{backgroundColor:light ? "black":"", backgroundColor: img ? "red": "",transition: img ? "0.5s":"0.5s"}}
         className={style.image1} src="tr1.png" onClick={()=>{
          // const heading = document.querySelector("#heading")
          // const rec = document.querySelector(".rec")
          // console.log(heading.children)
          // heading.children[1].remove();
          setImg(!img)
          setOpen1(!open1)
          setOpen2(false)
          setOpen3(false)
          setOpen4(false)
          setOpen(false)
         }} />
         <img style={{backgroundColor:light ? "black":"", backgroundColor: img1 ? "red": "",transition: img1 ? "0.5s":"0.5s"}} 
         className={style.image2} src="tri.png" onClick={()=>{
          setOpen(!open),
          setOpen1(false)
          setOpen2(false)
          setOpen3(false)
          setOpen4(false)
          setImg1(!img1)  }}/>
         <img style={{backgroundColor:light ? "black":"", backgroundColor: img2 ? "red": "",transition: img2 ? "0.5s":"0.5s"}} className={style.image3} src="tri2.png" onClick={()=>{
          setImg2(!img2)
          setOpen(false)
          setOpen1(false)
          setOpen2(!open2)
          setOpen3(false)
          setOpen4(false)
          }} />
         <img style={{backgroundColor:light ? "black":"", backgroundColor: img3 ? "red": "",transition: img3 ? "0.5s":"0.5s"}} className={style.image4} src="tri3.png" onClick={()=>{
          setOpen3(!open3)
          setOpen(false)
          setOpen1(false)
          setOpen2(false)
          setOpen4(false)
          setImg3(!img3)}}/>
         <img style={{backgroundColor:light ? "black":"", backgroundColor: img4 ? "red": "",transition: img4 ? "0.5s":"0.5s"}} className={style.image5} src="tri4.png" onClick={()=>{
         setOpen4(!open4)
         setOpen3(false)
         setOpen2(false)
         setOpen1(false)
         setOpen(false)
         setImg4(!img4)}} />
          
   </div> 
 </div>

<div className={style.config} style={{backgroundColor: light ? "white" : "", transition: light ? "0.5s":""}}>
{open ?<div className={style.content} style={{color: light ? "black" : "white"}}data-aos="fade-right">
    <h1>Use a free voice over maker that runs <br/> in your web browser</h1>
    <h4><b>Add a voice over to any video quickly and easily<br/> with our free voice over maker.
      Record yourself<br/> using your computer’s microphone, import a<br/> pre-recorded audio file or 
      generate a natural<br/> sounding text-to-speech voice overs in<br/> multiple languages based on a 
      script. You can<br/> use your computer’
      built-in microphone to create<br/> your voiceover, or connect an external USB microphone.  </b></h4>
</div>:""}

{open1 ?<div className={style.content} style={{color: light ? "black" : "white"}}data-aos="fade-right">
    <h1>Use a video editor app with <br/>text-to-speech voice overs </h1>
    <h4><b>Generate a natural sounding text-to-speech voice<br/> over with Flixier.
     All you have to do  is write out a<br/> script and then paste it into our neural powered<br/>
      text-to-speech generator. Choose between multiple<br/> languages and regional accents 
      or dialects. When<br/> your voice over is generated, you can edit it and<br/> synchronize it
       with your video just like you would<br/> with any other audio track.

‍ </b></h4>
</div>:""}

{open2 ? <div className={style.content} style={{color: light ? "black" : "white"}}data-aos="fade-right">
    <h1>Edit your voice overs<br/> easily  </h1>
    <h4><b>Generate a natural sounding text-to-speech voice<br/> over with Flixier.
     All you have to do is write out a<br/> script and then paste it into our neural powered<br/>
      text-to-speech generator. Choose between multiple<br/> languages and regional accents 
      or dialects. When<br/> your voice over is generated, you can edit it and<br/> synchronize it
       with your video just like you would<br/> with any other audio track.

‍ </b></h4>
</div>:""}

{open3 ?<div className={style.content} style={{color: light ? "black" : "white"}}data-aos="fade-right">
    <h1>Get things done quickly <br/>with a simple voice over app   </h1>
    <h4><b>Generate a natural sounding text-to-speech voice<br/> over with Flixier.
     All you have to do is write out a<br/> script and then paste it into our neural powered<br/>
      text-to-speech generator. Choose between multiple<br/> languages and regional accents 
      or dialects. When<br/> your voice over is generated, you can edit it and<br/> synchronize it
       with your video just like you would<br/> with any other audio track.

‍ </b></h4>
</div>:""}

 {open4 ?<div className={style.content} style={{color: light ? "black" : "white"}}data-aos="fade-right">
    <h1>Save time with a powerful video maker<br/> with capabilities   </h1>
    <h4><b>Generate a natural sounding text-to-speech voice<br/> over with Flixier.
     All you have to do is write out a<br/> script and then paste it into our neural powered<br/>
      text-to-speech generator. Choose between multiple<br/> languages and regional accents 
      or dialects. When<br/> your voice over is generated, you can edit it and<br/> synchronize it
       with your video just like you would<br/> with any other audio track.

‍ </b></h4>
</div>:""}

{open || open1 || open2 || open3 || open4 ? "":<img src="tr1.png" className='rec' data-aos="zoom-in" />}
  </div>
 </div>
 

</div>


</div>


<div className={style.con}  style={{backgroundColor: light ? "white" : "black", transition:"0.5s"}} >
   <div  className={style.urb} style={{color: light ? "black" : "white"}}>
     <div data-aos="fade-down">
        <h1 data-aos="fade-down">Super Sound</h1>
        <h3 data-aos="fade-down">Solo Voice SL</h3>
     </div>
     <p data-aos="fade-down">Use a free voice over maker that runs in your web browser</p>
     <p data-aos="fade-down">Add a voice over to any video quickly and easily with our free<br/> voice over maker. 
      Record yourself using your computer’s microphone,<br/> import a pre-recorded audio file or generate a 
      natural sounding<br/> text-to-speech voice overs in multiple languages based on a script.<br/> 
      You can use your computer’s built-in microphone to create your <br/>voiceover, or connect an external USB microphone.</p>
      <audio controls src='wowo.mp3'></audio>
      </div>

      <img src='Rectangle.png' data-aos="zoom-in"/>
</div>
    </>
  )
}

export default start
