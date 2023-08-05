import { Button, Typography } from "@mui/material";
import { useContext } from 'react'
import AuthContext from './Authenticator'
import { Logout } from "@mui/icons-material";

export default function Navbar() {
    const {user} = useContext(AuthContext)
  
    return (
        <nav className="navbar navbar-expand-lg" style={{backgroundColor:'transparent'}}>
            <div className="container">
                <a className="navbar-brand text-capitalize navers" href="/#"><Typography>Welcome, {user.fname} </Typography></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link navers" href='/#'><Typography>Siebel</Typography></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link navers" href='/#'><Typography>M-Pesa</Typography></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link navers" href="/#"><Typography>Jobs</Typography></a>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        <Button endIcon={<Logout/>} variant='contained' color='warning'>Logout</Button>
                    </span>
                    
                </div>
            </div>
        </nav>
    )
}

