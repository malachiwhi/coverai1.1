/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function SubmitButton(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="178px"
      height="50px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "SubmitButton")}
      {...rest}
    >
      <View
        padding="0px 0px 0px 0px"
        width="178px"
        height="50px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, "Group 213")}
      >
        <View
          width="178px"
          height="50px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          borderRadius="15px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(217,217,217,0.65)"
          {...getOverrideProps(overrides, "Rectangle 245")}
        ></View>
        <Text
          fontFamily="Poppins"
          fontSize="18px"
          fontWeight="600"
          color="rgba(0,0,0,1)"
          lineHeight="27px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="74px"
          height="23px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="26%"
          bottom="28%"
          left="29.21%"
          right="29.21%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Submit"
          {...getOverrideProps(overrides, "Submit")}
        ></Text>
      </View>
    </View>
  );
}
