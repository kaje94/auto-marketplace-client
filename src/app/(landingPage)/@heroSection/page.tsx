import { clsx } from "clsx";
import Image from "next/image";
import { displayFont } from "@/app/fonts";
import { LandingHeroSearch } from "@/components/LandingSections/LandingHeroSearch";

export default async function Page() {
    return (
        <section className="relative h-screen hero-bg">
            <div className="container relative z-10 mx-auto flex  h-full flex-col items-center justify-center gap-2 p-4 !pb-[10%]  xl:p-7 2xl:p-8">
                <h1 className={clsx(displayFont.className, "text-center text-5xl text-white sm:text-7xl md:text-8xl xl:text-9xl ")}>
                    Drive Your Dreams
                </h1>
                <h4 className="text-center text-base text-white opacity-70 md:text-lg lg:text-xl">
                    Start Your Journey: Discover Your Dream Vehicle or Sell Your Automobile with Ease
                </h4>
                <LandingHeroSearch />
            </div>
            <Image
                alt="cover-image"
                className="absolute inset-x-0 bottom-0 m-auto w-full md:w-10/12 lg:w-11/12 xl:max-w-7xl"
                height={450}
                priority
                quality={100}
                src="/images/cover-image.jpg"
                unoptimized
                width={1246}
            />
        </section>
    );
}
