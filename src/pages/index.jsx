import React,{ useState } from 'react'
import Newsfire from '../components/newsfire'
import { FeaturedGames } from '../components/header'
import Viewmore from '../components/viewmore'
import Header from '../components/header'
import Footer from '../components/footer'

export default function Index() {
  return (
    <>
    <Header/>
    <Carousel/>
    <Newsfire/>
    <section className='min-h-screen w-full bg-[var(--background-darklight)] sm:px-[100px] sm:py-[50px]'>
        <div className="banner max-sm:h-40 sm:h-[412px] w-full rounded-lg  overflow-hidden mb-8 bg-[url('https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f1aba112359a3d6747ad694a8c02a07c.png')] sm:bg-cover max-sm:bg-cover">
           
        </div>
        <div className='max-sm:grid max-sm:grid-cols-2 gap-3 sm:flex sm:justify-between'>
        <FeaturedGames/>
        </div>
        <Viewmore/>
    
    </section>
    <Footer/>
    </>
    
  )
}


//carousel 

function Carousel(){
    const [idxCrousel,setidxCrousel] = useState(0)

    const gamesLst = [
        {   id:0,
            source:'https://videos-rockstargames-com.akamaized.net/v4/rkoCtr1r/art/global.jpg',
            game_name:'Grand Theft Auto VI',
            game_heading:'Trailer 1'
        },
        {   id:1,
            source:'https://videos-rockstargames-com.akamaized.net/v4/oa46rs8r/art/global.jpg',
            game_name:'Grand Theft Auto Online',
            game_heading:'Bottom Dollar Bounties'
        },
        {   id:2,
            source:'https://videos-rockstargames-com.akamaized.net/v4/9146182r/art/global.jpg',
            game_name:'Grand Theft Auto Online',
            game_heading:'Benefactor Takes Over the GTA Online Auto Scene'
        },
        {   id:2,
            source:'https://videos-rockstargames-com.akamaized.net/v4/r3175t5r/art/global.jpg',
            game_name:'Grand Theft Auto Online',
            game_heading:'The Cluckin’ Bell Farm Raid'
        }
    ]

    return (
        <>
            <section className='min-h-[68vh] sm:h-[78vh]  bg-black w-full  sm:flex '>
                <div className="w-full sm:w-[70%]">
                    <img src={gamesLst[idxCrousel].source} className='object-cover transition-all' />
                </div>
                <div className='p-9 sm:px-10 sm:py-20 '>
                        <div className='h-2/4  sm:block'>
                            <span>
                            <p className='text-[0.85rem] capitalize font-bold text-gray-200 '>{gamesLst[idxCrousel].game_name}</p>
                            <h1 className='text-[2.50rem] font-semibold sm:pt-3 tracking-tighter text-balance '>{gamesLst[idxCrousel].game_heading}</h1>
                            </span>
                            <Watch_now/>      
                    </div>
                    <div className='flex gap-4  sm:mt-[200px]'>
                                <button onClick={()=>setidxCrousel(0)} className={`transition-all ease-in-out h-[14px] ${idxCrousel==0?'w-[56px]':'w-[14px] opacity-50'} bg-white rounded-full`}></button>
                                <button onClick={()=>setidxCrousel(1)} className={`transition-all ease-in-out h-[14px] ${idxCrousel==1?'w-[56px]':'w-[14px] opacity-50'} bg-white rounded-full`}></button>
                                <button onClick={()=>setidxCrousel(2)} className={`transition-all ease-in-out h-[14px] ${idxCrousel==2?'w-[56px]':'w-[14px] opacity-50'} bg-white rounded-full`}></button>
                                <button onClick={()=>setidxCrousel(3)} className={`transition-all ease-in-out h-[14px] ${idxCrousel==3?'w-[56px]':'w-[14px] opacity-50'} bg-white rounded-full`}></button>
                                
                        </div>
                    
                </div>
            </section>
        </>
    )
}
//Watch now button
function Watch_now(){
    return (
        <>
            <button className='uppercase hover:bg-[var(--rockstar-gold)] hover:text-stone-900 border max-sm:w-full max-sm:py-3 max-sm:my-6   sm:px-16 sm:py-4 rounded-lg sm:mt-6 font-bold text-lg'>Watch now</button>
        </>
    )
}