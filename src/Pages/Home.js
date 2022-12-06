import React from 'react';
import "./Home.css"
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import Search from '../Components/Search';


const Home = () => {
  return (
    <div className='home'>
        <div className='home_header'>
            <div className='home_headerLeft'>
                <Link to="/about">Sobre Google</Link>
                <Link to="/store">Tienda</Link>
             </div>
             <div className='home_headerRight'>
             <Link to="/gmail">Gmail</Link>
             <Link to="/images">Imagenes</Link>
              <IconButton>
                <AppsIcon/>
              </IconButton>
              <Avatar/>
             </div>
         </div>
         <div  className='home_body'>
          <img src='http://1000marcas.net/wp-content/uploads/2019/11/Google-Logo.png'/>
          <Search hideButtons/>
         </div>
    </div>
    
  )
}

export default Home;