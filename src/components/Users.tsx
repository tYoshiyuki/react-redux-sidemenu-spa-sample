import { CircularProgress, createStyles, Grid, Theme, WithStyles, withStyles } from '@material-ui/core';
import * as React from 'react';
import { IUsersAction, IUsersState } from 'src/modules/Users';
import UsersPannel from './UsersPannel';

interface IProp extends WithStyles<typeof styles> {
    actions: IUsersAction,
    value: IUsersState,
}

const styles = ({ spacing }: Theme) => createStyles({
    formControl: {
        margin: spacing.unit,
        minWidth: 120,
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
});

class Users extends React.Component<IProp> {
    constructor(props: IProp) {
        super(props);
    }

    public render() {
        // tslint:disable:jsx-no-lambda
        const { value } = this.props;
        return (
            <div>
                <Grid container={true} spacing={8}>
                {(!value.searchResponse || value.isSearching) && <CircularProgress />}
                {(value.searchResponse && !value.isSearching) && value.searchResponse.results.map((r, i) => {
                    return (
                        <Grid key={i} item={true} xs={6}>
                            <UsersPannel key={i} {...{ result: r }} />
                        </Grid>
                    );
                })}
                </Grid>
            </div>
        );
        // tslint:enable:jsx-no-lambda
    }

    public componentDidMount(): void {
        this.props.actions.search({ results: 10 });
    }
}

export default withStyles(styles)(Users);