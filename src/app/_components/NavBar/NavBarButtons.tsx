"use client";
import { LogoutIcon } from "@/icons";
import clsx from "clsx";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export const NavBarLoginButton = () => {
    return (
        <button
            className="btn-ghost btn-primary btn font-semibold capitalize text-secondary hover:text-accent"
            onClick={() => signIn("duende-identityserver6")}
        >
            Login
        </button>
    );
};

export const NavBarLogoutButton = () => {
    return <NavBarMenuLink label="Logout" icon={<LogoutIcon height={17} className="pl-0.5" />} onClick={() => signOut({ callbackUrl: "/" })} />;
};

export const NavBarMenuLink = (props: { onClick?: () => void; link?: string; label: string; icon: ReactNode }) => {
    const { link, label, icon, onClick } = props;
    return (
        <li>
            {link ? (
                <Link href={link} className="flex">
                    <div className="flex flex-1 items-center justify-between font-medium text-base-300 duration-200 hover:text-secondary">
                        {label}
                        {icon}
                    </div>
                </Link>
            ) : (
                <div onClick={onClick} className="flex">
                    <div className="flex flex-1 items-center justify-between font-medium text-base-300 duration-200 hover:text-secondary">
                        {label}
                        {icon}
                    </div>
                </div>
            )}
        </li>
    );
};

export const PostAddLink = () => {
    const pathname = usePathname();
    const active = pathname === "/dashboard/my-ads/add";
    return (
        <Link href="/dashboard/my-ads/add">
            <button
                className={clsx({
                    "btn text-xs capitalize sm:text-sm": true,
                    "bg-base-300 text-primary-content cursor-default": active,
                    "btn-ghost text-base-300 hover:text-accent": !active,
                })}
            >
                Post your Advert
            </button>
        </Link>
    );
};
