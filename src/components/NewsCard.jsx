import React from "react";

const NewsCard = ({ article }) => {
  return (
    <div className="news-card">
      <img src={article.urlToImage} alt={article.title} />
      <h3>{article.title}</h3>
      <p>{article.description}</p>
      <a href={article.url} target="_blank" rel="noreferrer">Read More</a>
    </div>
  );
};

export default NewsCard;
