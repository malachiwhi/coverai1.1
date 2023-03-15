/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type YearsOverridesProps = {
    Years?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 245"?: PrimitiveOverrideProps<ViewProps>;
    "Years of Experience In Position (Type \u201CStudent\u201D or \u201CIntern\u201D if applicable"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type YearsProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: YearsOverridesProps | undefined | null;
}>;
export default function Years(props: YearsProps): React.ReactElement;
