import { Card, CardContent, CardHeader, CardMedia, createStyles, Theme, Typography, withStyles, WithStyles } from '@material-ui/core';
import * as React from 'react';
import { IResult } from 'src/modules/Users';

interface IProp extends WithStyles<typeof styles> {
    result: IResult,
}

const styles = ({ spacing } : Theme) => createStyles({
    card: {
        display: 'flex',
        margin: spacing.unit,
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    image: {
        height: 140,
        margin: spacing.unit * 3,
        width: 140,
    }
});

const UsersPannel: React.FC<IProp> = props => {
    const { classes, result } = props;

    return (
        <Card key={result.id.value} className={classes.card}>
            <div className={classes.details}>
                <CardHeader title={result.name.first + ' ' + result.name.last} />
                <CardContent>
                    <Typography color="textSecondary">
                        {result.location.timezone.description}
                    </Typography>
                    <Typography color="textSecondary">
                        {result.phone}
                    </Typography>
                    <Typography color="textSecondary">
                        {result.email}
                    </Typography>
                </CardContent>
            </div>
            <div className={classes.details} >
                <CardMedia image={result.picture.medium} className={classes.image} />
            </div>
        </Card>    
    );    
}

export default withStyles(styles)(UsersPannel);