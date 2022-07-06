import './style.css'


import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

import { selectCardUIByStatus } from './utils'

interface ProcessCardProps {
    title: string,
    date: string,
    taskStatus: string,
    detail: string,
    price: number,
    isAction: boolean
}

const ProcessCard = (props: ProcessCardProps) => {
    const {
        title,
        date,
        taskStatus,
        detail,
        price,
        isAction
    } = props;

    const ui = selectCardUIByStatus(taskStatus)

    const {
        text,
        classes
    } = ui;

    return (
            <Card style={{ marginTop: '15px', marginBottom: '15px'}}>
                <CardHeader
                    className='card-header'
                    title={<span className='title'>{title}</span>}
                    subheader={<span className='sub-title'>{date}</span>}
                    action={
                        <div className={`action-status ${classes.status}`}>{text.status}</div>
                    }
                />

                <CardContent className='card-content'>
                    {detail}
                </CardContent>
                
                <CardContent>
                    <div className='card-price'>ค่าใช้จ่าย <b>{price}</b> บาท</div>
                </CardContent>
                {isAction ? <Divider variant="middle" /> : ''}
                {isAction ?(
                     <CardActions>
                        <Button className={`card-btn ${classes.btn}`} variant="contained" size="small" color="success">{text.btn}</Button>     
                    </CardActions>
                ): ''}
                
                
            </Card>
        )
}

export default ProcessCard