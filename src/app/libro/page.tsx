import Sidebar from "../../components/ui/Sidebar";
import Topbar from "../../components/ui/Topbar";
import LibroPage from "@/src/components/views/LibroPage";

export default function Home() {
  return (
    <main className="min-h-screen min-w-screen flex bg-[#f4f2ed]">
      <Sidebar />
      <div className="w-full min-[850px]:w-[calc(100%_-_246px)] min-w-[0]">
        <Topbar />
        <LibroPage />
      </div>
    </main>
  );
}
