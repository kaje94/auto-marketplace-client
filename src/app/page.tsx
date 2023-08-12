import clsx from "clsx";
import Image from "next/image";
import { righteousFont } from "./fonts";
import { SearchIcon, ZapIcon, TagIcon, NotificationIcon, DropletIcon } from "@/icons";
import { Input, Footer, TextArea, NavBar } from "./_components";
import Link from "next/link";

const HeroSearchBox = () => (
    <div className="join mb-8 mt-5 flex  justify-center shadow-xl md:mb-16 xl:mb-28 2xl:mb-36">
        <input className="input-bordered input join-item max-w-[220px] rounded-r-none sm:max-w-none" placeholder="Search..." />
        <select className="select-bordered select join-item hidden rounded-none sm:block">
            <option disabled>Type</option>
            <option>Car</option>
            <option>Van</option>
            <option>SUV</option>
        </select>
        <Link href="/listing">
            <button className="btn-secondary join-item btn rounded-l-none">
                <SearchIcon />
                <span className="ml-2 hidden lg:block">Search</span>
            </button>
        </Link>
    </div>
);

const FeatureItem = ({
    title,
    description,
    alignRight,
    icon,
}: {
    title: string;
    description: string;
    alignRight?: boolean;
    icon: React.ReactElement;
}) => (
    <div>
        <div className={clsx("flex items-center justify-center text-base-content lg:justify-start", alignRight && "lg:flex-row-reverse")}>
            {icon} <h5 className="mx-2 text-center font-medium lg:text-left">{title}</h5>
        </div>
        <p className={clsx("mt-2 text-center leading-relaxed opacity-70 xl:leading-loose", alignRight ? "lg:text-right" : "lg:text-left")}>
            {description}
        </p>
    </div>
);

export default async function Home() {
    return (
        <main>
            <section className="relative h-screen hero-bg">
                <div className="container mx-auto w-full p-4 xl:p-7 2xl:p-8">
                    <NavBar hideBackground />
                </div>
                <div className="container relative z-10 mx-auto  flex h-4/6 flex-col items-center justify-center gap-2 p-4 xl:p-7 2xl:p-8">
                    <h1 className={clsx(righteousFont.className, "text-center text-5xl text-white sm:text-7xl md:text-8xl xl:text-9xl")}>
                        Drive Your Dreams
                    </h1>
                    <h4 className="text-center text-base text-white opacity-70 md:text-lg lg:text-xl">
                        Start Your Journey: Discover Your Dream Vehicle or Sell Your Car with Ease
                    </h4>
                    <HeroSearchBox />
                </div>
                <Image
                    src="/cover-image.jpg"
                    height={450}
                    width={1246}
                    quality={100}
                    alt="cover-image"
                    className="absolute inset-x-0 bottom-0 m-auto w-full md:w-10/12 lg:w-11/12 xl:max-w-7xl"
                    priority
                />
            </section>
            <section className="bg-white py-12 md:py-20">
                <div className="container mx-auto w-full max-w-7xl">
                    <h3 className={clsx(righteousFont.className, "mb-6 text-center text-4xl")}>Why Choose Us?</h3>
                    <div className="grid grid-cols-1 gap-8 p-4 lg:grid-cols-2 xl:p-7 2xl:p-8">
                        <Image
                            src="/features-1.jpg"
                            height={400}
                            width={600}
                            alt="feature-1-image"
                            className="hidden w-full rounded-lg bg-[#4f5f67] object-cover lg:block"
                        />
                        <div className="flex flex-col justify-center gap-8">
                            <FeatureItem
                                title="Personalized Advert Alerts"
                                description="Stay effortlessly informed about car advertisements that match your interests. Customize your preferences and receive personalized alerts,
                                ensuring you're always updated on relevant listings."
                                icon={<NotificationIcon />}
                            />
                            <FeatureItem
                                title="Confidence in Every Detail"
                                description="Rest assured that every vehicle listing on our platform undergoes a thorough verification process, providing you with accurate and reliable information about the condition, history, and specifications of each car."
                                icon={<ZapIcon />}
                            />
                        </div>
                        <div className="flex flex-col justify-center gap-8">
                            <FeatureItem
                                title="Simplify Your Car Buying Experience"
                                description="We believe in keeping things simple and transparent. Our user-friendly interface and intuitive search tools make it easy for you to navigate, compare, and make informed decisions, saving you time and effort in your car buying journey"
                                alignRight
                                icon={<DropletIcon />}
                            />
                            <FeatureItem
                                title="Enjoy the Benefits Without Any Fees"
                                description="We provide our services at no cost to you. You can access our wide selection, verified listings, and user-friendly platform without incurring any fees, making it even more convenient for you to find your dream car."
                                alignRight
                                icon={<TagIcon />}
                            />
                        </div>
                        <Image
                            src="/features-2.jpg"
                            height={400}
                            width={600}
                            alt="feature-1-image"
                            className="hidden w-full rounded-lg bg-[#7c7262] object-cover lg:block"
                        />
                    </div>
                </div>
            </section>
            <section className="relative bg-base-200 py-12 md:py-20">
                <div className="container mx-auto w-full max-w-xl">
                    <h3 className={clsx(righteousFont.className, "mb-6 text-center text-4xl")}>Contact Us</h3>
                    <div className="mb-4 flex flex-col gap-1 p-4">
                        <Input placeholder="Name" label="Name" />
                        <Input placeholder="user@email.com" label="Email" />
                        <TextArea placeholder="Your message..." label="Message" />
                        <button className="btn-neutral btn mt-6 w-full">Submit</button>
                    </div>
                </div>
                {["left-10 top-10", "right-10 top-10", "bottom-10 right-10", "bottom-10 left-10"].map((position) => (
                    <Image
                        key={position}
                        src="/contact-us-illustration-1.png"
                        height={100}
                        width={100}
                        alt="contact-us-illustration"
                        className={clsx("absolute hidden lg:block", position)}
                    />
                ))}
            </section>
            <Footer />
        </main>
    );
}