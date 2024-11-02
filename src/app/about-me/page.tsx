import Image from "next/image";

export default function About() {
    return (
        <>
            <div className="pt-24 flex  justify-center flex-col">
                <div className="flex flex-col space-y-4">
                    <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-600 to-white text-2xl md:text-3xl lg:text-4xl font-sans py-1 lg:py-2 md:py-10 relative z-20 font-bold tracking-tight">
                        About Me
                    </h2>
                    <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-400 text-center text-wrap">
                        Get the best advices from our experts, including expert artists,
                        painters, marathon enthusiasts and RDX, totally free.
                    </p>
                </div>
                <div className="lg:mx-24 mx-12 my-10 md:mx-16 md:my-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 border border-gray-800 rounded-lg place-items-center p-10 ">
                        <Image src={"/aboutimage.jpg"} alt="img" width={350} height={80} className="shadow-lg shadow-neutral-600" />
                        <div>
                            <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-600 to-white text-lg md:text-xl lg:text-2xl font-sans py-10 lg:py-2 md:py-10 relative z-20 font-bold tracking-tight">
                                <span className="text-white text-4xl md:text-6xl lg:text-8xl">Yuchen Li <br /></span>
                                (English Name: Mary Lee)
                            </h2>
                            <p className="max-w-xl mx-auto text-base md:text-xl text-neutral-400 text-center">
                                Investor, Top Real Estate Consultant, Entrepreneur
                            </p>
                        </div>
                    </div>
                    <div className=" flex flex-col space-y-3 pt-10 max-w-fit mx-auto text-sm md:text-lg text-neutral-100 text-wrap">

                        <p className="align-top">
                            Yuchen Li,a seasoned real estate investor and consultant, has been deeply engaged in the Dubai market for seven years, possessing extensive experience in market analysis and investment. From 2018 to 2022, she successfully generated returns of 30% to 200% for 100% of her clients. Between 2022 and 2024, she provided comprehensive investment planning, implementation, asset management, resale, short-term rental, renovation, and operation services for private family offices and high-net-worth clients. Additionally, she has represented Dubai government developers and real estate companies in marketing and exhibition activities in China and the UK, leveraging her extensive experience in organizing and executing both online and offline advertising campaigns.

                        </p>
                        <p>
                            During her university years, Yuchen utilized her height advantage to work as a part-time fashion  model and occasionally acted in films and TV series, amassing valuable experience and resources in the   fashion and entertainment industries. In 2022, she was the sole Chinese presenter at the Middle Eastern Difa (Arab International Festival Awards), presenting awards to winners. With stable returns from her real estate investments, Yuchen launched her own clothing brand in 2022. As the founder and CEO of    YCL Fashion Women&apos;s Wear, she aimed to provide urban women with professional attire for daily work and versatile outfits for various activities. Since its inception, the brand has achieved stable sales, high   customer repurchase rates, and excellent reviews without extensive advertising.

                        </p>
                        <p>

                            In 2023, Yuchen also founded Yuchen Beijing Advertising Consultancy Co. Ltd. As the founder and CEO, her company focuses on providing advertising consulting services. It offers customized advertising plans for international enterprises seeking to enter the Chinese market, ensuring high efficiency, precision, and cost-effectiveness to attract target customer groups and achieve high sales volumes.

                        </p>
                        <p>
                            As a food enthusiast, Yuchen Li is also a partner of Tang Town,a high-end Chinese restaurant in Dubai. Celebrating the 40th anniversary of China-UAE diplomatic relations, the restaurant aims to offer  Chinese expatriates in Dubai a taste of home amidst the growing Chinese community seeking opportunities in Dubai.
                        </p>
                        <p>
                            Beyond her business ventures, Yuchen Li has resided in Dubai for six years, serving as the vice   president of the UAE China Peaceful Reunification Promotion Association. She has actively participated in various events organized by the Chinese community in Dubai, both official and grassroots.
                        </p>
                        <p>
                            Since 2015, Yuchen Li has been actively involved in charitable activities, contributing to various charitable organizations and making a sincere effort to give back to society. Her charitable work includes:
                        </p>
                        <ol className="list-decimal p-4 font-medium">
                            <li>Support for orphans</li>
                            <li>Surgeries for children with cleft lips and palates</li>
                            <li>Care for children in difficult situations</li>
                            <li>Free lunches for impoverished children</li>
                            <li>Emergency relief for fire-stricken Miao villages in Guizhou</li>
                            <li>Children&apos;s art gallery</li>
                            <li>COVID-19 donations and protective equipment</li>
                            <li>Donations of supplies for the Ukraine conflict</li>
                            <li>Food donations for children in Palestine and Syria</li>
                        </ol>


                        <p>
                            At the age of 23, Yuchen arrived in Dubai alone with an invitation to develop the Chinese market for Dubai real estate. Without relying on family or friends, she started with a modest salary of 2,500 dirhams. Through relentless effort and numerous failures, she gradually built astable career she continues to strive to reach her maximum potential. Undeterred by past achievements, she remains ready to face life&apos;s challenges with determination, always aiming for new victories. Her commitment to growth and resilience ensures she continues winning, no matter the obstacles while striving to help those around her and give back to society. She did it and she&apos;s still on the way to achieving more successful achievements to celebrate.

                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}