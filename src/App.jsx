import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsList from "./components/NewsList";
import CategoryFilter from "./components/CategoryFilter";
import "./App.css";
import CountrySelector from "./components/CountrySelector";

const API_KEY = "f5bac3c9502d46288fbe2cb9b9378f98";

function App() {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState("technology");
  const [query, setQuery] = useState("");
  const [country, setCountry] = useState("us");


  useEffect(() => {
    const fetchNews = async () => {
     const url = query
  ? `https://newsapi.org/v2/everything?q=${query}&language=en&apiKey=${API_KEY}`
  : `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&language=en&apiKey=${API_KEY}`;


      const response = await axios.get(url);
      setArticles(response.data.articles);
    };

    fetchNews();
  }, [category, query]);

  return (
    <div className="App">
      <h1>📰 News Aggregator</h1>
      <input type="text" placeholder="Search news..." value={query} onChange={(e) => setQuery(e.target.value)} />
      <CategoryFilter setCategory={setCategory} />
      <NewsList articles={articles} />
    </div>
  );
}

export default App;
