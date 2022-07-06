import './style.css'


import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const PendingProcess = () => {
    return (
            <Card style={{ marginTop: '15px'}}>
                <CardHeader
                    className='card-request-header'
                    title={<span className='title'>ห้องน้ำชำรุด</span>}
                    subheader={<span className='sub-title'>September 14, 2016</span>}
                    action={
                        <div className='action-request-status'>รอการอนุมัติ</div>
                    }
                />
                <CardContent className='card-request-content'>
                    ต้องการเปลี่ยนสายฉีดน้ำครับ 3 ตัว 
                    
                </CardContent>
                
                <CardContent>
                    <div className='request-price'>ค่าใช้จ่าย <b>500</b> บาท</div>
                </CardContent>
                <Divider variant="middle" />
                <CardActions>
                    <Button className='approve-btn' style={
                        { 
                            width: '100%',
                            fontSize: '1.4rem'
                        }
                    } variant="contained" size="small" color="success">อนุมัติคำขอรายการ</Button>
                    
                </CardActions>
                
            </Card>
        )
}

export default PendingProcess