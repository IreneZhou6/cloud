import { Controller } from "react-hook-form";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";

export default function FormInputDropdown({ options, name, control, label }) {
    const generateSelectOptions = () => {
        return options.map((option) => {
            return (
                <MenuItem key={option.value} value={option.value}>
                    {option.label}
                </MenuItem>
            );
        });
    };

    return <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
            <>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">运行状态</InputLabel>
                    <Select labelId="demo-simple-select-label" id="demo-simple-select" label={label} onChange={onChange} value={value}>
                        {generateSelectOptions()}
                    </Select>
                </FormControl>
            </>
        )}
    />
} 