import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: any) => ({
    container: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        borderRadius: 20,
        padding: '7% 11%',
        width: '98%',
        maxWidth: '100%',
        margin: '23px auto 30px',
        position: 'relative',
    },
    imgArea: {
        position: 'relative',
        width: '50%',
    },
    lineImg: {
        position: 'absolute',
        left: -125,
        bottom: -55,
        width: '75%',
        height: 'auto',
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
        }
    },
    txtArea: {
        marginTop: '40px',
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
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
                bottom: 0,
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
            marginTop: 100,
            fontSize: 20,
            lineHeight: '22px',
            marginBottom: 102,
            textAlign: 'center'
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
    productLogoArea: {

    }
}))

export default useStyles;