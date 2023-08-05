import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { useState } from 'react';

export default function PerformanceTables({ user }) {
    const myTargetList = []
    const myScoresList = []
    const steps = []

    user.targets?.forEach(target => {
        const myList = user.actuals?.filter(score => score.kpi === target.name)
        myTargetList.push(target.name)
        myScoresList.push(myList)

    })

    for (let i = 0; i <= myTargetList?.length; i++) {
        const payload = <table className="table table-striped" style = {{border: '2px solid #FBDA5E', background:'#6B6B6B'}}>
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
                    myScoresList[i]?.map((score, index)=>{
                        return(
                            <tr key={index}>
                                <td className='text-center '>{score.month}</td>
                                <td className='text-center'>{score.target}</td>
                                <td className='text-center'>{score.score}</td>
                                <td className='text-center'>{score.score - score.target}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        steps.push({ label:myTargetList[i], description:payload })
    }


    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = steps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
            <Paper
                square
                elevation={1}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 50,
                    bgcolor: 'transparent',
                    color: 'orange',
                    border: '2px solid #FBDA5E'
                }}
            >
                <Typography variant='h4' className='text-uppercase fw-bold'>{steps[activeStep].label}</Typography>
            </Paper>
            <Box sx={{ height: 350, maxWidth: 400, width: '100%', py: 1 }}>
                {steps[activeStep].description}
            </Box>
            <MobileStepper
                sx={{bgcolor: 'transparent', border: '2px solid #FBDA5E'}}
                elevation={1}
                variant="text"
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                    >
                        Next
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                        Back
                    </Button>
                }
            />
        </Box>
    );
}
