import './style.css'


import Grid from '@mui/material/Grid';
import ProcessCard from '../ProcessCard'
import { sampleRequest }  from '../ProcessCard/utils'

const AdminApprovePending = () => {
    return (
        <Grid container>
            <Grid item xs={12} style={{ marginBottom: '50px'}}>
                {
                        sampleRequest.map((item, index) => {
                            return (
                                <ProcessCard 
                                    key={`request-card-${index}`}
                                    title={item.title}
                                    date={item.date}
                                    taskStatus={item.taskStatus}
                                    detail={item.detail}
                                    price={item.price}
                                    isAction={true}
                                    isCancelAction={true}
                                />
                            )
                        })
                    }
            </Grid>
        </Grid>
    )
}

export default AdminApprovePending