import React from "react";
import AboutImg from '../../Assets/images/header_img3.jpg'
const About=()=>{
    return(
        <>
        <section className="portofolio bg-black text-white h-screen py-16 ">
        <div className="px-8  sm:container py-3  sm:mx-auto flex flex-wrap gap-4 justify-around items-center">
            <h2 className="font-bold text-3xl">About us</h2>
            <div className="flex justify-around items-center gap-8 my-16">
                <figure className="w-[40%]">
                    <img src={AboutImg} alt="" className="w-[100%]" />
                </figure>
                <div className="content w-[50%]">
                    <h3 className=" pb-8 font-bold text-3xl text-orange-700">The Great Outdoors </h3>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                         At eveniet accusamus distinctio enim eum tempora commodi
                        obcaecati recusandae veritatis veniam saepe maiores possimus tenetur,
                         atque autem nihil a! Quia, dicta.
                    </p>
                </div>
            </div>

        </div>
        </section>
        </>
    )
}
export default About;