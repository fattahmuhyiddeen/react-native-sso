import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text
} from "react-native";
import PropTypes from "prop-types";

const LoginSuccess = ({ store }) => {
  return (
    <View style={styles.modalBody}>
      <View
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          backgroundColor: "grey"
        }}
      />
      <Text style={{ fontSize: 18, margin: 10 }}>Congratulations!</Text>
      <Text style={{ fontSize: 18, margin: 10 }}>
        Your Unifi ID has been created
      </Text>
      <TouchableOpacity
        onPress={store.action.hideModal}
        style={[styles.button, { backgroundColor: "grey" }]}
      >
        <Text style={{ fontSize: 20, color: "white" }}>LET'S GET STARTED</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  modalBody: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    width: "90%",
    alignItems: "center"
  },
  modalTextInput: {
    borderColor: "grey",
    borderWidth: 1,
    width: "100%",
    marginVertical: 10,
    padding: 10
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

LoginSuccess.propTypes = {};

LoginSuccess.defaultProps = {};

export default LoginSuccess;
