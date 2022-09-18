import { NavLink } from 'react-router-dom';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';

export default function Menu({ menuName, path, id, open }) {
    let Icon = () => { <p>##</p> };
    switch (id) {
        case 1:
            Icon = () => <HomeOutlinedIcon />;
            break;
        case 3:
            Icon = () => <FormatListBulletedOutlinedIcon />;
            break;
        case 4:
            Icon = () => <AccountTreeOutlinedIcon />;
            break;
        case 5:
            Icon = () => <CloudOutlinedIcon />;
            break;
        case 53:
            Icon = () => <AssignmentTurnedInOutlinedIcon />;
            break;
        default:
            break;
    }

    return (
        <>
            <ListItem disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                    sx={{
                        minHeight: 48,
                        justifyContent: open ? 'initial' : 'center',
                        px: 2.5
                    }}>
                    <NavLink to={path}>
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            <Icon />
                        </ListItemIcon>
                        <span style={{ display: open ? 'inline-block' : 'none' }}>{menuName}</span>
                    </NavLink>
                </ListItemButton>
            </ListItem>
            <Divider />
        </>
    )
}