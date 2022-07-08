import './style.css'
import { connect } from 'react-redux';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import AdminApprovePending from '../AdminApprovePending'
import AdminApproveFinish from '../AdminApproveFinish'

import { touchTab }  from '../../redux/adminTabs/admintabs.action'


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
}

function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  

function AdminTabs(props: any) {
    const { adminTabs, touchTab } = props 
    const { active } = adminTabs 


    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        touchTab(newValue);
      };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, bgcolor: 'background.paper', borderColor: 'divider' }}>
                <Tabs className='admin-tasktabs' value={active} onChange={handleChange} aria-label="pn-tasktabs" centered>
                <Tab label="อนุมัติงบประมาณ" {...a11yProps(0)} />
                <Tab label="อนุมัติการดำเนินการเสร็จสิ้น" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={active} index={0}>
                <AdminApprovePending />
            </TabPanel>
            <TabPanel value={active} index={1}>
                <AdminApproveFinish />
            </TabPanel>
        </Box>
    )
}

const mapStateToProps = ({ adminTabs}: any) => ({
    adminTabs
  })
  
  const mapDispatchToProps = (dispatch: any) => {
    return {
      touchTab: (value: number) => dispatch(touchTab(value))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(AdminTabs)