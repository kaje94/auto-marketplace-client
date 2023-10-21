"use client";
import { clsx } from "clsx";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { ReactNode } from "react";
import { LinkWithLocale } from "@/components/Common";
import { LogoutIcon, SearchIcon } from "@/icons";

export const NavBarLoginButton = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    return (
        <a
            className="btn btn-primary btn-ghost px-2 font-semibold capitalize text-secondary hover:text-accent"
            href={`/api/auth/login?returnTo=${pathname}${searchParams.size > 0 ? `?${searchParams.toString()}` : ""}`}
        >
            Login
        </a>
    );
};

export const NavBarLogoutButton = () => {
    return (
        <a
            className={clsx({
                "flex flex-1 items-center justify-between font-medium duration-200 hover:text-accent px-4 py-2": true,
            })}
            href="/api/auth/logout"
        >
            Logout
            <LogoutIcon className="pl-0.5" height={17} />
        </a>
    );
};

export const NavBarMenuLink = (props: { badgeCount?: number; icon: ReactNode; label: string; link: string }) => {
    const { link, label, icon, badgeCount } = props;
    const pathname = usePathname();
    const params = useParams();
    const badge = (
        <div className="badge badge-primary badge-md  border-2 border-accent bg-primary p-0.5 px-1 text-xs text-neutral">
            {badgeCount && badgeCount > 9 ? `9+` : badgeCount}
        </div>
    );
    return (
        <li>
            <LinkWithLocale className="flex" href={link}>
                <div
                    className={clsx({
                        "flex flex-1 items-center justify-between font-medium duration-200 ": true,
                        "text-accent": pathname === `/${params.locale}${link}`,
                        "text-base-300 hover:text-secondary": pathname !== link,
                    })}
                >
                    <span className="flex gap-2">
                        {label}
                        {badgeCount ? badge : null}
                    </span>
                    {icon}
                </div>
            </LinkWithLocale>
        </li>
    );
};

export const PostAddLink = () => {
    const pathname = usePathname();
    const params = useParams();
    const active = pathname === `/${params.locale}/dashboard/new-listing`;
    return (
        <LinkWithLocale href="/dashboard/new-listing">
            <button
                className={clsx({
                    "btn text-xs capitalize sm:text-sm px-2": true,
                    "btn-link text-secondary cursor-default": active,
                    "btn-ghost text-base-300 hover:text-accent": !active,
                })}
            >
                Post your Advert
            </button>
        </LinkWithLocale>
    );
};

export const SearchLink = () => {
    return (
        <LinkWithLocale href="/search">
            <button className="btn btn-ghost px-2 text-base-300 hover:text-accent">
                <SearchIcon />
            </button>
        </LinkWithLocale>
    );
};
