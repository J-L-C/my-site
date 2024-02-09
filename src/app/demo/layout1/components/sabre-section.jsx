import SabreLogo from "@/app/demo/layout1/logos/sabre-logo";

export default function SabreSection({className}) {

    return (<>
        <div className="mt-16">
            <div className="w-48 mx-[-3%] my-[-3%] mr-2">
                <SabreLogo
                    width="300"
                    height="100"
                />
            </div>
            <div className="border-4 rounded">
                <p>
                    Collaborated with onsite and overseas-based data migration teams to create
                    scripts
                    that
                    validated migration data for the AA/US Airways merger in the Sabre system.
                    Wrote and maintained automation test scripts for the Sabre system for new
                    features.
                </p>
            </div>
        </div>
    </>);
}