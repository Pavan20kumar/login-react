import React from 'react';
import './Home.css'
import { useState } from 'react';
import cookes from 'js-cookie';
import { Navigate} from 'react-router-dom';


function Home () {
    const [product, setProduct] = useState([])
    const token = cookes.get('jwttoken')

    if (token === undefined) {
        return <Navigate to='/login' />
    }
    

    



    fetch('https://dummyjson.com/products/search?q=phone')
        .then(res => res.json())
        .then(data => setProduct(data))
        .catch(err => console.log(err))

    return (
        <div className='container'>
            <h1 className='text-center text-black fs-5'>Home</h1>
            <div className='row'>
                {
                    product.products?.map((item) => (
                        <div className='col-md-3 mb-3 mt-2' key={item.id}>
                            <div className='card'>
                                <img src={item.thumbnail} alt="" />
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <p>{item.price}</p>
                            </div>
                        </div>
                    ))
                }
            </div>'
        </div>
      
    )
}
export default Home;