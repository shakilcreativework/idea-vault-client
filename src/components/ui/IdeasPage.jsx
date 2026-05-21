import Container from "@/components/shared/Container";
import SectionBadge from "@/components/ui/SectionBadge";
import BaseButton from "@/components/ui/BaseButton";
import { getIdeasData } from "@/lib/actions";
import { getCategories } from "@/lib/getCategories";
import Link from "next/link";
import Image from "next/image";

import { LuSearch, LuSlidersHorizontal } from "react-icons/lu";

const IdeasPage = async ({ searchParams }) => {

  // ==========================================
  // Get Query Category
  // ==========================================
  const category = searchParams?.category || "All";

  // ==========================================
  // Fetch Ideas
  // ==========================================
  const ideas = await getIdeasData(
    category === "All" ? "" : category
  );

  // ==========================================
  // Categories
  // ==========================================
  const categories = getCategories();

  return (
    <section className="py-14 md:py-20 bg-[#F8FAFD] min-h-dvh">

      <Container className={"max-w-7xl"}>

        {/* ==========================================
            Heading
        ========================================== */}
        <div className="space-y-5">

          <SectionBadge
            icon={<LuSlidersHorizontal className="text-lg" />}
            text={"Browse the vault"}
          />

          <div className="space-y-3">

            <h1 className="text-4xl md:text-6xl font-bold text-[#091123] plus-jakarta">
              All startup ideas
            </h1>

            <p className="text-[#5b6375] text-lg">
              Search by title, filter by category,
              and find ideas worth building on.
            </p>

          </div>
        </div>

        {/* ==========================================
            Search + Filter
        ========================================== */}
        <div className="mt-10 space-y-5">

          {/* Search Bar */}
          <div className="flex flex-col md:flex-row gap-4">

            <div className="
              flex-1 bg-white rounded-2xl border
              px-5 py-4 flex items-center gap-3
              shadow-sm
            ">

              <LuSearch className="text-2xl text-[#5b6375]" />

              <input
                type="text"
                placeholder="Search ideas by title..."
                className="
                  w-full bg-transparent outline-none
                  text-[#091123]
                "
              />
            </div>

            <button
              className="
                px-8 rounded-2xl text-white font-medium
                bg-[linear-gradient(135deg,oklch(0.55_0.22_285),oklch(0.62_0.2_305)_55%,oklch(0.78_0.15_215))]
              "
            >
              Search
            </button>

          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-3">

            {/* All Button */}
            <Link
              href="/ideas"
              className={`
                px-5 py-2 rounded-full text-sm font-medium
                transition-all shadow-sm
                ${category === "All"
                  ? "text-white bg-[linear-gradient(135deg,oklch(0.55_0.22_285),oklch(0.62_0.2_305)_55%,oklch(0.78_0.15_215))]"
                  : "bg-white text-[#091123] border hover:border-purple-400"
                }
              `}
            >
              All
            </Link>

            {
              categories.map((item, idx) => (

                <Link
                  key={idx}
                  href={item.path}
                  className={`
                    px-5 py-2 rounded-full text-sm font-medium
                    transition-all shadow-sm
                    ${category === item.name
                      ? "text-white bg-[linear-gradient(135deg,oklch(0.55_0.22_285),oklch(0.62_0.2_305)_55%,oklch(0.78_0.15_215))]"
                      : "bg-white text-[#091123] border hover:border-purple-400"
                    }
                  `}
                >
                  {item.name}
                </Link>
              ))
            }

          </div>
        </div>

        {/* ==========================================
            Ideas Grid
        ========================================== */}
        <div className="mt-12">

          {
            ideas?.length > 0 ? (

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

                {
                  ideas.map((idea) => (

                    <div
                      key={idea._id}
                      className="
                        bg-white rounded-3xl overflow-hidden
                        border shadow-sm hover:shadow-md
                        transition-all duration-300
                      "
                    >

                      {/* Image */}
                      <div className="relative h-60 w-full">

                        <Image
                          src={idea.imageURL}
                          alt={idea.ideaTitle}
                          fill
                          className="object-cover"
                          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                        />

                      </div>

                      {/* Content */}
                      <div className="p-6 space-y-5">

                        {/* Category */}
                        <span className="
                          inline-flex items-center gap-2
                          rounded-full px-3 py-1 text-xs font-medium
                          bg-purple-100 text-purple-600
                        ">
                          {idea.category}
                        </span>

                        {/* Title */}
                        <div className="space-y-2">

                          <h2 className="
                            text-2xl font-bold text-[#091123]
                            line-clamp-2 plus-jakarta
                          ">
                            {idea.ideaTitle}
                          </h2>

                          <p className="
                            text-[#5b6375] leading-7
                            line-clamp-3
                          ">
                            {idea.shortDescription}
                          </p>

                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">

                          {
                            idea.tags?.slice(0, 3).map((tag, idx) => (
                              <span
                                key={idx}
                                className="
                                  text-xs px-3 py-1 rounded-full
                                  bg-gray-100 text-[#5b6375]
                                "
                              >
                                #{tag}
                              </span>
                            ))
                          }

                        </div>

                        {/* Footer */}
                        <div className="
                          flex items-center justify-between
                          pt-2
                        ">

                          <div className="flex items-center gap-3">

                            <div className="
                              relative w-10 h-10
                              rounded-full overflow-hidden
                            ">

                              <Image
                                src={idea.userImage}
                                alt={idea.userName}
                                fill
                                className="object-cover"
                                sizes="40px"
                              />

                            </div>

                            <div>
                              <h4 className="
                                text-sm font-semibold text-[#091123]
                              ">
                                {idea.userName}
                              </h4>

                              <p className="text-xs text-[#5b6375]">
                                Creator
                              </p>
                            </div>

                          </div>

                          <BaseButton
                            size="sm"
                            text={"View"}
                            as="link"
                            href={`/ideas/${idea._id}`}
                            className="
                              rounded-xl
                              bg-[linear-gradient(135deg,oklch(0.55_0.22_285),oklch(0.62_0.2_305)_55%,oklch(0.78_0.15_215))]
                            "
                          />

                        </div>

                      </div>
                    </div>
                  ))
                }

              </div>

            ) : (

              <div className="
                bg-white rounded-3xl border border-dashed
                p-10 md:p-16 text-center space-y-6
              ">

                <div className="space-y-3">

                  <h2 className="
                    text-3xl font-bold text-[#091123]
                  ">
                    No ideas match those filters
                  </h2>

                  <p className="text-[#5b6375] text-lg">
                    Try a different search or clear the filters.
                  </p>

                </div>

                <BaseButton
                  size="md"
                  text={"Share your idea"}
                  as="link"
                  href={"/add-idea"}
                  className="
                    rounded-xl
                    bg-[linear-gradient(135deg,oklch(0.55_0.22_285),oklch(0.62_0.2_305)_55%,oklch(0.78_0.15_215))]
                  "
                />

              </div>
            )
          }

        </div>

      </Container>
    </section>
  );
};

export default IdeasPage;