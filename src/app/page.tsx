import Sidebar from "../components/ui/Sidebar";
import Topbar from "../components/ui/Topbar";
import HomePage from "../components/views/HomePage";

export default function Home() {
  return (
    <main className="min-h-screen flex bg-[var(--background)]">
      <Sidebar />
      <div className="flex-1 min-w-[0]">
        <Topbar />
        <HomePage />
      </div>
    </main>
  );
}
