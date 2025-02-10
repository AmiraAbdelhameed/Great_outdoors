import React from "react";
import { Outlet } from "react-router-dom";

import PortofolioCards from "../../components/Cards/PortofolioCards";
import hiking from '../../Assets/images/hiking.jpg'
import camping from '../../Assets/images/camping.jpg';
import diving from '../../Assets/images/diving.jpg';
const Services =()=>{
    return(
        <>
        <section className="services bg-black  py-16  ">
        <div className="px-8 sm:container py-3  sm:mx-auto ">
        <h2 className="font-bold text-3xl text-center pb-8 text-white">Services</h2>
            <div className="cards flex gap-4 justify-center items-center flex-wrap pb-16 ">
               
                    <Outlet />
            </div>
        </div>
        </section>
        </>
    )
}
export default Services;