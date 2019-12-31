import React from "react";
import BeerList from '../components/BeerList';
import SearchForm from '../components/SearchForm';

export default function Home() {
  const [loading,setLoading] = React.useState(false);
  const [searchTerm,setSearchTerm] = React.useState('a');
  const [beers,setBeers] = React.useState([]);

  React.useEffect(()=>{
    fetch('https://api.brewerydb.com/v2/beers/?key=6d66b737226cdd5d6f16d4a6dff7f012').then(response => response.json()).then(data => console.log(data))


  }, [])

  return <main>
    <SearchForm setSearchTerm={setSearchTerm}/>
    <BeerList loading={loading} beers={beers}/>

  </main>;
}
