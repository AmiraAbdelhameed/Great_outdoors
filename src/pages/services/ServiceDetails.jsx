import React from "react";
import { Link, useParams } from "react-router";
import { useSelector } from "react-redux";





const ServiceDetails = () => {


    const { service } = useParams();
    const place = useSelector((state) => state.data.items.filter((p) => p.service === service));
    const {loading, error } = useSelector((state) => state.data);


    if (!place) return <p className="text-white text-3xl text-center" >Loading ...</p>;

    return (
        <>
            {loading && <p className="text-white text-3xl">Loading...</p>}
            {error && <p className="text-red-900">{error}</p>}
            <div className="container m-auto  flex gap-8 justify-center items-center">
                {place.map((item) => (
                    <div key={item.id} className="portofolio_card w-[80%] sm:w-[45%] md:w-[30%] border-2 bg-white rounded-2xl truncate hover:scale-105  transition duration-5 ease-in">
                        <Link to={`/Portofolio/${item.id}`} >
                            <figure className="truncate h-[150px] flex justify-center items-center">
                                <img src={item.src} alt=""  className="h-[150px] w-[100%]" />
                            </figure>
                            <h3 className=" p-4 pb-0 text-left font-semibold capitalize">{item.title}</h3>
                        </Link>
                        <div className="content p-4 text-left ">
                            <p>{item.description}</p>
                            <p className="text-gray-600" >{item.location}</p>
                        </div>
                        <Link to={`/Portofolio/${item.id}`} className="w-[100%] text-center text-white block p-2 mt-4 bg-orange-700 rounded-2xl hover:scale-110  transition duration-5 ease-in"  >Book Now</Link>

                    </div>

                ))}
            </div>
        </>


    );



}

export default ServiceDetails;