import './style.css'


import Grid from '@mui/material/Grid';
import RequestButton from '../RequestButton'
import ProcessCard from '../ProcessCard'
import { sampleApprove }  from '../ProcessCard/utils'

const ApproveProcess = () => {
    return (
        <Grid container>
            <Grid item xs={12} style={{ marginBottom: '50px'}}>
                <RequestButton />
                {
                        sampleApprove.map((item, index) => {
                            return (
                                <ProcessCard 
                                    key={`approve-card-${index}`}
                                    title={item.title}
                                    date={item.date}
                                    taskStatus={item.taskStatus}
                                    detail={item.detail}
                                    price={item.price}
                                    isAction={false}
                                />
                            )
                        })
                    }
            </Grid>
        </Grid>
    )
}

export default ApproveProcess