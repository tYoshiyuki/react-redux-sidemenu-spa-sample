import { createStyles, Drawer, List, ListItem, ListItemIcon, ListItemText, Theme, withStyles, WithStyles } from '@material-ui/core';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SearchIcon from '@material-ui/icons/Search';
import classNames from 'classnames';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { ISidebarState } from 'src/modules/Sidebar';


interface IProps extends WithStyles<typeof styles> {
    value: ISidebarState,
}

const drawerWidth = 240;

const styles = ({ breakpoints, mixins, spacing, transitions } : Theme) => createStyles({
    drawer: {
        flexShrink: 0,
        whiteSpace: 'nowrap',
        width: drawerWidth,
    },
    drawerClose: {
        overflowX: 'hidden',
        transition: transitions.create('width', {
            duration: transitions.duration.leavingScreen,
            easing: transitions.easing.sharp,
        }),
        width: spacing.unit * 7 + 1,
        [breakpoints.up('sm')]: {
          width: spacing.unit * 9 + 1,
        },
    },
    drawerOpen: {
        transition: transitions.create('width', {
            duration: transitions.duration.enteringScreen,
            easing: transitions.easing.sharp,
        }),
        width: drawerWidth,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    toolbar: mixins.toolbar,
});

class Sideber extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }

    public render() {
        const { classes, value } = this.props;        
        return(
            <Drawer className={classNames(classes.drawer, {
                    [classes.drawerOpen]: value.isOpen,
                    [classes.drawerClose]: !value.isOpen
                })} variant="permanent"
                classes={{paper: classNames({
                    [classes.drawerOpen]: value.isOpen,
                    [classes.drawerClose]: !value.isOpen
                })}} open={false}>
                <div className={classes.toolbar} />
                <List>
                    {[{ text: 'Menu01', icon: <BookmarkIcon />},
                        { text: 'Menu02', icon: <FavoriteIcon />},
                        { text: 'Menu03', icon: <SearchIcon />},
                    ].map(obj => 
                        <Link to={obj.text.toLowerCase()} style={{ textDecoration: 'none' }} key={obj.text}>
                            <ListItem button={true} key={obj.text}>
                                    <ListItemIcon>{obj.icon}</ListItemIcon>
                                    <ListItemText primary={obj.text} />
                            </ListItem>
                        </Link>
                    )}
                </List>
            </Drawer>
        );
    }

}

export default withStyles(styles)(Sideber);