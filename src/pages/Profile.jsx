import { useState } from "react"
import { Balancebar, Transactions } from "../components";


export default function Profile({  }){

    const name = "ayush"

    const [profile, setProfile] = useState(name[0].toUpperCase());

    return (
        <div>
            <div className=" w-full h-screen flex justify-center items-center">
                <div className=" w-9/12 bg-blue-500 flex flex-col justify-center items-center ">
                    <div className=" w-full flex items-center">
                        <div className=" m-[2vw] w-[10vw] h-[10vw] bg-black font-Inter text-baseColor text-center flex justify-center items-center text-6xl">
                            {profile}
                        </div>
                        <div className=" font-Inter text-baseColorDark text-5xl">
                            {name}
                        </div>
                    </div>
                    <div className=" w-full flex flex-col items-start">
                        <Balancebar />
                        <Transactions />
                    </div>
                </div>
            </div>
        </div>
    )

}