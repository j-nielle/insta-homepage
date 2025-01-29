import { LoginCard, MobileMockup } from "@/components";

export default function Home() {
  return (
    <article className="flex flex-col min-[2000px]:h-[calc(100lvh-250px)] min-[875px]:flex-row items-center justify-center pb-16 min-[875px]:mx-[266px] min-[875px]:gap-4 min-[875px]:pb-11">
      <MobileMockup />
      <span className="mt-3">
        <LoginCard />
      </span>
    </article>
  );
}
