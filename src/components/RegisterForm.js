import { Button, Chip, Divider, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { PersonAdd } from '@mui/icons-material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function RegisterForm() {
    const navigate = useNavigate()
    const emptyReg = { fname: '', lname: '', gender:'', isAdmin:'', location:'', contact:'',  email: '', badge: '', password: '', passComp: '' }
    const [newReg, setNewReg] = useState(emptyReg)

    const handleRegInputs = event => setNewReg(prev => { return { ...prev, [event.target.name]: event.target.value } })

    const handleRegistration = event => {
        event.preventDefault()
        if (newReg.password === newReg.passComp) {
            axios.post('https://server-r8hb.onrender.com/api/sign-up', newReg).then(console.log(newReg)).catch(err => console.log(err.message))
            setNewReg(emptyReg)
            navigate('api/')
        }
        else alert("Password not Similar...Review!")
    }

    return (
        <>
            <div className='container p-2'>
                
                <form onSubmit={handleRegistration}>
                    <div className='row mb-3' >
                        <div className='col-6'><TextField fullWidth type='text' label='First Name' name='fname' variant='filled' color='success' required value={newReg.fname} onChange={handleRegInputs} /></div>
                        <div className='col-6'><TextField fullWidth type='text' label='Last Name' name='lname' variant='filled' color='success' required value={newReg.lname} onChange={handleRegInputs} /></div>
                    </div>
                    <div className='row mb-3' >
                        <div className='col-6'>
                            <FormControl variant="filled" color='success' sx={{ minWidth: 200 }}>
                                <InputLabel id="gender">Gender</InputLabel>
                                <Select labelId="gender" name="gender"  required value={newReg.gender} onChange={handleRegInputs}>
                                    <MenuItem value={emptyReg.gender}></MenuItem>
                                    <MenuItem value={'m'}>Male</MenuItem>
                                    <MenuItem value={'f'}>Female</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className='col-6'>
                            <FormControl variant="filled" color='success' sx={{ minWidth: 200 }}>
                                <InputLabel id="isAdmin">Role</InputLabel>
                                <Select labelId="isAdmin" name="isAdmin" required value={newReg.isAdmin} onChange={handleRegInputs}>
                                <MenuItem value={emptyReg.isAdmin}></MenuItem>
                                    <MenuItem value={true}>Admin</MenuItem>
                                    <MenuItem value={false}>User</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                    <div className='row mb-3' >
                        <div className='col-6'><TextField fullWidth type='text' label='Location' name='location' variant='filled' color='success' required value={newReg.location} onChange={handleRegInputs} /></div>
                        <div className='col-6'><TextField fullWidth type='phone' label='Phone Number' name='contact' variant='filled' color='success' required value={newReg.contact} onChange={handleRegInputs} /></div>
                    </div>
                    <div className='row mb-3' >
                        <div className='col-6'><TextField fullWidth type='email' label='Email Address' name='email' variant='filled' color='success' required value={newReg.email} onChange={handleRegInputs} /></div>
                        <div className='col-6'><TextField fullWidth type='text' label='Employee Number' name='badge' variant='filled' color='success' required value={newReg.badge} onChange={handleRegInputs} /></div>
                    </div>
                    <div className='row mb-3' >
                        <div className='col-6'><TextField fullWidth type='password' label='Enter Password' name='password' variant='filled' color='success' required value={newReg.password} onChange={handleRegInputs} /></div>
                        <div className='col-6'><TextField fullWidth type='password' label='Repeat Password' name='passComp' variant='filled' color='success' required value={newReg.passComp} onChange={handleRegInputs} /></div>
                    </div>

                    <Button endIcon={<PersonAdd />} type='submit' fullWidth className='mb-2' variant="contained" color='success'>REGISTER</Button>
                    <Divider>
                        <Chip className='my-1' component='a' href='/' clickable label='Already have an Account ?' color='success' size='medium' />
                    </Divider>
                </form>
            </div>
        </>
    )
}




