import {BrowserRouter, Routes, Route} from "react-router-dom"
import React from 'react'
import { DashboardOverview } from "./dashboard/features/dashboard-overview/DashboardMain"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/dashboard" element={<DashboardOverview />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;