import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import NavBar from "../common/Header";
import PropTypes from "prop-types";
import Resolution from "../../style/Resolution";
import FBIcon from "../common/FBIcon";
import GoogleIcon from "../common/GoogleIcon";
const height = Resolution.screenHeight;

const buttonSize = Resolution.isTablet ? 200 : Resolution.deviceWidth * 0.4;

class LandingScreen extends Component {
  render() {
    const { store } = this.props;
    const { navigation, state, select } = store;
    const { themeColor, currency, balance } = state;

    return (
      <View style={styles.container}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "80%"
          }}
        >
          <View
            style={{
              height: 150,
              width: 150,
              borderRadius: 100,
              backgroundColor: "grey",
              marginBottom: 50
            }}
          />
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#3B5998" }]}
          >
            <FBIcon color="white" size={30} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#DB4437" }]}
          >
            <GoogleIcon color="white" size={30} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={store.action.showRegister}
            style={[styles.button, { backgroundColor: "grey" }]}
          >
            <Text style={{ fontSize: 20, color: "white" }}>
              SIGN UP WITH UNIFI
            </Text>
          </TouchableOpacity>

          <View style={{ flexDirection: "row", marginTop: 20 }}>
            <Text style={{}}>Already have an account?</Text>

            <TouchableOpacity onPress={store.action.showLogin}>
              <Text style={{ textDecorationLine: "underline" }}>
                Login Here
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFEFEF",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    marginTop: 20,
    width: "100%",
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10
  }
});

export default LandingScreen;
