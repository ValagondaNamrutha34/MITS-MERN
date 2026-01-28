import React,{useState} from 'react'
const Contact = () => {
  const [name,setName]=useState("Namrutha");
  const toggleName=()=>{
    setName(name=="Namrutha"?"Namu":"Namrutha")
  }
  return (
    <div>
      <h1>Name:{name}</h1>
      <button onClick={toggleName}>Toggle</button>
    </div>
  )
}

export default Contact

