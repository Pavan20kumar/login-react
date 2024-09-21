import React from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';
import cookies from 'js-cookie';


function Notaccess(props){
    const token = cookies.get('jwttoken');
    if(token === undefined){
        return <Navigate to='/login' />;
    }
    return (
        <div>
            <Routes>
                <Route {...props}></Route>
            </Routes>
        
        </div>
    );


}

export default Notaccess;