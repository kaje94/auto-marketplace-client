"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

const client = new QueryClient();

export const ReactQueryProvider = ({ children }: React.PropsWithChildren) => {
    return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};
