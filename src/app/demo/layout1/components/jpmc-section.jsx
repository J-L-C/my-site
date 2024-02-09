import JpmcLogo from "@/app/demo/layout1/logos/jpmc-logo";

export default function JpmcSection({className}) {

    return (<>
        <div className="mt-16">
            <div className="w-48 mx-[-3%] my-[-3%]">
                <JpmcLogo
                    className="ml-14"
                    width="300"
                    height="100"
                />
            </div>
            <div className="border-4 rounded">
                <p>
                    Collaborated with frontend team to develop RESTful APIs for J.P Morgan Chase
                    Advisor\'s tool that onboards clients and updates client financial allotments based on the
                    products J.P Morgan Chase offers
                    Designed algorithm for fetching and constructing asset allocation data to show the client
                    a high-level breakdown of the makeup of their portfolio
                </p>
            </div>
        </div>
    </>);
}