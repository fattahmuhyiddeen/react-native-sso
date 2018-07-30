import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text
} from "react-native";
import PropTypes from "prop-types";

const Register = ({ store }) => {
  return (
    <View style={styles.modalBody}>
      <Text style={{ fontSize: 16 }}>SIGN UP</Text>
      <Text>Lorem Ipsum</Text>
      <TextInput style={styles.modalTextInput} placeholder="Email Address" />
      <TextInput
        style={styles.modalTextInput}
        placeholder="Password"
        secureTextEntry
      />
      <TextInput
        style={styles.modalTextInput}
        placeholder="Confirm Password"
        secureTextEntry
      />
      <View style={{ width: "100%", alignItems: "flex-end" }}>
        <TouchableOpacity onPress={store.action.hideModal}>
          <Text style={{ textDecorationLine: "underline" }}>Back</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={store.action.showLoginSuccess}
        style={[styles.button, { backgroundColor: "grey" }]}
      >
        <Text style={{ fontSize: 20, color: "white" }}>CREATE UNIFI ID</Text>
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

Register.propTypes = {};

Register.defaultProps = {};

export default Register;
