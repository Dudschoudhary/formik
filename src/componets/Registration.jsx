import React from 'react'
import { useFormik } from 'formik' // install formik and after import
import { signUpschma } from './Schemas' // schema component

const Registration = () => {    // callback function
    const initialValues = {  //object
        name: "",     //value 
        email: "",
        password: "",
        confirm_password: "",

    }
    const { values, errors,touched, handleChange, handleBlur, handleSubmit,resetForm } = useFormik({   // use formik
        initialValues: initialValues,
        validationSchema:signUpschma,
        onSubmit: (values) => {
            console.log(values);
            resetForm();
        }
    })
    console.log(errors);
    

    return (
        <div className='justify-center items-center w-full flex h-screen'>
            <form onSubmit={handleSubmit} className='space-y-3 '>
                <h3>Form Validation</h3>
                <div className='border p-4'>
                    <div className=''>
                        <label htmlFor="name" >Name</label><br />
                        <input type="text"
                            className='outline-none py-1  border rounded'
                            autoComplete='off'
                            name='name'
                            id='name'
                            placeholder='Name'
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.name && touched.name ? (<p className='text-red-600'>{errors.name}</p>):null}

                    </div>
                    <div>
                        <label htmlFor="email">Email</label><br />
                        <input type="email"
                            className='outline-none py-1 border rounded'
                            autoComplete='off'
                            name='email'
                            id='email'
                            placeholder='Email'
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.email && touched.email ? (<p className='text-red-600'>{errors.email}</p>):null}

                    </div>
                    <div>
                        <label htmlFor="password">Password</label><br />
                        <input type="password"
                            className='outline-none py-1 border rounded'
                            autoComplete='off'
                            name='password'
                            id='password'
                            placeholder='password'
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.password && touched.password ? (<p className='text-red-600'>{errors.password}</p>):null}
                        </div>
                    <div>
                        <label htmlFor="confirm-password">Confirm-Password</label><br />
                        <input type="password"
                            className='outline-none py-1 border rounded'
                            autoComplete='off'
                            name='confirm_password'
                            id='confirm-password'
                            placeholder='Confirm_Password'
                            value={values.confirm_password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.confirm_password && touched.confirm_password ? (<p className='text-red-600'>{errors.confirm_password}</p>):null}
                        </div>
                    <div>
                        <button type='submit' className='border py-1 px-4 my-4 bg-blue-400 rounded text-white'>Registor</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Registration