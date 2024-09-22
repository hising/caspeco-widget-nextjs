"use client";

import { useEffect } from "react";

type CaspecoBookingProps = {
    system: string;
    unitId: string;
    height: number;
};

export const CaspecoBooking = ({
    system,
    unitId,
    height,
}: CaspecoBookingProps) => {
    useEffect(() => {
        if (typeof window !== "undefined") {
            if ("ca" in window) {
                window.ca.forceInit();
            }
        }
    }, []);

    return (
        <div
            className="caspeco-booking"
            data-system={system}
            data-unitid={unitId}
            data-height={height}
        ></div>
    );
};
