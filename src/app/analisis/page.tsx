import Sidebar from "../../components/ui/Sidebar";
import Topbar from "../../components/ui/Topbar";
import AnalyticsPAge from "../../components/views/AnalyticsPage";

export default function Home() {
  return (
    <main className="min-h-screen min-w-screen flex bg-[#f4f2ed]">
      <Sidebar />
      <div className="flex-1 min-w-[0]">
        <Topbar />
        <AnalyticsPAge />
      </div>
    </main>
  );
}
