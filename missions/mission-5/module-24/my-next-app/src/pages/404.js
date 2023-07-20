import {useRouter} from "next/router";

const NotFound = () => {
    const router = useRouter();

    setTimeout(() => {
        router.push('/')
    }, 5000);

    return (
        <div>
            <img width='100%' src="https://voltexelectrical.com.au/skins/Skin_3/sitebanner/error-404-image-icon.png" alt="404 error"/>
        </div>
    );
};

export default NotFound;