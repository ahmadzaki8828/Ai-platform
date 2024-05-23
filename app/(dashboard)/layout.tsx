import NavBar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

const DashBoardLayout = async ({ children }: { children: React.ReactNode }) => {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription();
  return (
    <div className="h-full relative bg-[#fefae0]">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0  bg-[#bc6c25]">
        <div>
          <Sidebar apiLimitCount={apiLimitCount} isPro={isPro} />
        </div>
      </div>
      <main className="md:pl-72 ">
        <NavBar /> {children}
      </main>
    </div>
  );
};

export default DashBoardLayout;
