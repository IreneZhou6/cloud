import { useEffect, useRef, useState } from "react";
import List from '@mui/material/List';

import Menu from "../menu/Menu";

export default function MenuLi({ open }) {
    const dataRef = useRef();
    const [fetchedData, setFetchedData] = useState(null);

    useEffect(() => {
        fetch('/api/v1/user/userInfo', {
            headers: {
                rkey: 'D10AF457DAA1DEED54E2C36B5F295E7E',
                ukey: 'eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2lkX2tleSI6IjEiLCJscyI6Im1hbmFnZW1lbnQifQ.dIWBkabAHXTyqZ2JBVhYzYKT3xMD6YCZzDgknRP9tHDkhmE31nBkYjyhXmeQ2dVTF-P3ILxVUpK7pkOnUpzQnw'
            }
        }).then(resp => resp.json())
            .then(({ data }) => {
                dataRef.current = data;
                console.log(data);
                console.log(`inside ${dataRef.current}`);
                setFetchedData(dataRef.current);
            })
            .catch(err => console.log(err));
        console.log(`outside promise ${fetchedData}`);
        console.log(dataRef.current);
    }, [])

    return (
        <List>
            {dataRef.current ? dataRef.current.permissions.filter(permissione => permissione.menuType === 'M').map(permission => { return <Menu menuName={permission.menuName} key={permission.menuId} path={permission.path} id={permission.menuId} open={open} /> }) : <p>loading</p>}
        </List>
    )
}