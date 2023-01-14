import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [response, setResponse] = useState([])

  const fetchAdvice = async() => {
    try {
      const res = await axios.get('https://api.adviceslip.com/advice')
      setResponse(res.data.slip)
    } catch (err) {
      console.log(err)
    }
  };
  useEffect(() => {
    fetchAdvice();
  }, [])

  return (
    <div className='container-full'>
    <div className="max-w-sm mx-auto my-96 rounded flex flex-wrap justify-center align-middle App p-4 shadow-2xl">
      <div className='flex flex-col items-center justify-center'>
      <div className="text-[#52ffa8] uppercase font-extrabold font-manrope">
        Advice #{ response.id }
      </div>
      <div className="text-white text-center p-4 font-manrope font-extrabold">
        "{response.advice}"
      </div>
      </div>
      <div className="container -mb-10">
        <div className="w-[100%] h-[45px] relative lines px-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[40px] h-[40px] left-0 right-0 top-0 bottom-0 m-auto text-gray-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
            </svg>
          </div>
      </div>
        <div className="relative -bottom-10">
          <button className="rounded-full bg-[#52ffa8] hover:bg-[#52ffa8] w-12 h-12 flex justify-center items-center" onClick={fetchAdvice}>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg>
          </button>
        </div>
      </div>
      <div className='flex flex-wrap mx-auto item-end justify-center -mt-80 max-w-sm'>
          <p>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer" className='font-semibold italic text-cyan-500'>Frontend Mentor</a>.</p> 
          <p>Coded by <a href="https://boubacar-ba.vercel.app/" className='font-semibold italic text-purple-500'>Boubacar Ba</a>.</p>
      </div>
      </div>
    );
}

export default App;
