import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    const [isgamesOpen,setGames] = useState(false)
    const [issearchOpen,setsearch] = useState(false)

    //games menu Toogle
    const gamesToogle=()=>{
        setGames(!isgamesOpen)
        
    }

    //yaha search Toogle ka function
    const search = ()=>{
        setsearch(!issearchOpen)
    }
    
  return (
    <>
    <nav className='px-8 h-[80px] relative bg-black flex justify-between sm:justify-between items-center sm:px-20 text-white  overflow-x-hidden'>
        {/* on mobile */}
        <button className='h-[25px] w-[25px] sm:hidden flex flex-col justify-around'>
            <span className='h-[2px] bg-white w-full block'></span>
            <span className='h-[2px] bg-white w-full block'></span>
            <span className='h-[2px] bg-white w-full block'></span>
        </button>
        <div className='flex '><img className=' h-[1.7] sm:h-[1.9rem]' src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c46845952588bf44125a37117d4da32c.svg" alt=""  /></div>
        <div className='sm:hidden'><img className='h-[30px]' src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a29e26aa160e7be7e845708c335b3c39.svg" alt=""  /></div>
        {/* mobile wiew end */}
        <div className='h-full ms-36 hidden sm:block'>
            <ul className='flex   h-full  justify-end  capitalize font-medium'>
                <li className='px-4 py-6 transition-all border-0 hover:border-b-[3px] hover:border-white ' onClick={gamesToogle}>Games<img className={`float-right h-[20px] mt-1 ${isgamesOpen?'rotate-180':' '}`} src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/af22c6826e05c14923a3f11c69a2130c.svg" alt=""></img></li>
                <li className='px-4 py-6 transition-all border-0 hover:border-b-[3px] hover:border-white '><Link to={'/newsfire/'}>Newswire</Link></li>
                <li className='px-4 py-6 transition-all border-0 hover:border-b-[3px] hover:border-white '><Link>Video</Link></li>
                <li className='px-4 py-6 transition-all border-0 hover:border-b-[3px] hover:border-white '><Link>Downloads</Link></li>
                <li className='px-4 py-6 transition-all border-0 hover:border-b-[3px] hover:border-white '><a href="https://store.rockstargames.com/?_gl=1*1bk95xp*_ga*MTM4NTk0NTAxMC4xNzI3OTcyNTI0*_ga_PJQ2JYZDQC*MTcyNzk3MjUyNC4xLjEuMTcyNzk3NTEwOC4wLjAuMA.." target="_blank" >Store <img className='inline h-[15px] m-1' src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9db08c7809308ca2fa4614f3c2d45a91.svg"/></a></li>
                <li className='px-4 py-6 transition-all border-0 hover:border-b-[3px] hover:border-white '><a href="https://support.rockstargames.com/?_gl=1*9ux0ei*_ga*MTM4NTk0NTAxMC4xNzI3OTcyNTI0*_ga_PJQ2JYZDQC*MTcyODA1OTA1My41LjEuMTcyODA2MTU3NS4wLjAuMA.." target="_blank">Support<img className='inline h-[15px] m-1' src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9db08c7809308ca2fa4614f3c2d45a91.svg"/></a></li>
            </ul>
        </div>
        <div className=' hidden sm:flex  items-center gap-7 '>
            <a href='#' className='bg-[var(--rockstar-gold)] text-black font-bold rounded py-1 px-3 pt-[5px] uppercase tracking-[-1px]'>get launcher</a>
            <div onClick={search}><img className='h-[25px] cursor-pointer ' src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/902006563577748c7d58ac9c2bf5e6df.svg" alt=""  /></div>
            <div><img className='h-[30px] cursor-pointer' src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a29e26aa160e7be7e845708c335b3c39.svg" alt=""  /></div>
        </div>
    </nav>
    <Games isopen={isgamesOpen}/>
    <Search issearch={issearchOpen} search={search}/>
    </>
  )
}
//Ye Games func --------------------------------------------------------
function Games(prop) {
    
  return (
    <>
    <div className={`hidden absolute w-full features-games sm:flex items-center  bg-[var(--background-darklight)] border border-gray-900 overflow-y-hidden transform transition-all duration-300  ${prop.isopen? ' h-[64vh]  ':' h-0  '} `}>
    <div className=' w-full mx-20'>
            <div className='flex justify-between py-3'>
                <h1 className='text-3xl font-bold'>Featured Games</h1>
                <Link to={'about/'} className='text-xl uppercase font-bold group'>View all <img src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e5fca59d373ed4d2aa00584b688c3da3.svg" className='inline group-hover:translate-x-2 transition-all ease-in-out '/></Link>
            </div>
            <div className="cards flex gap-5">
               <FeaturedGames/>
               <div className="card border border-gray-700 h-[317px] hover:scale-[1.05] transition-all duration-300 w-[257px]  rounded-lg bg-[url('https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dbc01cf29aa31b9d15a5d06483a0a1a3.jpg')] bg-cover"></div>
        </div>
        </div>
    </div>
    </>
  )
}

//ye feutured games cards ---------------------------------------------------------------------
export function FeaturedGames(){
    return(
        <>
            
                <div className="card border border-gray-700 max-sm:max-h-[250px] h-[300px] hover:scale-[1.05] transition-all duration-300 sm:w-[257px]  rounded-lg bg-[url('https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/ccac790d960f612fa0746c78b8052926.jpg')] bg-cover"></div>
                <div className="card border border-gray-700 max-sm:max-h-[250px] h-[300px] hover:scale-[1.05] transition-all duration-300 sm:w-[257px]  rounded-lg bg-[url('https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5dc0952c9e5beba577aeffe0289478bd.jpg')] bg-cover"></div>
                <div className="card border border-gray-700 max-sm:max-h-[250px] h-[300px] hover:scale-[1.05] transition-all duration-300 sm:w-[257px]  rounded-lg bg-[url('https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/214a1cd1a2e7bb8f9b1e5d3846ca2993.jpg')] bg-cover"></div>
                <div className="card border border-gray-700 max-sm:max-h-[250px] h-[300px] hover:scale-[1.05] transition-all duration-300 sm:w-[257px]  rounded-lg bg-[url('https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/082b847bcab37655faf903149f80f1e4.jpg')] bg-cover"></div>          
                </>
    )
}
//Search Bar toogle -------------------------------------------------------------------------------------------------
function Search(prop){
    
    return(
        <>
        <div className={`absolute overflow-y-hidden w-full bg-stone-800 flex text-3xl px-20 transition-all ${prop.issearch?'h-24 ':'h-0'}`}>
            <div className="sea grow gap-4 flex items-center">
                <img className="h-8" src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/902006563577748c7d58ac9c2bf5e6df.svg" alt="Search" />
                <input className="outline-none w-full h-full bg-transparent font-bold placeholder:text-white placeholder:text-3xl " type="text" placeholder='Search rockstar games...' name="query" />
            </div>
            <div className="options grow flex justify-center items-center gap-4">
                <div className='font-bold text-xl bg-stone-100 text-stone-900 px-6 py-2 rounded-full'>Games</div>
                <div className='font-bold text-xl bg-stone-600 px-6 py-2 rounded-full'>Posts</div>
                <div className='font-bold text-xl bg-stone-600 px-6 py-2 rounded-full'>Video</div>
                <div className='font-bold text-xl bg-stone-600 px-6 py-2 rounded-full'>Comunitty</div>
                <div onClick={prop.search}><img src="https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/beb0cbcbb7dc7cfe8e4d127512ef5f57.svg" /></div>
            </div>

        </div>
        </>

    )
}