import StrideLogo from "@/app/demo/layout1/logos/stride-logo";

export default function StrideSection({className}) {

    return (<>
        <div>
            <div className="w-48 mx-[-3%] my-[-3%]">
                <StrideLogo
                    className="stride ml-4 mt-4"
                    width="300"
                    height="100"
                />
            </div>

            <div className="border-4 rounded">
                <p className="">
                    Client: ‘EdTech Company’ : Working closely with stakeholders, we built a web
                    app for teachers and coaches to extend and strengthen their understanding of effective
                    classroom interactions through classroom observation. We leveraged XP practices and
                    principles throughout the project: Pair Programming, TDD, Retros, etc.
                    Client: ‘Blockchain-Based Transaction Solution for Commercial Banking’. Dove deep
                    into their systems and engaged with multiple stakeholders, to deliver detailed
                    insights, scripts, and a flexible, extensible test harness to measure DBMS performance across
                    multiple DBMS solutions. We did this to set our client up for success in migrating their
                    existing single instance DBMS to a clustered DBMS solution while balancing considerations of
                    cost, performance, ease of adoption, and resiliency. Also, I paired daily with another
                    engineer as we built out the test harness, worked on migration scripts, spikes, and even
                    documentation.
                </p>
            </div>
        </div>
    </>);
}