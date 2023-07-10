import React from "react";
import { useRoutes } from "react-router-dom";
import AppIndex from "./AppIndex";
import Dashboard from "../component/Body/Dashboard";
import Discover from "../component/Body/Discover";
import Result from "../component/Body/Result";
import FilterdeResult from "../component/Body/FilterdeResult";
import PickFriend from "../component/Body/PickFriend";
import FriendDrivingPlan from "../component/Body/FriendDrivingPlan";

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
                },
                {
                    path: '/all_driver_result',
                    element: <Result />
                },
                {
                    path: '/filtered_driver_result',
                    element: <FilterdeResult />
                },
                {
                    path: '/pick_friend',
                    element: <PickFriend />
                },
                {
                    path: '/pick_friend_driving_plan',
                    element: <FriendDrivingPlan />
                }
            ]
        }
    ])
    return Pages
}