import Image from "next/image";
import {Container} from "postcss";

export default function Layout1(){

    return(
        <>
            <h1>This is my first experiment</h1>
            <div className={"flex justify-center relative top-0"}>
                <div className={"bg-amber-500 sm:w-[625px] min-w-[325px] sm:w-1/2 w-10/12 h-screen absolute top-5 rounded-lg"}>
                    <Image
                        className={"shadow-lg rounded-lg absolute -left-3 -top-3 sm:w-52 sm:h-52 w-28 h-28"}
                        src={"/me.png"}
                        alt={"A picture of myself smiling into the camera"}
                        width={200}
                        height={200}
                    />
                    this is a container

                </div>

            </div>
        </>
    )
}