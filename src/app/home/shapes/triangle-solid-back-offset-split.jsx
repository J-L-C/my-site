import TriangleSolidBackOffsetFront from "@/app/home/shapes/splits/triangle-solid-back-offset-front";
import TriangleSolidBackOffsetBack from "@/app/home/shapes/splits/triangle-solid-back-offset-back";

export default function TriangleSolidBackOffsetSplit({className}) {
    //I want to spin each section independently to creat a cool effect.
    //Might I even be able to split this svg and have them on two different layers?

    return (<>
        <TriangleSolidBackOffsetFront className={"spin w-24 h-24 -mb-14"}/>
        <TriangleSolidBackOffsetBack className={"spin w-24 h-24 mb-4"}/>
    </>)
}