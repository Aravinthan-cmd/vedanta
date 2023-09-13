import './assets/libs/boxicons-2.1.1/css/boxicons.min.css'
import './scss/App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard'
import MainLayout from './layout/MainLayout'
import Graph from './pages/graph/Graph'
import Reports from './pages/reports/Reports'
import Settings from './pages/settings/Settings'
import Diagram from './pages/2Dmodel/Diagram'
import Login from './components/login/Login'
import ProtectedRoute from './components/login/ProtectedRoute'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="login" element={<Login />}/>
                <Route path="/" element={<ProtectedRoute />}>
                <Route path="/" element={<MainLayout />} >
                    <Route index element={<Dashboard />} />
                    <Route path="graph" element={<Graph />} />
                    <Route path="model" element={<Diagram />}/>
                    <Route path="reports" element={<Reports />} />
                    <Route path="settings" element={<Settings />} />
                </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
