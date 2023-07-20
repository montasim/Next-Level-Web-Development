import DashboardLayout from "../components/Layouts/DashboardLayout";
import React from "react";
import AdminHomePage from "@/pages/admin";

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard Home Page</h1>
        </div>
    );
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page) {
    return (
        <DashboardLayout>
            {page}
        </DashboardLayout>
    )
}