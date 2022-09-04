import { useEffect, useRef, useState } from "react";

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
    { id: 'applicationName', label: '应用名称', minWidth: 170 },
    { id: 'projectName', label: '项目名称', minWidth: 170 },
    { id: 'projectCode', label: '项目编码', minWidth: 100 },
    { id: 'applicant', label: '申请人', minWidth: 100 },
    { id: 'phoneNumber', label: '申请人联系方式', minWidth: 170 },
    { id: 'runningState', label: '运行状态', minWidth: 90 },
    { id: 'startDate', label: '上线日期', minWidth: 170 },
    { id: 'endDate', label: '下线日期', minWidth: 170 },
    { id: 'star', label: '等保定级', minWidth: 90 },
    { id: 'resourceNumber', label: '云资源数', minWidth: 90 },
    { id: 'operation', label: '操作', minWidth: 80 },
];

function createData(applicationName, projectName, projectCode, applicant, phoneNumber, runningState, startDate, endDate, star, resourceNumber, operation) {
    return { applicationName, projectName, projectCode, applicant, phoneNumber, runningState, startDate, endDate, star, resourceNumber, operation };
}

const rows = [
    createData('台州市政务云平台', '信访局移动', 'FJ220220805', '张三', 1324171354, '运行中', '2022-09-01', '2022-10-01', '一级', 5, '详情'),
    createData('台州市政务云平台', '信访局移动', 'FJ220220805', '张三', 1324171354, '运行中', '2022-09-01', '2022-10-01', '一级', 5, '详情'),
    createData('台州市政务云平台', '信访局移动', 'FJ220220805', '张三', 1324171354, '运行中', '2022-09-01', '2022-10-01', '一级', 5, '详情'),
    createData('台州市政务云平台', '信访局移动', 'FJ220220805', '张三', 1324171354, '运行中', '2022-09-01', '2022-10-01', '一级', 5, '详情'),
    createData('台州市政务云平台', '信访局移动', 'FJ220220805', '张三', 1324171354, '运行中', '2022-09-01', '2022-10-01', '一级', 5, '详情'),
    createData('台州市政务云平台', '信访局移动', 'FJ220220805', '张三', 1324171354, '运行中', '2022-09-01', '2022-10-01', '一级', 5, '详情'),
    createData('台州市政务云平台', '信访局移动', 'FJ220220805', '张三', 1324171354, '运行中', '2022-09-01', '2022-10-01', '一级', 5, '详情'),
    createData('台州市政务云平台', '信访局移动', 'FJ220220805', '张三', 1324171354, '运行中', '2022-09-01', '2022-10-01', '一级', 5, '详情'), createData('台州市政务云平台', '信访局移动', 'FJ220220805', '张三', 1324171354, '运行中', '2022-09-01', '2022-10-01', '一级', 5, '详情'), createData('台州市政务云平台', '信访局移动', 'FJ220220805', '张三', 1324171354, '运行中', '2022-09-01', '2022-10-01', '一级', 5, '详情'), createData('台州市政务云平台', '信访局移动', 'FJ220220805', '张三', 1324171354, '运行中', '2022-09-01', '2022-10-01', '一级', 5, '详情'), createData('台州市政务云平台', '信访局移动', 'FJ220220805', '张三', 1324171354, '运行中', '2022-09-01', '2022-10-01', '一级', 5, '详情'), createData('台州市政务云平台', '信访局移动', 'FJ220220805', '张三', 1324171354, '运行中', '2022-09-01', '2022-10-01', '一级', 5, '详情'), createData('台州市政务云平台', '信访局移动', 'FJ220220805', '张三', 1324171354, '运行中', '2022-09-01', '2022-10-01', '一级', 5, '详情'), createData('台州市政务云平台', '信访局移动', 'FJ220220805', '张三', 1324171354, '运行中', '2022-09-01', '2022-10-01', '一级', 5, '详情'), createData('台州市政务云平台', '信访局移动', 'FJ220220805', '张三', 1324171354, '运行中', '2022-09-01', '2022-10-01', '一级', 5, '详情'), createData('台州市政务云平台', '信访局移动', 'FJ220220805', '张三', 1324171354, '运行中', '2022-09-01', '2022-10-01', '一级', 5, '详情'), createData('台州市政务云平台', '信访局移动', 'FJ220220805', '张三', 1324171354, '运行中', '2022-09-01', '2022-10-01', '一级', 5, '详情'),
];

export default function StickyHeadTable() {
    const [cloudResource, setCloudResource] = useState(null);

    useEffect(() => {
        fetch('/api/v1/dict/page', {
            headers: {
                rkey: 'D10AF457DAA1DEED54E2C36B5F295E7E',
                ukey: 'eyJhbGciOiJIUzUxMiJ9.eyJsb2dpbl91c2VyX2lkX2tleSI6IjEiLCJscyI6Im1hbmFnZW1lbnQifQ.dIWBkabAHXTyqZ2JBVhYzYKT3xMD6YCZzDgknRP9tHDkhmE31nBkYjyhXmeQ2dVTF-P3ILxVUpK7pkOnUpzQnw',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: {
                "dictLabel": "",
                "type": 0,
                "pageNum": 0,
                "pageSize": 0,
                "orderByColumn": [
                    ""
                ],
                "isAsc": [
                    ""
                ]
            }
        }).then(resp => resp.json())
            .then(({ data }) => {
                console.log(`data ${data}`);
                setCloudResource(data);
                console.log(`inside cloud ${cloudResource}`);
            })
            .catch(err => console.log(err));
        console.log(`outside ${cloudResource}`);
    }, [])

    console.log(`outside useEffect ${cloudResource}`);


    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        console.log(newPage);
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        console.log(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow hover={true} >
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.format && typeof value === 'number'
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 50, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}