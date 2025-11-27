import Hero from "./components/Hero";
import Link from "next/link";

const VALID_LANGS = ["ja", "en", "zh"] as const;
type Lang = (typeof VALID_LANGS)[number];

function isLang(x: string): x is Lang {
  return VALID_LANGS.includes(x as Lang);
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isLang(lang)) throw new Error("Invalid language");
  const currentLang = lang;

  // Hero text
  const text: Record<Lang, { title: string; subtitle: string }> = {
    ja: {
      title: "先端集積回路システム研究室",
      subtitle:
        "アナログ／ミックスドシグナルIC研究 — SAR ADC・比較器・集積回路設計",
    },
    en: {
      title: "Advanced Integrated Circuit Systems Lab",
      subtitle:
        "Analog / Mixed-Signal IC Research — SAR ADCs, Comparators, VLSI Design",
    },
    zh: {
      title: "集成电路系统实验室",
      subtitle:
        "模拟 / 混合信号 IC 研究 — SAR ADC、比较器、集成电路设计",
    },
  };

  // See more text
  const seeMoreText: Record<
    Lang,
    { about: string; research: string; members: string; publications: string; access: string }
  > = {
    ja: {
      about: "続きを読む →",
      research: "研究テーマを見る →",
      members: "メンバーを見る →",
      publications: "研究業績を見る →",
      access: "アクセス情報を見る →",
    },
    en: {
      about: "See more →",
      research: "See research →",
      members: "See members →",
      publications: "See publications →",
      access: "See access →",
    },
    zh: {
      about: "查看更多 →",
      research: "查看研究主题 →",
      members: "查看成员 →",
      publications: "查看发表成果 →",
      access: "查看访问信息 →",
    },
  };

  // Shared "see more" button style
  const seeMoreStyle =
    "text-sm text-gray-500 hover:text-gray-700 float-right mt-4";

  return (
    <main className="bg-gray-50 text-gray-800">
      <Hero
        title={text[currentLang].title}
        subtitle={text[currentLang].subtitle}
      />

      {/* ===== ABOUT ===== */}
      <section className="max-w-5xl mx-auto py-20 px-6 relative">
        <h2 className="text-3xl font-semibold mb-6">研究室について</h2>

        <p className="text-lg leading-relaxed text-gray-700">
          本研究室では、高性能アナログおよびミックスドシグナル集積回路の設計を中心に研究を行っています。
          主な研究テーマは、SAR ADCアーキテクチャ、確率的比較器、多値比較手法、低消費電力CDAC最適化、
          およびシステムレベルのAMS設計・検証です。
        </p>

        <Link href={`/${currentLang}/about`} className={seeMoreStyle}>
          {seeMoreText[currentLang].about}
        </Link>
      </section>

      {/* ===== RESEARCH ===== */}
      <section className="bg-white py-20 relative">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-10">研究テーマ</h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-6 bg-gray-100 rounded-xl shadow">
              <h3 className="text-xl font-bold">SAR ADC設計</h3>
              <p className="mt-2 text-gray-600">
                低消費電力かつ高精度を実現するCDAC構造・スイッチング最適化・タイミング設計。
              </p>
            </div>

            <div className="p-6 bg-gray-100 rounded-xl shadow">
              <h3 className="text-xl font-bold">多数決比較器</h3>
              <p className="mt-2 text-gray-600">
                メタスタビリティに強い多数決方式、並列比較構造によるSN比向上と信頼性改善。
              </p>
            </div>

            <div className="p-6 bg-gray-100 rounded-xl shadow">
              <h3 className="text-xl font-bold">ミックスドシグナルIC</h3>
              <p className="mt-2 text-gray-600">
                AFE・センサインターフェース・デジタル制御ロジック統合、AMSシミュレーション設計。
              </p>
            </div>
          </div>

          <Link href={`/${currentLang}/research`} className={seeMoreStyle}>
            {seeMoreText[currentLang].research}
          </Link>
        </div>
      </section>

      {/* ===== MEMBERS ===== */}
      <section className="max-w-5xl mx-auto py-20 px-6 relative">
        <h2 className="text-3xl font-semibold mb-8">メンバー</h2>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="bg-white shadow rounded-xl p-6">
            <h3 className="text-xl font-bold">教授</h3>
            <p className="mt-2 text-gray-600">佐々木 昌浩 准教授</p>
          </div>

          <div className="bg-white shadow rounded-xl p-6">
            <h3 className="text-xl font-bold">大学院生</h3>
            <p className="mt-2 text-gray-600">張帆 / その他</p>
          </div>

          <div className="bg-white shadow rounded-xl p-6">
            <h3 className="text-xl font-bold">学部生</h3>
            <p className="mt-2 text-gray-600">数名</p>
          </div>
        </div>

        <Link href={`/${currentLang}/members`} className={seeMoreStyle}>
          {seeMoreText[currentLang].members}
        </Link>
      </section>

      {/* ===== PUBLICATIONS ===== */}
      <section className="bg-white py-20 relative">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-8">研究業績</h2>

          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>2025年 – 多数決比較器を用いた10-bit 20-MS/s SAR ADC の研究</li>
            <li>2024年 – 低消費電力確率的比較器アーキテクチャの検討</li>
          </ul>

          <Link
            href={`/${currentLang}/publications`}
            className={seeMoreStyle}
          >
            {seeMoreText[currentLang].publications}
          </Link>
        </div>
      </section>

      {/* ===== ACCESS ===== */}
      <section className="max-w-5xl mx-auto py-20 px-6 relative">
        <h2 className="text-3xl font-semibold mb-6">アクセス</h2>
        <p className="text-gray-700">芝浦工業大学 — 先端集積回路システム研究室</p>
        <p className="mt-2 text-gray-600">東京都</p>

        <Link href={`/${currentLang}/access`} className={seeMoreStyle}>
          {seeMoreText[currentLang].access}
        </Link>
      </section>

      <footer className="bg-gray-800 text-gray-200 text-center py-6 mt-20">
        © 2025 先端集積回路システム研究室
      </footer>
    </main>
  );
}
