import React from 'react';
import { useState, useEffect } from "react";
import axios from 'axios';
import Navbar from '../../Sections/Navbar.jsx';

const Home = () => {

    //   const wardrobejson = useState([]);
    const [wardrobejson, setWardrobejson] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/v1/items').then((response) => {
        setWardrobejson(response.data);
        console.log("data", response.data);
    })
    .catch(error => {
        console.log(error);
    })
}, []);
console.log("data", wardrobejson);
    return (
    
        <div>
            <Navbar />
            <h1>Home Page</h1>
            {wardrobejson ?
            (wardrobejson.map((item, index) => (
                <div key={index}>
                    <h1>{item.item}</h1>
                    <a href={item.shopLink} target="_blank">
                        <img src={item.storePhoto} alt="item" style={{width: "200px", height: "auto"}} />
                    </a>
                </div>
            ))) :
            (<h1>Loading...</h1>)
            }
        </div>
    );
}

export default Home;