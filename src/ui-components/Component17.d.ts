/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Component17OverridesProps = {
    Component17?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 7"?: PrimitiveOverrideProps<ViewProps>;
    "Skills, projects, or certifications related to the desired position:"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Component17Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Component17OverridesProps | undefined | null;
}>;
export default function Component17(props: Component17Props): React.ReactElement;
