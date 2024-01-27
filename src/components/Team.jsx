

import React from 'react'

function Team() {
    return (
        <div className='w-screen bg-black flex justify-center pb-[200px]'>
            <div className='w-screen max:max-w-[1920px] flex justify-center'>
                <div className='w-[70%] flex flex-col justify-center items-center min-h-auto gap-[100px]'>
                    <h1 id="team" className='pt-[75px] text-5xl text-center'>Our Team</h1>
                    <div className='w-[70%] h-[250px] bg-red-200'>
                        Insert team photo here
                    </div>
                    <p className='text-center'>
                        Insert team description here
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Team
