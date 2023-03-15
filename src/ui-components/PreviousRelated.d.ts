/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PreviousRelatedOverridesProps = {
    PreviousRelated?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 245"?: PrimitiveOverrideProps<ViewProps>;
    "Previous/Related Position (Include Company)"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type PreviousRelatedProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: PreviousRelatedOverridesProps | undefined | null;
}>;
export default function PreviousRelated(props: PreviousRelatedProps): React.ReactElement;
