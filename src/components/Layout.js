import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="overflow-y-auto">
      <div className="overflow-y-auto h-screen dark:h-[1200px] bg-white text-black dark:bg-neutral-800 dark:text-white">
        <Header />
        <main className="absolute top-0 bottom-0 font-jost md:top-[80px]">
          {children}
        </main>
      </div>
    </div>
  );
}
