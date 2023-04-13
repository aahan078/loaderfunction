import React, { useEffect, useState } from 'react'
import "../src/App.css"
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Container from 'react-bootstrap/Container'
// import Button from '@mui/material/Button';


export default function App() {
  const [post , setPost]=useState(null)
  useEffect(()=>{
    const timer = setTimeout(()=>{
      fetch("https://jsonplaceholder.typicode.com/posts/1").then(response=>response.json())
      .then(response=>{
        const{body}=response
        console.log(body)
        setPost(body)
      })
    },3000)

    return ()=> clearTimeout(timer);
 
  },[])
  return (
    <Container className='container'>
      <p>"Loader spinner using Reactjs when calling a jsonplaceholder API" Spinner will appear when page gets reloaded</p>

      <div className='box1--1'>{post?post : 
      
      <Backdrop
  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
  open
  
>
  <CircularProgress color="inherit" />
</Backdrop>}
   

      </div>
      
  </Container>
  )
}
