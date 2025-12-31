import { Box, Typography } from "@mui/material";

const formatNumber = (value: number): string =>
    value.toString().padStart(2, '0');

export const TimeBlock = ({
    label,
    value,
}: {
    label: string;
    value: number;
}) => (
    <Box>
        <Typography variant="h4" color="primary">
            {formatNumber(value)}
        </Typography>
        <Typography variant="caption">{label}</Typography>
    </Box>
);