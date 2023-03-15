/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { CoverSearch } from "../models";
import {
  getOverrideProps,
  useDataStoreUpdateAction,
} from "@aws-amplify/ui-react/internal";
import { schema } from "../models/schema";
import { Text, View } from "@aws-amplify/ui-react";
export default function Why(props) {
  const { coverSearch, overrides, ...rest } = props;
  const rectangleTwoFourFiveOnClick = useDataStoreUpdateAction({
    fields: {},
    id: coverSearch?.Why,
    model: CoverSearch,
    schema: schema,
  });
  return (
    <View
      width="353px"
      height="257px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Why")}
      {...rest}
    >
      <View
        width="350px"
        height="195px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="24.12%"
        bottom="0%"
        left="0%"
        right="0.85%"
        borderRadius="15px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(217,217,217,0.65)"
        onClick={() => {
          rectangleTwoFourFiveOnClick();
        }}
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
        width="353px"
        height="43px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="0%"
        bottom="83.27%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Why Are You Seeking This Position? Whats Makes You An Ideal Candidate?"
        {...getOverrideProps(
          overrides,
          "Why Are You Seeking This Position? Whats Makes You An Ideal Candidate?"
        )}
      ></Text>
    </View>
  );
}
