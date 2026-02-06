import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import {coerce, z} from 'zod'

const ReactHookZod = () => {

    const formSchema = z.object({
        name : z.string().min(3,"Name Should be greatre than 3").max(25, "Name should be less than 25"),
        age : z.coerce.number().min(3,"Age Should be greatre than 18").max(25, "Age should be less than 50"),
        email : z.string().email("Invalid email format"),
        password : z.string().min(6, "Password must be at least 6 characters")
    })

    const {register , handleSubmit, formState : {errors}} = useForm({
        resolver : zodResolver(formSchema)
    });

    const formSubmit = (data)=>{
        console.log(data);
    }

  return (
    <>
        <form onSubmit={handleSubmit(formSubmit)}>
            <div>
                <label htmlFor="name">Name : </label>
                <input id='name' type="text" {...register('name', {required:"Name is Required"})}/>
                {errors.name && errors.name.message}
            </div>
            <div>
                <label htmlFor="age">Age : </label>
                <input id='age' type="number" {...register('age', {required:"Age is Required"})}/>
                {errors.age && errors.age.message}
            </div>
            <div>
                <label htmlFor="email">Email : </label>
                <input id='email' type="email" {...register('email', {required:"Email is Required"})}/>
                {errors.email && errors.email.message}
            </div>
            <div>
                <label htmlFor="password">Password : </label>
                <input id='password' type="password" {...register('password', {required:"Password is Required"})}/>
                {errors.password && errors.password.message}
            </div>
            <button>Submit</button>
        </form>
    </>
  )
}

export default ReactHookZod