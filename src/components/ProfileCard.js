import { Avatar, Card, CardContent, CardHeader, Typography } from '@mui/material';
import {Email, Phone, PinDrop} from '@mui/icons-material';

export default function ProfileCard({user}) {
    let initials = ''
    initials += user?.fname?.charAt(0) + user?.lname?.charAt(0)
    const userInitials = initials.toUpperCase()
    const backCol = user.gender === 'f' ? '#ffc0cb' : '#87cefa'
    return (
        <div>
            <Card style={{ border: `2px solid ${backCol}`, background: 'transparent'}}>
                <CardHeader avatar={<Avatar sx={{ bgcolor: backCol }}>{userInitials}</Avatar>} title={`${user.fname?.toUpperCase()} ${user.lname?.toUpperCase()}`} subheader={`EK ${user.badge} `} action={<Avatar sx={{ bgcolor: backCol }}>{user.gender?.toUpperCase()}</Avatar>}/>
                <CardContent>
                    <div className=' ms-2 p-0 container d-flex'>
                        <Email fontSize='small'/>
                        <Typography variant='subtitle2' className='align-self-center ms-4'>{user.email}</Typography>
                    </div>
                    <div className='ms-2 p-0 container d-flex'>
                        <Phone fontSize='small'/>
                        <Typography variant='subtitle2' className='align-self-center ms-4'>+254 {user.contact}</Typography>
                    </div>
                    <div className='ms-2 p-0 container d-flex'>
                        <PinDrop fontSize='small'/>
                        <Typography variant='subtitle2' className='align-self-center ms-4'> Safaricom, Retail Center {user.location?.toUpperCase()}</Typography>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

