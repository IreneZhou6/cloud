import { Paper } from "@mui/material";
import { useEffect, useState, useRef } from "react";

import SearchForm from "../../../components/form/SearchForm";
import StickyHeadTable from "../../../components/table/StickyHeadTable";

export default function CloudResourceOrder() {
    const tableDataRef = useRef();
    const [tableData, setTableData] = useState(null);
    // const [listData, setListData] = useState(null);

    const axios = require('axios');
    useEffect(() => {
        axios({
            headers: {
                rkey: 'D10AF457DAA1DEED54E2C36B5F295E7E',
                ukey: 'eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2lkX2tleSI6IjEiLCJscyI6Im1hbmFnZW1lbnQifQ.dIWBkabAHXTyqZ2JBVhYzYKT3xMD6YCZzDgknRP9tHDkhmE31nBkYjyhXmeQ2dVTF-P3ILxVUpK7pkOnUpzQnw',
            },
            method: 'post',
            url: '/api/v1/project/page',
            data: {
                tab: 2,
                pageNum: 1,
                pageSize: 10
            }
        }).then((response) => {
            console.log(response.data.data);
            tableDataRef.current = response.data.data;
            console.log(tableDataRef.current);
            setTableData(tableDataRef.current);
        })
            .catch(function (error) {
                console.log(error);
            });
    }, [])
    // useEffect(({ pageNum, pageSize, condition }) => {
    //     customFetch('/api/v1/project/page', {
    //         "pageNum": { pageNum },
    //         "pageSize": { pageSize },
    //         "applicationName": { condition[applicationName] },
    //         "projectName": { condition.projectName },
    //         "projectCode": { condition.projectCode },
    //         "projectLeader": { condition.projectLeader },
    //         "projectTelephone": { condition.projectTelephone },
    //         "status": { condition.status },
    //         "dateTime": { condition.dateTime }
    //     }, 'POST'
    //     ).then(resp => resp.json())
    //         .then(({ data }) => {
    //             console.log(`data ${data}`);
    //             setfetchedCloudResource(data);
    //             console.log(`inside cloud ${cloudResource}`);
    //         })
    //         .catch(err => console.log(err));
    // }, [])

    // const cloudResource = [{
    //     id: 90,
    //     level: 1,
    //     applicationId: "80",
    //     applicationName: "台州市政务云平台",
    //     applicationCode: "A330000100000202105004370",
    //     projectName: "信访局1111",
    //     projectCode: "1212",
    //     projectLeader: "中文",
    //     projectTelephone: "15222222222",
    //     packageNum: 0,
    //     uptime: "2022-08-31",
    //     downtime: null,
    //     status: "运行中"
    // }, {
    //     id: 90,
    //     level: 1,
    //     applicationId: "80",
    //     applicationName: "台州市政务云平台",
    //     applicationCode: "A330000100000202105004370",
    //     projectName: "信访局1111",
    //     projectCode: "1212",
    //     projectLeader: "中文",
    //     projectTelephone: "15222222222",
    //     packageNum: 0,
    //     uptime: "2022-08-31",
    //     downtime: null,
    //     status: "运行中"
    // }, {
    //     id: 91,
    //     level: 1,
    //     applicationId: "81",
    //     applicationName: "台州市政务云平台2",
    //     applicationCode: "A330000100000202105004371",
    //     projectName: "信访局",
    //     projectCode: "12123",
    //     projectLeader: "中文",
    //     projectTelephone: "15222222223",
    //     packageNum: 0,
    //     uptime: "2022-08-31",
    //     downtime: null,
    //     status: "运行中"
    // }];
    // const filteredResource = cloudResource.filter();


    return (
        <div>
            <SearchForm setTableData={setTableData} />
            {tableData ? <StickyHeadTable data={tableData} /> : <Paper sx={{ width: '100%', overflow: 'hidden', p: 3 }}>loading</Paper>}
        </div>
    )
}