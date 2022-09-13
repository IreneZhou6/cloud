import { useContext, useState } from "react";

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
    { id: 'projectLeader', label: '申请人', minWidth: 100 },
    { id: 'projectTelephone', label: '申请人联系方式', minWidth: 170 },
    { id: 'status', label: '运行状态', minWidth: 90 },
    { id: 'uptime', label: '上线日期', minWidth: 170 },
    { id: 'downtime', label: '下线日期', minWidth: 170 },
    { id: 'level', label: '等保定级', minWidth: 90 },
    { id: 'packageNum', label: '云资源数', minWidth: 90 },
    { id: 'operation', label: '操作', minWidth: 80 },
];
// { list, pageNum, size, total, totalpage }
export default function StickyHeadTable({ data }) {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        console.log(`new page ${newPage}`);
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        console.log(+event.target.value);
        setPage(0);
    };

    const rows = data.list;

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden', p: 3 }}>
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
