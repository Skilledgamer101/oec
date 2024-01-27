import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import HALO from 'vanta/dist/vanta.halo.min.js';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {

    const myRef = useRef(null);

    useEffect(() => {
        if (!myRef.current) return;
        const vantaEffect = HALO({
            el: myRef.current,
            THREE: THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            backgroundColor: 0x011212
        });
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [myRef]);

    const { ref: ref1, inView: inView1 } = useInView({
        triggerOnce: true,
        threshold: 0.1, // Adjust this value as needed
    });

    const { ref: ref2, inView: inView2 } = useInView({
        triggerOnce: true,
        threshold: 0.2, // Adjust this value as needed
    });

    const { ref: ref3, inView: inView3 } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const variants = {
        hidden: { opacity: 0, x: -1000 },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                delay: 0.5
            }
        },

    };

    const variants2 = {
        hidden: { opacity: 0, x: 1000 },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                delay: 0.5
            }
        },

    };


    const variants3 = {
        hidden: { opacity: 0, y: 200 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: 0.5
            }
        },

    };

    return (
        <div className='w-screen flex justify-center z-[-1] pb-[100px]'>
            <div className='w-screen max:max-w-[1920px]  h-auto flex flex-col items-center justify-center'>
                <div ref={myRef} className='w-full h-screen flex flex-col justify-center items-center min-h-auto relative'>
                    <h1 className='text-white text-6xl text-center opacity-85 w-[70%]'>Harnessing The Power of Visual Learning</h1>
                    <svg class="arrows absolute">
                        <path class="a1" d="M0 0 L30 32 L60 0"></path>
                        <path class="a2" d="M0 20 L30 52 L60 20"></path>
                        <path class="a3" d="M0 40 L30 72 L60 40"></path>
                    </svg>
                </div>
                <motion.div ref={ref1} className='w-[70%] h-auto pt-[150px] flex flex-col gap-[100px] text-center text-white' variants={variants} initial='hidden' animate={inView1 ? 'show' : 'hidden'}>
                    <h1  id='about' className='text-5xl pt-[75px]'>What is Scribbl.ai?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut deleniti, necessitatibus sint exercitationem, ratione perspiciatis eum, consequatur in molestias alias iste possimus! Dolorum, facilis quae? Laboriosam ab earum blanditiis sed!
                        Vel rerum minus culpa praesentium aspernatur harum eaque illum! Soluta debitis rerum facere autem totam minus quibusdam accusamus cumque officia sit, accusantium dolorem consequuntur labore explicabo id aliquam tempora culpa!</p>
                </motion.div>
                <motion.div ref={ref2} className='w-[70%] h-auto pt-[200px] flex flex-col gap-[100px] text-center text-white' variants={variants2} initial='hidden' animate={inView2 ? 'show' : 'hidden'}>
                    <h1 className='text-5xl'>User Experience</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut deleniti, necessitatibus sint exercitationem, ratione perspiciatis eum, consequatur in molestias alias iste possimus! Dolorum, facilis quae? Laboriosam ab earum blanditiis sed!
                        Vel rerum minus culpa praesentium aspernatur harum eaque illum! Soluta debitis rerum facere autem totam minus quibusdam accusamus cumque officia sit, accusantium dolorem consequuntur labore explicabo id aliquam tempora culpa!</p>
                </motion.div>
                <motion.div ref={ref3} className='w-[70%] h-auto pt-[200px] flex flex-col gap-[100px] text-center text-white' variants={variants3} initial='hidden' animate={inView3 ? 'show' : 'hidden'}>
                    <h1 className='text-5xl'>Benefits</h1>
                    <div className='w-full h-full flex flex-row justify-between'>
                        <div className='min-h-auto w-[33%] flex flex-col justify-center items-center gap-[30px]'>
                            <svg fill="#fcfcfc" className='w-[150px] h-[150px]' version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="0 0 612 612" xml:space="preserve" stroke="#fcfcfc">

                                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                                <g id="SVGRepo_iconCarrier"> <g> <path d="M257.254,316.536c84.086,0,152.252-68.166,152.252-152.252S341.341,12.031,257.254,12.031 c-84.087,0-152.253,68.166-152.253,152.252S173.167,316.536,257.254,316.536z M330.946,224.34 c-6.927,22.9-36.596,40.115-72.154,40.115c-35.559,0-65.228-17.215-72.153-40.115H330.946z M608.234,481.521L468.934,597.613 c-4.052,3.377-10.418,3.088-14.147-0.642l-69.355-69.364c-4.083-4.084-4.083-10.766,0.001-14.85l14.847-14.847 c4.083-4.083,10.766-4.084,14.849-0.001l49.024,49.016L581.35,449.26c4.437-3.696,11.091-3.092,14.788,1.345l13.441,16.127 C613.275,471.168,612.671,477.823,608.234,481.521z M369.096,543.941l26.415,26.419c-36.051,5.076-81.493,8.68-138.256,8.68 c-146.803,0-218.644-23.987-244.982-35.706C5.477,540.31,0,531.665,0,524.227v-50.188c0-75.205,57.26-137.596,130.325-145.953 c2.22-0.254,5.513,0.696,7.322,2.007c33.688,24.389,74.932,38.944,119.607,38.944s85.919-14.556,119.607-38.944 c1.81-1.311,5.102-2.261,7.322-2.007c73.065,8.356,130.326,70.747,130.326,145.953v0.849l-48.942,40.782l-34.105-34.094 c-6.348-6.348-14.787-9.845-23.759-9.845s-17.411,3.497-23.759,9.845l-14.848,14.848 C355.99,509.528,355.99,530.837,369.096,543.941z" /> </g> </g>

                            </svg>
                            <h2 className='text-white text-3xl'>User-friendly</h2>
                            <p className='w-[80%]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, tempore modi. Repellat, libero minus dignissimos at provident veniam possimus perspiciatis? Consectetur iste ipsa esse facilis itaque id, adipisci nam delectus?</p>
                        </div>
                        <div className='min-h-auto w-[33%] flex flex-col justify-center items-center gap-[30px]' >
                            <svg fill="#23395c" className='w-[150px] h-[150px]' viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg" stroke="#23395c">

                                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                                <g id="SVGRepo_iconCarrier"> <path d="M1185.941 0c73.525 0 135.643 47.322 159.021 112.941h462.156V1920H113V112.941h462.155C598.535 47.322 660.652 0 734.176 0Zm56.47 1468.235H903.589v112.941h338.824v-112.94Zm-451.764-225.882H451.824v338.823h338.823v-338.823Zm677.647 0H903.588v112.941h564.706v-112.941ZM790.647 677.647H451.824v338.824h338.823V677.647Zm451.765 225.882H903.588v112.942h338.824V903.529Zm225.882-225.882H903.588v112.941h564.706v-112.94Zm-282.353-564.706H734.176c-31.058 0-56.47 25.299-56.47 56.47v169.413h564.706V169.412c0-31.172-25.412-56.47-56.47-56.47Z" fill-rule="evenodd" /> </g>

                            </svg>
                            <h2 className='text-white text-3xl'>Learning Disability Support</h2>
                            <p className='w-[80%]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, tempore modi. Repellat, libero minus dignissimos at provident veniam possimus perspiciatis? Consectetur iste ipsa esse facilis itaque id, adipisci nam delectus?</p>
                        </div>
                        <div className='min-h-auto w-[33%] flex flex-col justify-center items-center gap-[30px]'>
                            <svg className='object-fit w-[150px] h-[150px]' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#d08d2f">

                                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                                <g id="SVGRepo_iconCarrier"> <path d="M8.24999 18L5.24999 20.25V15.75H2.25C1.85217 15.75 1.47064 15.5919 1.18934 15.3106C0.908034 15.0293 0.749999 14.6478 0.749999 14.25V2.25C0.749999 1.85217 0.908034 1.47064 1.18934 1.18934C1.47064 0.908034 1.85217 0.749999 2.25 0.749999H18.75C19.1478 0.749999 19.5293 0.908034 19.8106 1.18934C20.0919 1.47064 20.25 1.85217 20.25 2.25V6.71484" stroke="#71717A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /> <path d="M5.24999 5.24999H15.75" stroke="#71717A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /> <path d="M5.24999 9.74999H8.24999" stroke="#71717A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /> <path d="M23.25 18.75H20.25V23.25L15.75 18.75H11.25V9.74999H23.25V18.75Z" stroke="#71717A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /> <path d="M19.5 15H15" stroke="#71717A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /> </g>

                            </svg>
                            <h2 className='text-white text-3xl'>User Experience and Scalability</h2>
                            <p className='w-[80%]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, tempore modi. Repellat, libero minus dignissimos at provident veniam possimus perspiciatis? Consectetur iste ipsa esse facilis itaque id, adipisci nam delectus?</p>
                        </div>


                    </div>
                </motion.div>


            </div>

        </div>
    )
}
