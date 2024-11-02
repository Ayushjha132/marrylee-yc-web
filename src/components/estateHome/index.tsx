import { WobbleCardDemo } from "./wobbleCard";

export default function EstateHome() {
  return (
    <>
      <div className="flex items-center justify-center w-full pt-10">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-center text-base/7 font-semibold text-gray-400">Everything you need to start your services</h2>
          <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-neutral-100 sm:text-5xl">
            Real Estate Portfolio.
          </p>
          < WobbleCardDemo />
        </div>
      </div>

    </>
  )
}