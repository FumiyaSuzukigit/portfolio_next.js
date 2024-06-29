import MainNav from "@/components/main-nav";
import SiteFooter from "@/components/site-footer";
import { marketingConfig } from "@/config/marketing";

export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header className="container z-40 bg-background">
        <div className="h-20 py-6 flex items-center justify-between">
          <MainNav items={marketingConfig.mainNav} />
        </div>
      </header>
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
