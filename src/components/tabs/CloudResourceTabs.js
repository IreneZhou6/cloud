import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


function TabPanel(props) {
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
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function CloudResourceTabs() {
    const [value, setValue] = React.useState(0);
    const [projectData, setProjectData] = React.useState({});

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const axios = require('axios');
    React.useEffect(() => {
        axios({
            headers: {
                rkey: 'D10AF457DAA1DEED54E2C36B5F295E7E',
                ukey: 'eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2lkX2tleSI6IjEiLCJscyI6Im1hbmFnZW1lbnQifQ.dIWBkabAHXTyqZ2JBVhYzYKT3xMD6YCZzDgknRP9tHDkhmE31nBkYjyhXmeQ2dVTF-P3ILxVUpK7pkOnUpzQnw',
            },
            url: '/api/v1/project/resources?projectId=74',
        }).then((response) => {
            console.log("axios get")
            setProjectData(response.data.data);
        })
            .catch(function (error) {
                console.log(error);
            });
    }, [])
    const resourceType = Object.keys(projectData);
    // console.log(resourceType);



    return (
        <Paper sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    {resourceType.map((type, index) => {
                        return <Tab key={index} label={type} {...a11yProps(index)} />
                    })}
                </Tabs>
            </Box>
            {resourceType.map((type, index) => {
                const instanceName = Object.keys(projectData[type]);
                console.log(projectData);
                return <TabPanel key={index} value={value} index={index}>
                    <>
                        <Typography cpmponent="h6">主机IP/实例名称：{instanceName}</Typography>
                        <Box>{projectData[type][instanceName].map(instance => {
                            return (
                                <Box key={instance.id} sx={{ p: 2 }}>
                                    <Typography sx={{ color: '#42a5f5' }}>{instance.str}</Typography>
                                    <Typography>{instance.str}日期：{instance.operationTime}</Typography>
                                    <Typography>配置：{instance.abbreviation}</Typography>
                                    <Box>{instance.storage && instance.storage.map(
                                        (storage, index) => {
                                            return <div key={index}>{storage.name}(10GB)容量：{storage.numbers}G</div>
                                        }
                                    )}</Box>
                                    <Typography>{instance.system && `操作系统：${instance.system}`}</Typography>
                                </Box>)
                        })}</Box>
                    </>
                </TabPanel>
            })}
        </Paper>
    );
}
