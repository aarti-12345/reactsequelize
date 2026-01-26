import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import { Form, useNavigate } from 'react-router-dom'
import axios from 'axios';
// import e from 'express';


function FetchData() {
  const [list, setList] = useState([])
  // const [h2, seth2] = useState([])
  const [cart, setCart] = useState([]);

  // const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:8000/api/product").then(res => res.json()).then(data => setList(data))

  }, []);
  
  //   function hedit(e) {
  //   let id = e.target.value;
  // //   // alert(id)
  //   axios.put('http://localhost:8000/api/product/' + id).then(res => console.log(res)).catch(err => console.log(err)
  //   );
  // }
  function handleNext(e) {
        const id = e;
        setCart(prev => {
            const updated = [...prev, id];
            console.log(updated);
            return updated;
          });
    }
  useEffect(()=>{
    console.log(cart)
  },[cart])

  function hedit(item) {
  const updatedData = {
    productName: item.productName + " (edited)",
    ProductPrice: item.ProductPrice + 10,
    ProductQuantity: item.ProductQuantity,
    Description: item.Description
  };

  axios.put(`http://localhost:8000/api/product/${item.id}`, updatedData)
    .then(res => {
      console.log('Updated:', res.data);
      // Correctly update local state
      setList(prev => prev.map(p => p.id === item.id ? { ...p, ...updatedData } : p));
    })
    .catch(err => console.log(err));
}

  return (

    <>
      <div className='flex flex-wrap items-center justify-between px-10'>
        {
          list.map((item, index) => (
            // <div key={item.Id}>
                <div key={index}>
              <div className="px-2 py-2 shadow-xl">

                <div className='items-center my-4 px-12'>

                  <img src={`http://localhost:8000/${item.Image}`} className='h-[200px] w-[200px]' />
                </div>
                <div>
                  <h1 className='px-[50px] my-4 font-medium'>product name :{item.productName}</h1>
                  <h1 className='px-[50px] font-medium'>product price:{item.ProductPrice}</h1>
                </div>

                <div className='my-5'>
                  <button className='bg-gray-700 font-medium text-white  ml-5 rounded px-2' onClick={() => handleNext(item)}>add cart</button>
                  <button className='bg-gray-700 font-medium text-white ml-5 rounded px-2'>remove</button>
                  {/* <button value={item.Id} onClick={hedit(item)}  className='bg-gray-700 font-medium text-white ml-5 rounded px-2'>edit</button> */}
               <button onClick={() => hedit(item)} className='bg-gray-700 font-medium text-white ml-5 rounded px-2'>edit</button>

                </div>
              </div>
            </div>
          ))
        }
      </div>
      {
        cart.map((d) => (
          <div key={d.id}>
            <h1 >{d.productName}</h1>
            <img src={`http://localhost:8000/${d.Image}`} width={100} height={100} alt="" />
          </div>
        ))
      }


    </>
  )
}

export default FetchData
