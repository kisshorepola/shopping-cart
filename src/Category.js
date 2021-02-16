
import React from 'react';

function Category({categories, filter}) {
    return (
      <div className="buttondv">
            {categories.map((item, index) => 
            <button className="buttonstyle" type="button" key={index} onClick={()=>filter(item)}>
                {item}
            </button>
                )}
      </div>
    );
  }
  
  export default Category;
  