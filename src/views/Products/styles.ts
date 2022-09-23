import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => ({
    productsPageWrapper: {
        marginTop: '66px',
    },
    noResults: {
        color: 'black',
    },
    mainSection: {
        padding: '0 4%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: '48px',
        flexWrap: 'wrap',
        '& $noResults': {
            margin: '0 auto',
            fontSize: 20,
            fontWeight: 'bold',
        }
    },
    categoryContainer: {
        '& .category-title': {
            fontWeight: 700,
            fontSize: 25,
            lineHeight: '30px',
            color: '#000',
            marginBottom: '9px',
            width: '96%',
            maxWidth: '100%',
            paddingLeft: '40px',
        },
        '& hr': {
            border: '3px solid #FFFFFF',
            boxShadow: '0px 4px 2px rgba(0, 0, 0, 0.25)',
            borderRadius: 20,
            width: '96%',
            maxWidth: '100%',
            margin: '15px auto 0',
        },
        [theme.breakpoints.down("991")]: {
            '& .category-title': {
                fontSize: 20,
            }
        },
        [theme.breakpoints.down("575")]: {
            '& .category-title': {
                fontSize: 15,
            }
        }
    },
    item: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        background: '#343434',
        boxShadow: '0px 4px 4px rgb(0 0 0 / 50%)',
        borderRadius: 20,
        padding: '3% 2%',
        width: '30%',
        maxWidth: '100%',
        marginBottom: '30px',
        '&:nth-child(3n+1)': {
            marginRight: '15px',
        },
        '&:nth-child(3n+2)': {
            margin: '0 15px 30px',
        },
        '&:nth-child(3n)': {
            marginLeft: '15px',
        },
        [theme.breakpoints.down("991")]: {
            '&': {
                width: '48.5%',
            },
            '&:nth-child(3n+1)': {
                marginBottom: 30,
                marginRight: 0,
            },
            '&:nth-child(3n+2)': {
                margin: '0 0 30px',
            },
            '&:nth-child(3n)': {
                marginBottom: 30,
                marginLeft: 0,
            },
        },
        [theme.breakpoints.down("575")]: {
            '&': {
                width: '100%',
            },
            '&:nth-child(3n+1)': {
                marginBottom: 30,
                marginRight: 0,
            },
            '&:nth-child(3n+2)': {
                margin: '0 0 30px',
            },
            '&:nth-child(3n)': {
                marginBottom: 30,
                marginLeft: 0,
            },
        }
    },
    imgArea: {
        position: 'relative',
        width: '60%',
        [theme.breakpoints.down("575")]: {
            '&': {
                width: '50%',
            }
        }
    },
    shadowedBorder: {
        border: '6px solid #B2B1B0',
        filter: 'drop-shadow(-5px 5px 4px rgba(0, 0, 0, 0.25))',
        width: '203px',
        height: '203px',
        maxWidth: '100%',
        paddingBottom: 15,
        '& img': {
            objectFit: 'cover',
            marginLeft: '-15px',
            marginTop: '-25px',
            maxWidth: '100%',
            width: '100%',
            height: '203px',
        },
        [theme.breakpoints.down("1200")]: {
            '&': {
                height: '150px',
                width: '180px',
                '& img': {
                    height: '150px',
                }
            }
        },
        [theme.breakpoints.down("991")]: {
            '&': {
                height: '140px',
                width: '170px',
                '& img': {
                    height: '140px',
                }
            }
        },
        [theme.breakpoints.down("575")]: {
            '&': {
                height: '130px',
                width: '170px',
                '& img': {
                    height: '130px',
                }
            }
        }
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
        [theme.breakpoints.down("1600")]: {
            '&': {
                paddingLeft: 10,
            }
        },
        [theme.breakpoints.down("1400")]: {
            '& .title': {
                wordBreak: 'break-word',
            }
        },
        [theme.breakpoints.down("1200")]: {
            '&': {
                paddingLeft: 5,
            },
            '& .title': {
                fontSize: 13,
                height: 40,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
            },
            '& .linkTo': {
                fontSize: 13,
                width: '90px',
                height: 30,
            }
        },
        [theme.breakpoints.down("575")]: {
            '&': {
                width: '50%',
            },
        }
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
}))

export default useStyles;