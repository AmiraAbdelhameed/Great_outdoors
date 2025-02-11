import React from "react";
import { Outlet } from "react-router-dom";
const Portofolio =()=>{
    return(
        <>
        <section className="portofolio bg-black min-h-screen ">
        <div className="px-8 sm:container py-3  sm:mx-auto flex flex-wrap   ">
            <Outlet />
        
        </div>

        </section>
        </>
    )
}
export default Portofolio;