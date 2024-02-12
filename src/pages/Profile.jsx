import { useEffect, useState } from "react"
import { Balancebar, Navbar, Transactions } from "../components";
import axios from "axios";
import { apiUrl } from "../api";


export default function Profile({  }){

    const token = localStorage.getItem('token');
    const [name, setName] = useState("");

    useEffect(()=>{
        const response = axios.get(`${apiUrl}/api/v1/user/name`, {
            headers: {
                Authorization: token
            }
        }).then((res) => setName(res.data))
        .catch((err) => console.log(err));
    }, [token])

    return (
        <div>
            <Navbar />
            <div className=" w-full h-screen flex justify-center items-start">
                <div className=" w-full bg-blue-500 flex flex-col justify-center items-center ">
                    <div className=" w-full flex justify-center items-center">
                        <div className=" m-[2vw] w-[10vw] h-[10vw] bg-black font-Inter text-baseColor text-center flex justify-center items-center text-6xl rounded-full border-4 border-white">
                            {name===""?"":name[0].toUpperCase()}
                        </div>
                        <div className=" font-Inter text-baseColorDark text-5xl">
                            {name}
                        </div>
                    </div>
                    <div className=" w-full flex flex-col items-center">
                        <div className=" w-full">
                            <div className=" border-t border-white"></div>
                            <Balancebar />
                            <div className=" border-b border-white"></div>
                        </div>
                        <Transactions />
                    </div>
                </div>
            </div>
        </div>
    )

}