/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FirstNameOverridesProps = {
    FirstName?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 245"?: PrimitiveOverrideProps<ViewProps>;
    "First Name"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type FirstNameProps = React.PropsWithChildren<Partial<ViewProps> & {
    rectangle245?: React.ReactNode;
} & {
    overrides?: FirstNameOverridesProps | undefined | null;
}>;
export default function FirstName(props: FirstNameProps): React.ReactElement;
