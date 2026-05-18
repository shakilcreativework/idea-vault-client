import { HiHome } from 'react-icons/hi';
import Container from "@/components/shared/Container";
import BaseButton from "@/components/ui/BaseButton";
import Image from 'next/image';

const NotFound = () => {
    return (
        // Full screen wrapper for 404 page
        <div className="min-h-dvh flex flex-col py-14">

            <Container>
                {/* Centered content wrapper */}
                <div className='text-center'>

                    {/* Large 404 error number */}
                    <h1 className="text-8xl font-extrabold text-[#091123]">
                        404
                    </h1>

                    {/* Main heading / error title */}
                    <h2 className="text-xl md:text-3xl font-semibold mt-4 text-[#091123]">
                        Oops! Page not found
                    </h2>

                    {/* Short explanation for the user */}
                    <p className="text-[#5b6375] mt-3">
                        The page you&apos;re looking for doesn’t exist or has been moved.
                    </p>

                    {/* Action button to redirect user back home */}
                    <div className="mt-6">

                        {/* Future animation wrapper if needed */}
                        {/* <MagneticWrapper to="/" as="link" children="Go Home" /> */}

                        <BaseButton
                            leftIcon={<HiHome />}
                            href="/"
                            as="link"
                            text={'Go Home'}
                            className="bg-[linear-gradient(135deg,oklch(0.55_0.22_285),oklch(0.62_0.2_305)_55%,oklch(0.78_0.15_215))]"
                        />
                    </div>

                    {/* Illustration / visual image for better UI */}
                    <div className='mt-10'>
                        <Image
                            src={'https://i.ibb.co.com/wrQmyYPT/alert.png'}
                            alt='Data missing'
                            width={200}
                            height={200}
                            priority
                            className='w-full h-full'
                        />
                    </div>

                </div>
            </Container>

        </div>
    );
};

export default NotFound;