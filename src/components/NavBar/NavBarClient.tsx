"use client";
import { Claims } from "@auth0/nextjs-auth0/edge";
import { clsx } from "clsx";
import dynamic from "next/dynamic";
import { useParams, usePathname } from "next/navigation";
import { LinkWithLocale } from "@/components/Common";
import { ListingUser } from "@/utils/types";
import { NavBarAuth } from "./NavBarAuth";
import { PostAddLink, SearchLink } from "./NavBarButtons";

const NewUserOnboardModal = dynamic(() => import("@/components/Modals/NewUserOnboardModal").then((mod) => mod.NewUserOnboardModal), { ssr: false });

export const NavBarClient = ({
    userClaims,
    loading,
    notificationCount,
    userData,
}: {
    loading?: boolean;
    notificationCount?: number;
    userClaims?: Claims;
    userData?: ListingUser;
}) => {
    const params = useParams();
    const pathName = usePathname();
    const isLandingPage = pathName === `/${params.locale}`;

    return (
        <>
            <div
                className={clsx({
                    "container mx-auto p-4 xl:p-7 2xl:p-8 flex items-center justify-center !pb-0": true,
                    "absolute top-0 left-0 right-0": isLandingPage,
                })}
            >
                <div
                    className={clsx(
                        "navbar rounded-box relative z-20 min-h-[70px] items-center justify-between gap-8 text-neutral-content shadow shadow-neutral",
                        isLandingPage ? "bg-transparent !shadow-xl" : "bg-neutral",
                    )}
                >
                    <LinkWithLocale className="ml-0 sm:ml-1 md:ml-2" href="/">
                        <button className="btn btn-ghost px-0 text-xl normal-case">Car Sale</button>
                    </LinkWithLocale>
                    <div className="flex flex-row items-center gap-0 pr-0 sm:gap-2 sm:pr-2 lg:gap-4">
                        <SearchLink />
                        <PostAddLink />
                        <NavBarAuth loading={loading} notificationCount={notificationCount} userClaims={userClaims} />
                    </div>
                </div>
            </div>
            {userData && userClaims?.new_user && <NewUserOnboardModal userClaims={userClaims} userData={userData} />}
        </>
    );
};
