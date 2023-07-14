import React from "react";
import { useRoutes } from "react-router-dom";
import AppIndex from "./AppIndex";
import Dashboard from "../component/Body/Dashboard";
import Discover from "../component/Body/Discover";
import Result from "../component/Body/Result";
import FilterdeResult from "../component/Body/FilterdeResult";
import PickFriend from "../component/Body/PickFriend";
import FriendDrivingPlan from "../component/Body/FriendDrivingPlan";
import OngoingTrip from "../component/Body/OngoingTrip";
import OngoingTripPass from "../component/Body/OngoingTripPass";
import ConfirmQR from "../component/Body/ConfirmQR";
import QRCode from "../component/Body/QRCode";
import EndTrip from "../component/Body/EndTrip";
import SetdrivingPlan from "../component/Body/SetdrivingPlan";
import PushNotification from "../component/Body/PushNotification";

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
                },
                {
                    path: '/on_going_trip',
                    element: <OngoingTrip />
                },
                {
                    path: '/on_going_trip_for_pass',
                    element: <OngoingTripPass />
                },
                {
                    path: '/QR_confirm',
                    element: <ConfirmQR />
                },
                {
                    path: '/QR_code',
                    element: <QRCode />
                },
                {
                    path: '/end_trip',
                    element: <EndTrip />
                },
                {
                    path: '/set_driving_plan',
                    element: <SetdrivingPlan />
                },
                {
                    path: '/push_notification',
                    element: <PushNotification />
                }
            ]
        }
    ])
    return Pages
}