import { useState } from "react"
import { Avatar } from "./BlogCard"
import { Link, useNavigate } from "react-router-dom"

export const Appbar = () => {
    const [visible, setVisibile] = useState(false) 
    const navigate = useNavigate();
    
    return <div className="border-b flex justify-between px-10 py-4">
        <Link to={'/blogs'} className="flex flex-col justify-center cursor-pointer">
                NxtGenBlog
        </Link>
        <div>
            <Link to={`/publish`}>
                <button type="button" className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">New</button>
            </Link>

            <button onClick={() => setVisibile((p)=> !p)}>
                <Avatar size={"big"} name="Sai"  />
                </button>
            {visible && <div className="flex flex-row justify-center w-[200px] absolute right-[2px] top-[82px]">
                <button type="button" onClick={()=>navigate("/signin")} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Logout</button>
            </div>}
        </div>
    </div>
}