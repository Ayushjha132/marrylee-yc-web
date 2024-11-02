'use client'
export default function ContactForm() {
    return (
        <>
            <div className='grid grid-cols-1 lg:grid-cols-2 border border-gray-800 rounded-lg items-center p-10 mt-7 lg:gap-24'>
                <form className='flex flex-col space-y-3 p-5'>
                    <input name='name' type='text' placeholder='Name' required className='p-1 pl-3 bg-gray-600 rounded-md text-white font-medium' />
                    <input name='contact' type='string' placeholder='Contact No' required className='p-1 pl-3 bg-gray-600 rounded-md text-white font-medium' />
                    <input name='address' type='text' placeholder='Address' required className='p-1 pl-3 bg-gray-600 rounded-md text-white font-medium' />
                    <textarea rows={5} cols={20} name='message' placeholder='Message' required className='p-1 pl-3 bg-gray-600 rounded-md text-white font-medium' />
                    <button type='submit' className='bg-white text-black py-2 rounded-md hover:bg-gray-300 font-medium'>Submit</button>
                </form>
                <div className="order-first lg:order-last">
                    <div className='flex flex-col items-left w-full p-5 space-y-8  '>
                        <h2 className='bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 to-white text-4xl font-sans py-2 relative z-20 font-bold tracking-tight'>Mary Lee <br />
                        </h2>
                        <p className='text-xl text-white'>
                            Tel: +971  527476335
                        </p>
                        <p className='text-xl text-white'>
                            Email: postmaster@marylee-yc.com
                        </p>
                        <p className='text-xl text-white'>
                            Address: Downtown Dubai, UAE
                        </p>
                    </div>
                    <hr className="lg:hidden p-4" />
                </div>
            </div>
        </>
    )
}