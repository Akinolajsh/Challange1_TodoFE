import {createBrowserRouter} from "react-router-dom"
import Layout from "../components/common/Layout"
import HomeScreen from "../pages/home/HomeScreen"
import MyTask from "../pages/home/MyTask"

export const mainRouter= createBrowserRouter([
    {
        path: "/",
        element: 
             <Layout/>,
        children: [
            {
                index: true,
                element: <HomeScreen/>
            },
            {
                index: true,
                path: "/my-task",
                element: <MyTask/>
            },
        ]
    },
])