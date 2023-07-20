import React from 'react';
import RootLayout from "../../components/Layouts/RootLayout";

const AboutPage = () => {
    return (
        <div>
            <h1>About Page Without Layout</h1>
        </div>
    );
};

export default AboutPage;

AboutPage.getLayout = function getLayout(page) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}