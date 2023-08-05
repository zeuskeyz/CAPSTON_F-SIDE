import { Card, CardContent, Typography } from "@mui/material"

export default function Averages({ user }) {
    const myTargetList = []
    const myScoresList = []
    const averages = []

    user.targets?.forEach(target => {
        const myList = user.actuals?.filter(score => score.kpi === target.name)
        myTargetList.push({name: target.name, expected:target.target})
        myScoresList.push(myList)

    })

    for (let i = 0; i < myTargetList?.length; i++) {
        const scoreSum = myScoresList[i]?.reduce((accum, curr) => accum + Number(curr.score), 0)
        const averageScore = (scoreSum / myScoresList[i]?.length).toFixed(2)

        averages.push({ name: myTargetList[i]?.name, target:myTargetList[i]?.expected, meanScore: averageScore })
    }


    return (

        <>   
            {averages.map((item, index) => {
                const mean = Number(item.meanScore)
                const expected = Number(item.target)
                const backCol =  mean > expected ? '#74B72E' : mean < expected ? '#FF1744' : '#F5B626'
                return (
                    <Card style={{ border: `2px solid ${backCol}`, color: backCol}} key={index} className="my-1">
                        <CardContent className="text-center">
                            <Typography variant='h6' className="fw-bold display-6 text-uppercase">{item.name}</Typography>
                            <Typography className="fw-bold display-6">{item.meanScore}</Typography>
                        </CardContent>
                    </Card>
                )
            })}
        </>
    )
}
