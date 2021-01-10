import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const Error = () => {
    return ( 
        <div id = "error-page">
           <h1 display="flex" justifyContent="center">404</h1>
           <p>Oops! Something is wrong.</p>
           <div className = "restro-btn">
                <Button style = {{display : 'flex', justifyContent : 'center'}}><Link to = '/' className = 'btn'>Back Home</Link></Button>
           </div>

            {/* <a class="button" href="#"><i class="icon-home"></i> Go back in initial page, is better.</a> */}
        </div>

     );
}
export default Error ;
 