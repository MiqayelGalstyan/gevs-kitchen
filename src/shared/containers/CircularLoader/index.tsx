import { CircularProgress, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useMemo } from 'react';

const styles = makeStyles({
    root: {
       position: 'relative',
    },
    maxContent: {
        width: 'max-content',
    },
    loader: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '1'
    },
    fixed: {
      position: 'fixed'
    },
    hideLoader: {
        display: 'none'
    },
    blur: {
        filter: 'blur(4px)',
        pointerEvents: 'none'
    }
});

const CircularLoader = (props) => {
    const {
        children,
        loading,
        hideLoader = false,
        fixed = false,
        maxContent = true
    } = props;
    const classes = styles();
    const loaderClassList = useMemo(() => {
        return `
            ${fixed 
                ? `${classes.loader} ${classes.fixed}` 
                : classes.loader
            }
            ${hideLoader ? classes.hideLoader : ''}
        `
    }, [classes.fixed, classes.hideLoader, classes.loader, fixed, hideLoader]);

    return(
        <Box className={`${maxContent ? classes.maxContent : ''} ${classes.root}`}>
            {
                loading &&
                <div className={loaderClassList}>
                    <CircularProgress />
                </div>
            }
            <div className={loading ? classes.blur : ''}>
                {children}
            </div>
        </Box>
    )
}

export default CircularLoader;
