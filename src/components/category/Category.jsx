
import React from "react";

const category = [
    {
        image: 'https://i.ibb.co/Mx72X48N/007-electric-appliance.png',
        name: 'Home Repair',
        link: "/allproduct",

    },

    {
        image: "https://i.ibb.co/CK4Lhh4H/003-house-decoration.png",
        name: 'Home Decor',
        link: "/allproduct",
    },
    {
        image: "https://i.ibb.co/NnTKr9dP/006-cooking.png",
        name: 'Kitchen Services',
        link: "/allproduct",
    },
    {
        image: 'https://i.ibb.co/9md0SGPK/008-makeup.png',
        name: 'Women Saloan',
        link: "/allproduct",
    },
    {
        image: 'https://i.ibb.co/v6mhqJ7J/002-barbershop.png',
        name: 'Men Saloan',
        link: "/allproduct",
    },
    {
        image: 'https://i.ibb.co/5X4b22Kx/004-male.png',
        name: 'Trainer',
        link: "/allproduct",
    },
    {
        image: 'https://i.ibb.co/LdYB5hdg/005-surgeon.png',
        name: 'Medicos',
        link: "/allproduct",
    }
]

const Category = () => {
    return (
        <div>
            <div className="flex flex-col mt-5">
                {/* main 1 */}
                <div className="flex overflow-x-scroll lg:justify-center  hide-scroll-bar">
                    {/* main 2  */}
                    <div className="flex ">
                        {/* category  */}
                        {category.map((item, index) => {
                            return (
                                <div key={index} className="px-3 lg:px-10">
                                    {/* Image  */}
                                    <div className=" w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full  bg-orange-700 hover:bg-orange-400 cursor-pointer mb-1 " >
                                        <div className="flex justify-center mb-12">
                                            {/* Image tag  */}
                                            <img src={item.image} alt="img"  />
                                        </div>
                                    </div>

                                    {/* Name Text  */}
                                    <h1 className=' text-sm lg:text-lg text-center font-medium title-font first-letter:uppercase '>{item.name}</h1>

                                    {/* Link  */}
                                    <center>
                                        <a href={item.link} className="text-sm text-white hover:text-orange-500">
                                            Search
                                        </a>
                                    </center>

                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* style  */}
            <style dangerouslySetInnerHTML={{ __html: ".hide-scroll-bar {  -ms-overflow-style: none;  scrollbar-width: none;}.hide-scroll-bar::-webkit-scrollbar {  display: none;}" }} />
        </div>
    );
}

export default Category;




