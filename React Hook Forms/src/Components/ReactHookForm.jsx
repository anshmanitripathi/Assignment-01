import React from 'react'
import {Form, useForm} from 'react-hook-form'

const ReactHookForm = () => {

    const {register , handleSubmit , formState : {errors}} = useForm();

    const submitForm = (data)=>{
        console.log(data);
    }

    console.log('Render')


  return (
    <form onSubmit={handleSubmit(submitForm)}>
        <div>
            <label htmlFor="name">Name : </label>
            <input id='name' type="text" {...register('name', {
                required : "Name can't be empty"
            })} />
            {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div>
            <label htmlFor="age">Age : </label>
            <input id='age' type="number" {...register('age', {
                required : "Age is Required",
                min : {
                    value:12,
                    message : "should be greater tham 12"
                },
                max : {
                    value : 18,
                    message : "less than 18"
                }    
            })} />
            {
                errors.age && <span>{errors.age.message}</span>
            }
        </div>
        <div>
            <label htmlFor="email">Email : </label>
            <input id='email' type="email" {...register('email' , {
                required : "Eamil is required"
            })} />
            {
                errors.email && <span>{errors.mail.message}</span>
            }
        </div>
        <div>
            <label htmlFor="password">Password : </label>
            <input id='password' type="password" {...register('password', 
                {
                required : {
                    message :"Password is Required."
                },    
                minLength : {
                    value:4,
                    message : "should be greater tham 4"
                },
                maxLength : {
                    value : 8,
                    message : "less than 8"
                }    
            }
            )} />
            {
                errors.password && <span>{errors.password.message}</span>
            }
        </div>
        <button>Submit</button>
    </form>
  )
}

export default ReactHookForm