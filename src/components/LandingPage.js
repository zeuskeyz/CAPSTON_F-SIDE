import LoginForm from './LoginForm'
import Message from './Message'

export default function LandingPage() {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-5 my-5'><LoginForm/></div>
                    <div className='col-lg-7 d-sm-none d-lg-block'><Message/></div>
                </div>
            </div>
        </>
    )
}

