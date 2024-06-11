import React from "react";
import { Route, Routes } from 'react-router-dom'
import ProductList from "../components/ProductList";
import ProductDetail from "../components/ProductDetail";


const AllRoutes = () => {

    return ( 
        <>
            <Routes>
                <Route path="/" exact element={ProductList} />
                <Route path="/product/:id" element={ProductDetail} />
            </Routes>
        </>
    );
}

export default AllRoutes;