/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Years(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="382px"
      height="106px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Years")}
      {...rest}
    >
      <View
        width="350px"
        height="43px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="59.43%"
        bottom="0%"
        left="0%"
        right="8.38%"
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
        width="382px"
        height="42px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="0%"
        bottom="60.38%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Years of Experience In Position (Type “Student” or “Intern” if applicable "
        {...getOverrideProps(
          overrides,
          "Years of Experience In Position (Type \u201CStudent\u201D or \u201CIntern\u201D if applicable"
        )}
      ></Text>
    </View>
  );
}
