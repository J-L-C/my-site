import ImprovingLogo from "@/app/demo/layout1/logos/improving-logo";

export default function ImprovingSection({className}) {

    return (<>
        <div className="mt-16">
            <div className="w-48 mx-[-3%] my-[-3%]">
                <ImprovingLogo
                    className="mb-12"
                    width="300"
                    height="100"
                />
            </div>
            <div className="border-4 rounded">
                <p>
                    Client: ‘Publishing & Education Company’ - Delivered new features for their testing
                    center application, worked to reduce technical debt through upgrades and refactoring in
                    order to prepare their application for GraavlVM - Native Image deployment across multiple
                    Java/ Springboot services.
                    Client: ‘Publishing & Education Company’ - Finished phase 1 of a product that improved
                    the process for users who wanted to get started with building a certification exam,
                    moving from emails and spreadsheets to a user friendly online portal.
                </p>
            </div>
        </div>
    </>);
}