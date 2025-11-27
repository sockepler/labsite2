export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto py-20 px-6 text-gray-800">
      <h1 className="text-4xl font-bold mb-10">研究室について</h1>

      <p className="leading-loose text-lg mb-6">
        本研究室では、アナログおよびミックスドシグナル集積回路を対象とした研究に取り組んでいます。
        回路を構成する素子の物理現象に基づいた高精度モデルを活用し、
        回路レベルからシステムレベルに至るまで一貫した最適設計を目指します。
      </p>

      <p className="leading-loose text-lg mb-6">
        現代の VLSI システムでは、アナログとデジタルを横断した高次元最適化が求められており、
        センサーインターフェース、ADC、電源回路、アナログ計算回路など、
        多様なアプリケーションにおいて性能向上と低消費電力化の両立を図ります。
      </p>

      <p className="leading-loose text-lg">
        シミュレーション、回路設計、レイアウト、AMS モデリングを組み合わせながら、
        次世代の高性能アナログ IC の実現を目指します。
      </p>
    </main>
  );
}
