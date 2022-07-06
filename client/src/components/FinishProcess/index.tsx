import './style.css'
import ProcessCard from '../ProcessCard'
import { sampleFinish }  from '../ProcessCard/utils'

import Grid from '@mui/material/Grid';
import RequestButton from '../RequestButton'


const FinishProcess = () => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <RequestButton />
                {
                    sampleFinish.map((item, index) => {
                        return (
                            <ProcessCard 
                                key={`finish-card-${index}`}
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

export default FinishProcess