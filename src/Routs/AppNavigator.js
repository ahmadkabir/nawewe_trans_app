import React from "react";
import { useRoutes } from "react-router-dom";
import AppIndex from "./AppIndex";
import Dashboard from "../component/Body/Dashboard";
import OngoingTrip from "../component/Body/OngoingTrip";

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
                    path: '/ongoing_trip',
                    element: <OngoingTrip />
                }
            ]
        }
    ])
    return Pages
}