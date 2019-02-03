import { Dispatch } from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import Header from 'src/components/Header';
import { headerActions } from 'src/modules/Header';
import { IReduxState } from 'src/store';

const mapDispatchToProps = (dispatch: Dispatch<Action<any>>) => ({
    actions: {
        close: () => dispatch(headerActions.close()),
        open: () => dispatch(headerActions.open()),
    }
});

const mapStateToProps = (reduxState: IReduxState) => ({ value: reduxState.header });

export default connect(mapStateToProps, mapDispatchToProps)(Header);