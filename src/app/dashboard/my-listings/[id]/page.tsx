import { BreadCrumbs } from "@/components";
import { ListingDetailBanner, ListingDetails } from "@/components/ListingDetails";
import { authOptions } from "@/auth/authConfig";
import { api } from "@/utils/api";
import { transformListingResponse } from "@/utils/helpers";
import { ListingIdPathParam } from "@/utils/types";
import { getServerSession } from "next-auth";

export default async function Page({ params }: ListingIdPathParam) {
    const [session, itemDetails] = await Promise.all([
        getServerSession(authOptions),
        transformListingResponse(await api.getMyListingsItem(params.id)),
    ]);

    return (
        <>
            <BreadCrumbs
                currentPageTitle={itemDetails.title}
                links={[{ href: "/", title: "Home" }, { title: "Dashboard" }, { title: "My Adverts", href: "/dashboard/my-listings" }]}
            />
            <ListingDetailBanner isAdmin={session?.user?.isAdmin} listingItem={itemDetails} />
            <ListingDetails
                itemDetails={itemDetails}
                withinDashboard={true}
                showSellerDetails={false}
                loggedInUser={{ email: session?.user?.email, id: session?.user?.id, isAdmin: session?.user?.isAdmin }}
                basePath="/dashboard/my-listings"
            />
        </>
    );
}
