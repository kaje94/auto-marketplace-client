"use client";
import { clsx } from "clsx";
import dynamic from "next/dynamic";
import { ComponentProps, createContext, forwardRef, ReactElement, ReactNode, useContext } from "react";
import { Control } from "react-hook-form";
import { FormFieldControllerProps } from "@/components/FormElements/Common";

const NumericFormatLoadingContext = createContext<{ inputClassNames?: string }>({});

const NumericFormat = dynamic(() => import("react-number-format").then((mod) => mod.NumericFormat), {
    loading: () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const ctx = useContext(NumericFormatLoadingContext);
        return <input className={clsx("input input-bordered join-item w-full animate-pulse bg-transparent", ctx?.inputClassNames)} disabled={true} />;
    },
});

export interface ControllerProps extends FormFieldControllerProps, ComponentProps<"input"> {
    control?: Control<any>;
    fieldName: string;
    inputClassNames?: string;
    inputPrefix?: ReactNode;
    inputSuffix?: ReactNode;
    loading?: boolean;
}

export interface Props extends Omit<ControllerProps, "label" | "labelClassNames" | "rootClassName" | "required" | "fieldName" | "control"> {}

const InputWrap = ({ children, inputPrefix, inputSuffix }: { children: ReactNode; inputPrefix?: ReactNode; inputSuffix?: ReactNode }) => {
    return (
        <div className="join join-horizontal w-full">
            {inputPrefix && (
                <span className="join-item flex items-center border-[1px] border-r-0 border-base-300 bg-base-200 px-3 py-1">{inputPrefix}</span>
            )}
            {children}
            {inputSuffix && (
                <span className="join-item flex items-center border-[1px] border-l-0 border-base-300 bg-base-200 px-3 py-1">{inputSuffix}</span>
            )}
        </div>
    );
};

export const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
    const { error, inputClassNames, loading, type, inputPrefix, inputSuffix, ...rest } = props;

    if (type === "number") {
        return (
            <NumericFormatLoadingContext.Provider value={{ inputClassNames }}>
                <InputWrap inputPrefix={inputPrefix} inputSuffix={inputSuffix}>
                    <NumericFormat
                        className={clsx(
                            "input input-bordered  join-item w-full bg-transparent",
                            error && "input-error",
                            loading && "animate-pulse",
                            inputClassNames,
                        )}
                        decimalScale={2}
                        decimalSeparator="."
                        disabled={loading}
                        getInputRef={ref}
                        thousandSeparator=","
                        {...rest}
                        defaultValue={rest.defaultValue as string | number}
                        value={rest.value as string | number}
                    />
                </InputWrap>
            </NumericFormatLoadingContext.Provider>
        );
    }
    return (
        <InputWrap inputPrefix={inputPrefix} inputSuffix={inputSuffix}>
            <input
                className={clsx(
                    "input input-bordered join-item w-full flex-1 bg-transparent",
                    error && "input-error",
                    loading && "animate-pulse",
                    inputClassNames,
                )}
                disabled={loading}
                ref={ref}
                type={type}
                {...rest}
            />
        </InputWrap>
    );
});
Input.displayName = "Input";
