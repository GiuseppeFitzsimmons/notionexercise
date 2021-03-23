import { React } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import { ExitToApp } from '@material-ui/icons';

function Header(props) {
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        title: {
            flexGrow: 3,
            color: props.theme.palette.label
        },
        salutation: {
            flexGrow: 1,
            color: props.theme.palette.salutation,
            fontStyle: 'bold',
        }
    }));
    console.log('header props', props)
    const classes = useStyles();
    return (
        <div>
            <AppBar position="absolute" color='transparent' style={{ position: 'absolute', borderRadius: '4px', left: '5%', top: '5%', width: '90%' }}>
                <Toolbar style={{ justifyContent: 'space-evenly' }}>
                    <Typography variant="h6" className={classes.title}>
                        {props.location === 'home' ? 'Acceuil' : 'Mes interventions'}
                    </Typography>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <img src="/repair-service.png" alt="your slogan here" height='24px' style={{ marginRight: '24px' }} />
                        <Typography variant="h7" className={classes.salutation}>
                            Bonjour, John
                        </Typography>
                        <div style={{ paddingLeft: '16px', paddingRight: '16px', marginLeft: '24px', marginRight: '24px', padisplay: 'flex', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: props.theme.palette.label, borderRadius: '2px', color: 'white', fontSize: 'small' }}>
                            {new Date().toLocaleDateString("fr-FR")}
                        </div>
                        <ExitToApp color="primary" />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default withTheme(Header)