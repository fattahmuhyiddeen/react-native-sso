import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Resolution from "./style/Resolution";
import PropTypes from "prop-types";
import Routes from "./route";
import Modal from "./modal";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: {
        type: ""
      },
      routes: [Routes[0]],
      themeColor: props.themeColor,
      currency: props.currency,
      balance: props.initialBalance,
      selectedReloadAmount: null,
      newScreenOffSet: 0,
      screen: {
        reloadNotification: {
          scenario: "fail" //first_success/success/fail
        }
      }
    };
  }

  //navigation actions / emulating react navigation
  navigation = {
    navigate: screen => {
      const { routes } = this.state;
      for (let i = 0; i < Routes.length; i++) {
        if (Routes[i].name === screen) {
          routes.push(Routes[i]);
          routes[routes.length - 1].isNew = true;
          return this.setState({
            routes,
            newScreenOffSet: Resolution.deviceWidth
          });
        }
      }
    },
    goBack: () => {
      const { routes } = this.state;
      if (routes.length > 1) {
        routes.pop();
        this.setState({ routes });
      } else {
        this.props.onExit();
      }
    },
    onExit: this.props.onExit
  };
  //end navigation

  //getter method to get global state
  select = {
    balance: () => (this.state.balance / 100).toFixed(2),
    didSelectReloadAmount: () => this.state.selectedReloadAmount != null
  };
  //end getter

  //actionto change states / simulate redux action
  action = {
    set: (s, v) => this.setState({ [s]: v }),
    setBalance: balance => {
      this.setState({ balance });
      this.props.onBalanceChanged(balance);
    },
    selectReloadAmount: v =>
      this.setState({ selectedReloadAmount: this.props.presetReloadAmount[v] }),
    showLogin: () => {
      const modal = this.state.modal;
      modal.type = "login";
      this.setState({ modal });
    },
    showLoginSuccess: () => {
      const modal = this.state.modal;
      modal.type = "loginSuccess";
      this.setState({ modal });
    },
    hideModal: () => {
      const modal = this.state.modal;
      modal.type = "";
      this.setState({ modal });
    }
  };
  //end action

  //public function that accessible from parent using ref
  getBalance = () => this.state.balance;
  //end public function

  // componentDidUpdate(prevProps, prevState) {
  //   // only update chart if the data has changed
  //   if (prevProps.data !== this.props.data) {
  //     this.chart = c3.load({
  //       data: this.props.data
  //     });
  //   }
  // }

  render() {
    console.log(this.state);
    const { routes, modal } = this.state;
    const store = {
      navigation: this.navigation,
      state: this.state,
      select: this.select,
      action: this.action
    };
    const screens = [];
    for (let i = 0; i < routes.length; i += 1) {
      let offSetStyle = null;
      // if (i + 1 == routes.length && routes[i].isNew) {
      //   offSetStyle = {
      //     left: Resolution.deviceHeight,
      //     right: -Resolution.deviceWidth
      //   };
      // }
      let s = (
        <View
          backgroundColor="white"
          key={i}
          style={[styles.screen, offSetStyle]}
        >
          {React.createElement(routes[i].screen, {
            store
          })}
        </View>
      );
      screens.push(s);
    }
    return (
      <View style={styles.container}>
        {screens}
        <Modal store={store} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3B4A5C"
  },
  screen: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }
});

App.propTypes = {
  onExit: PropTypes.func,
  themeColor: PropTypes.string,
  currency: PropTypes.string,
  balance: PropTypes.number,
  onBalanceChanged: PropTypes.func
};

App.defaultProps = {
  onExit: () => null,
  themeColor: "#3B4A5C",
  currency: "MYR",
  initialBalance: 0,
  onBalanceChanged: balance => null
};
export default App;
