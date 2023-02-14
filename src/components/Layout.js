import Header from "./Header";

export default function Layout({ children }) {
    return (
      <>
      <div className="h-screen bg-white">
        <Header />
        <main>{children}</main>
        </div>
      </>
    )
  }