import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClientOptions from '../../components/ClientOptions/ClientOptions';
import HomeBar from '../../components/HomeBar/HomeBar';



function HomeEvolunaOnline() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <BrowserRouter>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HomeBar/>
            <Routes>
                <Route path="/" element={<ClientOptions />}></Route>
            </Routes>
        
        </BrowserRouter>
    )
}

export default HomeEvolunaOnline