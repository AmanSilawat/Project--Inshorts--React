import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar';
import NewsContent from './components/NewsContent/NewsContent';

function App() {
  const [category, setCategory] = useState('general')
  const [newsArray, setNewsArray] = useState([])
  const [newsResults, setNewsResults] = useState();
  const [loadMore, setLoadMore] = useState(20);

  const newsApi = async () => {
    try {
      const proxyUrl = "https://cors-anywhere.herokuapp.com/";
      const news = await axios.get(`${proxyUrl}https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_NEWS_KEY}&category=${category}&pageSize=${loadMore}`)
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
    } catch (error) {
      console.log('error :>> ', error);
    }
  }
  useEffect(() => {
    newsApi();
  }, [category, newsResults, loadMore])
  return (
    <>
      <NavBar setCategory={setCategory} />
      <NewsContent
        newsArray={newsArray}
        newsResults={newsResults}
        loadMore={loadMore}
        setLoadMore={setLoadMore}
      />
      <Footer />
    </>
  );
}

export default App;
