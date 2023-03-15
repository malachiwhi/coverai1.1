/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Skills(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="335px"
      height="215px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Skills")}
      {...rest}
    >
      <View
        width="335px"
        height="147px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="31.63%"
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
        fontWeight="500"
        color="rgba(0,0,0,1)"
        lineHeight="27px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="236px"
        height="43px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="0%"
        bottom="80%"
        left="0%"
        right="29.55%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Related Skills, Projects, or Certifications "
        {...getOverrideProps(
          overrides,
          "Related Skills, Projects, or Certifications"
        )}
      ></Text>
    </View>
  );
}
