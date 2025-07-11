import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../page/home/Home";
import AddProjects from "../page/AddProjects/AddProjects";
import ProjectDetails from "../page/AllProject/ProjectDetails";
import ContactMessagesDashboard from "../page/ContactMessagesDashboard/ContactMessagesDashboard";



export const router = createBrowserRouter([
    {
        path:'/',
        Component: MainLayout,
        children:[
            {
                index: true,
                Component: Home
            },
            {
                path:'addProject',
                Component: AddProjects
            },
            {
                path: 'project/:id',
                Component:ProjectDetails
            },
          
        ]
    },
      {
                path: 'message',
                Component:ContactMessagesDashboard
            }
])