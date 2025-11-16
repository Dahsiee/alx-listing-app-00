import Image from "next/image";
import Navbar from "../common/Navbar";

const Header = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="bg-[#36927A] w-full py-3 mx-auto flex flex-wrap items-center justify-center gap-4 text-white px-4">
        <Image
          src="/assets/images/icons/message.png"
          alt="Message Icon"
          width={20}
          height={20}
        />

        <p className="text-sm text-center">
          Overseas trip? Get the latest information on travel guides
        </p>

        <button className="bg-black text-white px-4 py-1 rounded-full text-sm shrink-0">
          More Info
        </button>
      </div>

      <Navbar />
    </div>
  );
};

export default Header;
