import RegisterForm from './RegisterForm'
import Message from './Message'

export default function SignupPage() {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-7 d-sm-none d-md-none d-lg-block'><Message/></div>
                    <div className='col-lg-5 col-sm-12 my-5 border border-1'><RegisterForm/></div>
                </div>
            </div>
        </>
    )
}