import Herosection from "@/app/Component/Herosection";

const Page = async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return (
        <>
            <Herosection title={"LET'S WATCH MOVIE TOGETHER"} imageurl={"/home.svg"}/>
        </>
    );
};

export default Page;