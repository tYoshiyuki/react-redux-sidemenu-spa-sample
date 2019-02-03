import { Button, createStyles, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Theme, Toolbar, Typography, withStyles, WithStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';
import * as React from 'react';
import { IHeaderAction, IHeaderState } from 'src/modules/Header';

interface IProps extends WithStyles<typeof styles> {
    actions: IHeaderAction,
    value: IHeaderState,
}

interface ILocalState {
    open: boolean,
}

const styles = ( { zIndex } : Theme ) => createStyles({
    appBar: {
        zIndex: zIndex.drawer + 1,
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
});

class Header extends React.Component<IProps, ILocalState> {
    constructor(props: IProps) {
        super(props);
        this.onClickMenu = this.onClickMenu.bind(this);
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            open: false,
        }
    }

    public render() {
        const { classes, value } = this.props;        
        return(
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.onClickMenu}>
                        {value.isOpen ? <ChevronLeftIcon /> : <MenuIcon />}                        
                    </IconButton>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        React Sidemenu SPA Sample
                    </Typography>
                    <Button color="inherit" onClick={this.handleClickOpen}>Login</Button>
                    <Dialog
                        open={this.state.open}
                        onClose={this.handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">{"Nothing"}</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                            No Content
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClose} color="primary" autoFocus={true}>
                            Close
                            </Button>
                        </DialogActions>
                    </Dialog>                    
                </Toolbar>
            </AppBar>
        );
    }

    private onClickMenu(): void {
        const { actions, value } = this.props;
        value.isOpen ? actions.close() : actions.open();
    }

    private handleClickOpen = () => {
        this.setState({ open: true });
      };
    
    private handleClose = () => {
        this.setState({ open: false });
    };
}

export default withStyles(styles)(Header);
