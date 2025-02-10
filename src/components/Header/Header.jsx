import React from 'react';
import HeaderImg from '../../Assets/images/Road cycling-amico.svg'
import { Link } from 'react-router-dom';

const Header =()=>{
   
    return (
        <>
        <section className='lg:h-screen  w-full bg-black '>
        <div className='px-4 py-16 sm:container sm:mx-auto  lg:px-32 lg:pt-32  flex justify-between items-center flex-col-reverse md:flex-row'  >
        <div className='header_content text-white w-[80%] md:w-[50%] 	'>
        <h1 className='text-orange-700 font-bold text-3xl mb-4'>The Great Outdoors</h1>
        <h2 className='mb-4'>Wonder Often, Wonder Always</h2>
        <p className='text-justify text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Eligendi corrupti aliquid distinctio, tenetur,
             voluptate rerum a eius consequuntur harum ab qui vitae provident. 
            Sunt voluptates beatae reprehenderit porro quaerat rem.
        </p>
        <Link to='/Portofolio' className="text-center text-white inline-block py-2 px-8 mt-4 bg-orange-700 rounded-2xl hover:scale-110  transition duration-5 ease-in">Book Now</Link>
        </div>
        <figure className='w-[80%] md:w-[40%]'>
            <img src={HeaderImg} alt='background' />
        </figure>
        </div>
        </section>
        </>
    )
}
export default Header;



