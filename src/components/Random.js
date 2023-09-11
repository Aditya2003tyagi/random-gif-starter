import React, {useState} from 'react'
import axios from 'axios';
import {useEffect} from 'react';
import Spinner from './Spinner';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {
  const [gif, setGif] = useState('');
  const [loading, setLoading] = useState('false');

  async function fetchData(){
    setLoading(true);
    // const url= `https://api.giphy.com/v1/gifts/random?api_key=kC0kZcGTTNZITKMQPLaxGwHeGpwYMn4S`;
    const url = `https://picsum.photos/200/300`
    const data = await axios.get(url);
    
    console.log('API Response: ', data.data)

    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
    setLoading(false);
  }
  useEffect( ()=>{
    fetchData();
  }, [])

  function clickHandler(){
    fetchData();

  }
  return (
    <div className='w-1/2 h-[450px] bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] '>
      <h1 className='text-2xl underline uppercase font-bold '>Random Gif</h1>
      {
        loading ? (<Spinner/>) : (<img src={gif} width="450px "  />)

      }
      <button onClick={clickHandler} className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg">
        Generate
      </button>
      
    </div>
  )
}

export default Random
