import { getSession } from "@auth0/nextjs-auth0/edge";
import { redirect } from "next/navigation";
import qs from "query-string";
import { DashboardListHeader } from "@/components/DashboardListHeader";
import { DashboardAllListFilterButton } from "@/components/DashboardListHeader/DashboardAllListFilterButton";
import { DashboardAllListingsList } from "@/components/DashboardListings/DashboardListingsList";
import { getScopedI18n } from "@/locales/server";
import { DashboardAllListingsContextProvider } from "@/providers/DashboardAllListingsContextProvider";
import { api } from "@/utils/api";
import { transformListingsListResponse } from "@/utils/helpers";
import { DashboardListingFilterSchema } from "@/utils/schemas";
import { LocalePathParam, SearchParams } from "@/utils/types";

export default async function Page({ searchParams, params }: SearchParams & LocalePathParam) {
    const page = searchParams["PageNumber"] ?? "1";
    const parsedSearchParams = DashboardListingFilterSchema.parse(searchParams);
    const [session, listings, brands, tBreadcrumbs] = await Promise.all([
        getSession(),
        transformListingsListResponse(await api.getListings({ PageNumber: Number(page), ...parsedSearchParams })),
        api.getVehicleBrands(),
        getScopedI18n("breadcrumbs"),
    ]);

    if (listings.items?.length === 0 && page !== "1") {
        redirect(`/${params.locale}/dashboard/listings?${qs.stringify({ ...parsedSearchParams, PageNumber: 1 }, { skipEmptyString: true })}`);
    }

    return (
        <DashboardAllListingsContextProvider>
            <DashboardListHeader
                addNewButton={{ label: tBreadcrumbs("newListing"), path: "/dashboard/new-listing" }}
                filter={<DashboardAllListFilterButton vehicleBrands={brands} />}
                itemCount={listings.totalCount}
            />
            <DashboardAllListingsList basePath="/dashboard/listings" listings={listings} userClaims={session?.user} />
        </DashboardAllListingsContextProvider>
    );
}
