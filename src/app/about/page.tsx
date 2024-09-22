import { CaspecoBooking } from "@/components/CaspecoBooking";

export default async function About() {
    return (
        <div>
            <h1>About</h1>
            <p>Welcome to the about page</p>

            <CaspecoBooking height={500} system={"se__testbb"} unitId={"14"} />
        </div>
    );
}
