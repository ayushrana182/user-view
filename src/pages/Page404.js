import React from 'react'
import { Link } from 'react-router-dom';

const Error = () => {
    return ( 
        <div id = "404-page">
           <h1 display="flex" justifyContent="center">Page404</h1>
           <Link to = '/' className = 'btn'>Back Home</Link>
        </div>

     );
}
export default Error ;
 