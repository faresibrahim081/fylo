import Image from "next/image";
import img from "@/images/illustration-stay-productive.png";
import Link from "next/link";
import icon from "@/images/icon-arrow.svg";

function StayProductive() {
  return (
    <section className="mt-[100px] pb-[100px] grid gap-[30px] grid-cols-1 md:grid-cols-2 place-items-center w-[850px] max-w-full mx-auto ">
      <Image src={img} width={350} height={350} alt="stay productive" />
      <div className="flex flex-col">
        <h3 className="text-2xl leading-[40px] capitalize">
          stay productive,
          <br /> where ever you are{" "}
        </h3>
        <p className="text-sm capitalize opacity-90">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          quo maxime animi!
        </p>
        <p className="text-sm capitalize opacity-90 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          quo maxime animi!
        </p>
        <div className="flex gap-3">
          <Link
            className=" text-sm border-b-2 border-[#5ad5d8] border-solid pb-2 capitalize text-[#5ad5d8]  mt-[20px] "
            href="/"
          >
            see how fylo work
            <Image
              className="inline ml-3 animate-[moveRight_1s_ease-in-out_infinite]"
              src={icon}
              width={25}
              height={25}
              alt="icon"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default StayProductive;
