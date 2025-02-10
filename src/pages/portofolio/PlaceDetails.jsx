import React,{ useEffect } from "react";
import { Link, Navigate, useLoaderData, useParams } from "react-router";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";






const PlaceDetails =()=>{


    const { id } = useParams();
    const place = useSelector((state) => state.data.items.find((p) => p.id == id ));
    const { items, loading, error } = useSelector((state) => state.data);


    if (!place) return <p>Loading...</p>;

    return (
        <>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            <Link to={'/Portofolio'} className="text-orange-700 mt-2 "><FontAwesomeIcon icon={faChevronLeft} className="px-4" />See all places</Link>
            <div className="container m-auto h-screen flex gap-16 justify-center items-center">
                <figure className="w-[40%]  h-[500px] ">
                    <img src={place.src} alt="ppp" className="rounded-2xl h-[100%]" />
            </figure>
            <div className="content w-[50%] text-white">
                     <h2 className="font-bold text-3xl pb-4">{place.title}</h2>
                     <p className="text-justify text-gray-400"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, quis unde odit distinctio accusantium sed culpa debitis id repellendus tenetur enim non dolorum modi reprehenderit reiciendis. Eius esse est labore!</p>
                     <h2 className="pt-4 capitalize pb-4  "><span className="font-bold text-xl">Location:</span> {place.location}</h2>
                    <button onClick={()=>alert("Coming Soon🎉 ")} className="p-2 bg-orange-700 rounded-2xl hover:scale-125 inline-block transition duration-5 ease-in "> Book Now</button>
            </div>
            </div>
        </>
            
        
    );



}

export default PlaceDetails;