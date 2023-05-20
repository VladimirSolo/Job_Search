import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./footer.style";
import { images } from "../../../constants";
import { Linking } from "react-native";

const Footer = ({ url }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.likeBtn}>
        <Image
          source={images.heart}
          resizeMode="contain"
          style={styles.likeBtnImage}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.applyBtn}
        onPress={() => Linking.openURL(url)}
      >
        <Text style={styles.applyBtnText}>Apply</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
