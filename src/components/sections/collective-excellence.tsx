import Link from "next/link";

const CollectiveExcellence = () => {
  return (
    <section className="bg-background py-[60px] md:py-[100px]">
      <div className="container mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-x-16 items-start">
          <div className="md:col-span-5">
            <h2 className="font-display text-[36px] md:text-[42px] leading-tight font-normal text-primary">
              Collective excellence
            </h2>
          </div>
          <div className="md:col-span-7">
            <p className="font-body text-lg md:text-xl leading-relaxed text-primary mb-10">
              We are a collective of talented individuals with proven pedigree. Building on our expertise in hospitality and interiors, we now offer a broad range of services with the diversity of experience, skill and style to meet any design challenge.
            </p>
            <Link
              href="/people"
              className="inline-block font-body text-sm font-medium uppercase tracking-[0.06em] border border-[#2A2A2A] rounded-full px-8 py-3 text-primary transition-colors hover:bg-[rgba(0,0,0,0.05)]"
            >
              Our People
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectiveExcellence;