import { Routes, Route } from "react-router-dom";
import { Home as HomePage } from "../pages/Home/Index";
import { ROUTE } from "./Route.style";


const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
        </Routes>
    );
}

export { Router }