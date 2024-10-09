import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { newsfireCards } from '../components/NewsfireData'
import Viewmore from '../components/viewmore'
export default function NewsFire() {

  return (
    <>
    <Header/>
        <section>
        <div className='min-h-[68vh] sm:h-[78vh]  bg-black w-full  sm:flex '>
                <div className="w-full sm:w-[70%]">
                    <img src='https://media-rockstargames-com.akamaized.net/tina-uploads/posts/o3314a19koo147/f9a5bf399a3082e8d5f4f94a06478e62d7374dcf.jpg' className='object-cover  transition-all' />
                </div>
                <div className='p-9 sm:px-10 sm:py-20 sm:w-[30%]'>
                        <div className='h-2/4  sm:block'>
                            <span className='w-full flex gap-8'>
                            <p className='text-[0.9rem] capitalize font-bold text-gray-200 '>
                            Red Dead Redemption</p>
                            <p className='text-gray-200'>October 8,2024</p>
                            </span>
                            <h1 className='text-[2.50rem] max-sm:text-[1.6rem] font-semibold sm:pt-3 tracking-tighter text-break '>
                            Red Dead Redemption and Undead Nightmare Coming to PC October 29
                            </h1>                           
                    </div>
                </div>
        </div>

        <div className='newsfire min-h-screen w-full bg-[var(--background-darklight)] sm:px-[100px] sm:py-[50px]'>
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
            </div>
        </section>
    <Footer/>    
    </>
  )
}
