import AALogo from "@/app/demo/layout1/logos/aa-logo";

export default function AaSection({className}) {

    return (<>
        <div className="mt-16 mb-36">
            <div className="w-48 mx-[-3%] my-[-3%]">
                <AALogo
                    className="mb-16 ml-4"
                    width="300"
                    height="100"
                />
            </div>
            <div className="border-4 rounded">
                <p>
                    Worked on transforming AA.com legacy monolith into a micro services: using TDD
                    principles and practices in a Paired Programming environment
                </p>
            </div>
        </div>
    </>);
}