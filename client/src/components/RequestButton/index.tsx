import './style.css'
import Button from '@mui/material/Button';

interface RequestButtonProps {
    isCancel: boolean,
    handleClick: Function
} 

const RequestButton = (props: RequestButtonProps) => {
    const {
        isCancel,
        handleClick
    } = props;

    if (isCancel) {
        return (
            <Button onClick={() => handleClick() } className="operation-btn" variant="contained" size="large" color="error">ยกเลิก</Button>
        )
    }
    
    return (
        <Button onClick={() => handleClick() } className="operation-btn" variant="contained" size="large" color="primary">แจ้งรายการคำขอ</Button>
    )
}

export default RequestButton