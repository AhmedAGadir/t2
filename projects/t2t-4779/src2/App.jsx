import React, { Component, PureComponent } from "react";

// redux
import { connect } from "react-redux";
import { actions } from "./reducers/gridActions";
import { bindActionCreators } from "redux";

// components
import AllViews from "./components/AllViews/AllViews";
import { getCurrentViewTabIndex } from "./reducers/selectors";

import TabsView from "./components/TabsView/TabsView";
import ActionButtons from "./components/ActionButtons/ActionButtons";

export class App extends Component {
    render() {
        return (
            <div className="main-container">
                <ActionButtons />
                <div className="flex-container">
                    <AllViews className="all-views"></AllViews>
                    <TabsView className="tabs-view"></TabsView>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        allViews: state.allViews,
        currentViewInfo: state.currentViewInfo,
        currentViewTabIndex: getCurrentViewTabIndex(state),
    };
};

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch),
});

// const ExportApp = connect(mapStateToProps, mapDispatchToProps)(App)
// export default ExportApp 

//I think this is the issue based on the error message
export default connect(mapStateToProps, mapDispatchToProps)(App)