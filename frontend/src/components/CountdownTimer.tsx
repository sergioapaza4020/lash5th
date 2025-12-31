'use client';

import React from 'react';
import { useCountdown } from '../hooks/countdown';
import { JSX } from '@emotion/react/jsx-runtime';
import { Box, Typography } from '@mui/material';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

interface CountdownTimerProps {
    targetDate: string;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
    const timeLeft = useCountdown(targetDate);

    const formatTimeUnit = (value: number) => {
        return value.toString().padStart(2, '0');
    };

    const timerComponents: JSX.Element[] = [];

    Object.keys(timeLeft).forEach((interval) => {
        // @ts-ignore - interval is a key of timeLeft, which is safe to access
        if (timeLeft[interval] >= 0) {
            timerComponents.push(
                <span key={interval} style={{ margin: '0 5px', fontSize: '2rem' }}>
                    {/* @ts-ignore */}
                    {formatTimeUnit(timeLeft[interval])} {interval}
                </span>
            );
        }
    });

    const { width, height } = useWindowSize();

    return (
        <Box sx={{ textAlign: 'center', padding: '20px' }}>
            <Typography variant='h2'>Falta...</Typography>
            {
                timerComponents.length > 0 ? (
                    <div>{timerComponents} </div>
                ) : (
                    <Box>
                        <Confetti width={width} height={height} />
                        <span>¡Feliz Aniversario!</span>
                    </Box>
                )
            }
        </Box>
    );
};