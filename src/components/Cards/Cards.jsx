import React from "react";
// import card_img from '../image/card1.jpg'
const Cards = ({ title, description, card_img })=>{
    return(
        <>
            <div className="card rounded-2xl relative   hover:scale-110 transition ease-in-out duration-300 hover:duration-700 hover:ease-out ">
        <figure className="w-[12rem]" >
             <img src={card_img} alt="" className="rounded-2xl w-[12rem] h-[16rem]"  />
        </figure>
        <div className="card-body rounded-2xl absolute bottom-4 left-[25%] text-center">
            <h3 className="font-bold ">{title}</h3>
            <h4>{description}</h4>
        </div>
        </div>
        </>
    )
}
export default Cards;