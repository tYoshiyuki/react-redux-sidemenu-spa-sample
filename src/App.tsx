import { createStyles, WithStyles, withStyles } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import createHistory from 'history/createBrowserHistory';
import * as React from 'react';
import { Router } from 'react-router';
import Contents from './components/Contents';
import Header from './containers/Header';
import Sidebar from './containers/Sidebar';

const history = createHistory();

interface IProps extends WithStyles<typeof styles> { }

const styles = createStyles({
  root: {
    display: 'flex',
  },
});

class App extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  public render() {
    const { classes } = this.props;
    return (
      <Router history={history}>
        <div className={classes.root}>
          <CssBaseline />
          <Header />
          <Sidebar />
          <Contents />
        </div>
      </Router>
    );
  }
}

export default withStyles(styles)(App);
