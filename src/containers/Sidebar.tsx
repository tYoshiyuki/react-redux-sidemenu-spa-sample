import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Sidebar from 'src/components/Sidebar';
import { IReduxState } from 'src/store';
import { Action } from 'typescript-fsa';

const mapDispatchToProps = (dispatch: Dispatch<Action<any>>) => ({
    actions: { }
});

const mapStateToProps = (reduxState: IReduxState) => ({ value: reduxState.sidebar });

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
