import './style.css'
import { connect } from 'react-redux';

import Grid from '@mui/material/Grid';
import RequestButton from '../RequestButton'
import ProcessCard from '../ProcessCard'
import { sampleApprove }  from '../ProcessCard/utils'
import { handleRequestClick } from '../../redux/requestButton/request-button.action'


const ApproveProcess = (props: any) => {
    const { requestButton,  handleRequestClick } = props;
    const { isCancel } = requestButton;
  
    return (
        <Grid container>
            <Grid item xs={12} style={{ marginBottom: '50px'}}>
                <RequestButton handleClick={handleRequestClick} isCancel={isCancel} />
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

export default connect(mapStateToProps, mapDispatchToProps)(ApproveProcess)
