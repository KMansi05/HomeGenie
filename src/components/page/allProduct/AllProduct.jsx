
import { useNavigate } from "react-router";
import { useState } from "react";
import Layout from "../../layout/layout";
import Category from "../../category/Category";


// Categorized service data
const categorizedServices = 
{
    "Home Repair Services": 
    [
        { 
            id: 1, 
            image: "https://royalhomerepairs.com/wp-content/uploads/2022/12/electrician.jpeg.jpg", 
            title: "Electrician", 
            price: 499 
        },
        { 
            id: 2, 
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0NJJ4kG6SqLgsGd3bRIDtJvwhU7Doo9P663MQYkycGn6-odXFBUsJRbZgC0z0FDArkCY&usqp=CAU", 
            title: "Plumber", 
            price: 499 
        },
        { 
            id: 3, 
            image: "https://1repair.in/wp-content/uploads/2023/05/AC-Repairing-Service.jpg", 
            title: "AC Repair", 
            price: 899 
        },
        { 
            id: 4, 
            image: "https://content3.jdmagicbox.com/comp/bilaspur-chhattisgarh/k7/9999p7752.7752.181203003507.d5k7/catalogue/roshan-sofa-dry-cleaning-solution-bilaspur-chhattisgarh-ttkdpuo5t3.jpg", 
            title: "Sofa Cleaning", 
            price: 499 
        },
    ],
    "Home Decor Services":
    [
        { 
            id: 5, 
            image: "https://5.imimg.com/data5/SELLER/Default/2020/10/CW/NE/VK/24704559/paint8-500x500.jpg", 
            title: "Home Painting", 
            price: 899 
        },
        { 
            id: 6, 
            image: "https://content.jdmagicbox.com/comp/chandigarh/k2/0172px172.x172.180806135241.g6k2/catalogue/kreative-bunker-chandigarh-chandigarh-wall-paintings-artists-brhdqw3kwc.jpg", 
            title: "Wall Art", 
            price: 499 
        },
        { 
            id: 7, 
            image: "https://5.imimg.com/data5/SELLER/Default/2024/1/374660998/YR/ZP/XV/88736640/wooden-flooring-floor-mat-services-500x500.png", 
            title: "Flooring", 
            price: 399 
        },
        { 
            id: 8, 
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd1QtCtIlShZBIEWPNSQ9-9epMrMvhYOi1Jw&s", 
            title: "Interior Designer", 
            price: 299 
        },
    ],

    "Kitchen Services":
    [
        { 
            id: 9, 
            image: "https://cdn.britannica.com/86/145786-050-5BD27317/chef-cooking-restaurant-kitchen.jpg", 
            title: "Cook", 
            price: 399 
        },
        { 
            id: 10, 
            image: "https://dreamwale.com/wp-content/uploads/2024/08/deepclean.jpg", 
            title: "Kitchen cleaning services",  
            price: 199 
        },
        {
            id: 11, 
            image: "https://media.istockphoto.com/id/1417833187/photo/professional-cleaner-vacuuming-a-carpet.jpg?s=612x612&w=0&k=20&c=5h8NBR190d46Ni4MclqJ7Zf9ZOtf3TM3gPRJaHUdMjk=", 
            title: "Maid", 
            price: 899
        }

    ],

    "Women Saloan": 
    [
        { 
            id: 12, 
            image: "https://media.vyaparify.com/vcards/blogs/75148/Facial-Threading-1-(1).jpg", 
            title: "Facial & Threading", 
            price: 399 
        },
        { 
            id: 13, 
            image: "https://www.weddingmakeups.in/storage/2024/07/pedicure-services-in-patna.webp", 
            title: "Manicure & Pedicure", 
            price: 199 
        },
        { 
            id: 14, 
            image: "https://www.mariefranceasia.com/wp-content/uploads/sites/7/2015/08/shutterstock_136244423-492x410.jpg", 
            title: "Hair Spa", 
            price: 599 
        },
        { 
            id: 15, 
            image: "https://5.imimg.com/data5/LY/JC/JR/SELLER-110510653/body-waxing-500x500.jpg", 
            title: "Waxing", 
            price: 199 
        },
        {
            id: 16, 
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTREq1CRQGwdULmVSA60VlktYG_kj30FUMXrg&s", 
            title: "Makeup", 
            price: 599
        },
        {
            id: 17, 
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwHgw3RAud-5DSwwY2L7RlnMc_JA4g685M7w&s", 
            title: "Hair Styling", 
            price: 399
        }
    ],

    "Men Saloan":
    [
        { 
            id: 18, 
            image: "https://www.bubblesindia.com/wp-content/uploads/2019/03/Bubbles_Services_Banner_Mens_Grooming.jpg", 
            title: "Hair & Beard Styling", 
            price: 799 
        },
        { 
            id: 19, 
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdZ9RxfH9Xs36JsVb4tZCwmzMDQX5a5KWW3g&s", 
            title: "Facial & Cleanup", 
            price: 799 
        },
        
    ],

    "Trainer": 
    [
        { 
            id: 20, 
            image: "https://images.squarespace-cdn.com/content/v1/5e41c95e48b72d6442e233f9/1587409242575-G7T620IBV4AV8XFEI68L/seniorpage2.jpg?format=2500w", 
            title: "Personal Gym Trainer", 
            price: 799 
        },
        { 
            id: 21, 
            image: "https://lakshyayogshala.com/wp-content/uploads/2024/12/yoga-trainer-for-male-1-1024x1024.jpeg", 
            title: "Personal Yoga Trainer", 
            price: 799 
        },
    ],

    "Medicos":
    [
        { 
            id: 22, 
            image: "https://5.imimg.com/data5/IP/DN/WK/SELLER-26248391/hcare3-jpg-500x500.jpg", 
            title: "Doctor Consultation", 
            price: 799 
        },
        { 
            id: 23, 
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8nkuA5OWdNdC7wpTpbPsibl7JgtLYnw73cw&s", 
            title: "Blood Test", 
            price: 1299 
        },
    ]
};

const AllProduct = () => {
    const navigate = useNavigate();
    const [cart, setCart] = useState([]); // cart state
    const [notification, setNotification] = useState(''); // notification state

    const addToCart = (item) => {
        setCart([...cart, item]);

        // Show notification
        setNotification(`${item.title} added to cart!`);

        // Hide notification after 2 seconds
        setTimeout(() => {
            setNotification('');
        }, 2000);
    };

    const clearCart = () => {
        setCart([]);
        setNotification('All items removed from cart!');
        setTimeout(() => {
            setNotification('');
        }, 2000);
    };

    return (
        <Layout>
            <h1 className="font-bold text-orange-500 text-5xl text-center">Services</h1>

            <div className="flex justify-between items-center my-4 mx-4">
                <Category />
                {cart.length > 0 && (
                    <button 
                        onClick={clearCart} 
                        className="bg-red-600 hover:bg-red-400 text-white font-bold py-2 px-4 rounded-xl"
                    >
                        Clear All Cart ({cart.length})
                    </button>
                )}
            </div>

            {/* Notification */}
            {notification && (
                <div className="fixed top-5 right-5 bg-green-600 text-white px-4 py-2 rounded shadow-lg z-50">
                    {notification}
                </div>
            )}

            <div className="py-8">
                {Object.entries(categorizedServices).map(([category, services]) => (
                    <section key={category} className="text-gray-200 body-font mb-10">
                        <h2 className="text-xl font-bold text-center mb-4">{category}</h2>
                        <div className="container px-5 lg:px-0 py-5 mx-auto">
                            <div className="flex flex-wrap -m-4">
                                {services.map((item) => (
                                    <div key={item.id} className="p-4 w-full md:w-1/4">
                                        <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
                                            <img
                                                onClick={() => navigate('/productinfo')}
                                                className="lg:h-80 h-96 w-full"
                                                src={item.image}
                                                alt={item.title}
                                            />
                                            <div className="p-6">
                                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">HomeGenie</h2>
                                                <h1 className="title-font text-lg font-medium text-white mb-3">{item.title}</h1>
                                                <h1 className="title-font text-lg font-medium text-white mb-3">₹{item.price}</h1>
                                                <div className="flex justify-center">
                                                    <button 
                                                        className="bg-orange-700 hover:bg-orange-400 w-full text-white py-[4px] rounded-lg font-bold"
                                                        onClick={() => addToCart(item)}
                                                    >
                                                        Add To Cart
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                ))}
            </div>
        </Layout>
    );
};

export default AllProduct;