import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-1 flex-col overflow-y-auto  bg-white text-black dark:bg-neutral-800 dark:text-white">
      <Header />
      <main className=" font-jost ">{children}</main>
    </div>
  );
}
