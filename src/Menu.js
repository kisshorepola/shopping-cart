
import React from 'react';

function Menu({filtereditems}) {
  return (
    <div className="gridview">
      {filtereditems.map((item) => {
       const {img, title, desc, id, price} = item;
       return (
        <article className="articlestyle" key={id}>
                <img className="img" src={img} alt={title}/>
                  <div className="item-info">
                    <header>
                        <h4>{title}</h4>
                        <h4 className="price">${price}</h4> 
                    </header>
                    <p className="item-text">{desc}</p> 
                  </div> 
        </article>
       );
    })}
    </div>
  );
}

export default Menu;
