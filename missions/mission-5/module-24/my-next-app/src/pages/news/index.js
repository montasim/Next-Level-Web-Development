import React from 'react';
import {Button} from "antd";
import Link from "next/link";

const NewsPage = () => {
    return (
        <div>
            <h1>News Home Page</h1>
            <Button type="primary">
                <Link href='/'>
                    Back to Home
                </Link>
            </Button>
        </div>
    );
};

export default NewsPage;