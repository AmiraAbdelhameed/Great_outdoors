import React, { useEffect } from "react";
import { Link } from 'react-router';
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../store/dataSlice";


const ServicesLoad = () => {
    const dispatch = useDispatch();
    const { items, loading, error } = useSelector((state) => state.data);

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    return (
        <>

            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            <div className="Portofolio_data px-8 sm:container  sm:mx-auto flex flex-wrap gap-4 justify-center items-center ">
                {items.slice(0, 3).map((item) => (
                    <div className="portofolio_card w-[80%] sm:w-[45%] md:w-[30%] border-2 bg-white rounded-2xl truncate hover:scale-105  transition duration-5 ease-in">
                        <Link to={item.service} key={item.id}>
                            <figure className="truncate h-[150px] flex justify-center items-center">
                                <img src={item.src} alt="" srcset="" className="h-[150px] w-[100%]" />
                            </figure>
                            <h3 className=" p-4 pb-0 text-left font-semibold capitalize">{item.service}</h3>
                        </Link>
                        <Link to={item.service} className="p-4 w-[100%]  text-orange-700 block  " >See More</Link>

                    </div>

                ))}

            </div>
        </>
    )
}

export default ServicesLoad;