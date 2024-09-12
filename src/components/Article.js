import React from "react";
//import blogData from "../data/blog";
let emoji = "☕️";

function Article ({title,date = "January 1, 1970",minutes,preview}) {
    //console.log(Article);
    return (
        <article>
            <h3>{title}</h3>
            <small>
                {date} | {emoji}{minutes} min read </small>
            <p>{preview}</p>
        </article>
    );
}

export default Article; 