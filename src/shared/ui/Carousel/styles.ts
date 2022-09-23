import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => ({
    slider: {
        padding: '39px 3%',
        '& .react-multi-carousel-list': {
            justifyContent: 'space-between',
            position: 'static',
            '& .react-multi-carousel-item': {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-end',
                [theme.breakpoints.down("1500")]: {
                    '&': {
                        padding: '0 5px',
                    }
                },
                [theme.breakpoints.down("1200")]: {
                    '&': {
                        padding: '0 5px',
                    }
                },
                [theme.breakpoints.down("575")]: {
                    '&': {
                        padding: 0,
                    }
                }
            }
        },
        '& .carousel-button-group': {
            position: 'absolute',
            width: '100%',
            left: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            '& .next': {
                position: 'absolute',
                right: 10,
                top: -10,
                cursor: 'pointer',
                [theme.breakpoints.down("991")]: {
                    '&': {
                        background: 'white',
                        borderRadius: '30px',
                        width: '30px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '5px 15px',
                    },
                    '& img': {
                        width: '15px',
                    }
                },
            },
            '& .prev': {
                position: 'absolute',
                left: 10,
                top: -10,
                cursor: 'pointer',
                [theme.breakpoints.down("991")]: {
                    '&': {
                        background: 'white',
                        borderRadius: '30px',
                        width: '30px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '5px 15px',
                    },
                    '& img': {
                        width: '15px',
                    }
                },
            },
        },
    },
    item: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        background: '#343434',
        boxShadow: '0px 4px 4px rgb(0 0 0 / 50%)',
        borderRadius: 20,
        padding: '10% 7%',
        width: '437px',
        [theme.breakpoints.down("1200")]: {
            '&': {
                width: '100%',
            }
        },
    },
    imgArea: {
        position: 'relative',
        width: '60%',
        [theme.breakpoints.down("1200")]: {
            '&': {
                width: '100%',
            }
        },
    },
    shadowedBorder: {
        border: '6px solid #B2B1B0',
        filter: 'drop-shadow(-5px 5px 4px rgba(0, 0, 0, 0.25))',
        width: '203px',
        height: '203px',
        paddingBottom: 15,
        '& img': {
            objectFit: 'cover',
            marginLeft: '-15px',
            marginTop: '-25px',
            maxWidth: '100%',
            width: '100%',
            height: '203px',
        },
        [theme.breakpoints.down("1500")]: {
            '&': {
                width: '150px',
                height: '150px',
                '& img': {
                    height: '150px',
                    width: '100%',
                }
            }
        },
        [theme.breakpoints.down("1200")]: {
            '&': {
                width: '110px',
                height: '110px',
                '& img': {
                    height: '110px',
                    width: '100%',
                }
            }
        },
        [theme.breakpoints.down("575")]: {
            '&': {
                width: '110px',
                height: '110px',
                '& img': {
                    height: '110px',
                    width: '100%',
                }
            }
        },
    },
    txtArea: {
        marginTop: '40px',
        width: '40%',
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
        '& .title': {
            fontWeight: 700,
            fontSize: 15,
            lineHeight: '18px',
            color: 'white',
            width: '100%',
            textAlign: 'left',
        },
        '& .price': {
            marginTop: 10,
            color: '#EC6A32',
            fontSize: 15,
            fontWeight: 700,
            width: '100%',
            textAlign: 'left',
            fontFamily: 'Georgia'
        },
        '& .txt': {
            fontSize: 30,
            fontWeight: 700,
        },
        '& .linkTo': {
            width: '102px',
            height: 34,
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.5)',
            background: '#FFF',
            borderRadius: 20,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 15,
            fontWeight: 700,
            lineHeight: '18px',
            color: '#854C4C',
            marginTop: 9,
            marginLeft: 'auto',
        },
        [theme.breakpoints.down("1200")]: {
            '&': {
                width: '100%',
            },
            '& .title': {
                fontSize: 13,
                height: 40,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
            },
            '& .price': {
                fontSize: 13,
            },
            '& .linkTo': {
                width: '100px',
                height: '30px',
                fontSize: 13,
            }
        },
        [theme.breakpoints.down("575")]: {
            '& .title': {
                fontSize: 12,
                overflow: 'unset',
                textOverflow: 'unset',
                height: 'auto',
            },
            '& .price': {
                fontSize: 12,
            },
            '& .linkTo': {
                width: '90px',
                height: '30px',
                fontSize: 13,
            }
        },
    },
    txtAreaInner: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        height: '100%',
        '& .description': {
            fontSize: 15,
            lineHeight: '18px',
            height: '72px',
            textOverflow: 'ellipsis',
            width: '100%',
            maxWidth: '100%',
            overflow: 'hidden',
            paddingLeft: '10px',
        },
        '& .price': {
            fontSize: '30px',
            fontWeight: 700,
            color: '#343434',
            fontFamily: 'Georgia'
        }
    },
    detailsArea: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '307px',
        maxWidth: '100%',
    },
    linkToDetails: {
        display: 'inline-block',
        width: '102px',
        maxWidth: '100%',
        height: 34,
        padding: 5,
        borderRadius: 20,
        textAlign: 'center',
        '&.dark': {
            background: '#343434',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.5)',
            '& span': {
                color: 'white',
                border: '1px solid #FFFFFF',
            }
        },
        '&.light': {
            background: '#FFFFFF',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.5)',
            '& span': {
                color: '#854C4C',
                border: '1px solid #854C4C',
            }
        },
        '& span': {
            fontSize: 15,
            fontWeight: 700,
            lineHeight: '18px',
            borderRadius: 20,
            padding: 1.5,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }
    },
}))

export default useStyles;