import './main.css'
import './App.css';
import Header from './Header';
import {useState,useEffect} from 'react'
import Middle from './Middle';

function App() {
  const [animeList, SetAnimeList] = useState([]);
  const [search, SetSearch] = useState('')
  const [topAnime,SetTopAnime] = useState([])

  const GetTopAnime = async ()=>{
    const temp = await fetch('https://api.jikan.moe/v4/top/anime/1/bypopularity').then(res => res.json());
    SetTopAnime(temp.top.slice(0,10));
  }

  const HandleSearch = e =>{
    e.preventDefault();
    FetchAnime(search)
  }

  const FetchAnime = async (query) =>{
    const temp = await fetch(`https://api.jikan.moe/v4/search/anime?q=${query}&order_by=title&sort=asc&limit=10&page=1`).then(res => res.json());
    SetAnimeList(temp.results)
  }
  
  useEffect(()=>{
    GetTopAnime();
    if(search==='')SetAnimeList(topAnime);
    
  },[topAnime])
  
  return (
    <div className="App">
      <Header/>
      <Middle
        search= {search}
        HandleSearch = {HandleSearch}
        animeList ={animeList}
        SetSearch = {SetSearch}
      />
      
    </div>
  );
}

export default App;
