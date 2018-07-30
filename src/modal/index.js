import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Animated,
  TextInput,
  TouchableOpacity,
  Modal
} from "react-native";
import PropTypes from "prop-types";
import Login from "./login";
import Register from "./register";
import LoginSuccess from "./loginSuccess";

const CustomModal = ({ store }) => {
  const { modal } = store.state;
  return (
    <Modal animationType="fade" visible={modal.type != ""} transparent>
      <TouchableOpacity
        activeOpacity={1}
        onPress={store.action.hideModal}
        style={styles.modalBG}
      >
        {modal.type == "login" && <Login store={store} />}
        {modal.type == "loginSuccess" && <LoginSuccess store={store} />}
        {modal.type == "register" && <Register store={store} />}
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBG: {
    backgroundColor: "#00000088",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

CustomModal.propTypes = {};

CustomModal.defaultProps = {};
export default CustomModal;
