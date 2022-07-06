import './style.css'


import Grid from '@mui/material/Grid';
import RequestButton from '../RequestButton'


const FinishProcess = () => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <RequestButton />
            </Grid>
        </Grid>
    )
}

export default FinishProcess