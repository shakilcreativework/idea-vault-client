import Link from "next/link";
import { FaMagic } from "react-icons/fa";


const Logo = () => {
    return (
        <div>
            <Link href={"/"} className="flex items-center gap-2">
                <div className="flex justify-center items-center rounded-full w-10 h-10 bg-[linear-gradient(135deg,oklch(0.55_0.22_285),oklch(0.62_0.2_305)_55%,oklch(0.78_0.15_215))]">
                    <FaMagic className="text-white" />
                </div>

                <h3 className="font-bold plus-jakarta text-lg text-[#091123]">
                    Idea
                    <span className="bg-[linear-gradient(135deg,oklch(0.55_0.22_285),oklch(0.62_0.2_305)_55%,oklch(0.78_0.15_215))] bg-clip-text text-transparent">
                        Vault
                    </span>
                </h3>
            </Link>
        </div>
    );
};

export default Logo;