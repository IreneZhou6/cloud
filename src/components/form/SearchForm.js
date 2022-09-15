import './SearchForm.scss';
import CustomSelect from "../select/CustomSelect";

import { Button, Paper, TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";

export default function SearchForm({ setMyFilter }) {

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
            projectLeader: "",
            projectTelephone: "",
            status: 1
        }
    });

    const onSubmit = data => setMyFilter((prev) => {
        return { ...prev, ...data }
    });
    // console.log('outside render')
    const handleReset = () => {
        reset();
        setMyFilter((prev) => {
            return {
                ...prev,
                applicationName: "",
                projectName: "",
                projectCode: "",
                projectLeader: "",
                projectTelephone: "",
                status: 1
            }
        })
    }

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
                    name="projectLeader"
                    control={control}
                    render={({ field }) =>
                        <TextField label="申请人" variant="outlined" {...field} />
                    } />
                <Controller
                    name="projectTelephone"
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
                <Button onClick={handleReset} variant={"outlined"}>重置</Button>
            </form>
        </Paper>
    )
}