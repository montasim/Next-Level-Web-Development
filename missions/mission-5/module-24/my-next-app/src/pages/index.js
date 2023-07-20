import RootLayout from "../components/Layouts/RootLayout";
import Head from "next/head";

const HomePage = () => {
    return (
        <div>
            <Head>
                <title>Next Home Page</title>
                <meta name='Home page' description='This page is created by Next.js'/>
            </Head>
            <h1>This is Next.js Home Page</h1>
        </div>
    );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}