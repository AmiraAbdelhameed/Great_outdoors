import React,{useState} from 'react';
import { Link, NavLink, Outlet  } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";



const RootLayout = () => {
    const [isClicked, setIsClicked] = useState(false);

    return (
        <>
            <nav className='bg-black text-white relative'>
                <div className='px-4 sm:container text-white py-3  sm:mx-auto flex justify-between items-center lg:px-32 '>
                    
                    <div>
                    <Link to='/' className='text-orange-700 font-bold font-serif '>Great Outdoors</Link>
                    </div>
                    <div
                        onClick={() => setIsClicked(true)}
                        onMouseLeave={()=> setIsClicked(false)}
                    
                    >
                    <div className="bg-primary text-white p-2  hover:text-secondary md:hidden hover:text-orange-700">
                        <FontAwesomeIcon icon={faBars} />                       
                    </div>
                        
                        {isClicked && (
                            <div className=''>
                            <ul className="temp-nav-links bg-black text-white p-4 absolute w-[90%] top-12 right-4 sm:right-8">
                                <NavLink to={"/"} ><li className='hover:text-orange-700 hover:font-semibold hover:pl-4'>Home</li></NavLink >
                                <NavLink to={"/about"} ><li className='hover:text-orange-700 hover:font-semibold hover:pl-4'>About</li></NavLink >
                                <NavLink to={"/Services"} ><li className='hover:text-orange-700 hover:font-semibold hover:pl-4'>Services</li></NavLink >
                                <NavLink to={"/Portofolio"} ><li className='hover:text-orange-700 hover:font-semibold hover:pl-4'>Portofolio</li></NavLink >
                                <NavLink to={"/Contact"} ><li className='hover:text-orange-700 hover:font-semibold hover:pl-4'>Contact</li></NavLink >

                            </ul>

                            </div>
                        )}                 
                    </div>
                    <ul className='gap-4 hidden md:flex space-x-6  '>
                        <li><NavLink to={"/"} className='hover:text-orange-700 ease-in-out duration-500'>Home</NavLink ></li>
                        <li><NavLink  to={"/about"} className='hover:text-orange-700  ease-in-out duration-500'>About</NavLink ></li>
                        <li><NavLink  to={"/Services"} className='hover:text-orange-700  ease-in-out duration-500'>Services</NavLink ></li>
                        <li><NavLink  to={"/Portofolio"} className='hover:text-orange-700  ease-in-out duration-500'>Portofolio</NavLink ></li>
                        <li><NavLink  to={"/Contact"} className='hover:text-orange-700  ease-in-out duration-500'>Contact</NavLink ></li>
                       
                    </ul>
                </div>
            </nav>
            <main>
                <Outlet />
            </main>
            <footer className="px-4 relative bg-black text-white ">
                <div className="line border-[1px] border-white w-[100%] left-0 absolute"></div>
                <div className="footer_container text-center py-4 text-gray">
                    <span>
                        &copy; 2025 All rights reserved by Amira Abdelhameed
                    </span>

                </div>
            </footer>
        </>
    )
}
export default RootLayout;