/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SkillsOverridesProps = {
    Skills?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 245"?: PrimitiveOverrideProps<ViewProps>;
    "Related Skills, Projects, or Certifications"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SkillsProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SkillsOverridesProps | undefined | null;
}>;
export default function Skills(props: SkillsProps): React.ReactElement;
