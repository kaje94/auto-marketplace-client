"use client";
import { clsx } from "clsx";
import qs, { StringifiableRecord } from "query-string";
import { FC } from "react";
import { LinkWithLocale } from "../LinkWithLocale";

interface Props {
    basePath?: string;
    loading?: boolean;
    pageNumber?: number;
    searchParams?: StringifiableRecord;
    setNewSearchQuery?: (queryStr: string) => void;
    totalPages?: number;
}

export const Pagination: FC<Props> = ({ totalPages = 0, pageNumber = 1, basePath = "/", searchParams = {}, setNewSearchQuery, loading = false }) => {
    const prevPage = qs.stringify({ ...searchParams, PageNumber: pageNumber - 1 }, { skipNull: true, skipEmptyString: true });
    const nextPage = qs.stringify({ ...searchParams, PageNumber: pageNumber + 1 }, { skipNull: true, skipEmptyString: true });

    return (
        <div className="mt-16 flex justify-center">
            <div className={clsx(totalPages > 1 && "join", loading && "opacity-50")}>
                {pageNumber > 1 && (
                    <>
                        {loading ? (
                            <button className={clsx("btn join-item", loading && "cursor-progress")}>«</button>
                        ) : (
                            <LinkWithLocale
                                href={`${basePath}?${prevPage}`}
                                onClick={() => {
                                    if (setNewSearchQuery) {
                                        setNewSearchQuery(prevPage);
                                    }
                                }}
                            >
                                <button className="btn join-item">«</button>
                            </LinkWithLocale>
                        )}
                    </>
                )}
                <button className={clsx("btn join-item cursor-default")}>{loading ? "Loading..." : `Page ${pageNumber}`}</button>
                {pageNumber < totalPages && (
                    <>
                        {loading ? (
                            <button className={clsx("btn join-item", loading && "cursor-progress")}>»</button>
                        ) : (
                            <LinkWithLocale
                                href={`${basePath}?${nextPage}`}
                                onClick={() => {
                                    if (setNewSearchQuery) {
                                        setNewSearchQuery(nextPage);
                                    }
                                }}
                            >
                                <button className="btn join-item">»</button>
                            </LinkWithLocale>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};
