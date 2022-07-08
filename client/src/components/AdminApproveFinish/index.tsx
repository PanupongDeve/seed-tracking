import './style.css'


import Grid from '@mui/material/Grid';
import ProcessCard from '../ProcessCard'
import { sampleApprove }  from '../ProcessCard/utils'

const AdminApproveFinish = () => {
    return (
        <Grid container>
            <Grid item xs={12} style={{ marginBottom: '50px'}}>
                {
                        sampleApprove.map((item, index) => {
                            return (
                                <ProcessCard 
                                    key={`admin-approve-card-${index}`}
                                    title={item.title}
                                    date={item.date}
                                    taskStatus={item.taskStatus}
                                    detail={item.detail}
                                    price={item.price}
                                    isAction={true}
                                    isCancelAction={false}
                                />
                            )
                        })
                    }
            </Grid>
        </Grid>
    )
}

export default AdminApproveFinish