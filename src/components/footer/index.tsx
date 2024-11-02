import Image from "next/image";

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <>
        <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center mt-5 lg:mt-8">
                <Image src={"/posterimage.jpg"} alt="banner image" width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className="bg-gray-950 w-full flex flex-col space-y-6 items-center justify-center text-neutral-100 py-4">
                <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-600 to-white text-base md:text-lg lg:text-xl font-sans py-2 relative z-20 font-bold tracking-tight">
                    Marry Lee
                </h2>
                Ayush Jha © {year} All Rights Reserved
            </div>
            </div>
        </>
    )
}