import { Button, Chip, Divider, TextField } from '@mui/material'
import { LockReset,Login, PersonAdd } from '@mui/icons-material'
import { useContext, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import AuthContext from './Authenticator'

export default function LoginForm() {
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
    const emptyLogin = {email:'', password:''}
    const [newLogin, setNewLogin] = useState(emptyLogin)

    const handleLogInputs = event => setNewLogin(prev => { return {...prev, [event.target.name]:event.target.value}}) 
    const handleLogin = async event => {
        event.preventDefault()
        axios.post('https://server-r8hb.onrender.com/api/', newLogin)
        setNewLogin(emptyLogin)
        user ? navigate(`https://server-r8hb.onrender.com/api/add-target/${user._id}`) : navigate('/')
    }

    return (
        <>
            <div className='container py-3 border'>
                <div className='my-3 text-center'>
                    <Chip className='my-2' color='success' label='SIGN IN TO YOUR ACCOUNT'/>
                </div>
        
                <form onSubmit={handleLogin}>
                    <div className='mb-3'><TextField fullWidth type='email' label='Email Address' name='email' variant='filled' color='success' required value={newLogin.email} onChange={handleLogInputs}/></div>

                    <div className='mb-3'><TextField fullWidth type='password' label='Enter Password' name='password' variant='filled' color='success' required value={newLogin.password} onChange={handleLogInputs}/></div>
                    <Divider className='my-3'>
                        <Chip className='my-2' icon={<LockReset />} component='a' href='#' clickable label='Forgot Password ?' color='success' size='medium' />
                    </Divider>
                    <Button endIcon={<Login/>} type='submit' fullWidth variant="contained" color='success'>LOGIN</Button>
                    <Divider className='my-3'>
                        <Chip className='my-3' icon={<PersonAdd/>} component='a' href='/sign-up' clickable label='Create New User' color='success' size='medium' />
                    </Divider>
                </form>
            </div>
        </>
    )
}