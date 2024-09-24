import React, { lazy, useEffect, useState } from 'react'
import './aboutComp.css'




const AboutSlider = ({img1, img2, img3, img4}) => {
    
    useEffect(() => {
        const script = document.createElement('script')
        script.src = './public//about.js' // path of the plugin called Slick Slider
        script.async = true // false not work too
        document.body.append(script) // the element <script> is appended but no work
      }, [])

    useEffect(() => {
        //step 1: get DOM
        let nextDom = document.getElementById('next');
        let prevDom = document.getElementById('prev');

        let carouselDom = document.querySelector('.carousel');
        let SliderDom = carouselDom.querySelector('.carousel .list');
        let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
        let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
        let timeDom = document.querySelector('.carousel .time');

        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        let timeRunning = 3000;
        let timeAutoNext = 7000;

        nextDom.onclick = function(){
            showSlider('next');    
        }

        prevDom.onclick = function(){
            showSlider('prev');    
        }
        let runTimeOut;
        let runNextAuto = setTimeout(() => {
            next.click();
        }, timeAutoNext)
        function showSlider(type){
            let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
            let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
            
            if(type === 'next'){
                SliderDom.appendChild(SliderItemsDom[0]);
                thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
                carouselDom.classList.add('next');
            }else{
                SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
                thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
                carouselDom.classList.add('prev');
            }
            clearTimeout(runTimeOut);
            runTimeOut = setTimeout(() => {
                carouselDom.classList.remove('next');
                carouselDom.classList.remove('prev');
            }, timeRunning);
        
            clearTimeout(runNextAuto);
            runNextAuto = setTimeout(() => {
                next.click();
            }, timeAutoNext)
        }
      })

  return (
    <div className='fluid_about' >
        <div className="carousel">
            <div className="list">
                <div className="item">
                    <img src={img1} />
                    <div className="content">
                        {/* <div className="author"></div> */}
                        <div className="title">WHAT WE DO</div>
                        <div className="topic">We specialize in creating immersive visitor experiences by integrating multimedia technology, interactive elements, and architecture. Our comprehensive approach allows us to effectively transform brand visions into reality.</div>
                        <div className="des">
                            {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium? */}
                        </div>
                        {/* <div className="buttons">
                            <button>SEE MORE</button>
                            <button>SUBSCRIBE</button>
                        </div> */}
                    </div>
                </div>
                <div className="item">
                    <img src={img2} />
                    <div className="content">
                        {/* <div className="author"></div> */}
                        <div className="title">HOW WE DO IT</div>
                        <div className="topic">Our artistic team, with a strong international background in live events and permanent construction, is well-equipped to successfully manage exceptional projects of any scope, scale, or location.</div>
                        <div className="des">
                            {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium? */}
                        </div>
                        {/* <div className="buttons">
                            <button>SEE MORE</button>
                            <button>SUBSCRIBE</button>
                        </div> */}
                    </div>
                </div>
                <div className="item">
                    <img src={img3} />
                    <div className="content">
                        {/* <div className="author"></div> */}
                        <div className="title">WHAT WE DO</div>
                        <div className="topic">We specialize in creating immersive visitor experiences by integrating multimedia technology, interactive elements, and architecture. Our comprehensive approach allows us to effectively transform brand visions into reality.</div>
                        <div className="des">
                            {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium? */}
                        </div>
                        {/* <div className="buttons">
                            <button>SEE MORE</button>
                            <button>SUBSCRIBE</button>
                        </div> */}
                    </div>
                </div>
                <div className="item">
                    <img src={img4} />
                    <div className="content">
                        {/* <div className="author"></div> */}
                        <div className="title">HOW WE DO IT</div>
                        <div className="topic">Our artistic team, with a strong international background in live events and permanent construction, is well-equipped to successfully manage exceptional projects of any scope, scale, or location.</div>
                        <div className="des">
                            {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium? */}
                        </div>
                        {/* <div className="buttons">
                            <button>SEE MORE</button>
                            <button>SUBSCRIBE</button>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="thumbnail"   onClick={() => showSlider('next')}>
                <div className="item">
                    {/* <img src={imgWhite} /> */}
                    <div className="content">
                        <div className="title">
                            01
                        </div>
                        <div className="description">
                            {/* Description */}
                        </div>
                    </div>
                </div>
                <div className="item">
                    {/* <img src={imgWhite} /> */}
                    <div className="content">
                        <div className="title">
                            02
                        </div>
                        <div className="description">
                            {/* Description */}
                        </div>
                    </div>
                </div>
                <div className="item">
                    {/* <img src={imgWhite} /> */}
                    <div className="content">
                        <div className="title">
                            03
                        </div>
                        <div className="description">
                            {/* Description */}
                        </div>
                    </div>
                </div>
            </div>

            <div className="arrows">
                <button id="prev">n</button>
                <button id="next">p</button>
            </div>
            <div className="time"></div>
        </div>
        
        <canvas id="fluid"></canvas>
    </div>
  )
}

export default AboutSlider
