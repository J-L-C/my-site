import SantanderUsaLogo from "@/app/demo/layout1/logos/santander-usa-logo";

export default function SantanderSection({className}) {

    return (<>
        <div className="mt-16 mb-36">
            <div className="w-48 mx-[-3%] my-[-3%] mr-2">
                <SantanderUsaLogo
                    className="ml-8"
                    width="300"
                    height="100"
                />
            </div>
            <div className="border-4 rounded">
                <p>
                    I worked closely with the Product Owner and Project Manager to create user
                    stories,
                    assist
                    developers on design, and to keep team the team in sync with the needs of the
                    business.
                </p>
            </div>
        </div>
    </>);
}