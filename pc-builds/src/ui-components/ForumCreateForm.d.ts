/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ForumCreateFormInputValues = {
    name?: string;
    title?: string;
    description?: string;
    forumPicturePath?: string;
};
export declare type ForumCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    forumPicturePath?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ForumCreateFormOverridesProps = {
    ForumCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    forumPicturePath?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ForumCreateFormProps = React.PropsWithChildren<{
    overrides?: ForumCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ForumCreateFormInputValues) => ForumCreateFormInputValues;
    onSuccess?: (fields: ForumCreateFormInputValues) => void;
    onError?: (fields: ForumCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ForumCreateFormInputValues) => ForumCreateFormInputValues;
    onValidate?: ForumCreateFormValidationValues;
} & React.CSSProperties>;
export default function ForumCreateForm(props: ForumCreateFormProps): React.ReactElement;
