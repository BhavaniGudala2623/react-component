import React from 'react';
import {Link} from 'react-router-dom'

const HeaderPage =()=>{
    return (
        <div className='header-component'>
        <Link to="/login"><button>Login</button></Link>
        <p>this is header</p>
        </div>
    );
}
export default HeaderPage;



