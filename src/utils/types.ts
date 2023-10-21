import { z } from "zod";
import { ListingStatusTypes, NotificationTypes, SubscriptionFrequencies, VehicleConditionTypes, VehicleTypes } from "./enum";
import {
    CreateListingSchema,
    CreateSubscriptionSchema,
    DashboardListingFilterSchema,
    DashboardMySubscriptionFilterSchema,
    DashboardNotificationsFilterSchema,
    DashboardSubscriptionFilterSchema,
    EditListingSchema,
    EditSubscriptionSchema,
    ListingIdField,
    ListingSubscriptionIdField,
    LocationSchema,
    MyListingsFilterSchema,
    PostedListingsFilterSchema,
    PriceSchema,
    ReportListingSchema,
    ReviewListingSchema,
    ToggleSubscriptionSchema,
    UnListListingSchema,
    UpdateProfileSchema,
    vehicleCreateSchema,
    VehicleFeatureSchema,
    VehicleImageSchema,
    VehicleSchema,
} from "./schemas";

declare module "@auth0/nextjs-auth0/edge" {
    interface Claims {
        email: string;
        email_verified: boolean;
        family_name: string;
        given_name: string;
        isAdmin?: boolean;
        locale: string;
        name: string;
        new_user?: boolean;
        nickname: string;
        picture: string;
        sid: string;
        sub: string;
        updated_at: string;
    }
}

export type KeyValue = { [key: string]: string };

export type LabelValue = {
    label: string;
    value: string | number;
};

type Price = z.infer<typeof PriceSchema>;

export type Location = z.infer<typeof LocationSchema>;

export type ListingUser = {
    address: null | {
        city?: string;
        country?: string;
        postalCode?: number;
        state?: string;
    };
    email: string;
    emailConfirmed: boolean;
    firstName: string;
    fullName: string;
    isDealership: boolean;
    lastName: string;
    phone: string;
    phoneConfirmed: boolean;
    picture: string;
    userId: string;
    userName: null | string;
};

export type Vehicle = z.infer<typeof VehicleSchema>;

export type ListingItem = {
    createdOn: string;
    description: string;
    expiryDate: string;
    hasOnGoingLease: boolean;
    id: ListingIdType;
    location: Location;
    price: Price;
    reviewComment?: string;
    status: ListingStatusTypes;
    title: string;
    user?: ListingUser;
    userId?: string;
    vehicle: Vehicle;
};

export type ListingSubscriptionItem = {
    active: boolean;
    brand?: string;
    condition?: VehicleConditionTypes;
    createdOn: string;
    displayName: string;
    id: ListingSubscriptionIdType;
    maxMillage?: number;
    maxPrice?: Price;
    maxYearOfManufacture?: string;
    maxYearOfRegistration?: string;
    minMillage?: number;
    minPrice?: Price;
    minYearOfManufacture?: string;
    minYearOfRegistration?: string;
    model?: string;
    notificationFrequency: SubscriptionFrequencies;
    subscriptionExpiryDate: string;
    trim?: string;
    type?: VehicleTypes;
    user?: ListingUser;
    userId: string;
};

export type NotificationItem = {
    body: string;
    createdOn: string;
    id: number;
    isShown: boolean;
    redirectUrl: string;
    title: string;
    type: NotificationTypes;
    userId: string;
};

export type VehicleBrand = {
    id: string;
    name: string;
};

export type PaginatedResponse = {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    pageNumber: number;
    totalCount: number;
    totalPages: number;
};

export type PaginatedRequest = {
    PageNumber?: number;
    PageSize?: number;
};

export type Country = {
    countryCode: string;
    currency: string;
    emojiU: string;
    name: string;
    phoneCode: string;
    region: string;
};

export type State = {
    name: string;
    stateCode: string;
};

export type City = {
    name: string;
};

export type SearchParams = { searchParams: { [key: string]: string | string[] | undefined } };

export type ChildrenProps = { children: React.ReactNode };

export type ErrorPageProps = { error: Error; reset: () => void };

export type ListingIdPathParam = { params: { id: ListingIdType } };

export type LocalePathParam = { params: { locale: string } };

export type SubscriptionIdPathParam = { params: { id: ListingSubscriptionIdType } };

export type VehicleImageType = z.infer<typeof VehicleImageSchema>;

export type VehicleFeature = z.infer<typeof VehicleFeatureSchema>;

export type VehicleCreate = z.infer<typeof vehicleCreateSchema>;

export type CreateListingReq = z.infer<typeof CreateListingSchema>;

export type CreateSubscriptionReq = z.infer<typeof CreateSubscriptionSchema>;

export type EditSubscriptionReq = z.infer<typeof EditSubscriptionSchema>;

export type EditListingReq = z.infer<typeof EditListingSchema>;

export type ListingItems = { items: ListingItem[] };

export type ListingSubscriptionItems = { items: ListingSubscriptionItem[] };

export type NotificationItems = { items: NotificationItem[] };

export type ReviewListingReq = z.infer<typeof ReviewListingSchema>;

export type UnListListingReq = z.infer<typeof UnListListingSchema>;

export type ReportListingReq = z.infer<typeof ReportListingSchema>;

export type DashboardListFilterReq = z.infer<typeof DashboardListingFilterSchema>;

export type DashboardSubscriptionFilterReq = z.infer<typeof DashboardSubscriptionFilterSchema>;

export type DashboardMySubscriptionFilterReq = z.infer<typeof DashboardMySubscriptionFilterSchema>;

export type MyListingsFilterReq = z.infer<typeof MyListingsFilterSchema>;

export type DashboardNotificationsFilterReq = z.infer<typeof DashboardNotificationsFilterSchema>;

export type PostedListingsFilterReq = z.infer<typeof PostedListingsFilterSchema>;

export type ListingIdType = z.infer<typeof ListingIdField>;

export type ListingSubscriptionIdType = z.infer<typeof ListingSubscriptionIdField>;

export type ToggleSubscriptionReq = z.infer<typeof ToggleSubscriptionSchema>;

export type UpdateProfileReq = z.infer<typeof UpdateProfileSchema>;
