import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

// react icons
import { IoBookSharp } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";


const Navbar = () => {
    const [ismenuOpen,setMenuOpen] = useState(false);
    const [isSticky,setIsSticky] = useState(false);

    // toogle menu
    const toggleMenu = () =>{
        setMenuOpen(!ismenuOpen);
    }


    useEffect(()=>{
        const handleScroll =() =>{
            if(window.scrollY>100)
            {
                setIsSticky(true);
            }
            else
            {
                setIsSticky(false);
            }
        }
        window.addEventListener("scroll",handleScroll);
        return ()=>{
            window.addEventListener("scroll",handleScroll);
        }
    },[])

//NavBar items here
    const navItems =
    [
        {link:"Home", path:"/" },
        {link:"About", path:"/about" },
        {link:"Shop", path:"/shop" },
        {link:"Sell Your Book", path:"/admin/dashboard" },
        {link:"Blog", path:"/blog" },
    ]



  return (
    <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300'>
        <nav className={`py-4  lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-blue-300" : ""}`}>
            <div className='flex justify-betwen  items-center text-base gap-8'>
                {/* logo */}
                <Link to="/" className='text-2xl font-bold text-blue-700 flex items-center gap-2'><IoBookSharp className='inline-block'/>Books</Link>

                {/* Nav items for large devices */}
                <ul className=' md:flex space-x-20 '>
                    {
                        navItems.map(({link,path}) => <Link key ={path} to={path} className='block text-base  text-black uppercase cursor-pointer hover:text-blue-700'>{link}</Link>)
                    }
                </ul>

                {/* button for large devices */}
                <div className='space-x-12 block lg:flex items-center'>
                    <button><FaBarsStaggered className='w-5 hover:text-blue-700'/></button>
                </div>

                {/* Menu button  for mobile devices */}
                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='text-black focus:outline-none'>
                        {
                            ismenuOpen ? <FaXmark className="h-5 w-5 text-black"/> : <FaBarsStaggered className="h-5 w-5 text-black"/>
                        }
                    </button>
                </div>
            </div>

                    {/* navItems for small devices */}
                    <div className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${ismenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                        {
                            navItems.map(({link,path})=> <Link key ={path} to={path} className='block text-base  text-white uppercase cursor-pointer'>  {link} </Link>)
                        }
                    </div>

        </nav>
    </header>
  )
}

export default Navbar