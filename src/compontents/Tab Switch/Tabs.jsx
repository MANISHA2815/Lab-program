import { useState } from "react";

export default function Tabs(){
    const [activeTab,setActive]=useState("home");
    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-lg rounded-xl p-6 w-96">
                {/*Tabs*/}
                <div className="flex justify-around mb-6">
                    <button
                    onClick={()=>setActiveTab("home")}
                    className={`px-4 py-2 rounded-lg ${
                        activeTab==="home"
                        ?"bg-blue-500 text-white"
                    }`}
                </div>
            </div>
        </div>
    )
}