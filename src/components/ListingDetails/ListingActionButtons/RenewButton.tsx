"use client";
import { clsx } from "clsx";
import { FC, useState } from "react";
import { RenewListingItemModal } from "@/components/Modals/RenewListingItemModal";
import { RefreshIcon } from "@/icons";
import { ListingItem } from "@/utils/types";

interface Props {
    listingItem: ListingItem;
    loading?: boolean;
}

export const RenewButton: FC<Props> = ({ listingItem, loading }) => {
    const [renewModalVisible, setRenewModalVisible] = useState(false);

    return (
        <>
            <button className={clsx("btn-block btn gap-2", loading && "animate-pulse")} onClick={() => setRenewModalVisible(true)} disabled={loading}>
                <RefreshIcon />
                Renew
            </button>
            <RenewListingItemModal visible={renewModalVisible} setVisible={setRenewModalVisible} listingItem={listingItem} />
        </>
    );
};