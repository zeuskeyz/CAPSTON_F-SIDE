import { Add, Replay, Shortcut } from '@mui/icons-material'
import { Button, Card, CardContent, Chip, Divider, TextField, Typography } from '@mui/material'
import { useContext, useState, useEffect } from 'react'
import AuthContext from './Authenticator'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function AddScoresForm() {
    const { user } = useContext(AuthContext)
    const { id, target, kpi } = useParams()
    const emptyScore = { kpi: kpi, month: '', target: target, score: '' }
    const [newScore, setNewScore] = useState(emptyScore)
    const [actuals, setActuals] = useState([])


    const handleInputs = event => setNewScore(prev => { return { ...prev, [event.target.name]: event.target.value } })
    const handleSubmission = event => {
        event.preventDefault()
        axios.post(`https://server-r8hb.onrender.com/api/add-score/${id}/${target}/${kpi}`, newScore).then().catch(error => alert(error.message))
        setNewScore(emptyScore)
    }
    useEffect(() => {
        axios.get(`https://server-r8hb.onrender.com/api/add-score/${id}/${target}/${kpi}`).then(res => { setActuals(res.data) })
    }, [actuals, id, target, kpi])

    return (
        <>
            <div className='container'>
                <div className='row my-5'>
                    <div className='col-6'>
                        <Card sx={{ maxWidth: 1000, border: '2px solid #F5B626' }} >
                            <CardContent>
                                <Typography variant='h4' className='my-3 lead text-center text-capitalize'>Welcome {user.fname}</Typography>

                                <Divider className='mb-3'>
                                    <Chip className='my-2' icon={<Add />} label={`ADD YOUR ${kpi.toUpperCase()} SCORES BELOW`} color='warning' size='medium' />
                                </Divider>
                                <form onSubmit={handleSubmission}>
                                    <div className='mb-4'><TextField fullWidth type='month' min='00' max='11' label='Rated Month' name='month' variant='outlined' color='warning' required value={newScore.month} onChange={handleInputs} /></div>

                                    <div className='mb-4'><TextField fullWidth type='number' min='1' max='100' label='Achieved Score' name='score' variant='outlined' color='warning' required value={newScore.score} onChange={handleInputs} /></div>

                                    <Button endIcon={<Add />} type='submit' fullWidth className='mb-3' variant="contained" color='warning'>SUBMIT</Button>
                                </form>
                                <Divider className='mb-3'>
                                    <Chip className='my-2' icon={<Shortcut />} component='a' href={`/dashboard/${id}`} clickable label='Go to Dashboard' color='warning' size='medium' />
                                </Divider>
                                <Divider className='mb-3'>
                                    <Chip className='my-2' icon={<Replay />} component='a' href={`/add-target/${id}`} clickable label='Update Another KPI' color='warning' size='medium' />
                                </Divider>

                            </CardContent>
                        </Card>
                    </div>

                    <div className='container col-6'>
                        <Typography>{kpi.toUpperCase()} SUMMARY TABLE</Typography>
                        <table className="table table-bordered table-success border-success table-striped">
                            <thead>
                                <tr>
                                    <th scope="col" className='text-center'>MONTH</th>
                                    <th scope="col" className='text-center'>TARGET</th>
                                    <th scope="col" className='text-center'>ACTUAL</th>
                                    <th scope="col" className='text-center'>STATUS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    actuals.map((score, index) => {
                                        return (
                                            <tr key={index}>
                                                <td className='text-center'>{score.month}</td>
                                                <td className='text-center'>{score.target}</td>
                                                <td className='text-center'>{score.score}</td>
                                                <td className='text-center'>{score.score - score.target}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddScoresForm