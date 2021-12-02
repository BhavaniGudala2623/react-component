import React, { Component } from 'react';
import Categories from '../../components/categories/categories'

//import {Link} from 'react-router-dom'

class HomePage extends React.Component{
render(){
    return (
        <div className="categories-component">   
        <p>This is home page</p>
        <Categories/>
      </div>
        
    );
    }
}
export default HomePage;