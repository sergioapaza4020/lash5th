'use client';

import { Paper, Typography, Stack, Box } from '@mui/material';
import { useCountdown } from './useCountdown';
import {
    isSameDay,
    getAnniversaryNumber,
} from '@/utils/date.utils';
import { useToday } from '@/src/hooks/useToday';

interface Props {
    targetDate: Date;
}

export const CountdownTimer = ({ targetDate }: Props) => {
    const today = useToday();

    if (!today) return null;

    const isAnniversary = isSameDay(today, targetDate);

    if (isAnniversary) {
        const anniversaryNumber = getAnniversaryNumber(today);

        return (
            <Paper sx={paperStyle}>
                <Typography variant="h4" color="primary">
                    💖 Feliz {anniversaryNumber}° aniversario 💖
                </Typography>
            </Paper>
        );
    }

    const { days, hours, minutes, seconds } =
        useCountdown(targetDate);

    return (
        <Paper sx={paperStyle}>
            <Typography variant="h5" gutterBottom>
                Nuestro próximo aniversario 💕
            </Typography>

            <Stack direction="row" spacing={3} justifyContent="center">
                <TimeBlock label="Días" value={days} />
                <TimeBlock label="Horas" value={hours} />
                <TimeBlock label="Min" value={minutes} />
                <TimeBlock label="Seg" value={seconds} />
            </Stack>
        </Paper>
    );
};

const format = (n: number) => n.toString().padStart(2, '0');

const TimeBlock = ({
    label,
    value,
}: {
    label: string;
    value: number;
}) => (
    <Box textAlign="center">
        <Typography variant="h4" color="primary">
            {format(value)}
        </Typography>
        <Typography variant="caption">{label}</Typography>
    </Box>
);

const paperStyle = {
    p: 5,
    backgroundColor: 'secondary.main',
    textAlign: 'center',
};
