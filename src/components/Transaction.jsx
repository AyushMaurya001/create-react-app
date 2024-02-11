import axios from "axios"
import { useEffect, useState } from "react"
import { apiUrl } from "../api"


export default function Transaction({ status, userId, amount }){

    const [name, setName] = useState("");

    useEffect(()=>{
        const response = axios.get(`${apiUrl}/api/v1/user/about?userId=${userId}`, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
        .then((res) => setName(res.data))
        .catch((err) => console.log(err));
    }, [userId])

    return (
        <div>
            <div className=" flex justify-center items-center">
                <div className=" mx-10 w-20 h-20 rounded-full bg-yellow-400 flex justify-center items-center text-black">
                    {name}
                </div>
                <div className=" mx-10">
                    {amount}
                </div>
                <div className=" mx-10">
                    {status}
                </div>
            </div>
        </div>
    )

}