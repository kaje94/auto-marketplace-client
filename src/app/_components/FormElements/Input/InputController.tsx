"use client";
import { FC } from "react";
import { ControllerProps, Input } from "./Input";
import { Controller } from "react-hook-form";
import { FormFieldControllerWrap } from "../Common";

export const InputController: FC<ControllerProps> = (props) => {
    const { label, labelClassNames, rootClassName, loading, required, fieldName, control, ...rest } = props;
    if (loading || !control) {
        return (
            <FormFieldControllerWrap rootClassName={rootClassName} label={label} labelClassNames={labelClassNames} required={required}>
                <Input disabled={loading} loading={loading} {...rest} ref={undefined} />
            </FormFieldControllerWrap>
        );
    }

    return (
        <Controller
            name={fieldName}
            control={control}
            render={({ field, fieldState }) => (
                <FormFieldControllerWrap
                    rootClassName={rootClassName}
                    label={label}
                    labelClassNames={labelClassNames}
                    required={required}
                    error={fieldState.error?.message}
                >
                    <Input disabled={loading} loading={loading} error={fieldState.error?.message} {...rest} {...field} ref={field.ref} />
                </FormFieldControllerWrap>
            )}
        />
    );
};