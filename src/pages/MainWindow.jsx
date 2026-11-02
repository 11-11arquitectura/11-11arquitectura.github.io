import { Navigate, Route, Routes } from "react-router-dom";
import { Landing } from "./Landing/Landing";
import { Navbar } from "../components/Navbar/Navbar";

export default function MainWindow(){
    return(
        <div className="app-shell">
            <Navbar />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </div>
    )
}