import { SxProps, Theme } from '@mui/material';

export const container: SxProps<Theme> = {
    width: 300,
    height: 250,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
};

export const envelopeFlap: SxProps<Theme> = {
    position: 'absolute',
    top: 0,
    left: 35,
    width: '80%',
    height: '30%',
    backgroundColor: '#F48FB1',
    clipPath: 'polygon(50% 100%, 0 0, 100% 0)',
    transformOrigin: 'top center',
    zIndex: 2,
    boxShadow: '0 4px 6px rgba(0,0,0,0.15)'
};

export const envelopeBodyBase: SxProps<Theme> = {
    width: '100%',
    backgroundColor: '#fcbed3ff',
    position: 'relative',
    top: 0,
    borderRadius: 2,
    zIndex: 1,
    boxShadow: '0 4px 6px rgba(0,0,0,0.15)',
    overflow: 'hidden'
};

export const letter: SxProps<Theme> = {
    position: 'relative',
    width: '300%',
    left: '50%',
    transform: 'translateX(-50%)',
    height: '100%',
    backgroundColor: '#FFF',
    borderRadius: 2,
    padding: 2,
    boxShadow: '0 8px 12px rgba(0,0,0,0.25)',
    textAlign: 'center',
    zIndex: 3,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
};
