import react from "react";
import { IoIosCart } from "react-icons/io";

function Navbar({productCount}){
  return(
    <div className="py-4 bg-white px-5">
      <div className="max-w-6xl flex justify-between mx-auto items-center">
        <img className="h-16" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqf6ji0ePlpo61R8Ag3wM808rz-affbOkWbHqe3gF3npm18tQP5m2ZUHL5AEBVhdFPpgA&usqp=CAU" />
        <div className="flex flex-col items-center">
          <IoIosCart className="text-4xl text-orange-500" />
          <span  className=" bg-orange-500 text-white rounded-xl px-1 text-xs hover:text-orange-500 hover:border hover:border-orange-500 hover:bg-white  ">{productCount}</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;