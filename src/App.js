import React, {useState} from 'react'
import items from './data';
import Category from './Category';
import Menu from './Menu';

const categories = ['all', ...new Set(items.map(item => item.category ))]


function App() {
  const [allCategories, setcategories] = useState(categories);
  const [filtereditems, setitems] = useState(items);

  const filter = (category) => {
    if(category === 'all') {
      setitems(items);
      return;
    }
    const newitems = items.filter(item => item.category === category);
    setitems(newitems);
  }
  return (
    <main>
        <section className="container">
        <div className="title">
          <h2 className="ourMenu">Our Menu</h2>
          <div className="underline"></div>
        </div>  
        <Category categories = {allCategories} filter = {filter}/>
        <Menu filtereditems = {filtereditems}/>
        </section>
    </main>
  );
}

export default App;
