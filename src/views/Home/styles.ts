import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => ({
    homepageWrapper: {
        marginTop: '53px',
    },
    mainSection: {
        padding: '0 1%',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    lineImg: {
        position: 'absolute',
        left: -110,
        bottom: -40,
        width: '90%',
        height: 'auto',
    },
    column: {
        width: '50%',
        '&.second-column': {
            background: '#343434',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.5)',
            borderRadius: 20,
            padding: '112px 25px 100px',
            '& *': {
                color: 'white',
            },
            '& hr': {
                background: 'white',
            },
            '& $txtArea': {
                marginTop: '-40px',
                marginLeft: 0,
                marginRight: 70,
            },
            '& $shadowedBorder': {
                '& img:not($lineImg)': {
                    width: '323px',
                    height: '442px',
                    marginLeft: '-25px',
                }
            },
            '& .price': {
                color: 'white',
                order: 1,
            }
        },
        '& .first-item': {
            marginTop: '101px',
        },
    },
    line: {
        background: 'black',
        paddingBottom: '3px',
        marginBottom: '10px',
        border: 'none',
    },
    titleArea: {
        width: '237px',
        maxWidth: '100%',
        margin: '0 auto',
        textAlign: 'center',
        '& .txt': {
            fontSize: 45,
            lineHeight: '54px',
            fontWeight: 700,
            color: 'black',
            marginBottom: '-8px',
        },
        '& .first-line': {
            margin: '0 auto 10px',
            width: '165px',
        },
        '& .second-line': {
            margin: '10px auto 0',
            width: '140px',
        }
    },
    imgArea: {
        position: 'relative',
    },
    shadowedBorder: {
        border: '6px solid #B2B1B0',
        filter: 'drop-shadow(-5px 5px 4px rgba(0, 0, 0, 0.25))',
        paddingBottom: 15,
        position: 'relative',
        '& img:not($lineImg)': {
            width: '290px',
            height: '409px',
            minHeight: '260px',
            objectFit: 'cover',
            marginLeft: '-35px',
            marginTop: '-27px',
            maxWidth: '100%',
        }
    },
    txtArea: {
        marginLeft: 26,
        marginTop: '40px',
        height: 409,
        '& .txt': {
            fontSize: 30,
            fontWeight: 700,
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
    sliderSection: {
        background: 'white',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.5)',
        borderRadius: 20,
        marginTop: '-20px',
        zIndex: 2,
        position: 'relative',
    }
}))

export default useStyles;