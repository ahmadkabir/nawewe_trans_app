import React from "react";
import { useRoutes } from "react-router-dom";
import AppIndex from "./AppIndex";
import Dashboard from "../component/Body/Dashboard";
import OngoingTrip from "../component/Body/OngoingTrip";
import Discover from "../component/Body/Discover";

export default function AppNavigator(){
    let Pages = useRoutes([
        {
            path: '/',
            element: <AppIndex />,
            children: [
                {
                    path: '/dashboard',
                    element: <Dashboard />
                },
                {
                    path: '/discover',
                    element: <Discover />
                }
            ]
        }
    ])
    return Pages
}