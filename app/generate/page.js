"use client"
// import { initialize } from 'next/dist/server/lib/render-server';
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

const page = () => {
    // const[link,setlink]=useState("")
    // const [linktext, setlinktext] = useState("")
    const [handle, sethandle] = useState("")
    const [links, setLinks] = useState([{ link: "", linktext: "" }])
    const [pic, setpic] = useState("")


    const handlechange = (index, link, linktext) => {
        setLinks((initialLink) => {
            return initialLink.map((item, i) => {
                if (i == index) {
                    return { link, linktext }
                }
                else {
                    return item
                }
            })
        })

    }



    const addlink = () => {
        setLinks(links.concat([{ link: "", linktext: "" }]))

    }

    const submitLinks = async (text, link, handle) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "link": link,
            "linktext": text,
            "handle": handle
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };
      

        const r = await fetch("http://localhost:3000/api/add", requestOptions)
        const result = await r.json()
        if (result.success) {
            toast.success(result.message)
        }
        else {
            toast.error(result.message)
        }
    }


    const notify = () => toast('Wow so easy !');
    return (

        <div className='bg-[#E9C0E9] min-h-screen grid grid-cols-2'>




            <div className="col1 flex justify-center items-center flex-col text-gray-900">
                <div className='flex flex-col gap-5 my-8'>
                    <h1 className='font-bold text-4xl'>Create your ClickTree</h1>
                    <div className="item">

                        <h2 className='font-semibold text-2xl'>Step 1: Claim your Handle</h2>
                        <div className='mx-4'>
                            <input value={handle || ""} onChange={e => { sethandle(e.target.value) }} className='px-4 py-2 my-2 focus:outline-pink-500 rounded-full bg-white'
                                type="text" placeholder='Choose a Handle' />
                        </div>
                    </div>
                    <div className="item">
                        <h2 className='font-semibold text-2xl'>Step 2: Add Links</h2>
                        {links && links.map((item, index) => {
                            return <div key={index} className='mx-4 '>
                                <input value={item.link} onChange={(e) => handlechange(index, e.target.value, item.linktext)} className='px-4 py-2 mx-2 my-2 focus:outline-pink-500 rounded-full bg-white' type="text" placeholder='Enter link ' />
                                <input value={item.linktext} onChange={(e) => handlechange(index, item.link, e.target.value)} className='px-4 py-2 mx-2 my-2 focus:outline-pink-500 rounded-full bg-white' type="text" placeholder='Enter link text' />
                            </div>
                        })}
                        <button onClick={() => addlink()} className='p-5 py-2 mx-2 bg-slate-900 text-white font-bold rounded-3xl'>+ Add Link</button>

                    </div>

                    <div className="item">
                        <h2 className='font-semibold text-2xl'>Step 3: Add Picture and Description</h2>
                        <div className='mx-4 flex flex-col'>
                            <input value={pic || ""} onChange={e => { setpic(e.target.value) }} className='px-4 py-2 mx-2 my-2 focus:outline-pink-500 rounded-full bg-white' type="text" placeholder='Enter link to your Picture' />
                            <button onClick={() => { links.forEach((item) => { submitLinks(item.linktext, item.link, item.hanlde) }) }} className='disabled:bg-slate-500 p-5 py-2 mx-2 w-fit my-5 bg-slate-900 text-white font-bold rounded-3xl'>Create your ClickTree</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col2 w-full h-screen bg-[#E9C0E9]">
                <img className='h-full object-contain' src="/generate.png" alt="Generate your links" />

            </div>
            <ToastContainer />
        </div>
    )
}

export default page
