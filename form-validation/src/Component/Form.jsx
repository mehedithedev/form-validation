import React from 'react'
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

function Form() {
   

    const schema = yup.object().shape({
        fullName: yup.string().required("Your full name is required"),
        email: yup.string().email().required("You have to enter you email"),
        mobileNumber: yup.number().integer(),
        age: yup.number().positive().integer().min(18).required("Enter your age. Not below 18!"),
        password: yup.string().min(4).max(32).required('Enter a password ranging from 4-32 digits'),
        confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], "Password is not matching")
        .required()        
    })
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data)=>{
        console.log(data)
    }

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type='text' placeholder='Full Name...' {...register('fullName')}/>
            <p>{errors.fullName?.message}</p>

            <input type='text' placeholder='Email...' {...register('email')}/>
            <p>{errors.email?.message}</p>
            
            <input type='text' placeholder='Mobile Number...' {...register('mobileNumber')}/>
            
            <input type='number' placeholder='Age...'{...register('age')}/>
            <p>{errors.age?.message}</p>

            <input type='password' placeholder='Password...' {...register('password')}/>
            <p>{errors.password?.message}</p>

            <input type='password' placeholder='Confirm Password...' {...register('confirmPassword')}/>
            <p>{errors.confirmPassword?.message}</p>

            <input type="submit"/>
                    

        </form>
    </div>
  )
}

export default Form