import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from "./components/page/home/HomePage";
import NoPage from "./components/page/nopage/NoPage";
import ProductInfo from "../src/components/page/ProductInfo/ProductInfo";
import ContactUs from "./components/page/contact/contactUs";
import ScrollTop from "./components/scrollTop/ScrollTop";
import CartPage from "./components/page/cart/CartPage";
import AllProduct from "./components/page/allProduct/AllProduct";
import Signup from "./components/page/registration/Signup";
import Login  from "./components/page/registration/Login";
import UserDashboard from "./components/page/user/UserDashboard";
import AdminDashboard from "./components/page/admin/AdminDashboard";
import AddProductPage from "./components/page/admin/AddProductPage";
import UpdateProductPage from "./components/page/admin/UpdateProductPage";
import MyState from "./context/myState";
import { Toaster } from "react-hot-toast";
import { ProtectedRouteForAdmin } from "./protectedRoute/ProtectedRouteForAdmin";
import { ProtectedRouteForUser } from "./protectedRoute/ProtectedRouteForUser";
const App = () => {
  return (
    
      <MyState >
        <Router>
          <ScrollTop/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/*" element={<NoPage />} />
          <Route path="/productInfo" element={<ProductInfo/>}/>
          <Route path="/cart" element={<CartPage/>}/>
          <Route path="/allproduct" element={<AllProduct />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/contactus" element={<ContactUs/>}/>

          <Route path="/user-dashboard" element={
             <ProtectedRouteForUser>
             <UserDashboard />
           </ProtectedRouteForUser>
          }/>
          <Route path="/admin-dashboard" element={
            <ProtectedRouteForAdmin>
            <AdminDashboard />
          </ProtectedRouteForAdmin>
          }/>
          <Route path="/addproduct" element={
            <ProtectedRouteForAdmin>
            <AddProductPage />
          </ProtectedRouteForAdmin>
          }/>
          <Route path="/updateproduct/: id" element={
            <ProtectedRouteForAdmin>
            <UpdateProductPage />
          </ProtectedRouteForAdmin>
          }/>
          
          
        </Routes>
        <Toaster/>
      </Router>
      </MyState>
    
  )
}

export default App
