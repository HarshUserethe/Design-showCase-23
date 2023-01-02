@font-face {
    font-family: myfont-1;
    src: url(./fonts/3B2986_4_0.071952b.woff2);
}
@font-face {
    font-family: myfont-2;
    src: url(./fonts/font-2.woff);
}
@font-face {
    font-family: myfont-3;
    src: url(./fonts/font-3.woff2);
}
@font-face {
    font-family: myfont-4;
    src: url(./fonts/font-4.woff);
}
@font-face {
    font-family: myfont-5;
    src: url(./fonts/font-5.woff2);
}
@font-face {
    font-family: myfont-6;
    src: url(./fonts/font-6.woff);
}
@font-face {
    font-family: myfont-7;
    src: url(./fonts/font-37.woff2 );
}
@font-face {
    font-family: myfont-8;
    src: url(./fonts/font-8.woff );
}
@font-face {
    font-family: myfont-9;
    src: url(./fonts/font-9.woff2 );
}
@font-face {
    font-family: myfont-10;
    src: url(./fonts/font-10.woff );
}
@font-face {
    font-family: myfont-11;
    src: url(./fonts/font-11.woff2 );
}
@font-face {
    font-family: myfont-12;
    src: url(./fonts/font-12.woff );
}
@font-face {
    font-family: myfont-13;
    src: url(./fonts/font-13.woff2 );
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html,body{
  width: 100%;
  height: 100%;
  user-select: none;
}

::-webkit-scrollbar{
    display: none;
}

.main{
    width: 100vw;
    min-height: 100vh;
    background-color: #fff;
    overflow: hidden;
}

#page1{
    width: 100vw;
    height: 90vh;
    background-color: #000;
    overflow: hidden;
}

#page2{
    width: 100vw;
    height: 110vh;
    background-color: #fff;

}

.loader{
    width: 100%;
    height: 100%;
    position: absolute;
    background-color:#fff;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    position: absolute;
    overflow: hidden !important;
    z-index: 999;
    

}

.text>h1{
    font-family: myfont-3;
    font-size: 4rem;
    overflow: hidden;

}

.text{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    overflow: hidden;

}



.text>h1>span{
    color: #dfdfdf;
    font-family: myfont-3;
    overflow: hidden;
}




#dot{
    position: absolute;
    width:  .8vw;
    height: .8vw;
    background-color: #000;
    border-radius: 50%;
    top: 52vh;
    overflow: hidden;
    
}

.logo{
    position: absolute;
    top: 6vh;
    left: 5vw;
    cursor: pointer;
    z-index: 9;
    overflow: hidden;
}

.logo>h1{
    font-family: myfont-2;
    color: #fff;
    font-size: 1.2rem;
    cursor: pointer;
    overflow: hidden;
    
}

#pulse{
    color: #7e7e7e;
    overflow: hidden;
}

.nav{

 width: 45vw;
 height: 10vh;
 position: absolute;
 overflow: hidden;
 right: 3vw;
 top: 4vh;
 cursor: pointer;
 display: flex;
 justify-content: space-evenly;
 align-items: center;

}

li{
    color: #fff;
    font-family: myfont-7;
    list-style: none;
    cursor: pointer;
    font-size: .9rem;
    z-index: 9;
    overflow: hidden;
}

li:hover{
    color: #7e7e7e;
}
.centertext{
    position: relative;
    width: 100%;
    overflow: hidden;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -2%;

}

.centertxt{
    color: #fff;
    font-size: 6.5rem;
    font-family: myfont-11;
    overflow: hidden;
    font-weight: 500;
    line-height: 8rem;
    

}

#child3{
    position: relative;
    left: 70%;
    
}

.ul1{
    position: absolute;
    top: 29vh;
    left: 37vw;
}

.ul2{
    position: absolute;
    top: 68vh;
    left: 52vw;
}

#cnt1{
    text-align: center;
    color: #fff;
    font-family: myfont-7;
    font-size: .9rem;
    position: relative;
    top: -5vh;
  


}

#cnt2{
   
    color: #fff;
    text-align: center;
    font-family: myfont-7;
    font-size: .9rem;
    position: relative;
    top: -5vh;
 
    

}

 .underline-1{
    background-color: #fff;
    width: 17vw;
    height: .1vh;
    position: relative;
    top: -5vh;
  
}
.underline-2{
    background-color: #fff;
    width: 10vw;
    height: .1vh;
    position: relative;
    top: -5vh;

}  

.dotting>h1{
    position: absolute;
    color: #fff;
    font-size: 3rem;
    top:67vh;
    left: 11vw;


}
#ld{
    color: #5c5b5b;
 
}

.navbox{
    width: 90vw;
    height: 18vh;
    background-color: #ebebeb;
    position: relative;
    top: -9%;
    left: 50%;
    transform: translate(-50%, 0);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.ls{
    color: #000;
    font-size: .7rem;
    font-family: myfont-8;
}

.pushimage-1{
    position: relative;
    top: 5vh;
    left: 50%;
    transform: translate(-50%, 0);
    width: 70vw;
    height: 80vh;
 
}

.pushimage-1>img{
    width: 100%;
    height: 100%;
    object-fit: cover;
   
}
 
.transparent-div{
    background-color: transparent;
    position: absolute;
    width: 100%;
    height: 100%;
}

.mousecircle{
    width:  10vw;
    height: 10vw;
    position: absolute;
    border-radius: 50%;
    background-color: #dddcdc;
    z-index: 99;
    display: none;
    transform-origin: center center;
    transition:  cubic-bezier(0.19, 1, 0.22, 1) .2s;

} 
.full-nav{
    position: fixed;
    width: 100vw;
    height: 12vh;
    z-index: 99;
    transition:  cubic-bezier(0.19, 1, 0.22, 1) 1s;
}

#page3{
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}

.b1{
    padding: 20px;
    padding-left: 50px;
}

.b1>h1{
    color: #000;
    font-family: myfont-4;
    font-weight: 500;
    font-size: 2.4rem;
   
   
}
.b1>p{
    color: rgb(217,36,40);
    font-family: myfont-4;
    font-weight: 500;
    font-size: .8rem;
   
}

.b2{
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 55px;
    padding: 25px;
}
.dot{
    width:  20px;
    height: 20px;
    background-color: #000;
    border-radius: 50%,
}
.b2>p{
    color: #000;
    font-family: myfont-4;
    font-weight: 500;
    font-size: .8rem;

   

}
.bottom-text{
    position: relative;
    display: flex;
     margin-top: 5vh;
    width: 70vw;
    justify-content: space-between;
    left: 50%;
    transform: translate(-50%, 0);
   
    
}

.frame{
    width: 70vw;
    height: 65vh;
    margin-top: 10vh; 
    display: flex;
    justify-content: space-between;
}

.small-frame1{
    width: 31vw;
    height: 100%;
    
}
.small-frame2{
    width: 31vw;
    height: 100%;
   
}

.img-frame1{
    width: 100%;
    height: 60%;
    background-image: url(https://images.prismic.io/makemepulse/b16712f1-7f9f-482e-b1e4-4cc4caa0c280_mmp-00-spotify-astrology-club-cover+%281%29.jpg?auto=compress,format&rect=411,0,2375,1504&w=480&h=304&q=60);
    background-position: center;
    background-size: cover;
    top: 100%;
}
.img-frame2{
    width: 100%;
    height: 60%;
    background-image: url(https://images.prismic.io/makemepulse/0056c487-c70d-4d34-b0a5-4946bb6b20c6_01_header.jpg?auto=compress,format&rect=0,9,3200,1783&w=1120&h=624&q=60);
    background-position: center;
    background-size: cover;
    top: 100%;
}

.txt-frame1{
    width: 100%;
    height: calc(100% - 60%);
    display: flex;
    justify-content: space-around;
    padding-top: 20px;
}
.txt-frame2{
    width: 100%;
    height: calc(100% - 60%);
    display: flex;
    justify-content: space-around;
    padding-top: 20px;
}

.txt-frame1>.txt1>h3{
    font-family: myfont-4;
    font-weight: 500;
    font-size: 1rem;
    

}

.txt-frame1>.txt1>p{
    font-family: myfont-4;
    margin-top: 8px;
    font-weight: 500;
    font-size: .7rem;
    color: orange;
}

.txt-frame1>.txt2>h3{
    font-family: myfont-4;
    font-weight: 600;
    font-size: .6rem;
}



.txt-frame2>.txt3>h3{
    font-family: myfont-4;
    font-weight: 500;
    font-size: 1rem;

}

.txt-frame2>.txt3>p{
    font-family: myfont-4;
    margin-top: 8px;
    font-weight: 500;
    font-size: .7rem;
    color: blue;
}

#tip{
    position: absolute;
}

.txt-frame2>.txt4>h3{
    font-family: myfont-4;
    font-weight: 600;
    font-size: .6rem;
}

#page4{
    width: 100vw;
    height: 30vh;
    background-color: #fff;
}


#page4>h1{
    position: absolute;
    font-family: myfont-11;
    font-size: 4rem;
    font-weight: 400;
    left: 50%;
    transform: translate(-50%, 0);
    
}

#page4>.underline{
    width: 45vw;
    height: .2vh;
    position: relative;
    background-color: #000;
    left: 50%;
    top: 40%;
    transform: translate(-50%, 0);
}

#page5{
    width: 100vw;
    height: 130vh;
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
}

.video-frame{
    width: 75vw;
    height: 85vh;
    background-color: #dfdfdf;
    cursor: pointer;
}

#page5>h1{
    position: absolute;
    color: #fff;
    font-family: myfont-4;
    font-weight: 400;
    font-size: 2.5rem;
    top: 37%;
    left: 72%;
  
}

.video-frame>video{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

video::-webkit-media-controls-timeline {
    display: none;
}

.thumbnail{
    position: absolute;
    width: 75vw;
    height: 85vh;
    background-color: #dfdfdf;
    background-image: url(./images/thumbnail.avif);
    background-position: center;
    background-size: cover;

}

#extra-black{
    width: 100vw;
    height: 10vh;
    background-color: #000;
}

#page6{
    width: 100vw;
    height: 100vh;
    background-color: rgb(243,242,243);
}

.txt-one>h1{
    font-family: myfont-1;
    font-size: 2.3rem;
     margin-left: 15vw;
     position: relative;
     top: 20vh;

}

.txt-two>p{
    color: #000;
    font-family: myfont-1;
    width: 17vw;
    font-size: .8rem;
    position: relative;
    left: 68vw;
    margin-top: 3vh;

}

.txt-three>h1{
    font-family: myfont-11;
    font-size: 3.8rem;
    position: relative;
    margin-left: 15vw;
    margin-top: 12vh;
    font-weight: 500;
    width: 19vw;
    height: 12vh;
    border-bottom: 2px solid #000;
    cursor: pointer;

}
.txt-three>h2{
    font-family: myfont-11;
    font-size: 4rem;
    position: relative;
    margin-left: 15vw;
    font-weight: 500;
    width: 25vw;
    height: 12vh;
    border-bottom: 2px solid #000;
    cursor: pointer;

}

#shortline{
    position: relative;
    top: 20vh;
    left: -5vw;
}

#page7{
    width: 100vw;
    height: 150vh;
    background-color: #fff;

}

.img-box-one{
    position: relative;
    width: 25vw;
    height: 18vw;
    left: 66vw;
    top: -5vh;
    background-image: url(https://images.prismic.io/makemepulse/96abb45c-6a63-4742-8040-1433a78350bf_anoukia_voile.jpg?auto=compress,format&rect=0,0,800,560&w=400&h=280&q=60);
    background-position: center;
    background-size: cover;
    -webkit-box-shadow: 7px 10px 13px -8px rgba(0,0,0,0.493);
-moz-box-shadow: 7px 10px 13px -8px rgba(0,0,0,0.493);
box-shadow: 7px 10px 13px -8px rgba(0,0,0,0.493);
}
.img-box-two{
    position: relative;
    width: 48vw;
    height: 35vw;
    left: 0vw;
    top: -10vh;
    background-image: url(https://images.prismic.io/makemepulse/ca428460-05aa-450d-a181-35c740cf5869_cartedevisite.jpg?auto=compress,format&rect=0,0,1440,1072&w=720&h=536&q=60);
    background-position: center;
    background-size: cover;
    -webkit-box-shadow: 7px 10px 13px -8px rgba(0,0,0,0.493);
-moz-box-shadow: 7px 10px 13px -8px rgba(0,0,0,0.493);
box-shadow: 7px 10px 13px -8px rgba(0, 0, 0, 0.493);
   
}

.txt-four{
    width: 35vw;
    position: relative;
    left: 56vw;
    top: -28vh;
}

.txt-four>h4{
    font-family: myfont-4;
    font-size: .6rem;
 


}

.txt-four>p{
margin-top: 10vh;
font-family: myfont-3;
font-size: 1.8rem;
color: rgba(0, 0, 0, 0.842);
}

.txt-five>h1{
    font-family: myfont-11;
    font-size: 3.8rem;
    position: relative;
    margin-left: 15vw;
    top: -50vh;
    font-weight: 500;
    width: 19vw;
    height: 12vh;
    cursor: pointer;
    border-bottom: 2px solid #000; 
}
.txt-five>h2{
    font-family: myfont-11;
    font-size: 3.8rem;
    position: relative;
    margin-left: 15vw;
    top: -50vh;
    font-weight: 500;
    width: 25vw;
    height: 12vh;
    cursor: pointer;
    border-bottom: 2px solid #000; 
}

#page8{
    width: 100vw;
    height: 130vh;
    background-color: #000;
}

.img-box-three{
    position: relative;
    width: 34vw;
    height: 23vw;
    left: 50vw;
    top: -37vh;
    background-image: url(https://images.prismic.io/makemepulse/7d7db03c-429b-4768-8ff8-1a81d1f5c764_mpp_home.jpg?auto=compress,format&rect=0,0,1120,752&w=560&h=376&q=60);
    background-position: center;
    background-size: cover;
    -webkit-box-shadow: 7px 10px 13px -8px rgba(0,0,0,0.493);
-moz-box-shadow: 7px 10px 13px -8px rgba(0,0,0,0.493);
box-shadow: 7px 10px 13px -8px rgba(0,0,0,0.493);
}

#page8>h1{
    color: #fff;
    font-family: myfont-3;
    font-size: 2.4rem;
    font-weight: 500;
    margin-top: -35vh;
    margin-left: 10vw;
}



#page8>.menu{
   text-align: center;
   display: flex;
   flex-direction: column;
   gap: 0;
   


}
#page8>.menu>li>h1{
    color: #fff;
    font-family: myfont-11;
    font-size: 3.8rem;
    margin-top: 4vh; 
   margin-bottom: 4vh;
    line-height: 10vh;
    font-weight: 500;

}

.dates{
    font-size: .7rem;
    font-family: myfont-3;
    font-weight: 600;
}

.slogan{
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-decoration-color: rgba(255, 255, 255, 0.507);
    color: #fff;
    font-family: myfont-11;

}

#page9{
    width: 100vw;
    height: 80vh;
    background-color: rgb(243,242,243);
}

.heading-box{
    width: 50vw;
    height: 24vh;
    position: relative;
    top: -12.5vh;
    left: 50%;
    transform: translate(-50%, 0);
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.heading-box>h1{
    font-family: myfont-11;
    font-weight: 500;
    font-size: 3.8rem;
    margin-top: -3vh;
    border-bottom: 1px solid #000;
    height: 48%;
    cursor: pointer;
   
}

#page10{
    width: 100vw;
    height: 110vh;
}

.bottom-box{
    width: 82vw;
    height: 52vh;
    background-color: #fff;
    left: 50%;
    top: 20vh;
    position: relative;
    transform: translate(-50%, 0);
}

.bottom-box>h3{
    font-family: myfont-4;
     margin-left: 10vw;
     position: relative;
     top: 10vh;
     font-weight: 500;
     color: rgba(0, 0, 0, 0.904);
     font-size: 1.8rem;
   
}

.bottom-box>h4{
    font-size: 3.5rem;
    margin-left: 10vw;
    position: relative;
    top: 20vh;


}

#fs{
    color: #dfdfdf;
}

.email{
    position: relative;
    left: 50vw;
    top: 17vh;
     width: 30%;

}
input{
    border: none;
    border-bottom: 1px solid #000; 
    width: 25vw;
    background-color: transparent;
    outline: none;
    z-index: 99;
}



label{
    position: relative;
    font-family: myfont-2;
    transition: cubic-bezier(0.19, 1, 0.22, 1) 1s;
}



button{
    position: relative;
    top: -15vh;
    left: 15vw;
   width:  10vw;
   height: 10vw;
   border: none;
   border-radius: 50%;
   background-color: #dddcdc;
   opacity: 50%;
   transition: cubic-bezier(0.19, 1, 0.22, 1) .5s;
}

button>img{
    opacity: 100%;
}

button:hover{
transform: scale(1.1);
opacity: 80%;
cursor: pointer;
}

.banner{
    width: 82vw;
    height: 80vh;
    background-image: url(https://www.makemepulse.com/images/mmp-newsletter.jpg);
    background-position: center;
    background-size: cover;
    left: 50%;
    top: 16vh;
    position: relative;
    transform: translate(-50%, 0);
}

#page11{
    width: 100vw;
    height: 130vh;
    background-color: rgb(243,242,243);
}

.rec{
    width: 70vw;
    height: 10vh;
    position: relative;
    top: 10vh;
    margin-left: 5vw;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.rec>li{

    font-family: myfont-3;
    color: #000;
    font-size: .7rem;
}


.grid-container{
  display: grid;
  grid-template-columns: 50px 60px 40px;
  gap: 17%;


}
.grid-item{
  width: 20vw;
  height: 55vh;
  margin-left: 5vw;
  margin-top: 15vh;

}

.grid-item>h3{
    font-family: myfont-3;
    font-size: 1.2rem;
    font-weight: 500;
    cursor: pointer;
}

.grid-item>h4{
    font-family: myfont-3;
    font-size: .9rem;
    font-weight: 400;
    margin-bottom: 8vh;
    font-weight: 400;
    cursor: pointer;
}

.grid-item>.eid>h4{
    font-family: myfont-3;
    font-size: .9rem;
    font-weight: 400;
    margin-bottom: 8vh;
    border-bottom: 1px solid #000;
    height: -50vh;
    width: 65%;
    cursor: pointer;
    transition: cubic-bezier(0.19, 1, 0.22, 1) .5s;
   
}

.grid-item>.eid>h4:hover{
    transform: scale(1.1);
    color: #7e7e7e;
}

.contact-heading>h1{
    font-family: myfont-11;
    position: relative;
    left: 68vw;
    top: -56vh;
    font-size: 3.5rem;
    font-weight: 500;
    height: 29vh;
    width: 29vw;
    line-height: 10vh;
    border-bottom: 1px solid #000;
    cursor: pointer;
}


.rec2{
    position: relative;
    left: 15vw;
    width: 40vw;
    height: 10vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-family: 500;
}

.rec2>li{
    color: #000;
    font-size: .7rem;
    transition: cubic-bezier(0.19, 1, 0.22, 1) .5s;
}

.rec2>li:hover{
    transform: scale(1.1);
    color: #7e7e7e;
}

#follow{
    position: relative;
    left: -10vw;
}

#page12{
    width: 100vw;
    height: 30vh;
    background-color: #000;
}

.last-box{
    position: relative;
    top: -30vh;
    left: 60vw;
    width: 35vw;
    height: 44vh;
    background-color: #fff;
    -webkit-box-shadow: 7px 10px 13px -8px rgba(0,0,0,0.493);
-moz-box-shadow: 7px 10px 13px -8px rgba(0,0,0,0.493);
box-shadow: 7px 10px 13px -8px rgba(0,0,0,0.493);
}

.eee{
    position: relative;
    left: 5vw;
    top: 10vh;
    width: 20vw;
}

#lll{
    font-family: myfont-3;
    left: 2vw;
    font-size: .8rem;
    
}

#kkk{
    padding-left: 2vw;
    width: 18vw;
    margin-left: 1vw;
}

#arrow{
    position: absolute;
    width: 5vw;
    top: -4vh;
}

#last-txt{
    position: relative;
    color: red;
}

.lol{
    width: 40vw;
    height: 10vh;
}

/* .cirlce-one{
    position: absolute;
    width: 10vw;
    height: 10vw;
    background-color: #e4e4e4;
    border-radius: 50%;
     
    box-shadow: 2px 3px 8px rgba(85, 85, 85, 0.322);
}
.cirlce-one>i{
    font-size: 2.5rem;
    color: #000;
} */

.img-frame1{
    transition: cubic-bezier(0.19, 1, 0.22, 1) .5s;
    cursor: pointer;
}

.img-frame1:hover {
 transform: scale(1.05);
 box-shadow: 2px 3px 8px #dfdfdf;
}
.img-frame2{
    transition: cubic-bezier(0.19, 1, 0.22, 1) .5s;
    cursor: pointer;
}

.img-frame2:hover {
 transform: scale(1.05);
 box-shadow: 2px 3px 8px #dfdfdf;
}

.hover-img-one{
    position: absolute;
    width: 28vw;
    height: 35vh;
    display: none;
    transition: cubic-bezier(0.19, 1, 0.22, 1) .5s;
    background-image: url(https://images.prismic.io/makemepulse/f63f014c-55ed-4276-9996-e5e1b96f4fef_This+month+we%27re+into+%281%29.jpeg?auto=compress,format&rect=0,0,612,407&w=278&h=185&q=60);
    background-size: cover;
    background-position: center;
}
.hover-img-two{
    position: absolute;
    margin-top: 30vh;
    width: 28vw;
    height: 35vh;
    display: none;
    transition: cubic-bezier(0.19, 1, 0.22, 1) .5s;
    background-image: url(https://images.prismic.io/makemepulse/83a3838d-5230-401d-83e8-4dd5b1e89d40_Assistant_creative_designer.png?auto=compress,format&rect=0,0,1119,624&w=278&h=155&q=60);
    background-size: cover;
    background-position: center;
}
.hover-img-three{
    position: absolute;
    width: 28vw;
    margin-top: 60vh;
    height: 35vh;
    display: none;
    transition: cubic-bezier(0.19, 1, 0.22, 1) .5s;
    background-image: url(https://images.prismic.io/makemepulse/eb83f3b0-3aaa-4f5f-81c2-5d7e27dd1a4c_The-Top-21-Playable-Interactive-Websites_cover.jpg?auto=compress,format&rect=0,0,1237,623&w=278&h=140&q=60);
    background-size: cover;
    background-position: center;
}

.hover-img-four{
    position: absolute;
    margin-top: 8vh;
    width:  10vw;
    height: 15vw;
    display: none;
    transition: cubic-bezier(0.19, 1, 0.22, 1) .5s;
    background-image: url(https://www.makemepulse.com/images/sprites/hand-rock/hand-rock_20.png);
    background-size: cover;
    background-position: center;
}

 
