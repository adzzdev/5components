/**
 * Take note that the implementation of this layout was based on the PrivateRoute created in adzzspot.
 * TODO:
 *   - create a blog post that discusses the implementation of layouting and route privatization.
 */

import {Outlet, useLocation} from "react-router-dom"
import React from 'react';
import Topbar from "../components/Topbar";
import styled from "styled-components";

const PageName = styled.h1`
    font-size: 40px;
    text-transform: capitalize;
`
export default function Public(props) {
    
    const location = useLocation();
    return (
    <>
        <Topbar></Topbar>
        <main className='main-content'>
                <div className="container-fluid mt-4 mb-4">
                    <PageName style={{}}>{location.pathname.replace("/","")}</PageName>
                </div>
                <Outlet></Outlet>
        </main>
    </>
)
}
