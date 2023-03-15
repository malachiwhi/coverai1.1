/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Component9OverridesProps = {
    Component9?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 6"?: PrimitiveOverrideProps<ViewProps>;
    "First Name"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type Component9Props = React.PropsWithChildren<Partial<ViewProps> & {
    Fname?: String;
    rectangle6?: React.ReactNode;
} & {
    overrides?: Component9OverridesProps | undefined | null;
}>;
export default function Component9(props: Component9Props): React.ReactElement;
