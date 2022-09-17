import { Paper } from "@mui/material";
import { useEffect, useState, useRef } from "react";

import SearchForm from "../../../components/form/SearchForm";
import StickyHeadTable from "../../../components/table/StickyHeadTable";

export default function CloudResourceOrder() {
    const tableDataRef = useRef();
    const [tableData, setTableData] = useState(null);

    const [myFilter, setMyFilter] = useState({
        tab: 2,
        pageNum: 1,
        pageSize: 10
    });

    const axios = require('axios');
    useEffect(() => {
        axios({
            headers: {
                rkey: 'D10AF457DAA1DEED54E2C36B5F295E7E',
                ukey: 'eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2lkX2tleSI6IjEiLCJscyI6Im1hbmFnZW1lbnQifQ.dIWBkabAHXTyqZ2JBVhYzYKT3xMD6YCZzDgknRP9tHDkhmE31nBkYjyhXmeQ2dVTF-P3ILxVUpK7pkOnUpzQnw',
            },
            method: 'post',
            url: '/api/v1/project/page',
            data: myFilter
        }).then((response) => {
            // console.log(response.data.data);
            tableDataRef.current = response.data.data;
            // console.log(tableDataRef.current);
            console.log("axios post")
            setTableData(tableDataRef.current);
        })
            .catch(function (error) {
                console.log(error);
            });
    }, [myFilter])

    console.log(myFilter);
    console.log(tableData);
    console.log('cloud source page')

    return (
        <div>
            <SearchForm setMyFilter={setMyFilter} />
            {tableData ? <StickyHeadTable data={tableData} setMyFilter={setMyFilter} /> : <Paper sx={{ width: '100%', overflow: 'hidden', p: 3 }}>loading</Paper>}
        </div>
    )
}