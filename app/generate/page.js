import React from 'react'

const page = () => {
    return (
        <div className='bg-[#E9C0E9] min-h-screen grid grid-cols-2'>

            <div className="col1 flex justify-center items-center flex-col text-gray-900">
                <div className='flex flex-col gap-5 my-8'>
                    <h1 className='font-bold text-4xl'>Create your Bittree</h1>
                    <div className="item">

                        <h2 className='font-semibold text-2xl'>Step 1: Claim your Handle</h2>
                        <div className='mx-4'>
                            <input className='px-4 py-2 my-2 focus:outline-pink-500 rounded-full bg-white'
                                type="text" placeholder='Choose a Handle' />
                        </div>
                    </div>
                    <div className="item">
                        <h2 className='font-semibold text-2xl'>Step 2: Add Links</h2>

                        <div className='mx-4 '>
                            <input className='px-4 py-2 mx-2 my-2 focus:outline-pink-500 rounded-full bg-white' type="text" placeholder='Enter link text' />
                            <input className='px-4 py-2 mx-2 my-2 focus:outline-pink-500 rounded-full bg-white'
                                type="text" placeholder='Enter link' />
                            <button className='p-5 py-2 mx-2 bg-slate-900 text-white font-bold rounded-3xl'>+ Add Link</button>
                        </div>

                    </div>

                    <div className="item">
                        <h2 className='font-semibold text-2xl'>Step 3: Add Picture and Description</h2>
                        <div className='mx-4 flex flex-col'>
                            <input className='px-4 py-2 mx-2 my-2 focus:outline-pink-500 rounded-full bg-white' type="text" placeholder='Enter link to your Picture' />
                            <input className='px-4 py-2 mx-2 my-2 focus:outline-pink-500 rounded-full bg-white' type="text" placeholder='Enter description' />
                            <button className='disabled:bg-slate-500 p-5 py-2 mx-2 w-fit my-5 bg-slate-900 text-white font-bold rounded-3xl'>Create your BitTree</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col2 w-full h-screen bg-[#E9C0E9]">
                <img className='h-full object-contain' src="/generate.png" alt="Generate your links" />

            </div>
        </div>
    )
}

export default page
