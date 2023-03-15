/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CoverSearch } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CoverSearchUpdateFormInputValues = {
    FirstName?: string;
    LastName?: string;
    Experience?: string;
    PrevPos?: string;
    Why?: string;
    Skills?: string;
    CompNpos?: string;
};
export declare type CoverSearchUpdateFormValidationValues = {
    FirstName?: ValidationFunction<string>;
    LastName?: ValidationFunction<string>;
    Experience?: ValidationFunction<string>;
    PrevPos?: ValidationFunction<string>;
    Why?: ValidationFunction<string>;
    Skills?: ValidationFunction<string>;
    CompNpos?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CoverSearchUpdateFormOverridesProps = {
    CoverSearchUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    FirstName?: PrimitiveOverrideProps<TextFieldProps>;
    LastName?: PrimitiveOverrideProps<TextFieldProps>;
    Experience?: PrimitiveOverrideProps<TextFieldProps>;
    PrevPos?: PrimitiveOverrideProps<TextFieldProps>;
    Why?: PrimitiveOverrideProps<TextFieldProps>;
    Skills?: PrimitiveOverrideProps<TextFieldProps>;
    CompNpos?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CoverSearchUpdateFormProps = React.PropsWithChildren<{
    overrides?: CoverSearchUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    coverSearch?: CoverSearch;
    onSubmit?: (fields: CoverSearchUpdateFormInputValues) => CoverSearchUpdateFormInputValues;
    onSuccess?: (fields: CoverSearchUpdateFormInputValues) => void;
    onError?: (fields: CoverSearchUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CoverSearchUpdateFormInputValues) => CoverSearchUpdateFormInputValues;
    onValidate?: CoverSearchUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CoverSearchUpdateForm(props: CoverSearchUpdateFormProps): React.ReactElement;
