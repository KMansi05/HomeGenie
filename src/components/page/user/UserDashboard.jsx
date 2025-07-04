import Layout from "../../layout/layout";

const products = [
    {
        id: 1,
        name: 'Hair Spa Treatment At Home',
        imageSrc:
            'https://www.mariefranceasia.com/wp-content/uploads/sites/7/2015/08/shutterstock_136244423-492x410.jpg',
        href: '#',
        price: '₹599',
        color: 'Curles',
        imageAlt: 'Hair Spa Treatment At Home',
        quantity: 1,
    },
]

const UserDashboard = () => {
    // user
    const user = JSON.parse(localStorage.getItem('users'));

    // console.log(user)


    return (
        <Layout>
            <div className=" container mx-auto px-4 py-5 lg:py-8">
                {/* Top  */}
                <div className="top ">
                    {/* main  */}
                    <div className=" bg-orange-600 py-5 rounded-xl border border-orange-800">
                        {/* image  */}
                        <div className="flex justify-center">
                            <img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" alt="" />
                        </div>
                        {/* text  */}
                        <div className="">
                            {/* Name  */}
                            <h1 className=" text-center text-lg">
                                <span className=" font-bold">Name : </span>
                                {user?.name}
                            </h1>

                            {/* Email  */}
                            <h1 className=" text-center text-lg">
                                <span className=" font-bold">Email : </span>
                                {user?.email}
                            </h1>

                            {/* Date  */}
                            <h1 className=" text-center text-lg">
                                <span className=" font-bold">Date : </span>
                                {user?.date}
                            </h1>

                            {/* Role  */}
                            <h1 className=" text-center text-lg">
                                <span className=" font-bold">Role : </span>
                                {user?.role}
                            </h1>
                        </div>
                    </div>
                </div>

                {/* bottom  */}
                <div className="bottom">
                    {/* main 1 */}
                    <div className="mx-auto my-4 max-w-6xl px-2 md:my-6 md:px-0">
                        {/* text  */}
                        <h2 className=" text-2xl lg:text-3xl font-bold">Order Details</h2>

                        {/* main 2 */}
                        <div className="mt-5 flex flex-col overflow-hidden rounded-xl border border-orange-500 md:flex-row">
                            {/* main 3  */}
                            <div className="w-full border-r border-orange-500 bg-orange-500 md:max-w-xs">
                                {/* left  */}
                                <div className="p-8">
                                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-1">
                                        <div className="mb-4">
                                            <div className="text-sm font-semibold text-black">Order Id</div>
                                            <div className="text-sm font-medium text-gray-900">#74557994327</div>
                                        </div>

                                        <div className="mb-4">
                                            <div className="text-sm font-semibold">Date</div>
                                            <div className="text-sm font-medium text-gray-900">4 March, 2023</div>
                                        </div>

                                        <div className="mb-4">
                                            <div className="text-sm font-semibold">Total Amount</div>
                                            <div className="text-sm font-medium text-gray-900">₹599</div>
                                        </div>

                                        <div className="mb-4">
                                            <div className="text-sm font-semibold">Order Status</div>
                                            <div className="text-sm font-medium text-green-800">Confirmed</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* right  */}
                            <div className="flex-1">
                                <div className="p-8">
                                    <ul className="-my-7 divide-y divide-white">
                                        {products.map((product) => (
                                            <li
                                                key={product.id}
                                                className="flex flex-col justify-between space-x-5 py-7 md:flex-row"
                                            >
                                                <div className="flex flex-1 items-stretch">
                                                    <div className="flex-shrink-0">
                                                        <img
                                                            className="h-20 w-20 rounded-lg border border-gray-200 object-contain"
                                                            src={product.imageSrc}
                                                            alt={product.imageSrc}
                                                        />
                                                    </div>

                                                    <div className="ml-5 flex flex-col justify-between">
                                                        <div className="flex-1">
                                                            <p className="text-sm font-bold text-white">{product.name}</p>
                                                            <p className="mt-1.5 text-sm font-medium text-white">{product.color}</p>
                                                        </div>

                                                        <p className="mt-4 text-sm font-medium text-white">x {product.quantity}</p>
                                                    </div>
                                                </div>

                                                <div className="ml-auto flex flex-col items-end justify-between">
                                                    <p className="text-right text-sm font-bold text-white">{product.price}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default UserDashboard;