import {Route, Routes} from "react-router-dom";
import {Login} from "../pages/Login.tsx";
import {Home} from "../pages/Home.tsx";

export function AppRoutes(){
    return(
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Home />} />
        </Routes>
    )
}