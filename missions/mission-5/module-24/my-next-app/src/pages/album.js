import Image from "next/image";
import NextImage from "@/assets/images/next-js-logo.webp";

const Album = () => {
    return (
        <div>
            <h1>This image is using img tag</h1>
            <img width='100%' src="https://gorzelinski.com/static/1db41e3ecd311724a15306b270d99dd9/c7f96/next-js-logo.webp" alt=""/>

            <h1>This image is using Image component</h1>
            <Image width={500} height={500} layout='responsive' src='https://gorzelinski.com/static/1db41e3ecd311724a15306b270d99dd9/c7f96/next-js-logo.webp' alt=''/>

            <h1>This image is using Image component and local image</h1>
            <Image width={500} height={500} layout='responsive' src={NextImage} alt=''/>
        </div>
    );
};

export default Album;