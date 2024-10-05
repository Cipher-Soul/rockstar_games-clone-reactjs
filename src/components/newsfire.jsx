import React from 'react'
import { Link } from 'react-router-dom'
import Viewmore from './viewmore'


export default function Newsfire() {

    const newsfireCards = [
        {
            src:'https://media-rockstargames-com.akamaized.net/tina-uploads/posts/511175117837o4/0d886e4dd6f5695c3e8672f77a27aeee305e2185.jpg',
            name:'Rockstar Games',
            date:'October 4, 2024',
            title:'PAWSA on CircoLoco Records'
        },
        {
            src:'https://media-rockstargames-com.akamaized.net/tina-uploads/posts/9kkk2k11148825/af9c67c5534ef15c7d743a0aaa8a67f0453488a9.jpg',
            name:'GTA Online',
            date:'October 3, 2024',
            title:'GTA+ Members Are Treated to Special Gifts This Halloween Season'
        },
        {
            src:"https://media-rockstargames-com.akamaized.net/tina-uploads/posts/9kkk7195595oo4/b91cee222b1b45b0c80bfc07409b023b68935ae4.jpg",
            name:'GTA Online',
            date:'October 3, 2024',
            title:'Halloween Lands in Los Santos with Ghoulish Gifts and Spooky Rewards'
        },
        {
            src:"https://media-rockstargames-com.akamaized.net/tina-uploads/posts/akkk4935711297/342dde97d3e4872324a798963a86182d522f53fc.jpg",
            name:'Red Dead Online',
            date:'October 1, 2024',
            title:'Halloween Inspired Terror Sweeps Across Red Dead Online'
        },
        {
            src:"https://media-rockstargames-com.akamaized.net/tina-uploads/posts/755k1854a85917/05cf096e1ae063c0bc0933760ff8d2c9fe18a94c.jpg",
            name:'GTA Online',
            date:'September 26, 2024',
            title:'Set Your Sights on Multi-Stage Mayhem With Double Rewards in Assault on ATT-16'
        },
        {
            src:"https://media-rockstargames-com.akamaized.net/tina-uploads/posts/511o133o972847/bfc9da07879e9e0adc7b72db9368a587ec524f6f.jpg",
            name:'GTA Online',
            date:'September 19, 2024',
            title:'Track Down Bail Office Bounty Targets for 2X GTA$ and RP'
        },
        
    ]
  return (
    <>
        <section className="newsfire min-h-screen w-full bg-[var(--background-darklight)] sm:px-[100px] sm:py-[50px]">
            <div>
                <h1 className='max-sm:ps-2 max-sm:text-2xl sm:text-4xl font-bold sm:my-10'>Newsfire</h1>
            </div>
            {/* //cards */}
             <div className='sm:min-h-[648px] max-sm:p-4 grid max-sm:grid-cols-1 sm:grid-cols-3 gap-5'>
                {newsfireCards.map((card,i)=>{
                    return(
                        <div className="cards bg-black h-full hover:scale-[1.04] transition-all w-full  sm:max-w-[437px] rounded-lg border border-gray-700">
                    <div>
                        <img className='' src={card.src} alt=""  />
                    </div>
                    <div className='card-body p-5 '>
                        <div className='flex gap-3 items-center my-3'>
                            <h3 className='text-xl'>{card.name}</h3>
                            <p className='text-gray-300'>{card.date}</p>
                        </div>
                        <div>
                            <h1 className='text-2xl font-bold text-wrap'>{card.title}</h1>
                        </div>
                    </div>
                </div>
                    )
                })}
            </div>
            <Viewmore/>

        </section>
    </>
  )
}
