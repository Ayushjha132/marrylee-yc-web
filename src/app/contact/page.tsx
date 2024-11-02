import ContactForm from '@/components/form';
// bug in the bg lines
// import { BackgroundLines } from '@/components/ui/background-lines';
export default function Example() {
    return (
        <div className="flex flex-col min-h-screen bg-black">
        
        <div className="bg-black flex items-center w-full h-ull flex-col px-4 pt-16 lg:pt-24">
            <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-600 to-white text-xl md:text-2xl lg:text-4xl font-sans py-2 relative z-20 font-bold tracking-tight">
                Contact Me
            </h2>
            <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-400 text-center">
                Get the best advices from our experts, including expert artists,
                painters, marathon enthusiasts and RDX, totally free.
            </p>
            <ContactForm />
        </div>
        </div>
    )
}
