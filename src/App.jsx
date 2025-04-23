import React from 'react'
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router";
import Home from './pages/Home';
import HomeLayout from './Layout/HomeLayout';
import Dashboard from './pages/Dashboard/Dashboard';
import DashboardLayout from './Layout/DashboardLayout';
import IndividualSavings from './pages/Dashboard/Savings/IndividualSavings';
import AllSavings from './pages/Dashboard/Savings/AllSavings';
import CreateModule from './pages/Dashboard/CreateModule';
import GroupSavings from './pages/Dashboard/Savings/GroupSavings';
import CreateGroupModule from './pages/Dashboard/CreateGroupModule';
import './connection/index'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<HomeLayout />}>
      <Route index element={<Home />} />
      </Route>
      <Route path='/dashboard' element={<DashboardLayout />}>
      <Route index element={<Dashboard />} />
      <Route path='/dashboard/individual-savings' element={<IndividualSavings />} />
      <Route path='/dashboard/individual-savings/create-module' element={<CreateModule />} />
      <Route path='/dashboard/group-savings' element={<GroupSavings />} />
      <Route path='/dashboard/group-savings/create-module' element={<CreateGroupModule />} />
      <Route path='/dashboard/allsavings' element={<AllSavings />} />
      </Route>
    </Route>
  )
);

const App = () => {
  return (
     <div className="max-w-[1440px] mx-auto font-dmsans text-[16px] text-dark">
         <RouterProvider router={router} />
       </div>
  )
}

export default App