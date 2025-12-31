'use client';

import { Box, Typography, Button } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { letters } from '@/data/letters';
import { container, envelopeFlap, envelopeBodyBase, letter } from './letter.styles';

export const LetterEnvelope = () => {
    const [open, setOpen] = useState(false);
    const MotionBox = motion(Box);

    return (
        <Box sx={container}>
            <AnimatePresence>
                {!open && (
                    <MotionBox
                        key="envelope"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.6 }}
                        sx={{ position: 'relative', width: '100%', height: '100%', cursor: 'pointer' }}
                        onClick={() => setOpen(true)}
                    >
                        {/* Base animada */}
                        <MotionBox
                            sx={envelopeBodyBase}
                            initial={false}
                            animate={{
                                height: '60%',
                                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                            }}
                            transition={{ duration: 0.6 }}
                        />
                        {/* Tapa triangular */}
                        <Box sx={envelopeFlap} />
                    </MotionBox>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {open && (
                    <MotionBox
                        key="letter"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.6 }}
                        sx={{ position: 'absolute', width: '100%', top: 0, zIndex: 3 }}
                    >
                        <Box sx={letter}>
                            <Typography variant="body1" gutterBottom>
                                {letters[0].text.split('\n')[0]}
                            </Typography>
                            <Typography variant="body2" sx={{ whiteSpace: 'pre-line' }}>
                                {letters[0].text.split('\n').slice(1).join('\n')}
                            </Typography>

                            <Button size="small" sx={{ mt: 2 }} onClick={() => setOpen(false)}>
                                Cerrar
                            </Button>
                        </Box>
                    </MotionBox>
                )}
            </AnimatePresence>
        </Box>
    );
};
