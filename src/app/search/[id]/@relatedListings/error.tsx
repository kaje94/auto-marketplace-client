"use client";
import { ErrorComponent } from "@/components";
import { ErrorPageProps } from "@/utils/types";

export default function Error(props: ErrorPageProps) {
    return <ErrorComponent {...props} variant="sm" showReset={false} />;
}
