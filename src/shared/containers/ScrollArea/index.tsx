import PerfectScrollbar from 'react-perfect-scrollbar';
import {makeStyles} from "@mui/styles";

const styles = makeStyles((theme) => ({
    root: {
        width: '100%',

        '& .ps--clicking': {
            backgroundColor: 'transparent !important',
            '& .ps__thumb-y': {
                backgroundColor: theme.palette.primary.main,
            },
            '& .ps__thumb-x': {
                backgroundColor: theme.palette.primary.main,
            }
        },
        '& .ps__rail-x:hover': {
            backgroundColor: 'transparent',
            '& .ps__thumb-x': {
                backgroundColor: theme.palette.primary.main,
            }
        },
        '& .ps__thumb-x': {
            backgroundColor: theme.palette.primary.main,
        },
        '& .ps__rail-y:hover': {
            backgroundColor: 'transparent',
            '& .ps__thumb-y': {
                backgroundColor: theme.palette.primary.main,
            }
        },
        '& .ps__thumb-y': {
            backgroundColor: theme.palette.primary.main,
        }
    }
}))

const ScrollArea = ({children, getRef}: {children: JSX.Element, getRef?: (ref: HTMLElement) => void}): JSX.Element => {
    const classes = styles();

    return(
        <PerfectScrollbar containerRef={(ref) => getRef?.(ref)} className={classes.root}>
            {children}
        </PerfectScrollbar>
    )
}

export default ScrollArea;
