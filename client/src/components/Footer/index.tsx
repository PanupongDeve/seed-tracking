import {
    useNavigate,
  } from "react-router-dom";
import { connect } from 'react-redux';
import './style.css'

import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

import { touchMenu } from '../../redux/menu/menu.action'
import { getPathByActiveMenu } from './utils';

const Footer = (props: any) => {
    let navigate = useNavigate();
    const { menu, touchMenu } = props 
    const { active } = menu 
      
    return (
            <Paper className='pn-footer' sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation
                    showLabels
                    value={active}
                    onChange={(event, newValue) => {
                        console.log('new', newValue)
                        touchMenu(newValue)
                        navigate(getPathByActiveMenu(newValue))
                        
                    }}
                    >
                    <BottomNavigationAction label="รายการ" icon={<AssignmentIcon />} />
                    <BottomNavigationAction label="ผู้ดูแล" icon={<SupervisorAccountIcon />} />
                    <BottomNavigationAction label="ผู้ดูแลระบบ" icon={<AdminPanelSettingsIcon />} />
                </BottomNavigation>
            </Paper>
    )
}

const mapStateToProps = ({ menu}: any) => ({
    menu
})

const mapDispatchToProps = (dispatch: any) => {
    return {
      touchMenu: (value: number) => dispatch(touchMenu(value))
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(Footer)