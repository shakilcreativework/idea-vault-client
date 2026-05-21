
import Container from "@/components/shared/Container";
import Image from "next/image";
import { getSingleIdeaData } from "@/lib/actions";

import {
  FaLightbulb,
  FaMoneyBillWave,
  FaUsers,
} from "react-icons/fa";

import {
  MdCategory,
  MdOutlineTipsAndUpdates,
} from "react-icons/md";
import { LuTag } from "react-icons/lu";
import SectionBadge from "@/components/ui/SectionBadge";
import { TbMessageDots } from "react-icons/tb";
import CommentForm from "@/components/ui/CommentForm";

const IdeaDetailPage = async ({ params }) => {

  // ==========================================
  // Get Dynamic Idea ID
  // ==========================================
  const { ideaId } = await params;

  // ==========================================
  // Fetch Single Idea Data
  // ==========================================
  const ideaDetail = await getSingleIdeaData(ideaId);

  // ==========================================
  // Destructure Idea Data
  // ==========================================
  const {
    _id,
    ideaTitle,
    category,
    estimatedBudget,
    targetAudience,
    tags,
    imageURL,
    shortDescription,
    detailedDescription,
    problemStatement,
    proposedSolution,
    userEmail,
    userName,
    userImage,
  } = ideaDetail;

  console.log(_id);

  return (
    <section className="py-14 md:py-20 bg-[#F8FAFD] min-h-dvh">

      <Container className={"max-w-7xl"}>

        {/* ==========================================
            Main Layout
        ========================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* ==========================================
              Left Content Section
          ========================================== */}
          <div className="lg:col-span-2 space-y-8">

            {/* ==========================================
                Hero Image
            ========================================== */}
            <div className="overflow-hidden rounded-3xl shadow-md bg-white">

              <div className="relative h-65 md:h-105 w-full">
                <Image
                  src={imageURL}
                  alt={ideaTitle}
                  priority
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
                  className="object-cover"
                />
              </div>

              {/* ==========================================
                  Idea Main Content
              ========================================== */}
              <div className="p-6 md:p-8 space-y-6">

                {/* Category Badge */}
                <div>
                  <span className="
                    inline-flex items-center gap-2
                    rounded-full px-3 py-1 text-sm font-medium
                    bg-[linear-gradient(135deg,oklch(0.55_0.22_285),oklch(0.62_0.2_305)_55%,oklch(0.78_0.15_215))]
                    text-white
                  ">
                    <LuTag />
                    {category}
                  </span>
                </div>

                {/* Title */}
                <div className="space-y-3">
                  <h1 className="text-3xl md:text-5xl font-bold text-[#091123] leading-tight">
                    {ideaTitle}
                  </h1>

                  <p className="text-[#5b6375] leading-7">
                    {shortDescription}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-3">
                  {tags?.map((tag, index) => (
                    <span
                      key={index}
                      className="
                        px-3 py-1 rounded-full text-sm
                        bg-gray-100 text-[#5b6375]
                        shadow-xs
                      "
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

              </div>
            </div>



            {/* ==========================================
                comment
            ========================================== */}
            <div className="bg-white rounded-3xl shadow-md p-6 md:p-8 space-y-5">
              <SectionBadge icon={<TbMessageDots className="text-lg" />} text={'Add Comment'} />

              <div>
                <CommentForm ideaId={_id} />
              </div>
            </div>

            {/* ==========================================
                Detailed Description
            ========================================== */}
            <div className="bg-white rounded-3xl shadow-md p-6 md:p-8 space-y-5">

              <div className="flex items-center gap-3">
                <MdOutlineTipsAndUpdates className="text-2xl text-purple-500" />

                <h2 className="text-2xl font-semibold text-[#091123]">
                  Detailed Description
                </h2>
              </div>

              <p className="text-[#5b6375] leading-8">
                {detailedDescription}
              </p>
            </div>

            {/* ==========================================
                Problem & Solution Section
            ========================================== */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Problem Statement */}
              <div className="bg-white rounded-3xl shadow-md p-6 space-y-4">

                <h3 className="text-xl font-semibold text-[#091123]">
                  Problem Statement
                </h3>

                <p className="text-[#5b6375] leading-7">
                  {problemStatement}
                </p>
              </div>

              {/* Proposed Solution */}
              <div className="bg-white rounded-3xl shadow-md p-6 space-y-4">

                <h3 className="text-xl font-semibold text-[#091123]">
                  Proposed Solution
                </h3>

                <p className="text-[#5b6375] leading-7">
                  {proposedSolution}
                </p>
              </div>
            </div>
          </div>

          {/* ==========================================
              Right Sidebar
          ========================================== */}
          <div className="space-y-6">

            {/* ==========================================
                Creator Card
            ========================================== */}
            <div className="bg-white rounded-3xl shadow-md p-6">

              <h3 className="text-xl font-semibold text-[#091123] mb-5">
                Idea Creator
              </h3>

              <div className="flex items-center gap-4">

                {/* User Image */}
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    width={80}
                    height={80}
                    src={userImage}
                    alt={userName}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* User Info */}
                <div className="space-y-1">
                  <h4 className="font-semibold text-[#091123]">
                    {userName}
                  </h4>

                  <p className="text-sm text-[#5b6375] break-all">
                    {userEmail}
                  </p>
                </div>
              </div>
            </div>

            {/* ==========================================
                Idea Info Cards
            ========================================== */}
            <div className="space-y-4">

              {/* Budget */}
              <div className="bg-white rounded-3xl shadow-md p-5 flex items-start gap-4">

                <div className="
                  w-12 h-12 rounded-2xl
                  flex items-center justify-center
                  bg-purple-100 text-purple-600
                ">
                  <FaMoneyBillWave className="text-xl" />
                </div>

                <div className="space-y-1">
                  <p className="text-sm text-[#5b6375]">
                    Estimated Budget
                  </p>

                  <h4 className="font-semibold text-[#091123]">
                    {estimatedBudget}
                  </h4>
                </div>
              </div>

              {/* Audience */}
              <div className="bg-white rounded-3xl shadow-md p-5 flex items-start gap-4">

                <div className="
                  w-12 h-12 rounded-2xl
                  flex items-center justify-center
                  bg-cyan-100 text-cyan-600
                ">
                  <FaUsers className="text-xl" />
                </div>

                <div className="space-y-1">
                  <p className="text-sm text-[#5b6375]">
                    Target Audience
                  </p>

                  <h4 className="font-semibold text-[#091123]">
                    {targetAudience}
                  </h4>
                </div>
              </div>

              {/* Category */}
              <div className="bg-white rounded-3xl shadow-md p-5 flex items-start gap-4">

                <div className="
                  w-12 h-12 rounded-2xl
                  flex items-center justify-center
                  bg-orange-100 text-orange-500
                ">
                  <FaLightbulb className="text-xl" />
                </div>

                <div className="space-y-1">
                  <p className="text-sm text-[#5b6375]">
                    Startup Category
                  </p>

                  <h4 className="font-semibold text-[#091123]">
                    {category}
                  </h4>
                </div>
              </div>
            </div>

            {/* ==========================================
                CTA Card
            ========================================== */}
            <div className="
              rounded-3xl p-6 text-white shadow-md
              bg-[linear-gradient(135deg,oklch(0.55_0.22_285),oklch(0.62_0.2_305)_55%,oklch(0.78_0.15_215))]
            ">

              <div className="space-y-4">

                <h3 className="text-2xl font-semibold">
                  Interested in this idea?
                </h3>

                <p className="text-sm leading-7 text-white/90">
                  Share your feedback, collaborate with the creator,
                  and help improve this startup concept together.
                </p>

                <button className="
                  w-full rounded-xl bg-white text-[#091123]
                  py-3 font-medium transition-all hover:scale-[1.02]
                ">
                  Join Discussion
                </button>
              </div>
            </div>
          </div>
        </div>

      </Container>
    </section>
  );
};

export default IdeaDetailPage;