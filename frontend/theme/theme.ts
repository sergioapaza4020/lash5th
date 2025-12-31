import { createTheme } from '@mui/material/styles';
import { palette } from './palette';

export const theme = createTheme({
    palette,
    typography: {
        fontFamily: `'Poppins', 'Roboto', sans-serif`,
    },
    shape: {
        borderRadius: 12,
    },
});