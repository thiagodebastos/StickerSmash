import React from "react";
import { Image, ImageSourcePropType, StyleSheet } from "react-native";

interface Props {
  placeholderImageSource: ImageSourcePropType;
  selectedImage?: string;
}

export default function ImageViewer({
  placeholderImageSource,
  selectedImage,
}: Props) {
  const imageSource = selectedImage
    ? { uri: selectedImage }
    : placeholderImageSource;

  return <Image source={imageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
