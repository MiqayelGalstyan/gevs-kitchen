import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => ({
    container: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        background: '#FFFFFF',
        boxShadow: '0px 4px 4px rgb(0 0 0 / 50%)',
        borderRadius: 20,
        padding: '7% 11%',
        width: '98%',
        maxWidth: '100%',
        margin: '23px auto 30px',
        position: 'relative',
        '& .price': {
            marginTop: 10,
            color: '#EC6A32',
            fontSize: 50,
            fontWeight: 700,
            textAlign: 'left',
            position: 'absolute',
            right: '7%',
            bottom: '3%',
            display: 'inline-block',
            fontFamily: 'Georgia'
        },
        [theme.breakpoints.down("1400")]: {
            '& .price': {
                fontSize: 40,
            }
        },
        [theme.breakpoints.down("1200")]: {
            '&': {
                padding: '7% 10%',
            },
            '& .price': {
                fontSize: 30,
            }
        },
        [theme.breakpoints.down("767")]: {
            '&': {
                width: '100%',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '7% 11%',
            },
            '& .price': {
                right: '3%',
                bottom: 0,
                fontSize: 20,
            },
        },
    },
    imgArea: {
        position: 'relative',
        width: '50%',
        [theme.breakpoints.down("767")]: {
            '&': {
                width: '100%',
                paddingTop: 35,
            }
        },
    },
    lineImg: {
        position: 'absolute',
        left: -125,
        bottom: -55,
        width: '75%',
        height: 'auto',
        [theme.breakpoints.down("1200")]: {
            width: '55%',
            left: -65,
            bottom: -35,
        },
        [theme.breakpoints.down("767")]: {
            left: -40,
            bottom: -30,
            width: '50%',
        }
    },
    shadowedBorder: {
        border: '6px solid #B2B1B0',
        filter: 'drop-shadow(-5px 5px 4px rgba(0, 0, 0, 0.25))',
        width: '455px',
        height: 'auto',
        maxWidth: '100%',
        paddingBottom: 15,
        position: 'relative',
        '& img:not($lineImg)': {
            objectFit: 'cover',
            marginLeft: '-25px',
            marginTop: '-25px',
            maxWidth: '100%',
            width: '100%',
            height: 'auto',
            minHeight: '420px',
        },
        [theme.breakpoints.down("767")]: {
            '&': {
                margin: '0 auto',
            },
            '& img:not($lineImg)': {
                minHeight: '350px',
            }
        },
        [theme.breakpoints.down("575")]: {
            '& img:not($lineImg)': {
                minHeight: '300px',
                marginLeft: '-20px',
                marginTop: '-20px',
            }
        }
    },
    imagesList: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginTop: 70,
        maxWidth: '100%',
        '& .additional-img-area': {
            width: '25%',
            marginBottom: 15,
            '& img': {
                width: '150px',
                height: '120px',
                objectFit: 'cover',
                cursor: 'pointer',
            },
            '& img.active': {
                border: '6px solid #B2B1B0',
            }
        },
        '& .additional-img-area:nth-child(3n+1)': {
            marginRight: 10,
        },
        '& .additional-img-area:nth-child(3n+2)': {
            margin: '0 10px 15px',
        },
        '& .additional-img-area:nth-child(3n)': {
            marginLeft: 10,
        },
        [theme.breakpoints.down("1600")]: {
            '& div.additional-img-area:nth-child(3n+1)': {
                marginRight: 20,
            },
        },
        [theme.breakpoints.down("1400")]: {
            '& div.additional-img-area': {
                width: '32%',
            },
            '& div.additional-img-area:nth-child(3n+1)': {
                marginRight: 20,
            },
            '& div.additional-img-area:nth-child(3n)': {
                marginLeft: 0,
            }
        },
        [theme.breakpoints.down("1200")]: {
            '& div.additional-img-area': {
                width: '32%',
                '& img': {
                    width: '100%',
                    height: '100px',
                }
            },
            '& div.additional-img-area:nth-child(3n+1)': {
                marginRight: 0,
            },
            '& div.additional-img-area:nth-child(3n)': {
                marginLeft: 0,
            }
        },
        [theme.breakpoints.down("991")]: {
            '& div.additional-img-area': {
                '& img': {
                    width: '135px',
                    height: '115px',
                }
            },
        },
        [theme.breakpoints.down("767")]: {
            '&': {
                margin: '60px auto 0',
            },
            '& div.additional-img-area': {
                width: '49%',
                textAlign: 'center',
                '& img': {
                    width: '150px',
                    height: '120px',
                }
            },
            '& div.additional-img-area:nth-child(3n+1)': {
                margin: '0 auto 15px',
            },
            '& div.additional-img-area:nth-child(3n+2)': {
                margin: '0 auto 15px',
            },
            '& div.additional-img-area:nth-child(3n)': {
                margin: '0 auto 15px',
            },
        },
        [theme.breakpoints.down("575")]: {
            '& div.additional-img-area': {
                width: '100%',
            }
        }
    },
    txtArea: {
        marginTop: '40px',
        width: '50%',
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'column',
        alignItems: 'flex-end',
        height: '100%',
        '& .title': {
            fontWeight: 700,
            fontSize: 50,
            lineHeight: '61px',
            textAlign: 'right',
            position: 'relative',
            display: 'inline-block',
            '&::before': {
                content: "''",
                position: 'absolute',
                bottom: -5,
                width: '90%',
                height: '4px',
                background: 'black',
                left: 0,
                right: 0,
                margin: '0 auto',
            },
            '&::after': {
                content: "''",
                position: 'absolute',
                bottom: -15,
                width: '100%',
                height: '2px',
                background: 'black',
                left: 0,
                right: 0,
                margin: '0 auto',
            },
        },
        '& .description': {
            marginTop: 48,
            fontSize: 20,
            lineHeight: '22px',
            marginBottom: 32,
            fontFamily: 'Homenage',
            '& *': {
                fontFamily: 'Homenage', 
            }
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
        [theme.breakpoints.down("1400")]: {
            '& .title': {
                fontSize: 35,
            },
            '& .description': {
                fontSize: 17,
            }
        },
        [theme.breakpoints.down("1200")]: {
            '& .title': {
                fontSize: 25,
                textAlign: 'center',
            },
            '& .description': {
                marginTop: 40,
                marginBottom: 25,
                fontSize: 18,
            }
        },
        [theme.breakpoints.down("767")]: {
            '&': {
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
            },
            '& .title': {
                textAlign: 'center',
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
        },
    },
    productLogoArea: {
        [theme.breakpoints.down("767")]: {
            '& img': {
                width: '100%',
                height: 'auto',
            }
        }
    }
}))

export default useStyles;