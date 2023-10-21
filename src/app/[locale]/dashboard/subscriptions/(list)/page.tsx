import { redirect } from "next/navigation";
import qs from "query-string";
import { DashboardListHeader } from "@/components/DashboardListHeader";
import { DashboardAllSubscriptionFilter } from "@/components/DashboardListHeader/DashboardAllSubscriptionFilter";
import { DashboardAllSubscriptionList } from "@/components/DashboardSubscriptions/DashboardSubscriptionList";
import { DashboardSubscriptionsContextProvider } from "@/providers/dashboard-subscriptions-provider";
import { api } from "@/utils/api";
import { DashboardSubscriptionFilterSchema } from "@/utils/schemas";
import { LocalePathParam, SearchParams } from "@/utils/types";

export default async function Page({ searchParams, params }: SearchParams & LocalePathParam) {
    const page = searchParams["PageNumber"] ?? "1";
    const parsedSearchParams = DashboardSubscriptionFilterSchema.parse(searchParams);
    const listingSubscriptions = await api.getListingSubscriptions({ PageNumber: Number(page), ...parsedSearchParams });

    if (listingSubscriptions.items?.length === 0 && page !== "1") {
        redirect(`/${params.locale}/dashboard/subscriptions?${qs.stringify({ ...parsedSearchParams, PageNumber: 1 }, { skipEmptyString: true })}`);
    }

    return (
        <DashboardSubscriptionsContextProvider>
            <DashboardListHeader
                addNewButton={{ label: "New Subscription", path: "/dashboard/new-subscription" }}
                filter={<DashboardAllSubscriptionFilter />}
                itemCount={listingSubscriptions.totalCount}
            />
            <DashboardAllSubscriptionList basePath="/dashboard/subscriptions" listingSubscriptions={listingSubscriptions} />
        </DashboardSubscriptionsContextProvider>
    );
}
