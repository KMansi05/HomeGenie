import { useNavigate } from "react-router";

// productData 
const productData = [
    {
        id: 1,
        image: 'https://1repair.in/wp-content/uploads/2023/05/AC-Repairing-Service.jpg',
        title: 'AC Services',
        desc: '',
        price: 899,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 2,
        image: 'https://5.imimg.com/data5/SELLER/Default/2020/10/CW/NE/VK/24704559/paint8-500x500.jpg',
        title: 'Home Painting Services',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 899,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 3,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrfj4DV9WajSC5dSn5R9PHyn0FG-kgbxsqyA&s',
        title: 'Cook And Serve',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 599,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 4,
        image: 'https://www.mariefranceasia.com/wp-content/uploads/sites/7/2015/08/shutterstock_136244423-492x410.jpg',
        title: 'Hair Spa Treatment At Home',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 599,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 4,
        image: 'https://images.squarespace-cdn.com/content/v1/5e41c95e48b72d6442e233f9/1587409242575-G7T620IBV4AV8XFEI68L/seniorpage2.jpg?format=2500w',
        title: 'Personal gym trainer',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 799,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 5,
        image: 'https://imgmedia.lbb.in/media/2019/08/5d4810ba18a220745acb421c_1565003962120.jpg',
        title: 'Men Salon And Spa',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 799,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 6,
        image: 'https://5.imimg.com/data5/IP/DN/WK/SELLER-26248391/hcare3-jpg-500x500.jpg',
        title: 'Doctor Cosultancy At Home',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 799,
        trendingProductName: 'Featured',
        quantity: 1,
    },
    {
        id: 7,
        image: 'https://content3.jdmagicbox.com/comp/bilaspur-chhattisgarh/k7/9999p7752.7752.181203003507.d5k7/catalogue/roshan-sofa-dry-cleaning-solution-bilaspur-chhattisgarh-ttkdpuo5t3.jpg',
        title: 'Sofa Cleaning Services',
        desc: 'Shop Hand Painted Blue Kaushalam Tea Pot in Aluminium, handmade by Mrinalika Jain. Fair pricing. Ethically made. Positive impact.',
        price: 499,
        trendingProductName: 'Featured',
        quantity: 1,
    }
]

const HomePageProductCard = () => {
    const navigate = useNavigate();
    return (
        <div className="mt-10">
            {/* Heading  */}
            <div className="">
                <h1 className=" text-center mb-5 text-2xl font-semibold">Bestselling Products</h1>
            </div>

            {/* main  */}
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-5 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {productData.map((item, index) => {
                            const { image, title, price } = item
                            return (
                                <div key={index} className="p-4 w-full md:w-1/4">
                                    <div className="h-full border border-gray-300 rounded-xl overflow-hidden shadow-md cursor-pointer">
                                        <img
                                        onClick={()=> navigate('/productinfo')}
                                            className="lg:h-80  h-96 w-full"
                                            src={image}
                                            alt="blog"
                                        />
                                        <div className="p-6">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                                HomeGenie
                                            </h2>
                                            <h1 className="title-font text-lg font-medium text-white mb-3">
                                                {title.substring(0, 25)}
                                            </h1>
                                            <h1 className="title-font text-lg font-medium text-white mb-3">
                                                ₹{price}
                                            </h1>

                                            <div className="flex justify-center ">
                                                <button className=" bg-orange-700 hover:bg-orange-400 w-full text-white py-[4px] rounded-lg font-bold">
                                                    Add To Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomePageProductCard;