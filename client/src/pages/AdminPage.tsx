import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import Header from '../components/Header'
import AdminTabs from '../components/AdminTabs'
import Footer from '../components/Footer'


import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';





const AdminPage = () => {
    return (
        <Box>
            <Header />
            <AdminTabs />
            <Footer />
        </Box>
    )
}


export default AdminPage;