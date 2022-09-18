import { useState } from "react";

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import CustomModal from "../modal/CustomModal";

export default function StickyHeadTable({ data, setMyFilter, columns, operation }) {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
        setMyFilter((prev) => {
            return { ...prev, pageNum: newPage + 1 }
        });
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setMyFilter((prev) => {
            return { ...prev, pageSize: +event.target.value }
        });
        setPage(0);
    };

    const rows = data.list;
    console.log(rows);

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
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                        {columns.map((column, index) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.id !== 'operation' ? value :
                                                        <CustomModal disabled={row.packageNum ? false : true} operation={operation} projectId={row.id} />
                                                    }
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
                rowsPerPageOptions={[5, 10, 50, 100]}
                component="div"
                count={data.total}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                labelRowsPerPage={<span>每页行数：</span>}
                labelDisplayedRows={({ page, count, from, to }) => {
                    return `共${count}条记录 ${from}-${to} / ${count}`;
                }}
            />
        </Paper>
    );
}
