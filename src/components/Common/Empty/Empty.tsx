import { clsx } from "clsx";
import Link from "next/link";
import { FC } from "react";
import { LayersIcon } from "@/icons";

interface EmptyProps {
    iconSize?: "sm" | "lg";
    text?: string;
    subText?: string;
    button?: {
        text: string;
        href: string;
        onClick?: () => void;
        loading?: boolean;
    };
}

export const Empty: FC<EmptyProps> = ({ iconSize = "lg", button, text = "Nothing to display", subText = "" }) => (
    <div className="col-span-full flex h-full w-full flex-col items-center justify-center gap-2 px-10 py-16 opacity-50">
        <LayersIcon
            className={clsx({ "text-base-300 mb-3": true, "h-52 w-52": iconSize === "lg", "h-24 w-24": iconSize === "sm" })}
            strokeWidth={2}
        />
        <h6 className="text-center text-2xl font-bold">{text}</h6>
        <p className="max-w-sm text-center text-base">{subText}</p>
        {button && (
            <>
                {button.loading ? (
                    <button className="btn-ghost btn-outline btn-wide btn mt-6" disabled>
                        {button?.text}
                    </button>
                ) : (
                    <Link href={button.href} className="btn-ghost btn-outline btn-wide btn mt-6" onClick={button.onClick}>
                        {button?.text}
                    </Link>
                )}
            </>
        )}
    </div>
);