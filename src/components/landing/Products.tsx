import React from 'react'
import { Services } from "../../model";
import Product from '../../shared/Product';


const Products: React.FC = () => {
  return (
    <div className="flex bg-slate-100 sm:px-20">
      <div className="flex flex-wrap justify-center rounded-sm">
        {Services.map((s) => (
          <Product
            key={s.id}
            id={s.id}
            image1={s.image1}
            desc1={s.desc1}
            price={s.price}
            desc2={s.desc2}
          />
        ))}
      </div>
    </div>
  );
}

export default Products