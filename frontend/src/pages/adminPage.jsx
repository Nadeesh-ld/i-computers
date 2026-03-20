import { Route,Routes,Link } from "react-router-dom";



export default function AdminPage() {  
    return (
        <div className="w-full h-screen flex items-center border-[10px] border-red-300"> 
            <div className="w-[300px] h-full bg-red-300">
               
            <Link to="/admin" className="block w-full h-[50px] text-center leading-[50px] border-b-[1px] border-gray-400">Dashoard</Link>
                <Link to="/admin/products" className="block py-2 px-4 hover:bg-gray-200 ">Products</Link>
                <Link to="/admin/orders" className="block py-2 px-4 hover:bg-gray-200 ">Orders</Link>
                <Link to="/admin/users" className="block py-2 px-4 hover:bg-gray-200 ">Users</Link>
                <Link to="/admin/reviews" className="block py-2 px-4 hover:bg-gray-200 ">Reviews</Link>
            </div>
               
                <div className="w-[calc(100%-300px)] h-full bg-primary rounded-2xl">
                    <Routes>  
                        <Route path="/" element={<h1>Admin Dashboard</h1>} />  
                         <Route path="/products" element={<h1>product Dashboard</h1>} />
                        <Route path="/orders" element={<h1>order Dashboard</h1>} />
                        <Route path="/users" element={<h1>user Dashboard</h1>} />  
                        <Route  path="/reviews" element={<h1>review Dashboard</h1>} />
                    </Routes>
                </div>
        </div>
      
    )
}