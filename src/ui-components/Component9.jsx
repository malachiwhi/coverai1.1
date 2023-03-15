/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Component9(props) {
  const { Fname, rectangle6, overrides, ...rest } = props;
  return (
    <View
      width="313px"
      height="100px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Component9")}
      {...rest}
    >
      <View
        width="313px"
        height="56.52px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="43.48%"
        bottom="0%"
        left="0%"
        right="0%"
        borderRadius="12px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(217,217,217,1)"
        children={rectangle6}
        {...getOverrideProps(overrides, "Rectangle 6")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="18px"
        fontWeight="500"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="-0.05px"
        width="120.93px"
        height="34.78px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="10%"
        bottom="55.22%"
        left="0%"
        right="61.36%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="First Name"
        {...getOverrideProps(overrides, "First Name")}
      ></Text>
    </View>
  );
}
