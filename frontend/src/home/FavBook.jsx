import React from 'react'
import FavBookImg from "../assets/banner-books/favoritebook.jpg"
import {Link} from 'react-router-dom'

const FavBook = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row  justify-between items-center gap-12'>
{/* Img div tag */}
        <div className='md:w-1/2'>
            <img src={FavBookImg} alt="" className='rounded md:w-10/12' />
        </div>
{/* Details div tag */}
        <div className='md:w-1/2 space-y-6'>
            <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>Find your Favorite <span className='text-blue-700'>Book Here</span></h2>
            <p className='mb-10 text-lg md:w-5/6'>This is awesome book and every thing is done using the react , javascript , tailwind and backend with the help of the Nodejs</p>

{/*-----------------------------------Start of stats div-----------------------------------------------  */}
            {/* stats details div */}
            <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
{/*-----------------------------------Start of details-----------------------------------------------*/}
                {/* 1st detail */}
                <div>
                    <h3 className=' text-3xl font-bold'>800+</h3>
                    <p className='text-base'>Book Listing</p>       
                </div>
                {/* 2nd detail */}
                <div>
                    <h3 className=' text-3xl font-bold'>550+</h3>
                    <p className='text-base'>Registered Users</p>       
                </div>
                {/* 3rd detail */}
                <div>
                    <h3 className=' text-3xl font-bold'>1200+</h3>
                    <p className='text-base'>PDF Downloads</p>   
                </div>
 {/*------------------------------------End of details----------------------------------------------------*/}
            </div>
{/*------------------------------------End of Styled div----------------------------------------------------*/}
        {/* Button */}
        <Link to="/shop" className='mt-20 block'><button className=' bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>Explore More</button></Link>
        </div>
    </div>
  )
}

export default FavBook