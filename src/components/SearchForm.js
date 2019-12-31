import React from "react";

export default function SearchForm(setSearchTerm) {

  const searchValue = React.useRef('');
  console.log(searchValue);

  const handleSubmit = (e) =>{
    e.preventDefault();
  }

  const searchBeer = () => {
    setSearchTerm(searchValue.current.value);
  }

  return <section className="section">
    
    <h2 className="section-title">Search for a Beer</h2>
    <form className="form search-form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="name">search your favorite beer</label>
      <input type="text" name="name" id="name" onChange={searchBeer} ref={searchValue}/>
      </div>
    </form>
    </section>
  
  ;
}
