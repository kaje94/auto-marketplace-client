import { getServerSession } from "next-auth";
import { authOptions } from "@/auth/authConfig";
import { BreadCrumbs } from "@/components/Common";
import { ListingDetailBanner, ListingDetails } from "@/components/ListingDetails";
import { api } from "@/utils/api";
import { transformListingResponse } from "@/utils/helpers";
import { ListingIdPathParam } from "@/utils/types";

export default async function Page({ params }: ListingIdPathParam) {
    const [session, itemDetails] = await Promise.all([getServerSession(authOptions), transformListingResponse(await api.getListingsItem(params.id))]);

    return (
        <>
            <BreadCrumbs
                currentPageTitle={itemDetails.title}
                links={[{ href: "/", title: "Home" }, { title: "Dashboard" }, { title: "Manage Adverts", href: "/dashboard/listings" }]}
            />
            <ListingDetailBanner isAdmin={session?.user?.isAdmin} listingItem={itemDetails} />
            <ListingDetails
                basePath="/dashboard/listings"
                itemDetails={itemDetails}
                loggedInUser={{ email: session?.user?.email, id: session?.user?.id, isAdmin: session?.user?.isAdmin }}
                withinDashboard={true}
            />
        </>
    );
}
