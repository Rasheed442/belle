// import Main from '../Component/Main.js'
import React, {useEffect, useState} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {BsFillSunFill, BsMoonStars} from 'react-icons/bs'
import style from '../styles/Home.module.css'
function index() {
  const [light, setLight] = useState(false)
  useEffect(() =>{ 
    Aos.init({duration: 2000});
}, []);
 function more(){
  window.location="start"
 }
  return (
<>
<div className={style.head} style={{backgroundColor: light ? "white" : "black",  transition:"0.5s"}}>
  <h1 data-aos="fade-right">BELLE</h1>
   <div data-aos="fade-left"  className={style.icon}
   style={{color: light ? "black" : "white"}}
   onClick={()=>{
    setLight(!light)
   }}>
    {light ?<BsMoonStars/>: <BsFillSunFill/>  }
   </div>
</div>
       <div className={style.container} style={{backgroundColor: light ? "white" : "black", transition:"0.5s"}}>
          
        
        <div className={style.image}>
             <img src='tri.png' data-aos="zoom-in"/> 
             <div data-aos="fade-left" className={style.main}>
                    <div>
                      <h1>Super Sound</h1><br/>
                      <h2 style={{color: light ? "black" : "white"}}>Solo Voice SL</h2>
                    </div>

                    <p style={{color: light ? "black" : "white"}}>Tell your story with voice over</p>

                    <p style={{color: light ? "black" : "white"}}>Amplify the impact of your videos with your most unique<br/> feature–your voice. 
                       Start creating videos with high-quality <br/>
                      voice-over easier than ever before, all within Animoto.</p>
                    <div className={style.click}>
                       <div className={style.click1}>
                           <img src='hp.png'/>
                           <p style={{color: light ? "black" : "white"}}>Brilliant Quality</p>
                       </div>
                       <div className={style.click1}>
                           <img src='ok.png'/>
                           <p style={{color: light ? "black" : "white"}}>Easy to use</p>
                       </div>
                   </div> 

                   <div className={style.btn}>
                    <button className={style.btn1} onClick={more}>Get Started</button>
                    <button className={style.btn2}>Learn More</button>
                  </div>            
             </div>
        </div>

      </div>
        {/* <Main/> */}
  </>
  )
}

export default index
