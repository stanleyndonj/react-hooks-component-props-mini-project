import React from "react";
//import blogData from "../data/blog";
//import logo from "../assets/logo";

function About ({image="https://via.placeholder.com/215", about}) {
    return (
        <aside>
            <img src={image} alt="blog logo"></img>
            <p>{about}</p>
        </aside>
    )
};

export default About;