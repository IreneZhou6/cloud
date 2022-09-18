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


    const columns = [
        { id: 'applicationName', label: '应用名称', minWidth: 170 },
        { id: 'projectName', label: '项目名称', minWidth: 170 },
        { id: 'projectCode', label: '项目编码', minWidth: 100 },
        { id: 'projectLeader', label: '申请人', minWidth: 100 },
        { id: 'projectTelephone', label: '申请人联系方式', minWidth: 170 },
        { id: 'status', label: '运行状态', minWidth: 90 },
        { id: 'uptime', label: '上线日期', minWidth: 170 },
        { id: 'downtime', label: '下线日期', minWidth: 170 },
        { id: 'level', label: '等保定级', minWidth: 90 },
        { id: 'packageNum', label: '云资源数', minWidth: 90 },
        { id: 'operation', label: '操作', minWidth: 80 },
    ];

    return (
        <div>
            <SearchForm setMyFilter={setMyFilter} />
            {tableData ? <StickyHeadTable data={tableData} setMyFilter={setMyFilter} columns={columns} operation={'云资源详情'} /> : <Paper sx={{ width: '100%', overflow: 'hidden', p: 3 }}>loading</Paper>}
        </div>
    )
}