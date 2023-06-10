import React from 'react'
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

function Form() {
   

    const schema = yup.object().shape({
        fullName: yup.string().required(),
        email: yup.string().email().required(),
        mobileNumber: yup.number().integer(),
        age: yup.number().positive().integer().min(18).required(),
        password: yup.string().min(4).max(32).required(),
        confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null])
        .required()        
    })
    const {register, handleSubmit} = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data)=>{
        console.log(data)
    }

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type='text' placeholder='Full Name...' {...register('fullName')}/>
            <input type='text' placeholder='Email...' {...register('email')}/>
            <input type='text' placeholder='Mobile Number...' {...register('mobileNumber')}/>
            <input type='number' placeholder='Age...'{...register('age')}/>
            <input type='password' placeholder='Password...' {...register('password')}/>
            <input type='password' placeholder='Confirm Password...' {...register('confirmPassword')}/>
            <input type="submit"/>
                    

        </form>
    </div>
  )
}

export default Form