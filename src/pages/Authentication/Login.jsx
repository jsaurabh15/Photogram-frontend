import { Button, TextField } from '@mui/material'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useDispatch } from 'react-redux'
import { loginUserAction } from '../../redux/auth/auth.action'
import { useNavigate } from 'react-router-dom'

const initialValues = {
    email: "",
    password: ""
}

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (values) => {
        console.log("handleSubmit", values)
        dispatch(loginUserAction({data:values}))
        navigate("/")
    }

    return (
        <>
            <Formik 
                onSubmit={handleSubmit} 
                initialValues={initialValues}
            >
                <Form className='space-y-5'>
                    <div className='space-y-5'>
                        <div>
                            <Field as={TextField} name="email" placeholder="Email" type="email" variant="outlined"  fullWidth />
                            <ErrorMessage name="email" component={"div"} className='text-red-500' />
                        </div>
                        <div>
                            <Field as={TextField} name="password" placeholder="Password" type="password" variant="outlined" fullWidth />
                            <ErrorMessage name="password" component={"div"} className='text-red-500' />
                        </div>
                    </div>
                    <Button sx={{padding: ".8rem 0rem" }} fullWidth variant='contained' color='primary'  type="submit" >Login</Button>
                </Form>
            </Formik>
            <div className='flex justify-center items-center pt-3'>
                <p>if you don't have account?</p>
                <Button onClick={() => navigate("/register")}>Register</Button>
            </div>
        </>
    )
}

export default Login
