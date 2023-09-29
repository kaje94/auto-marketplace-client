import { clsx } from "clsx";
import React, { FC } from "react";
import { ListingImage } from "@/components/Common";
import { Location, VehicleImageType } from "@/utils/types";

type PropTypeImage = {
    selected: boolean;
    onClick: () => void;
    title: string;
    location: Location;
    image: VehicleImageType;
};

type PropTypeLoading = {
    loading: boolean;
};

type Props = PropTypeImage | PropTypeLoading;

export const ListingImageCarouselThumbnails: FC<Props> = (props) => {
    if ("loading" in props) {
        return (
            <div className="relative animate-pulse pl-1 sm:pl-2 lg:pl-4">
                <div className="rounded-box h-16 w-16 bg-base-200 sm:h-20 sm:w-20 lg:h-24 lg:w-36" />
            </div>
        );
    } else {
        const { selected, onClick, image, title, location } = props;

        return (
            <div className={clsx("relative shrink-0 grow-0 pl-1 sm:pl-2 lg:pl-4 ", selected && "opacity-100")}>
                <button
                    onClick={onClick}
                    className={clsx(
                        "rounded-box m-0 block w-full cursor-pointer touch-manipulation overflow-hidden bg-transparent p-0 transition-opacity duration-200",
                        selected ? "opacity-100" : "opacity-20 hover:opacity-30"
                    )}
                    type="button"
                >
                    <ListingImage
                        className="block h-16 w-16 bg-base-200 object-cover sm:h-20 sm:w-20 lg:h-24 lg:w-36"
                        image={image}
                        title={title}
                        height={300}
                        width={450}
                        location={location}
                    />
                </button>
            </div>
        );
    }
};
