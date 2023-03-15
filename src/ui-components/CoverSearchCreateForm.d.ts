/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CoverSearchCreateFormInputValues = {
    FirstName?: string;
    LastName?: string;
    Experience?: string;
    PrevPos?: string;
    Why?: string;
    Skills?: string;
    CompNpos?: string;
};
export declare type CoverSearchCreateFormValidationValues = {
    FirstName?: ValidationFunction<string>;
    LastName?: ValidationFunction<string>;
    Experience?: ValidationFunction<string>;
    PrevPos?: ValidationFunction<string>;
    Why?: ValidationFunction<string>;
    Skills?: ValidationFunction<string>;
    CompNpos?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CoverSearchCreateFormOverridesProps = {
    CoverSearchCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    FirstName?: PrimitiveOverrideProps<TextFieldProps>;
    LastName?: PrimitiveOverrideProps<TextFieldProps>;
    Experience?: PrimitiveOverrideProps<TextFieldProps>;
    PrevPos?: PrimitiveOverrideProps<TextFieldProps>;
    Why?: PrimitiveOverrideProps<TextFieldProps>;
    Skills?: PrimitiveOverrideProps<TextFieldProps>;
    CompNpos?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CoverSearchCreateFormProps = React.PropsWithChildren<{
    overrides?: CoverSearchCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CoverSearchCreateFormInputValues) => CoverSearchCreateFormInputValues;
    onSuccess?: (fields: CoverSearchCreateFormInputValues) => void;
    onError?: (fields: CoverSearchCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CoverSearchCreateFormInputValues) => CoverSearchCreateFormInputValues;
    onValidate?: CoverSearchCreateFormValidationValues;
} & React.CSSProperties>;
export default function CoverSearchCreateForm(props: CoverSearchCreateFormProps): React.ReactElement;
