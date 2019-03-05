import { Dispatch } from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import Users from 'src/components/Users';
import { IUsersSearchCondition, usersActions } from 'src/modules/Users';
import { IReduxState } from 'src/store';

const mapDispatchToProps = (dispatch: Dispatch<Action<any>>) => ({
    actions: {
        search: (searchCondition: IUsersSearchCondition) => dispatch(usersActions.searchAsync.started({ results: searchCondition.results }))
    }
});

const mapStateToProps = (reduxState: IReduxState) => ({ value: reduxState.users });

export default connect(mapStateToProps, mapDispatchToProps)(Users);