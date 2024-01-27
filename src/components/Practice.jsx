import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


function Practice() {


    const { ref: ref1, inView: inView1 } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1,
                delay: 0.5
            }
        },

    };

    return (
        <div className='w-screen flex justify-center z-[-1] pb-[100px]'>
            <div className='w-screen max:max-w-[1920px] h-auto flex justify-center items-center'>
                <motion.div ref={ref1} className='w-[70%] flex justify-center items-center gap-[100px] flex-col' variants={variants} initial='hidden' animate={inView1 ? 'show' : 'hidden'}>
                    <h1 id='practice' className='pt-[75px] text-center text-5xl'>Try it out!</h1>
                    <button type="button" class="hover:scale-105 w-[300px] h-[100px] text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-3xl px-5 py-2.5 text-center me-2 mb-2"><a href="https://canvas-pied-rho.vercel.app/" target='_blank'>Try Scrrible.ai</a></button>
                </motion.div>
            </div>

        </div>
    )
}

export default Practice
