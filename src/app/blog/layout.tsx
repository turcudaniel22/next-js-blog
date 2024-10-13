import SideNav from "../ui/components/sidenav";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <SideNav />
      <hr />
      {children}
    </div>
  );
}
