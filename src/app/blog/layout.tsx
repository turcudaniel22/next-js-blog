import SideNav from "../ui/components/sidenav";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <div className="w-full lg:w-64 bg-gray-200 p-4 lg:p-6">
        <SideNav />
      </div>
      <div className="flex-1 p-6 bg-white">{children}</div>
    </div>
  );
}
