import img1 from '../../Image/img3.f153ae21abda72334a4d.png'
import img2 from '../../Image/img2.df969720577b3ee7f6c1.png'
import img3 from '../../Image/img4.38cde03be64187682173.png'
import img4 from '../../Image/img5.fa08ce6ef02281466c52.png'
import img5 from '../../Image/img1.06114b33e8a3799da8d6.png'

export const dashBoard = [
    {
        image: img1,
        title: 'Discover',
        describtion: 'Find drivers, passengers and other services',
        goto: 'discover',
        backgroundColor: '#ffbf80'
    },
    {
        image: img2,
        title: 'Your OnGoing',
        describtion: 'You have a trip ongoing from oshodi to lekki',
        goto: 'discover',
        backgroundColor: '#331a00',
        color: "#fff"
    },
    {
        image: img3,
        title: 'Driving Plans',
        describtion: 'Signify Intent to the drive create destination',
        goto: 'discover',
        backgroundColor: '#ffd9b3'
    },
    {
        image: img4,
        title: 'Passengers Plans',
        describtion: 'Signify Intent to be a passenger',
        goto: 'discover',
        backgroundColor: '#ffffb3'
    },
    {
        image: img5,
        title: 'Private Groups',
        describtion: 'Privacy Security, Ride with family and friends',
        goto: 'discover',
        backgroundColor: '#ccf2ff'
    },
]

export const DrivingPlan = [
    {
        name: 'Ololade (KH 435 AA / Driving)',
        time: '13:30',
        vehicleType: 'Black Tesla',
        fare: 'NGN 250 per person',
        from: 'High park Cambrige to Sean unity park Oxford',
        to: 'Sean Unity park Oxford',
        spacesLeft: 2
    },
    {
        name: 'Ololade (KH 435 AA / Driving)',
        time: '13:30',
        vehicleType: 'Black Tesla',
        fare: 'NGN 250 per person',
        from: 'High park Cambrige to Sean unity park Oxford',
        to: 'Sean Unity park Oxford',
        spacesLeft: 2
    },
    {
        name: 'Ololade (KH 435 AA / Driving)',
        time: '13:30',
        vehicleType: 'Black Tesla',
        fare: 'NGN 250 per person',
        from: 'High park Cambrige to Sean unity park Oxford',
        to: 'Sean Unity park Oxford',
        spacesLeft: 2
    }
]

export const discoverToast = [
    {
        label: 'Show me all drive',
        description: 'No filter',
        goto: 'all_driver_result'
    },
    {
        label: 'Show me all Filterd drivers',
        description: 'Filter by Location, amount etc',
        goto: 'filtered_driver_result'
    }
]

export const friendToast = [
    {
        label: 'Search a driving friend',
        description: 'Pick a friend. Pick your driving plan. Send themthe plan to join you',
        goto: 'pick_friend'
    },
    {
        label: 'Search a passenger friend',
        description: 'Pick a friend. see their driving plans, Join the plan',
        goto: 'pick_friend'
    },
    {
        label: 'Search for driver in my group',
        description: 'Pick a group',
        goto: 'pick_friend'
    },
    {
        label: 'Search for passenger in my group',
        description: 'Filter by Location, amount etc',
        goto: 'pick_friend'
    }
]

export const pickFriend = [
    {
        name: 'Ololade Bond(5 stars)',
        time: '13:30',
        commonGroup: 'Black Tesla',
        goto: 'pick_friend_driving_plan'
    },
    {
        name: 'Ololade Bond(5 stars)',
        time: '13:30',
        commonGroup: 'Black Tesla'
    },
    {
        name: 'Ololade Bond(5 stars)',
        time: '13:30',
        commonGroup: 'Black Tesla'
    },
    {
        name: 'Ololade Bond(5 stars)',
        time: '13:30',
        commonGroup: 'Black Tesla'
    }
]