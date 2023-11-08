
'use client';

import React from 'react'
import Container from './Container'
import Logo from './Logo'
import {FiSearch} from 'react-icons/fi'
import {AiOutlineUser} from 'react-icons/ai'
import {IoMdCart}  from 'react-icons/io'
import {FiLogOut} from 'react-icons/fi'
import {useSession, signIn,signOut } from 'next-auth/react'
import Image from 'next/image';


const Header = () => {
    const {data:session} =useSession()
    console.log("session data")
    console.log(session)
  return (
    <div className='bg-bodyColor h-20' >
        <Container className='h-full flex items-center space-x-1 justify-between md:justify-center'  >
            <Logo/>
        
        

        

        <div className='w-full bg-white hidden border-[1px] md:flex items-center rounded-full gap-x-1 border-lightText/50 px-4 py-1.5 focus-within:border-orange-600' >
            <FiSearch className="text-gray-500 group-focus-within:text-darkText duration-200" />
            <input
                type='text'
                placeholder='search for items'
                className='flex-1 placeholder:text-sm    border-none outline-none'
             />
        </div>
        {/* Login/Register */}
        {
            !session &&(<div onClick={()=>signIn()} className='headerDiv' >
            <AiOutlineUser className="text-2xl" />
                <p className='text-sm font-semibold ' >login/register</p>
            </div>)
        }
        {/* Cart button */}
        <div className='bg-black hover:bg-slate-950 rounded-full text-slate-100 hover:text-white flex items-center justify-center gap-x-1 px-3 py-1.5 border-[1px] border-black hover:border-orange-600 duration-200 relative' >
        <IoMdCart className="text-xl" />
            <p className='text-sm font-semibold ' >$0.00</p>
            <span className='bg-white text-xs text-orange-600 rounded-full font-semibold absolute -right-2 -top-1 w-5 h-5 flex items-center justify-center shadow-xl shadow-black' >
                0

            </span>
           
        </div>
        {/* user image */}
        {
            session &&(
                <Image 
                className="rounded-full object-cover"
                src={session?.user?.image as string} alt="user image" width={50} height={50} />
            )
        }
        {
            session && (
                <div onClick={()=>signOut()} className="headerDiv" >
        <FiLogOut className="text-2xl" />
        <p className='text-sm font-semibold' >
                Logout
            </p> 
        </div>
            )
        }
        </Container>
        
    </div>
  )
}

export default Header