import { Typography } from '@mui/material'

export default function Message() {
  return (
    <div className='container my-5 p-5' style={{backgroundColor:'#F5B626'}}>
        <Typography className='my-3 py-3 words' variant='h5'>CUSTOMER SERVICE KPI'S</Typography>
        <h2 className='my-3 lead words' >
          Customer Service KPIs are essential to evaluate the effectiveness of a company’s customer service team.<br/> They measure customer satisfaction levels, track customer feedback, and monitor the team’s ability to acquire, manage, and retain customers.
          <br/><br/>By measuring response time, resolution time, customer churn rate, and customer feedback scores, businesses can identify areas for improvement and enhance the customer experience.
        </h2>
    </div>
  )
}
