import React from "react";
import blogData from "../data/blog";
import Header from "./Header"
import About from "./About"
import Article from "./Article"
import ArticleList from "./articlelist"

console.log(blogData);

function App() {
  const articleArray = [
    {
        id: 1,
        title: "Article 2",
        date: "April 19, 1992",
        preview: "This is my first blog post"
    },
    {
      id: 2,
      title: "Article 2",
      preview: "This is my second blog post"

    },
    {
      id: 3,
      title: "Article 3",
      preview: "this is my third blog post"
    }
]
  return (
    <div className="App">
      <Header name="Joel's coding blog"/>
      <About about="This blog is about Joel's coding" />
      <Article title="Article" date="September 5, 2024" preview="This is a preview of the blog" />
      <ArticleList articles= {articleArray} />
    </div>
  );
}

export default App;