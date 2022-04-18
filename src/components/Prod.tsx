import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { Services, Prod } from "../model"

const Prodd: React.FC = () => {
    const params = useParams();
    const [prod, setProd] = useState<Prod>()
   
    useEffect(() => {

      async function getServ(){
        let serv : any  = await Services.find((x) => x.id.toString() === params.id);
        await setProd(serv)
      }
        
      getServ()

    }, [])

    console.log(prod?.id)


  return (
    <div className=" mb-14 mt-14  sm:flex items-center justify-evenly">
      <div className="sm:w-1/2 w-full">
        <img
          src={prod?.image1}
          style={{ height: "400px" }}
          className=" w-full  rounded-md object-cover "
        />
      </div>

      <div className="flex sm:w-96 mt-4 sm:mt-0  justify-center px-5  ">
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-3xl font-thin font-serif ">All</h1>
          <h1 className="sm:text-5xl text-3xl text-gray-500 font-extralight font-mono">
            {prod?.desc1}
          </h1>
          <h1 className="text-2xl break-words font-extralight">
            {prod?.desc2}
          </h1>

          <h1 className="text-sm font-medium text-gray-700">$-{prod?.price}</h1>

          <button
            className="bg-slate-700 snipcart-add-item sm:w-96 hover:bg-slate-500 text-white py-3 px-3 rounded-md"
            data-item-id={prod?.id}
            data-item-image={prod?.image1}
            data-item-name={prod?.desc1}
            data-item-url="/"
            data-item-price={prod?.price}
          >
            Add to shopping list
          </button>
        </div>
      </div>
    </div>
  );
}

export default Prodd