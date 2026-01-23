import { useState } from 'react'
import './Registration.css'
export default function RegistrationForm(){
    const [Name,setName]=useState('')
    const [Email,setEmail]=use('')
    const [Password,setPassword]=('')
return(
        <div className='bg-white px-6 py-12'>
            <h1>Registration From</h1>

            <div className='flex flex-col'>
            <label className='text-left'>Name</label>
            <input type="text" placeholder="enter your name"/>
            </div>

            <div className='flex flex-col'>
            <label className='text-left'>Email</label>
            <input type="text" placeholder="enter your Email"/>
            </div>

            <div className='flex flex-col'>
            <label className='text-left'>Password</label>
            <input type="text" placeholder="enter your Password"/>
            </div>

            <button className='w-full'>submit</button>
        </div>
        
    )
}