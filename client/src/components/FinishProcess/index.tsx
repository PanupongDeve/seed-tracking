import './style.css'
import { connect } from 'react-redux';
import ProcessCard from '../ProcessCard'
import { sampleFinish }  from '../ProcessCard/utils'

import Grid from '@mui/material/Grid';
import RequestButton from '../RequestButton'
import { handleRequestClick } from '../../redux/requestButton/request-button.action'


const FinishProcess = (props: any) => {
    const { requestButton,  handleRequestClick } = props;
    const { isCancel } = requestButton;
  
    return (
        <Grid container>
            <Grid item xs={12}>
                <RequestButton handleClick={handleRequestClick} isCancel={isCancel} />
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
                                isCancelAction={false}
                            />
                        )
                    })
                }
            </Grid>
        </Grid>
    )
}

const mapStateToProps = ({ requestButton }: any) => ({
    requestButton
  })
  
  const mapDispatchToProps = (dispatch: any) => {
    return {
        handleRequestClick: () => dispatch(handleRequestClick())
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(FinishProcess)
