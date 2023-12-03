import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/Home/Index";
import { ROUTE } from "./Route.style";
import { ResultPage } from "../pages/Result/Index";


const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/Result" element={<ResultPage />}></Route>
        </Routes>
    );
}

export { Router }