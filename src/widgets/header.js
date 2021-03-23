import { React } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { ExitToApp } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    floatingButton: {
        position: 'absolute',
        bottom: theme.spacing(4),
        right: theme.spacing(4)
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 3,
        color: 'blue'
    },
    salutation: {
        flexGrow: 1,
        color: 'black',
        fontStyle: 'bold'
    }
}));


export default function Header(props) {
    console.log('header props', props)
    const classes = useStyles();
    return (
        <div>
            <AppBar position="absolute" color='transparent' style={{ position: 'absolute', borderRadius: '4px', left: '5%', top: '5%', width: '90%' }}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        {props?.location}
                    </Typography>
                    <Typography variant="h7" className={classes.salutation} style={{ fontStyle: 'bold' }}>
                        from router config
          </Typography>

                    <ExitToApp color="primary" />
                </Toolbar>
            </AppBar>
            <Fab size="small" color="primary" aria-label="add" className={classes.floatingButton}>
                <AddIcon />
            </Fab>
        </div>
    )
}