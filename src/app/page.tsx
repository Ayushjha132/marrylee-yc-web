import EstateHome from "@/components/estateHome";
import ContactForm from "@/components/form";
import { Herobanner } from "@/components/herobanner";
import Services from "@/components/services";
export default function Home() {
  return (
    <>
      <div className="items-center">

        <Herobanner />
        <EstateHome />
        <Services />
        <div className="flex items-center justify-center w-full pt-4 mx-22">
          <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-center text-base/7 font-semibold text-gray-400">Book you meeting now and get access to International Market</h2>
            <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-neutral-100 sm:text-5xl">
              Contact Me
            </p>
            <ContactForm />
          </div>
        </div>
        
      </div>
      {/* <Image src={} */}
    </>
  );
}
