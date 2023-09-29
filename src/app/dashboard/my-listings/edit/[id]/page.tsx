import { BreadCrumbs } from "@/components/Common";
import { EditListingForm } from "@/components/Forms/Listings/EditListingForm";
import { api } from "@/utils/api";
import { transformListingResponse } from "@/utils/helpers";
import { ListingIdPathParam } from "@/utils/types";

export default async function Page({ params }: ListingIdPathParam) {
    const [itemDetails, features] = await Promise.all([transformListingResponse(await api.getMyListingsItem(params.id)), api.getFeaturesList()]);

    return (
        <>
            <BreadCrumbs
                currentPageTitle="Edit"
                links={[
                    { href: "/", title: "Home" },
                    { title: "Dashboard" },
                    { title: "My Adverts", href: "/dashboard/my-listings" },
                    {
                        title: itemDetails.title,
                        href: `/dashboard/my-listings/${params.id}`,
                    },
                ]}
            />
            <EditListingForm features={features} listingItem={itemDetails} successRedirectPath="/dashboard/my-listings" />
        </>
    );
}
