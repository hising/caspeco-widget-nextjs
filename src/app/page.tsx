import { CaspecoBooking } from "@/components/CaspecoBooking";

export default function Home() {
    return (
        <div>
            <h1>Home</h1>
            <p>Welcome to the home page</p>

            <CaspecoBooking height={300} system={"se__testbb"} unitId={"13"} />
        </div>
    );
}
