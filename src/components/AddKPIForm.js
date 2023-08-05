import { Button, Card, CardContent, Chip, Divider, TextField, Typography } from '@mui/material'
import { Add, AddAlert, Shortcut } from '@mui/icons-material'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import AuthContext from './Authenticator'
import { useParams } from 'react-router-dom'

export default function AddKPIForm() {
    const { user } = useContext(AuthContext)
    const { id } = useParams();
    const emptyKPI = { name: '', target: ''}
    const [newKPI, setNewKPI] = useState(emptyKPI)
    const [targets, setTargets] = useState([])

    const handleInputs = event => setNewKPI(prev => { return { ...prev, [event.target.name]: event.target.value } })

    const handleSubmission = event => {
        event.preventDefault()
        axios.post(`https://server-r8hb.onrender.com/api/add-target/${id}`, newKPI).then().catch(err => console.log(err.message))
        setNewKPI(emptyKPI)
    }

    useEffect(() => {
        axios.get(`https://server-r8hb.onrender.com/api/add-target/${id}`).then(res => { setTargets(res.data?.targets) })
    }, [targets, id])
    
    return (
        <div className='container py-5'>
            <div className='row'>
                <div className='col-6 my-3'>
                    <Typography variant='h4' className='my-3 lead text-center text-capitalize'>Welcome {user.fname}</Typography>

                    <Divider className='mb-3'>
                        <Chip className='my-2' icon={<Add />} label='ADD YOUR TARGETS BELOW' color='success' size='medium' />
                    </Divider>
                    <form onSubmit={handleSubmission}>
                        <div className='mb-4'><TextField fullWidth type='text' label='KPI Name' name='name' variant='outlined' color='success' required value={newKPI.name} onChange={handleInputs} /></div>

                        <div className='mb-4'><TextField fullWidth type='number' label='KPI Target' name='target' variant='outlined' color='success' required value={newKPI.target} onChange={handleInputs} /></div>

                        <Button endIcon={<Add />} type='submit' fullWidth className='mb-3' variant="contained" color='success'>SUBMIT AND ADD ANOTHER</Button>
                    </form>
                    <Divider className='mb-3'>
                        <Chip className='my-2' icon={<Shortcut />} component='a' href={`/dashboard/${id}`} clickable label='Go to Dashboard' color='success' size='medium' />
                    </Divider>
                </div>

                <div className='container col-6'>
                    <Card className='row'style={{border:'2px solid #F5B626'}}>
                        <CardContent>

                            {
                                targets?.map((target, index) => {
                                    return (
                                        <div key={index} className='col-12'>                                        
                                            <Divider className='my-5 text-center'>
                                                <Chip className='mx-5' icon={<AddAlert />} component='a' href={`/add-score/${id}/${target?.target}/${target?.name}`} clickable label={`ADD ${target.name?.toUpperCase()} SCORE`} color='warning' size='medium' />
                                            </Divider>
                                        </div>
                                    )
                                })
                            }
                        </CardContent>
                    </Card>

                </div>
            </div>
        </div>
    )
}

