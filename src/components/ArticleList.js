import React from "react";
import Article from "./Article";
//import blogData from "../data/blog";


function ArticleList ({posts}){
    //const post = blogData.map((posts,index) => (
        
    return (
        <main>
            {posts.map((post) => (
                <Article 
                    key={post.id}
                    title={post.title}
                    date={post.date}
                    minutes={post.minutes}
                    preview={post.preview}
                    />
            ))}
        </main>
    );
}

export default ArticleList;