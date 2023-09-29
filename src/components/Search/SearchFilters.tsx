"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { clsx } from "clsx";
import debounce from "lodash.debounce";
import { useRouter } from "next/navigation";
import qs from "query-string";
import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { AutocompleteController } from "@/components/FormElements/AutoComplete";
import { InputController } from "@/components/FormElements/Input";
import { useSearchContext } from "@/providers/search-provider";
import { FuelTypeList, TransmissionTypeList, VehicleConditionList, VehicleTypeList, YearRangeList } from "@/utils/constants";
import { convertYearToDateString, getYearFromDateString } from "@/utils/helpers";
import { PostedListingsFilterSchema } from "@/utils/schemas";
import { PostedListingsFilterReq } from "@/utils/types";

const debouncedSearchRedirect = debounce((searchQuery: string, router: ReturnType<typeof useRouter>, callback?: Function) => {
    router.push(`${window?.location?.pathname}?${searchQuery}`);
    if (callback) {
        callback();
    }
}, 1000);

const defaultFilter: PostedListingsFilterReq = {
    Brand: "",
    City: "",
    Condition: "",
    FuelType: "",
    MaxPrice: "",
    MinPrice: "",
    Model: "",
    Title: "",
    Transmission: "",
    VehicleType: "",
    YomEndDate: "",
    YomStartDate: "",
};

export const SearchFilters = ({ pageLoading }: { pageLoading?: boolean }) => {
    const { setNewSearchQuery, hasSearchParams, searchParamsObj, searchParamStr, isLoading } = useSearchContext();

    const router = useRouter();

    const { reset, control, watch } = useForm<PostedListingsFilterReq>({
        resolver: zodResolver(PostedListingsFilterSchema),
        defaultValues: {
            ...defaultFilter,
            ...searchParamsObj,
            YomStartDate: searchParamsObj.YomStartDate ? `${getYearFromDateString(searchParamsObj.YomStartDate)}` : undefined,
            YomEndDate: searchParamsObj.YomEndDate ? `${getYearFromDateString(searchParamsObj.YomEndDate)}` : undefined,
        },
        mode: "onChange",
    });

    const formValues = watch();

    const formQueryString = qs.stringify(
        {
            ...searchParamsObj,
            ...formValues,
            YomStartDate: formValues.YomStartDate ? convertYearToDateString(formValues.YomStartDate) : undefined,
            YomEndDate: formValues.YomEndDate ? convertYearToDateString(formValues.YomEndDate) : undefined,
        },
        { skipEmptyString: true, skipNull: true },
    );

    useEffect(() => {
        reset({
            ...defaultFilter,
            ...searchParamsObj,
            YomStartDate: searchParamsObj.YomStartDate ? `${getYearFromDateString(searchParamsObj.YomStartDate)}` : undefined,
            YomEndDate: searchParamsObj.YomEndDate ? `${getYearFromDateString(searchParamsObj.YomEndDate)}` : undefined,
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchParamStr]);

    useEffect(() => {
        debouncedSearchRedirect(formQueryString, router, () => setNewSearchQuery(formQueryString));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formValues.Title, formValues.MinPrice, formValues.MaxPrice, formValues.City, formValues.Brand, formValues.Model, router]);

    useEffect(() => {
        router.push(`${window?.location?.pathname}?${formQueryString}`);
        setNewSearchQuery(formQueryString);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        formValues.VehicleType,
        formValues.Condition,
        formValues.YomStartDate,
        formValues.YomEndDate,
        formValues.Transmission,
        formValues.FuelType,
        router,
    ]);

    const onResetClick = useCallback(() => {
        setNewSearchQuery("");
        router.push("/search");
    }, [router, setNewSearchQuery]);

    return (
        <aside className="relative top-0 lg:sticky lg:top-7 2xl:top-8">
            <div className="card grid grid-cols-2 gap-2 bg-base-100 p-3 shadow-md lg:p-5 xl:p-6">
                <div className="mt-0 lg:mt-2" />
                <InputController
                    placeholder="Search..."
                    fieldName="Title"
                    control={control}
                    rootClassName="col-span-2"
                    errorAsTooltip
                    loading={pageLoading}
                />
                <div className="divider col-span-2 mt-4 lg:mt-6">Advanced Filters</div>
                <AutocompleteController
                    placeholder="Type"
                    label="Vehicle Type"
                    fieldName="VehicleType"
                    control={control}
                    options={VehicleTypeList}
                    rootClassName="col-span-2"
                    errorAsTooltip
                    loading={pageLoading}
                    showSelectedTick={false}
                />
                <div className="col-span-2">
                    <div className="pb-0.5 pl-1 text-sm opacity-70">Price Range</div>
                    <div className="grid grid-cols-2 gap-2">
                        <InputController
                            placeholder="Minimum"
                            fieldName="MinPrice"
                            control={control}
                            type="number"
                            errorAsTooltip
                            loading={pageLoading}
                        />
                        <InputController
                            placeholder="Maximum"
                            fieldName="MaxPrice"
                            control={control}
                            type="number"
                            errorAsTooltip
                            loading={pageLoading}
                        />
                    </div>
                </div>
                <AutocompleteController
                    placeholder="Condition"
                    label="Condition"
                    fieldName="Condition"
                    control={control}
                    options={VehicleConditionList}
                    errorAsTooltip
                    loading={pageLoading}
                    showSelectedTick={false}
                />
                <InputController placeholder="City" label="City" fieldName="City" control={control} errorAsTooltip loading={pageLoading} />
                <InputController placeholder="Brand" label="Brand" fieldName="Brand" control={control} errorAsTooltip loading={pageLoading} />
                <InputController placeholder="Model" label="Model" fieldName="Model" control={control} errorAsTooltip loading={pageLoading} />
                <div className="col-span-2">
                    <div className="pb-0.5 pl-1 text-sm opacity-70">Manufactured Year Range</div>
                    <div className="grid grid-cols-2 gap-2">
                        <AutocompleteController
                            placeholder="From"
                            fieldName="YomStartDate"
                            control={control}
                            errorAsTooltip
                            options={YearRangeList}
                            loading={pageLoading}
                            showSelectedTick={false}
                        />
                        <AutocompleteController
                            placeholder="To"
                            fieldName="YomEndDate"
                            control={control}
                            errorAsTooltip
                            options={YearRangeList}
                            loading={pageLoading}
                            showSelectedTick={false}
                        />
                    </div>
                </div>
                <AutocompleteController
                    placeholder="Fuel Type"
                    label="Fuel Type"
                    fieldName="FuelType"
                    control={control}
                    options={FuelTypeList}
                    errorAsTooltip
                    loading={pageLoading}
                    showSelectedTick={false}
                />
                <AutocompleteController
                    placeholder="Transmission"
                    label="Transmission"
                    fieldName="Transmission"
                    control={control}
                    options={TransmissionTypeList}
                    errorAsTooltip
                    loading={pageLoading}
                    showSelectedTick={false}
                />
                <button
                    disabled={!hasSearchParams || pageLoading || isLoading}
                    className={clsx("btn-accent btn-outline btn col-span-2 mt-3 lg:mt-5", !hasSearchParams && "opacity-50")}
                    onClick={onResetClick}
                >
                    Reset
                </button>
            </div>
        </aside>
    );
};