import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, SlidersHorizontal } from "lucide-react";

const searchData = [
  {
    name: 'Electrician',
    image: "https://royalhomerepairs.com/wp-content/uploads/2022/12/electrician.jpeg.jpg", 
},   
{
    name: 'Plumber',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0NJJ4kG6SqLgsGd3bRIDtJvwhU7Doo9P663MQYkycGn6-odXFBUsJRbZgC0z0FDArkCY&usqp=CAU", 
},
{
    name: 'AC Repair',
    image: "https://1repair.in/wp-content/uploads/2023/05/AC-Repairing-Service.jpg",       
},
{
    name: 'sofa Cleaning',
    image: "https://content3.jdmagicbox.com/comp/bilaspur-chhattisgarh/k7/9999p7752.7752.181203003507.d5k7/catalogue/roshan-sofa-dry-cleaning-solution-bilaspur-chhattisgarh-ttkdpuo5t3.jpg",       
},
{
    name: 'Home Painting',
    image: "https://5.imimg.com/data5/SELLER/Default/2020/10/CW/NE/VK/24704559/paint8-500x500.jpg",     
},
{
    name: 'Wall Art',
    image: "https://content.jdmagicbox.com/comp/chandigarh/k2/0172px172.x172.180806135241.g6k2/catalogue/kreative-bunker-chandigarh-chandigarh-wall-paintings-artists-brhdqw3kwc.jpg", 
},
{
    name:'Flooring',
    image: "https://5.imimg.com/data5/SELLER/Default/2024/1/374660998/YR/ZP/XV/88736640/wooden-flooring-floor-mat-services-500x500.png", 
},
{
    name:'Interior Designer',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd1QtCtIlShZBIEWPNSQ9-9epMrMvhYOi1Jw&s", 
},
{
    name:'Cook',
    image: "https://cdn.britannica.com/86/145786-050-5BD27317/chef-cooking-restaurant-kitchen.jpg", 
},
{
    name: 'Kitchen cleaning services',
    image: "https://dreamwale.com/wp-content/uploads/2024/08/deepclean.jpg", 
},
{
    name:'Maid',
    image: "https://media.istockphoto.com/id/1417833187/photo/professional-cleaner-vacuuming-a-carpet.jpg?s=612x612&w=0&k=20&c=5h8NBR190d46Ni4MclqJ7Zf9ZOtf3TM3gPRJaHUdMjk=", 
},
{
    name:'Facial & Threading',
    image: "https://media.vyaparify.com/vcards/blogs/75148/Facial-Threading-1-(1).jpg", 
},
{
    name:'Manicure & Pedicure',
    image: "https://www.weddingmakeups.in/storage/2024/07/pedicure-services-in-patna.webp", 
},
{
    name:'Hair Spa',
    image: "https://www.mariefranceasia.com/wp-content/uploads/sites/7/2015/08/shutterstock_136244423-492x410.jpg", 
},
{
    name:'Waxing',
    image: "https://5.imimg.com/data5/LY/JC/JR/SELLER-110510653/body-waxing-500x500.jpg", 
},
{
    name:'Makeup',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTREq1CRQGwdULmVSA60VlktYG_kj30FUMXrg&s", 
},
{
    name: 'Hair Styling',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwHgw3RAud-5DSwwY2L7RlnMc_JA4g685M7w&s", 
},
{
    name: 'Hair & Beard Styling',
    image: "https://www.bubblesindia.com/wp-content/uploads/2019/03/Bubbles_Services_Banner_Mens_Grooming.jpg", 
  },
{
    name: 'Facial & Cleanup',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdZ9RxfH9Xs36JsVb4tZCwmzMDQX5a5KWW3g&s", 
},
{
    name: 'Personal Gym Trainer',
    image: "https://images.squarespace-cdn.com/content/v1/5e41c95e48b72d6442e233f9/1587409242575-G7T620IBV4AV8XFEI68L/seniorpage2.jpg?format=2500w", 
},
{
    name: 'Personal Yoga Trainer',
    image: "https://lakshyayogshala.com/wp-content/uploads/2024/12/yoga-trainer-for-male-1-1024x1024.jpeg", 
},
{
    name: 'Doctor Consultation',
    image: "https://5.imimg.com/data5/IP/DN/WK/SELLER-26248391/hcare3-jpg-500x500.jpg", 
},
{
    name:'Blood Test',
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8nkuA5OWdNdC7wpTpbPsibl7JgtLYnw73cw&s", 
},
];

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate(); 

  // Filter Search Data
  const filterSearchData = searchData
    .filter((obj) => obj.name.toLowerCase().includes(search.toLowerCase()))
    .slice(0, 8);

  const handleSearchClick = () => {
    console.log("Search icon clicked! Current search:", search);
  };

  const handleFilterClick = () => {
    console.log("Filter icon clicked!");
  };

  const handleOptionClick = (serviceName) => {
    console.log("Clicked:", serviceName);
    navigate(`/allproduct`, { state: { service: serviceName } }); 
  };

  return (
    <div className="">
      {/* search input and icons */}
      <div className="input flex justify-center items-center gap-2">
        <button onClick={handleSearchClick} className="p-2">
          <Search className="text-black" />
        </button>
        <input
          type="text"
          placeholder="Search here"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          className="bg-yellow-50 placeholder-black rounded-lg px-2 py-2 w-80 lg:w-96 md:w-96 text-black"
        />
        <button onClick={handleFilterClick} className="p-2">
          <SlidersHorizontal className="text-black" />
        </button>
      </div>

      {/* search drop-down */}
      <div className="flex justify-center">
        {search && (
          <div className="block absolute bg-blue-gray-900 backdrop-blur-lg w-80 md:w-96 lg:w-96 z-50 my-1 rounded-lg px-2 py-2">
            {filterSearchData.length > 0 ? (
              <>
                {filterSearchData.map((item, index) => (
                  <div
                    key={index}
                    className="py-2 px-2 cursor-pointer hover:bg-blue-600 rounded-md"
                    onClick={() => handleOptionClick(item.name)}
                  >
                    <div className="flex items-center gap-2">
                      <img className="w-10 h-10 object-cover rounded" src={item.image} alt={item.name} />
                      <span className="text-white">{item.name}</span>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <div className="flex justify-center">
                <img
                  className="w-20"
                  src="https://cdn-icons-png.flaticon.com/128/10437/10437090.png"
                  alt="No results"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;


