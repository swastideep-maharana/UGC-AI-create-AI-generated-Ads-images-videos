import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Generator from "./pages/Generator";
import Community from "./pages/Community";
import MyGenerations from "./pages/MyGenerations";
import Pricing from "./pages/Pricing";

export default function App() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="generator" element={<Generator />} />
                <Route path="community" element={<Community />} />
                <Route path="my-generations" element={<MyGenerations />} />
                <Route path="pricing" element={<Pricing />} />
                
            </Route>
        </Routes>
    );
}