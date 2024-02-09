import AllstateLogo from "@/app/demo/layout1/logos/allstate-logo";

export default function AllstateSection({className}) {

    return (<>
        <div className="mt-16">
            <div className="w-48 mx-[-3%] my-[-3%] mr-2">
                <AllstateLogo
                    width="300"
                    height="100"
                />
            </div>
            <div className="border-4 rounded">
                <p>
                    Delivered a full stack web app for adjusters to submit work orders to outside
                    vendors that are partnered with Allstate. This made it easier for adjusters to manage their
                    work orders, simplified who Allstate partnered with, and reduced costs through negotiated
                    rates between approved vendors and Allstate.
                    To simplify how claim data is used by our teams, we built a web API for
                    fetching it from the central database. This simplified the on-boarding process for claim data and
                    streamlined the types of queries sent to the database.
                    Fostered XP collaborative culture by engaging in XP ceremonies, practicing Paired
                    Programming, and TDD
                </p>
            </div>
        </div>
    </>);
}