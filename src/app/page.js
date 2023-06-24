import Herosection from "@/app/Component/Herosection";

const Page = async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return (
        <>
            <Herosection title={"LETS WATCH MOVIE TOGETHER"} imageurl={"/home.svg"}/>
        </>
    );
};

export default Page;