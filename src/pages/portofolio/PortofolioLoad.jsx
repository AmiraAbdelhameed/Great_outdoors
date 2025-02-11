import React, { useEffect } from "react";
import { Link } from 'react-router';
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../store/dataSlice";




const PortofolioLoad = () => {
    const dispatch = useDispatch();
    const { items, loading, error } = useSelector((state) => state.data);

    useEffect(() => {
        dispatch(fetchData()); 
    }, [dispatch]);



    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
           

            {loading && <p className="text-white text-3xl">Loading...</p>}
            {error && <p className="text-red-900">{error}</p>}

            <h2 className="text-white text-center text-3xl font-bold pb-4">Portofolio</h2>
            <div className="Portofolio_data px-8 sm:container py-3  sm:mx-auto flex flex-wrap gap-4 justify-center items-center ">
                {items.slice().map((item , index) => (


                    <div className="portofolio_card w-[80%] sm:w-[45%] md:w-[30%] border-2 bg-white rounded-2xl truncate hover:scale-105  transition duration-5 ease-in" key={index} >
                        <Link to={`/Portofolio/${item.id}`} >
                            <figure className="truncate h-[150px] flex justify-center items-center">
                                <img src={item.src} alt=""  className="h-[150px] w-[100%]" />
                            </figure>
                            <h3 className=" p-4 pb-0 text-left font-semibold">{item.title}</h3>
                        </Link>
                        <div className="content p-4 text-left " key={index} >
                            <p>{item.description}</p>
                            <p className="text-gray-600" >{item.location}</p>
                            <Link to={`/Portofolio/${item.id}`} className="w-[100%] text-center text-white block p-2 mt-4 bg-orange-700 rounded-2xl hover:scale-110  transition duration-5 ease-in" >Book Now</Link>
                        </div>
                    </div>

                ))}

            </div>


        </div>
    );

}




export default PortofolioLoad;