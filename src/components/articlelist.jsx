import Article from "./Article";


const ArticleList = ({ articles }) => {
    return (
      <main>
        {articles.map((item) => (
          <Article
            key={item.id}
            title={item.title}
            date={item.date}
            preview={item.preview}
          />
        ))}
      </main>
    );
  };

  export default ArticleList