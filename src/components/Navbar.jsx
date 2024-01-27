import React from 'react'

function Navbar() {
    return (
        <nav class="fixed w-screen z-20 top-0 start-0 flex justify-center bg-black">
            <div class="w-screen max:max-w-[1920px] flex flex-wrap items-center p-4 border-b-2 border-gray-900">
                <div className='ml-[50px] text-white text-xl'>
                    Scribble.ai
                </div>
                <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden" aria-controls="navbar-sticky" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div class="ml-auto mr-[50px] items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul class="flex flex-col text-lg p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 text-white">
                        <li>
                            <a href="#about" class="block py-2 px-3 rounded hover:scale-105" aria-current="page">About</a>
                        </li>
                        <li>
                            <a href="#practice" class="block py-2 px-3 rounded hover:scale-105">Usage</a>
                        </li>
                        <li>
                            <a href="#team" class="block py-2 px-3 rounded hover:scale-105">Our Team</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


export default Navbar