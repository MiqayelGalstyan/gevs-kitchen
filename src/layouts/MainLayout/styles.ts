import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => ({
    wrapper: {
        background: '#BFBFBF',
        padding: '28px 0.9% 20px',
        position: 'relative',
        marginBottom: 20,
        minHeight: '100%',
    },
    scrollToTopBtn: {
        position: 'fixed',
        bottom: '15%',
        right: '3%',
        background: '#FFF',
        width: 40,
        height: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        zIndex: 9999,
        border: '2px solid darkgray',
        cursor: 'pointer',
    },
    header: {
        width: '100%',
        height: 80,
        borderRadius: '20px',
    },
    nav: {
        display: "flex",
        justifyContent: 'space-between',
        alignItems: 'center',
        position: "relative",
        height: 80,
        boxShadow: '0px 5px 2px rgba(0, 0, 0, 0.25)',
        borderRadius: 20,
        backgroundColor: 'white',
        padding: '7px 10px'
    },
    logoArea: {
        zIndex: 5,
        textAlign: 'center',
        top: '-9.5px',
        margin: 'auto',
        position: 'absolute',
        left: 0,
        right: 0,
        width: '102px',
        maxWidth: '100%',
    },
    leftSide: {
        paddingTop: 7,
        paddingBottom: 7,
        paddingLeft: 10,
        width: '50%',
        height: '100%',
        border: '4px solid #BFBFBF',
        borderRight: 'unset',
        borderTopLeftRadius: '15px',
        borderBottomLeftRadius: '15px',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down("575")]: {
            '& a': {
                display: 'none',
            }
        },
        [theme.breakpoints.down("767")]: {
            '& a': {
                fontSize: 18,
            }
        },
    },
    rightSide: {
        paddingTop: 7,
        paddingBottom: 7,
        paddingRight: 10,
        width: '50%',
        height: '100%',
        border: '4px solid #BFBFBF',
        borderTopRightRadius: '15px',
        borderBottomRightRadius: '15px',
        borderLeft: 'unset',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        [theme.breakpoints.down("575")]: {
            '& a': {
                display: 'none',
            }
        },
        [theme.breakpoints.down("767")]: {
            '& a': {
                fontSize: 18,
            }
        },
    },
    link: {
        display: 'inline-block',
        fontSize: 25,
        fontWeight: 700,
        lineHeight: '30px',
    },
    burgerMenu: {
        position: 'absolute',
        right: 60,
        top: 28,
        width: 35,
        height: 29,
        transition: '0.3s',
        cursor: 'pointer',
        '& span': {
            height: 5,
            width: '100%',
            background: '#000000',
            display: 'inline-block',
            transition: '0.3s'
        },
        '&::before': {
            content: '""',
            height: 5,
            width: '100%',
            background: '#000000',
            display: 'inline-block',
            position: 'absolute',
            top: -1,
            left: 0,
            transition: '0.3s'
        },
        '&::after': {
            content: '""',
            height: 5,
            width: '100%',
            background: '#000000',
            display: 'inline-block',
            position: 'absolute',
            bottom: 3.5,
            left: 0,
            transition: '0.3s'
        },
        '&.opened': {
            '& span': {
                background: 'transparent',
            },
            '&::before': {
                transform: 'rotate(45deg)',
                top: 9,
            },
            '&::after': {
                transform: 'rotate(-45deg)',
                bottom: 15,
            },
        },
        [theme.breakpoints.down("575")]: {
            '&': {
                right: 40,
            }
        },
    },
    sidebar: {
        boxShadow: '-8px 8px 10px rgba(0, 0, 0, 0.6)',
        background: '#343434',
        borderRadius: '20px',
        maxWidth: '100%',
        height: 'calc(100% - 410px)',
        position: 'absolute',
        top: 170,
        width: 0,
        right: 20,
        transition: '0.3s',
        opacity: 0,
        zIndex: 9999,
        padding: '9px 0',
        '& $sidebarContent': {
            display: 'none',
            '& ul': {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                minHeight: '250px',
                overflowY: 'auto',
                height: '100%',
                '& .links': {
                    display: 'none',
                    position: 'relative',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    width: '90%',
                    maxWidth: '100%',
                    marginBottom: 20,
                    '& a': {
                        color: 'white',
                        fontSize: 13,
                        textTransform: 'uppercase',
                        display: 'inline-block',
                        marginBottom: 15,
                    }
                },
                [theme.breakpoints.down("575")]: {
                    '& .links': {
                        display: 'flex',
                        '&::after': {
                            content: "''",
                            position: 'absolute',
                            left: 0,
                            bottom: 0,
                            height: 2,
                            width: '100%',
                            background: '#FFF',
                        }
                    }
                }
            }
        },
    },
    sidebarOpened: {
        right: 17,
        width: 400,
        opacity: 1,
        padding: '9px 11px',
        '& $sidebarContent': {
            display: 'block',
        },
        [theme.breakpoints.down("575")]: {
            '&': {
                width: 300,
            }
        },
    },
    sidebarContent: {
        border: '3px solid #FFFFFF',
        borderRadius: '20px',
        padding: '96px 35px',
        height: '100%',
        '& ul': {
            '& li': {
                color: 'white',
                marginBottom: 15,
                textTransform: 'uppercase',
                cursor: 'pointer',
                display: 'inline-block',
                position: 'relative',
                marginLeft: 10,
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 6,
                    left: -10,
                    width: 5,
                    height: 5,
                    borderRadius: '50%',
                    background: 'white',
                    border: '1px solid white',
                },
            },
        },
        [theme.breakpoints.down("991")]: {
            '& ul': {
                '& li': {
                    '&::before': {
                        left: '-10px!important',
                        height: '4px!important',
                        width: '4px!important',
                    },
                }
            },
        },
        [theme.breakpoints.down("575")]: {
            '&': {
                padding: '40px 20px',
            },
            '& ul': {
                '& li': {
                    fontSize: 12,
                    '&::before': {
                        height: '3px!important',
                        width: '3px!important',
                        left: '-10px!important',
                    },
                }
            },
        }
    },
    sidebarNoResults: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
    },
    borderedLine: {
        border: '3px solid #FFFFFF',
        boxShadow: '0px 4px 2px rgba(0, 0, 0, 0.25)',
        borderRadius: 20,
        width: '96%',
        maxWidth: '100%',
        margin: '15px auto 0',
    },
    minBorderedLine: {
        border: '3px solid #FFFFFF',
        boxShadow: '0px 4px 2px rgba(0, 0, 0, 0.25)',
        marginTop: 7,
        borderRadius: 20,
        width: '92%',
        maxWidth: '100%',
        margin: '15px auto 0',
    },
    content: {

    },
    footer: {
        background: '#1E1E1E',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.5)',
        borderRadius: '20px',
        padding: 14,
        marginTop: 20,
    },
    footerContainer: {
        border: '3px solid #FFFFFF',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '13px 40px 17px',
        '& .address-area': {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        [theme.breakpoints.down("991")]: {
            '& .address-area': {
                flexDirection: 'column',
                textAlign: 'left',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
            },
        },
        [theme.breakpoints.down("575")]: {
            '&': {
                padding: '13px 15px 17px',
                flexDirection: 'column',
            },
        },
    },
    footerTextArea: {

    },
    socialMedia: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 80,
        '& .link': {
            display: 'inline-block',
            margin: '0 11.5px',
        }
    },
    footerLogoArea: {
        textAlign: 'right',
    },
    footerLogo: {
        width: 129,
        height: 130,
        [theme.breakpoints.down("575")]: {
            marginTop: 15,
        }
    },
    footerItem: {
        width: '33.3%',
        [theme.breakpoints.down("575")]: {
            '&': {
                width: '100%',
                textAlign: 'center',
            }
        },
    },
    footerTitle: {
        fontSize: 20,
        lineHeight: '25px',
        textTransform: 'capitalize',
        marginBottom: '31px!important',
        color: 'white',
    },
    footerRow: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: '14px!important',
    },
    footerRowText: {
        fontSize: 18,
        color: 'white',
        lineHeight: '22px',
        marginLeft: '13.75px!important',
        [theme.breakpoints.down("767")]: {
            fontSize: 14,
        }
    }
}));

export default useStyles;