/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
import { FirstNameProps } from "./FirstName";
import { PreviousRelatedProps } from "./PreviousRelated";
import { WhyProps } from "./Why";
import { SkillsProps } from "./Skills";
import { YearsProps } from "./Years";
import { PositionProps } from "./Position";
import { LastNameProps } from "./LastName";
import { SubmitButtonProps } from "./SubmitButton";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HomePageOverridesProps = {
    HomePage?: PrimitiveOverrideProps<ViewProps>;
    "CoverAI Cover Letter Creator"?: PrimitiveOverrideProps<TextProps>;
    "First Name"?: FirstNameProps;
    "Previous/Related"?: PreviousRelatedProps;
    "Why?"?: WhyProps;
    Skills?: SkillsProps;
    Years?: YearsProps;
    Position?: PositionProps;
    "Last Name"?: LastNameProps;
    "Submit Button"?: SubmitButtonProps;
} & EscapeHatchProps;
export declare type HomePageProps = React.PropsWithChildren<Partial<ViewProps> & {
    fName?: String;
    lName?: String;
    Pos?: String;
    experience?: String;
    skills?: String;
    why?: String;
    prePos?: String;
} & {
    overrides?: HomePageOverridesProps | undefined | null;
}>;
export default function HomePage(props: HomePageProps): React.ReactElement;
