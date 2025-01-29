import { LoginSection, MobileMockup } from "@/components";

export default function Home() {
  return (
    <div className="flex flex-col min-[875px]:flex-row items-center justify-center mt-[24px] pb-16 min-[875px]:mx-[266px] min-[875px]:gap-2 min-[875px]:pb-11">
      <MobileMockup />
      <span>
        <LoginSection />
      </span>
    </div>
  );
}
