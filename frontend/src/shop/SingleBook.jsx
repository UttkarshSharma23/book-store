import React from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleBook = () => {
    const  {_id,bookTitle,imageURL} = useLoaderData();
  return (
    <div className='mt-28 px-4 lg:px-24'>
        <h2>{bookTitle}</h2>
        <img src={imageURL} alt="" className='h-60 w-50'/>
        SingleBook: {_id}
        </div>
  )
}

export default SingleBook