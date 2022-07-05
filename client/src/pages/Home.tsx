import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import Header from '../components/Header'
import TaskTabs from '../components/TaskTabs'
import Footer from '../components/Footer'


import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';





const Home = () => {
    const [value, setValue] = React.useState(0);
    return (
        <Box>
            <Header />
            <TaskTabs />
            <Footer />
        </Box>
    )
}


export default Home;