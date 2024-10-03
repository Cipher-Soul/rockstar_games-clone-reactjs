import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
    <nav className='px-8 h-[80px] bg-black flex justify-between sm:justify-between items-center sm:px-20 text-white '>
        {/* on mobile */}
        <button className='h-[25px] w-[25px] sm:hidden flex flex-col justify-around'>
            <span className='h-[2px] bg-white w-full block'></span>
            <span className='h-[2px] bg-white w-full block'></span>
            <span className='h-[2px] bg-white w-full block'></span>
        </button>
        <div className='flex '><img className=' h-[1.7] sm:h-[1.9rem]' src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c46845952588bf44125a37117d4da32c.svg" alt="" srcset="" /></div>
        <div><img className='h-[30px]' src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a29e26aa160e7be7e845708c335b3c39.svg" alt="" srcset="" /></div>
        {/* mobile wiew end */}
        <div className=' ms-36 hidden sm:block'>
            <ul className='flex gap-8 justify-end capitalize font-medium'>
                <li className='h-full '>Games<img className="float-right h-[20px] mt-1" src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/af22c6826e05c14923a3f11c69a2130c.svg" alt=""></img></li>
                <li className='h-full '><Link to={'/'}>Newswire</Link></li>
                <li className='h-full '><Link>Video</Link></li>
                <li className='h-full '><Link>Downloads</Link></li>
                <li className='h-full '><a href="https://store.rockstargames.com/?_gl=1*1bk95xp*_ga*MTM4NTk0NTAxMC4xNzI3OTcyNTI0*_ga_PJQ2JYZDQC*MTcyNzk3MjUyNC4xLjEuMTcyNzk3NTEwOC4wLjAuMA.." >Store <img className='inline h-[15px] m-1' src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9db08c7809308ca2fa4614f3c2d45a91.svg"/></a></li>
                <li className='h-full '><a href="#">Support<img className='inline h-[15px] m-1' src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9db08c7809308ca2fa4614f3c2d45a91.svg"/></a></li>
            </ul>
        </div>
        <div className=' hidden sm:flex  items-center gap-7 '>
            <a href='#' className='bg-[#fcaf17] text-black font-bold rounded py-1 px-3 pt-[5px] uppercase tracking-[-1px]'>get launcher</a>
            <div><img className='h-[25px] ' src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/902006563577748c7d58ac9c2bf5e6df.svg" alt="" srcset="" /></div>
            <div><img className='h-[30px]' src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a29e26aa160e7be7e845708c335b3c39.svg" alt="" srcset="" /></div>
        </div>
    </nav>
    </>
  )
}
