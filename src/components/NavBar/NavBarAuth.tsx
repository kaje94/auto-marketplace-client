import { Claims } from "@auth0/nextjs-auth0";
import { Avatar } from "@/components/Common/Avatar";
import { AdvertIcon, ClipboardIcon, DatabaseIcon, ListIcon, NotificationIcon, RssIcon, UserIcon } from "@/icons";
import { NavBarLoginButton, NavBarLogoutButton, NavBarMenuLink } from "./NavBarButtons";

export const NavBarAuth = ({ userClaims, notificationCount, loading }: { loading?: boolean; notificationCount?: number; userClaims?: Claims }) => {
    return (
        <div className="relative flex w-12 items-center justify-center">
            {loading ? (
                <span className="loading loading-ring w-8" />
            ) : (
                <>
                    {userClaims ? (
                        <div className="dropdown-end dropdown">
                            <label className="btn-ghost btn-circle avatar btn" tabIndex={0}>
                                <div className="w-10 rounded-full ring ring-gray-600 ring-offset-base-100 duration-200 hover:ring-gray-400">
                                    <Avatar name={userClaims?.name} url={userClaims?.picture} width={40} />
                                    {notificationCount ? (
                                        <div className=" badge badge-primary badge-md absolute -right-1 -top-1 z-10 flex aspect-square items-center justify-center border-2 border-accent bg-gradient-to-t from-secondary to-primary p-0.5 text-neutral shadow-2xl">
                                            <NotificationIcon className="animate-pulse" strokeWidth={3} />
                                        </div>
                                    ) : null}
                                </div>
                            </label>

                            <ul
                                className="dropdown-content menu rounded-box z-20 -mr-1 mt-3 w-60 rounded-tr-none bg-neutral p-2 text-neutral-content shadow-md shadow-black"
                                tabIndex={0}
                            >
                                <NavBarMenuLink icon={<UserIcon height={18} />} label="Profile" link="/dashboard/profile" />
                                <NavBarMenuLink
                                    badgeCount={notificationCount}
                                    icon={<NotificationIcon height={18} />}
                                    label="Notifications"
                                    link="/dashboard/notifications"
                                />
                                <NavBarMenuLink icon={<AdvertIcon height={18} />} label="My Adverts" link="/dashboard/my-listings" />
                                <NavBarMenuLink icon={<RssIcon height={18} />} label="My Subscriptions" link="/dashboard/my-subscriptions" />
                                {userClaims?.isAdmin && (
                                    <>
                                        <div className="divider mx-3 my-1 h-0.5 rounded bg-gray-800" />
                                        <NavBarMenuLink icon={<ListIcon height={18} />} label="Manage Adverts" link="/dashboard/listings" />
                                        <NavBarMenuLink
                                            icon={<ClipboardIcon height={18} />}
                                            label="Manage Subscriptions"
                                            link="/dashboard/subscriptions"
                                        />
                                        <NavBarMenuLink icon={<DatabaseIcon height={18} />} label="Manage Cache" link="/dashboard/cache-manage" />
                                    </>
                                )}
                                <div className="divider mx-3 my-1 h-0.5 rounded bg-gray-800" />
                                <NavBarLogoutButton />
                            </ul>
                        </div>
                    ) : (
                        <NavBarLoginButton />
                    )}
                </>
            )}
        </div>
    );
};
