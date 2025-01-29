import { LoginForm, MobileMockup } from "@/components";

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center justify-center">
      <div className="flex flex-col min-[875px]:flex-row items-center justify-center mt-[24px] min-[875px]:mx-[266px] min-[875px]:gap-2 pb-11">
        <MobileMockup />
        <LoginForm />
      </div>
    </div>
  );
}
