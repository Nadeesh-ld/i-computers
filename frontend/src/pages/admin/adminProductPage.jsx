import {Link} from "react-router-dom";

export default function AdminProductPage() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-4 bg-red-100">
      <h1 className="text-2xl font-bold">Admin Product Page</h1>
      {/* Add your product management UI here */}
      <Link to="/admin/add-product" className="fixed bottom-2 right-2 w-[100px] h-[60px] px-4 py-2 bg-blue-600 text-white rounded hover:bg-black flex items-center justify-center gap-1"    >
       <plus className="text-xl font-bold">+</plus> Add Product
      </Link>
    </div>
  );
}   