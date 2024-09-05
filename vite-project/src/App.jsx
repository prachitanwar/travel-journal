import React from "react"
import Header from "/src/components/Header.jsx"
import Journal from "/src/components/Journal.jsx"
import "/src/App.css"
import data from "/src/data.js"



export default function(){
  console.log("data in app",data)
  const items = data.map(item=>{
    return <Journal {...item}/>
  })

    return (
      <>
        <Header />
        {items}
      </> 
    )
}