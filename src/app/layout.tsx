import { Toaster } from "react-hot-toast";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { NextAuthProvider } from "@/providers/auth-provider";
import { ReactQueryProvider } from "@/providers/query-provider";
import { ChildrenProps } from "@/utils/types";
import { standardFont } from "./fonts";
import "./globals.css";

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }: ChildrenProps) {
    return (
        <html lang="en">
            <body className={standardFont.className}>
                <Toaster position="bottom-right" toastOptions={{ error: { duration: 10000 }, duration: 5000 }} />
                <ReactQueryProvider>
                    <NextAuthProvider>
                        <NavBar />
                        <main>{children}</main>
                        <Footer />
                    </NextAuthProvider>
                </ReactQueryProvider>
            </body>
        </html>
    );
}
