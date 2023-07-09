import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full h-screen  bg-black p-8 tablet:p-2   flex-col flex items-center justify-center text-white">
      <h1 className="md:text-[156px] sm:text-[48px] text-[36px] leading-[150%] font-bold">
        4<span className="text-red-500">0</span>42
      </h1>
      <h1 className="leading-[150%] sm:text-[36px] text-[20px] text-center font-bold md:text-[64px]">
        SORRY,THERE’S
        <br />
        NOTHING TO SHOW HERE
      </h1>

      <Link
        href={"/"}
        className=" mt-6 text-black sm:px-4 sm:text-sm text-lg sm:py-2 font-bold  px-[48px] py-[12px] bg-white rounded-full"
      >
        GO HOME
      </Link>
    </div>
  );
}
