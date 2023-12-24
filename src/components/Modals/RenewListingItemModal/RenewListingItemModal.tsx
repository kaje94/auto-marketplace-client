import { useMutation } from "@tanstack/react-query";
import { useRef } from "react";
import { toast } from "react-hot-toast";
import { renewListingAction } from "@/actions/listingActions";
import { Modal, ModalFooter } from "@/components/Common/Modal";
import { formatHumanFriendlyDate } from "@/utils/helpers";
import { ListingItem } from "@/utils/types";

interface Props {
    listingItem?: ListingItem;
    setVisible?: (visible: boolean) => void;
    visible?: boolean;
}

export const RenewListingItemModal = (props: Props) => {
    const { listingItem = {}, visible, setVisible = () => {} } = props;
    const { id: listingId, title: listingTitle, userId, expiryDate } = listingItem as ListingItem;
    const toastId = useRef<string>();

    const { mutate, isLoading } = useMutation((id: string) => renewListingAction(id, userId!), {
        onMutate: () => {
            setVisible(false);
            toastId.current = toast.loading(`Renewing advert ${listingTitle}...`);
        },
        onSettled: (_data, err) => {
            setVisible(false);
            if (err) {
                toast.error(`Failed to renew advert ${listingTitle}. ${(err as Error)?.message ?? ""}`, { id: toastId?.current });
            } else {
                toast.success(`Successfully renewed the Advert ${listingTitle}`, { id: toastId?.current });
            }
        },
    });

    return (
        <>
            <Modal title="Renew Advert" visible={!!visible} onVisibleChange={setVisible}>
                <div>
                    This listing advert will expire on {formatHumanFriendlyDate(new Date(expiryDate))}. Are you sure you want to renew the advert?
                </div>
                <ModalFooter
                    loading={isLoading}
                    primaryButton={{ text: "Renew" }}
                    onSubmit={listingId ? () => mutate(listingId) : undefined}
                    onVisibleChange={setVisible}
                />
            </Modal>
        </>
    );
};