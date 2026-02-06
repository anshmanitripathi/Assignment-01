import React from 'react'
import { useState } from 'react'

const Form = () => {
    const [name , setName] = useState('');
    const [age , setAge] = useState('');
    const [email , setEmail] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(name)
        console.log(age)
        console.log(email)
    }

    console.log("Render")


  return (
    <>
        <form onSubmit={handleSubmit}>
            <div>
                <input  placeholder='name' type="text" value={name} onChange={(e)=>setName(e.target.value)} />
            </div>
            <div>
                <input placeholder='age' type="number" value={age} onChange={(e)=>setAge(e.target.value)} />
            </div>
            <div>
                <input placeholder='email' type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <button>Submit</button>
        </form>
    </>
  )
}

export default Form