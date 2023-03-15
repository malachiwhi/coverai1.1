/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
import FirstName from "./FirstName";
import PreviousRelated from "./PreviousRelated";
import Why from "./Why";
import Skills from "./Skills";
import Years from "./Years";
import Position from "./Position";
import LastName from "./LastName";
import SubmitButton from "./SubmitButton";
export default function HomePage(props) {
  const {
    fName = "",
    lName,
    Pos,
    experience,
    skills,
    why,
    prePos,
    overrides,
    ...rest
  } = props;
  return (
    <View
      width="870px"
      height="872px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "HomePage")}
      {...rest}
    >
      <Text
        fontFamily="Poppins"
        fontSize="55px"
        fontWeight="600"
        color="rgba(0,0,0,1)"
        lineHeight="82.5px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="870px"
        height="81px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="0%"
        bottom="90.71%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="CoverAI Cover Letter Creator "
        {...getOverrideProps(overrides, "CoverAI Cover Letter Creator")}
      ></Text>
      <FirstName
        width="335px"
        height="80px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="16.4%"
        bottom="74.43%"
        left="0%"
        right="61.49%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "First Name")}
      ></FirstName>
      <PreviousRelated
        width="335px"
        height="110px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="33.72%"
        bottom="53.67%"
        left="59.31%"
        right="2.18%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Previous/Related")}
      ></PreviousRelated>
      <Why
        width="353px"
        height="257px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="70.53%"
        bottom="0%"
        left="0%"
        right="59.43%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Why?")}
      ></Why>
      <Skills
        width="335px"
        height="215px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="49.54%"
        bottom="25.8%"
        left="59.31%"
        right="2.18%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Skills")}
      ></Skills>
      <Years
        width="382px"
        height="106px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="50.11%"
        bottom="37.73%"
        left="0%"
        right="56.09%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Years")}
      ></Years>
      <Position
        width="350px"
        height="108px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="33.94%"
        bottom="53.67%"
        left="0%"
        right="59.77%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Position")}
      ></Position>
      <LastName
        width="335px"
        height="87px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="16.4%"
        bottom="73.62%"
        left="59.31%"
        right="2.18%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Last Name")}
      ></LastName>
      <SubmitButton
        width="178px"
        height="50px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="86.01%"
        bottom="8.26%"
        left="68.28%"
        right="11.26%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Submit Button")}
      ></SubmitButton>
    </View>
  );
}
