import * as React from 'react';
import './styles.css'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


import PendingProcess from '../PendingProcess'
import ApproveProcess from '../ApproveProcess'
import FinishProcess from '../FinishProcess'

import { touchTab }  from '../../redux/taskTabas/tasktabs.action'

import { connect } from 'react-redux';
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

function BasicTabs(props: any) {
  console.log('props', props)
  const { tasktabs, touchTab } = props 
  const { active } = tasktabs 

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    touchTab(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, bgcolor: 'background.paper', borderColor: 'divider' }}>
        <Tabs className='pn-tasktabs' value={active} onChange={handleChange} aria-label="pn-tasktabs" centered>
          <Tab label="กำลังดำเนินการ" {...a11yProps(0)} />
          <Tab label="อนุมัติการดำเนินการ" {...a11yProps(1)} />
          <Tab label="ดำเนินการเสร็จสิ้น" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={active} index={0}>
        <PendingProcess />
      </TabPanel>
      <TabPanel value={active} index={1}>
        <ApproveProcess />
      </TabPanel>
      <TabPanel value={active} index={2}>
        <FinishProcess />
      </TabPanel>
    </Box>
  );
}

const mapStateToProps = ({ tasktabs}: any) => ({
  tasktabs
})

const mapDispatchToProps = (dispatch: any) => {
  return {
    touchTab: (value: number) => dispatch(touchTab(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BasicTabs) 
