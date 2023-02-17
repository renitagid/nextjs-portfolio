import Header from "./Header";

export default function Layout({ children }) {


    return (
      <>
      <div className="h-screen bg-white text-black dark:bg-neutral-800 dark:text-white">
        <Header />
        <main className="font-jost absolute top-0 md:top-[80px]">{children}</main>
        </div>
      </>
    )
  }