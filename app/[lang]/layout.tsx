import { notFound } from "next/navigation";
import Navbar from "./components/Navbar";
import LanguageSwitcher from "./components/LanguageSwitcher";

const validLangs = ["ja", "en", "zh"];

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!validLangs.includes(lang)) {
    notFound();
  }

  return (
    <>
      {/* Top Navigation */}
      <header className="w-full bg-white shadow">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Navbar lang={lang} />
          <LanguageSwitcher lang={lang} />
        </div>
      </header>

      <main className="pt-10">
        {children}
      </main>
    </>
  );
}
