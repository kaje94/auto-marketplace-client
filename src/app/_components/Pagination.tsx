import Link from "next/link";
import { FC } from "react";

interface Props {
    pageNumber?: number;
    totalPages?: number;
    basePath?: string;
}

export const Pagination: FC<Props> = ({ totalPages = 1, pageNumber = 1, basePath }) => {
    if (totalPages === 1) {
        return null;
    }
    return (
        <div className="mt-16 flex justify-center">
            <div className="join">
                {pageNumber > 1 && (
                    <Link href={`${basePath}?page=${pageNumber - 1}`}>
                        <button className="join-item btn">«</button>
                    </Link>
                )}
                <button className="join-item btn">Page {pageNumber}</button>
                {pageNumber < totalPages && (
                    <Link href={`${basePath}?page=${pageNumber + 1}`}>
                        <button className="join-item btn">»</button>
                    </Link>
                )}
            </div>
        </div>
    );
    // return (
    //     <div className="mt-16 flex justify-center">
    //         <div className="btn-group ">
    //             {pageNumber > 1 && (
    //                 <Link href={`${basePath}?page=${pageNumber - 1}`}>
    //                     <button className="btn">«</button>
    //                 </Link>
    //             )}
    //             {new Array(totalPages).fill("").map((_, i) => (
    //                 <>
    //                     {i + 1 === pageNumber ? (
    //                         <button className={clsx("btn", i + 1 === pageNumber && "btn-neutral")}>{i + 1}</button>
    //                     ) : (
    //                         <Link key={i} href={`${basePath}?page=${i + 1}`}>
    //                             <button className={clsx("btn", i + 1 === pageNumber && "btn-neutral")}>{i + 1}</button>
    //                         </Link>
    //                     )}
    //                 </>
    //             ))}
    //             {pageNumber < totalPages && (
    //                 <Link href={`${basePath}?page=${pageNumber + 1}`}>
    //                     <button className="btn">»</button>
    //                 </Link>
    //             )}
    //         </div>
    //     </div>
    // );
};