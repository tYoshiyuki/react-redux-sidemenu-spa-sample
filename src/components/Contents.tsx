import { createStyles, Theme, WithStyles, withStyles } from '@material-ui/core';
import * as React from 'react';
import { Route } from 'react-router';
import Users from 'src/containers/Users';

interface IProp extends WithStyles<typeof styles> { }

const styles = ({ mixins, spacing } : Theme) => createStyles({
    content: {
        flexGrow: 1,
        padding: spacing.unit * 3,
    },
    toolbar: mixins.toolbar,
});

class Contents extends React.Component<IProp> {
    constructor(props: IProp) {
        super(props);
    }

    public render() {
        const { classes } = this.props;
        return(
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Route exact={true} path="/" component={Init} />                    
                <Route path="/users" component={Users} />
                <Route path="/menu02" component={Menu02} />
                <Route path="/menu03" component={Menu03} />                                        
            </main>
        );
    }
}

const Init: React.FC<{}> = props => (
    <div>This is main Contents!!</div>
);

const Menu02: React.FC<{}> = props => (
    <div>This is menu02 Contents</div>
);

const Menu03: React.FC<{}> = props => (
    <div>This is menu03 Contents</div>
);

export default withStyles(styles)(Contents);