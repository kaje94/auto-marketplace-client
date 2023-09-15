"use server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth/authConfig";
import { NavBarItem } from "./DashboardSideBarItem";

export const DashboardSideBar = async () => {
    const session = await getServerSession(authOptions);

    return (
        <aside className="relative top-0 lg:sticky lg:top-7 2xl:top-8">
            <ul className="menu rounded-box w-full bg-base-100 p-2 shadow-md">
                <NavBarItem
                    href="/dashboard/profile"
                    label="Profile"
                    activePaths={["/dashboard/profile"]}
                    iconName="UserIcon"
                    regexExp="^/dashboard/profile/(.*?)"
                />
                <NavBarItem
                    href="/dashboard/my-listings"
                    label="My Adverts"
                    activePaths={["/dashboard/my-listings", "/dashboard/new-listing"]}
                    regexExp="^/dashboard/my-listings/(.*?)"
                    iconName="AdvertIcon"
                />
                <NavBarItem
                    href="/dashboard/my-subscriptions"
                    label="My Subscriptions"
                    activePaths={["/dashboard/my-subscriptions", "/dashboard/new-subscription"]}
                    regexExp="^/dashboard/my-subscriptions/(.*?)"
                    iconName="RssIcon"
                />
                <NavBarItem
                    href="/dashboard/notifications"
                    label="Notifications"
                    activePaths={["/dashboard/notifications"]}
                    iconName="NotificationIcon"
                />
                {session?.user?.isAdmin && (
                    <>
                        <NavBarItem
                            href="/dashboard/listings"
                            activePaths={["/dashboard/listings"]}
                            label="All Adverts"
                            regexExp="^/dashboard/listings/(.*?)"
                            iconName="ListIcon"
                        />
                        <NavBarItem
                            href="/dashboard/subscriptions"
                            label="All Subscriptions"
                            activePaths={["/dashboard/subscriptions"]}
                            regexExp="^/dashboard/subscriptions/(.*?)"
                            iconName="ClipboardIcon"
                        />
                    </>
                )}
            </ul>
        </aside>
    );
};