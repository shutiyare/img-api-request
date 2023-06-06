import React,{ useState } from 'react'
import ReactDOM from 'react-dom';
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import Hello from './hello'
import Inputsearch from './components/Inpusearch'
import ImageList from './components/ImageList'
import axios from 'axios'

export function App() {
  // const [images, setImages] = useState([])
  const now=new Date()
  const magac="Abdullahi tahliil"
  const age=new Date().getFullYear()-2001
  // try {
  //  const  onSearchSubmit = async(event)=>{
  //   const response= await axios.get(`https://pixabay.com/api/?key=37061436-1e284ef358e672107bfefc2bf&q=${event}&image_type=photo`);
  //   setImages(response.data.hits);
  //   console.log(images)
  // }
  // } catch (error) {
  //   console.error(error)
  // }
  return (
    <>
      <div>
        <Inputsearch />
        
      </div>
    </>
  )
}
