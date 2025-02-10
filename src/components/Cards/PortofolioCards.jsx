import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
// import img from '../image/mountain1.jpg'
const PortofolioCards =({name , details ,image ,action})=>{
    return(
        <>
        <div className="portofolio_card w-[80%] sm:w-[45%] md:w-[30%] border-2 bg-white">
            <figure className="truncate h-[200px] flex justify-center items-center">
                <img src={image} alt="" />
            </figure>
            <div className="content  p-4 ">
            <h3>{name}</h3>
            <p className="place_details">{details}</p>
            <div >
                <Link to={`/Services/`}>{action}</Link>
                {/* <a href="#">{action}</a> */}
            </div>
            </div>
        </div>
        </>
    )
}
export default PortofolioCards;