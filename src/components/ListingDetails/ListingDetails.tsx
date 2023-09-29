import { clsx } from "clsx";
import { FC } from "react";
import { ListingStatusTypes } from "@/utils/enum";
import { getFormattedCurrency, getLocationString } from "@/utils/helpers";
import { ListingItem } from "@/utils/types";
import { DeleteButton, EditButton, RenewButton, ReportButton, ShareButton, UnListButton } from "./ListingActionButtons";
import { ListingDetailsFeatures } from "./ListingDetailsFeatures";
import { ListingImageCarousel } from "./ListingImageCarousel";
import { ListingKeySpecifications } from "./ListingKeySpecifications";
import { ListingSellerDetails } from "./ListingSellerDetails";

interface Props {
    itemDetails?: ListingItem;
    loading?: boolean;
    withinDashboard?: boolean;
    basePath?: string;
    loggedInUser?: {
        id?: string;
        email?: string | null;
        isAdmin?: boolean;
    };
    showSellerDetails?: boolean;
}

export const ListingDetails: FC<Props> = ({
    loggedInUser,
    itemDetails = {},
    loading = false,
    withinDashboard = false,
    showSellerDetails = true,
    basePath,
}) => {
    const { price, vehicle, location, user, title, description, status, id, createdOn, hasOnGoingLease } = itemDetails as ListingItem;

    return (
        <div className="grid grid-cols-8 gap-4 xl:gap-7 2xl:gap-8">
            <div className={clsx("col-span-8 flex flex-col gap-4 xl:gap-7 2xl:gap-8", withinDashboard ? "xl:col-span-5" : "lg:col-span-5")}>
                <div className="card  bg-base-100 shadow">
                    <ListingImageCarousel
                        images={vehicle?.vehicleImages}
                        title={title}
                        createdOn={createdOn}
                        loading={loading}
                        vehicleType={vehicle?.type}
                        location={location}
                    />
                </div>
                <div className="stat card  bg-base-100 p-3  shadow lg:p-5 xl:p-6">
                    <div className="stat-title">Description</div>
                    <div className="divider" />
                    <p className={clsx({ "mt-2 w-full whitespace-pre-line text-sm font-medium": true, "animate-pulse h-40 bg-base-200": loading })}>
                        {description}
                    </p>
                    {hasOnGoingLease && <div className="badge badge-ghost badge-sm mt-4">Has Ongoing Lease</div>}
                </div>
            </div>
            <div className={clsx("col-span-8 flex flex-col gap-4 xl:gap-7 2xl:gap-8", withinDashboard ? "xl:col-span-3" : "lg:col-span-3")}>
                <div className={clsx({ "grid gap-4  xl:gap-7 2xl:gap-8": true, "xl:grid-cols-2": !withinDashboard })}>
                    <div className="stat card place-items-center bg-base-100 shadow">
                        <div className="stat-title">Location</div>
                        {loading ? (
                            <>
                                <div className="h-5 w-1/2 animate-pulse bg-base-200" />
                                <div className="mt-1 h-5 w-4/6 animate-pulse bg-base-200" />
                            </>
                        ) : (
                            <div className="mt-2 text-center text-lg font-bold">{getLocationString(location)}</div>
                        )}
                    </div>
                    <div className="stat card place-items-center bg-primary text-primary-content shadow">
                        <div className="stat-title text-primary-content">Price</div>
                        {loading ? (
                            <div className="h-8 w-4/6 animate-pulse bg-secondary" />
                        ) : (
                            <>
                                <p className="line-clamp-1 w-full overflow-hidden truncate text-center text-xl font-extrabold">
                                    {getFormattedCurrency(price?.amount, price?.currency)}
                                </p>
                                {price?.isPriceNegotiable && <span className="badge badge-secondary">Negotiable</span>}
                            </>
                        )}
                    </div>
                </div>

                <div className="stat card place-items-center bg-base-100 shadow">
                    <div className="stat-title">Key Specifications</div>
                    <ListingKeySpecifications vehicle={vehicle} loading={loading} />
                </div>
                <div className="stat card place-items-center bg-base-100 shadow">
                    <div className="stat-title">Features</div>
                    <ListingDetailsFeatures vehicle={vehicle} loading={loading} />
                </div>
                {showSellerDetails && (
                    <div className="stat card place-items-center bg-base-100 shadow">
                        <div className="stat-title">Seller</div>
                        <ListingSellerDetails user={user} loading={loading} />
                    </div>
                )}
                <div className="grid grid-cols-2 gap-4">
                    {!loading && (user?.id === loggedInUser?.id || loggedInUser?.isAdmin) && (
                        <>
                            <EditButton
                                listingItem={itemDetails as ListingItem}
                                basePath={basePath ? basePath : loggedInUser?.isAdmin ? "/dashboard/listings" : "/dashboard/my-listings"}
                            />
                            {status &&
                                [ListingStatusTypes.Posted, ListingStatusTypes.Expired, ListingStatusTypes.TemporarilyUnlisted].includes(status) && (
                                    <RenewButton listingItem={itemDetails as ListingItem} />
                                )}
                        </>
                    )}
                    {status === ListingStatusTypes.Posted && !withinDashboard && (
                        <>
                            <ShareButton loading={loading} title={title} />
                            {loggedInUser?.id !== user?.id && (
                                <ReportButton loading={loading} listingId={id} listingTitle={title} userEmail={loggedInUser?.email} />
                            )}
                        </>
                    )}
                    {!loading && loggedInUser?.isAdmin && (
                        <DeleteButton listingItem={itemDetails as ListingItem} isOwner={user?.id === loggedInUser?.id} />
                    )}
                    {!loading &&
                        (user?.id === loggedInUser?.id || loggedInUser?.isAdmin) &&
                        status &&
                        [ListingStatusTypes.Posted, ListingStatusTypes.Expired, ListingStatusTypes.TemporarilyUnlisted].includes(status) && (
                            <UnListButton listingItem={itemDetails as ListingItem} />
                        )}
                </div>
            </div>
        </div>
    );
};
