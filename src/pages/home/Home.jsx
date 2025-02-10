import React, {useEffect} from "react";
import { Link, useLoaderData, useParams } from "react-router";
import Header from "../../components/Header/Header";
import Cards from '../../components/Cards/Cards'
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../store/dataSlice";
import Diving from '../../Assets/images/diving.jpg'
import Hiking from '../../Assets/images/hiking.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Home = () => {

    const dispatch = useDispatch();
       const { items, loading, error } = useSelector((state) => state.data);
    //    const { service } = useParams();
   
       useEffect(() => {
           dispatch(fetchData()); 
       }, [dispatch]);
   
   
    return (
        <>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            <Header />
            {/* Explore\portofolio section  */}
            <section className="explore pb-16 pt-4 bg-black text-white  lg:pt-4">
                <div className="explore_section_container  px-4 sm:container py-3  sm:mx-auto ">
                <div className="content flex flex-col justify-center items-center">
                <h2 className="text-center pb-8 font-bold text-3xl">Explore The World...</h2>
                <p className="w-[80%] md:w-1/2 text-center">
                    Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit.
                    Mollitia odit distinctio doloremque omnis alias,
                    reprehenderit eum similique.
                </p>
                </div>
                <div className="cards pt-16 flex items-center justify-center flex-wrap gap-8 md:flex-nowrap  ">
                        {items.slice(0, 3).map((item , index) => (
                            <>
                                <Link to={`/Portofolio/${item.id}`} ><Cards card_img={item.src} title={item.title} description={'United States'} key={index} /></Link>
                            </>

                        ))}
                </div>
                    <div className="text-center pt-8">
                        <Link to={"/Portofolio"} className=" text-center text-white inline-block py-2 px-8 mt-4 bg-orange-700 rounded-2xl hover:scale-110  transition duration-5 ease-in">See More </Link>
                    </div>
                </div>
            </section>
            {/* Services section  */}
            <section className="services pb-16 pt-4 bg-black text-white">
            <div className="services_section_container  px-4 sm:container py-3  sm:mx-auto ">
                <div className="content flex flex-col justify-center items-center pb-4">
                <h2 className="text-center pb-8 font-bold text-3xl">
                    Services
                </h2>
                <p className="w-[80%] md:w-1/2 text-center">
                Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit.
                    Mollitia odit distinctio doloremque omnis alias,
                    reprehenderit eum similique.
                </p>
                </div>
                <div className="cards flex items-center justify-center gap-8 flex-wrap ">
                        <Link to={`/Services/diving`}><Cards card_img={Diving} title={' Diving '} /></Link>
                        <Link to={`/Services/hiking`}><Cards card_img={Hiking} title={' Hiking '} /></Link>
                        
                </div>
                    <div className="text-center pt-8">
                        <Link to={'/Services'} className=" text-center text-white inline-block py-2 px-8 mt-4 bg-orange-700 rounded-2xl hover:scale-110  transition duration-5 ease-in">See More </Link>
                    </div>
            </div>
            </section>
            {/* Contact us  section  */}
            <section className="services pb-16 pt-4 bg-black text-white">
                <div className="contact_section_container  px-4 sm:container py-3  sm:mx-auto ">
                    <h2 className="text-center pb-8 font-bold text-3xl">
                        Contact us 
                    </h2>
                    <div className="links text-center flex gap-4 justify-center items-center">
                        <Link><span className="text-2xl hover:text-orange-700 inline-block hover:scale-125 ease-in-out duration-300"><FontAwesomeIcon icon={faPhone} /></span></Link>
                        <Link><span className="text-2xl hover:text-orange-700 inline-block hover:scale-125 ease-in-out duration-300"><FontAwesomeIcon icon={faEnvelope} /></span></Link>
                        <Link><span className="text-2xl hover:text-orange-700 inline-block hover:scale-125 ease-in-out duration-300"><FontAwesomeIcon icon={faFacebookF} /></span></Link>
                        <Link><span className="text-2xl hover:text-orange-700 inline-block hover:scale-125 ease-in-out duration-300"><FontAwesomeIcon icon={faInstagram} /></span></Link>
                        <Link><span className="text-2xl hover:text-orange-700 inline-block hover:scale-125 ease-in-out duration-300"><FontAwesomeIcon icon={faTwitter} /></span></Link>
                           
                    </div>
                </div>
            </section>
            
        
        </>
    )

}
export default Home;