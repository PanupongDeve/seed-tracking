import { useState } from 'react';
import './style.css'

import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const Footer = () => {
    const [value, setValue] = useState(0);
    
    return (
            <Paper className='pn-footer' sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        console.log('new', newValue)
                        setValue(newValue);
                    }}
                    >
                    <BottomNavigationAction label="รายการ" icon={<AssignmentIcon />} />
                    <BottomNavigationAction label="ผู้ดูแล" icon={<SupervisorAccountIcon />} />
                    <BottomNavigationAction label="ผู้ดูแลระบบ" icon={<AdminPanelSettingsIcon />} />
                </BottomNavigation>
            </Paper>
    )
}

export default Footer