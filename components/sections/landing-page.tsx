import Image from "next/image";
import myImage from "@/assets/front-face.jpg";
import { Button } from "../ui/button";

const LandingPage = () => {
    return (
        <section id="home" className="flex flex-col-reverse gap-16 md:gap-0 px-8 py-16 md:p-0 md:flex-row justify-center items-center h-full md:h-screen">
            <Image
                className="object-cover w-full h-full md:w-1/2 md:h-screen"
                src={myImage}
                alt="Landing Page"
            />
            <div className="flex flex-col justify-center items-start md:pl-16 md:pr-32 w-full md:w-1/2">
                <p className="text-md md:text-lg mb-4">Hello!</p>
                <h1 className="text-3xl md:text-[50px] font-bold mb-8">I&apos;m Deihl Reyes</h1>
                <p className="text-md md:text-lg text-left mb-12 pr-[10%]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla doloribus aspernatur 
                    aliquam provident deleniti voluptas ipsum doloremque saepe ea minima et maxime eveniet
                    nam laudantium expedita mollitia, dignissimos aliquid quasi, aperiam ipsa.
                </p>
                <Button className="rounded-lg">Download CV</Button>

            </div>
        </section>
    );
};

export default LandingPage;
