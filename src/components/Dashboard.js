import Navbar from './Navbar'
import ProfileCard from './ProfileCard'
import KPICarousel from './KPICarousel'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PerformanceTables from './PerformanceTables'
import Averages from './Averages'

export default function Dashboard() {
    const{ id } = useParams()
    const [user, setUser] = useState({})
    useEffect(()=>{
        axios.get(`https://server-r8hb.onrender.com/api/dashboard/${id}`).then(res=>setUser(res.data)).catch(err=>alert(err.message))
    },[id])

    return (
        <div>
            <Navbar/>
            <div className='container'>
                <div className='row'>
                    <div className='my-3 col-4'>
                        <ProfileCard user={user}/>
                        <KPICarousel user={user}/>
                    </div>
                    <div className='my-3 col-5'>
                        <PerformanceTables user={user}/>
                    </div>
                    <div className='my-3 col-3'>
                        <Averages user={user}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

