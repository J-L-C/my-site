import CognizantLogo from "@/app/demo/layout1/logos/cognizant-logo";

export default function CognizantSection({className}) {

    return (<>
        <div className="">
            <div className="w-48 mx-[-3%] my-[-3%]">
                <CognizantLogo
                    className="mt-8"
                    width="300"
                    height="100"
                />
            </div>
            <div className="border-4 rounded">
                <p>
                    Lead a small team to build an internal facing application for rapid
                    prototyping, leveraging Maven Archetypes to generate code, Azure and GitLab APIs to create
                    repositories with the generated code, and Concourse pipelines orchestrate it all.
                    Client: “Consumer Products” - Built a web app to manage research documents and
                    provide access controls to those documents including designing the initial email
                    notification system, for approvals, view requests, etc.
                </p>
            </div>

        </div>
    </>);
}