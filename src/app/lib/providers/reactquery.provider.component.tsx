"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";

export default function ReactQueryProvider(
    props: { children: ReactNode }
) {

    const [queryClient] = useState<QueryClient>(
        ()=> new QueryClient()
    );

    return(
        <QueryClientProvider client={queryClient}>
            {props.children}
        </QueryClientProvider>
    )
}