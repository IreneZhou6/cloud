import './SearchForm.scss';
import CustomSelect from "../select/CustomSelect";

import { Button, Paper, TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";

export default function SearchForm({ setTableData }) {

    const options = [
        {
            label: "运行中",
            value: "1",
        },
        {
            label: "下线",
            value: "2",
        },
        {
            label: "未上线",
            value: "3",
        }
    ];

    const { reset, control, handleSubmit } = useForm({
        defaultValues: {
            applicationName: "",
            projectName: "",
            projectCode: "",
            applicant: "",
            phoneNumber: "",
            status: 1
        }
    });
    const onSubmit = data => setTableData(data);
    // console.log('outside render')

    return (
        <Paper sx={{ p: 3, mb: 3 }}>
            <form className="searchForm">
                <Controller
                    name="applicationName"
                    control={control}
                    render={({ field }) =>
                        <TextField label="应用名称" variant="outlined" {...field} />
                    } />
                <Controller
                    name="projectName"
                    control={control}
                    render={({ field }) =>
                        <TextField label="项目名称" variant="outlined" {...field} />
                    } />
                <Controller
                    name="projectCode"
                    control={control}
                    render={({ field }) =>
                        <TextField label="项目编码" variant="outlined" {...field} />
                    } />
                <Controller
                    name="applicant"
                    control={control}
                    render={({ field }) =>
                        <TextField label="申请人" variant="outlined" {...field} />
                    } />
                <Controller
                    name="phoneNumber"
                    control={control}
                    render={({ field }) =>
                        <TextField label="联系方式" variant="outlined" {...field} />
                    } />
                <CustomSelect
                    name="status"
                    control={control}
                    label="运行状态"
                    options={options}
                />

                <Button onClick={handleSubmit(onSubmit)} variant={"contained"}>查询</Button>
                <Button onClick={() => reset()} variant={"outlined"}>重置</Button>
            </form>
        </Paper>
    )
}