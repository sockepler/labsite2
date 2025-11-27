export default function ResearchPage() {
  return (
    <main className="max-w-4xl mx-auto py-20 px-6 text-gray-800">
      <h1 className="text-4xl font-bold mb-10">研究テーマ</h1>

      {/* 1 */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        1. 確率的比較器・多数決比較器
      </h2>
      <p className="leading-relaxed text-lg mb-4">
        アナログ回路中で発生するランダム性を利用し、従来の比較器とは異なる
        確率的動作を行う比較回路を研究しています。
        多数決方式を用いることで、メタスタビリティ耐性や決定精度を大幅に改善します。
        高速 SAR ADC、近似計算回路などへの応用が期待されています。
      </p>

      {/* 2 */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">2. SAR ADC アーキテクチャ</h2>
      <p className="leading-relaxed text-lg mb-4">
        スイッチドキャパシタ DAC（CDAC）の構造改良、スイッチング手法の低消費電力化、
        比較器ノイズおよびオフセット低減、AMS シミュレーションを用いた最適化など、
        高性能 SAR ADC の実現に向けて多角的に研究しています。
      </p>

      {/* 3 */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">3. アナログ計算デバイス</h2>
      <p className="leading-relaxed text-lg mb-4">
        近似計算、確率的ビットストリーム処理、アナログ行列演算など、
        デジタル・アナログの境界領域にある新しい計算手法を開拓しています。
        IoT・AI などの低電力アプリケーションへの応用を目指します。
      </p>

      {/* 4 */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        4. センサインターフェースと低電力アナログ回路
      </h2>
      <p className="leading-relaxed text-lg mb-4">
        センサー読み取りのためのアナログフロントエンド（AFE）、ローノイズアンプ、
        プログラマブルフィルタ、電源回路など、IoT 応用に不可欠な低消費電力アナログ回路を研究しています。
      </p>

      {/* 5 */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        5. アナログ/デジタル協調設計（AMS Co-simulation）
      </h2>
      <p className="leading-relaxed text-lg mb-4">
        Verilog-A、AMS、システムレベルモデルを活用し、
        回路レベルとデジタル制御ロジックを協調的に設計します。
        モンテカルロ解析やばらつき解析を通じて、高信頼回路設計を実現します。
      </p>
    </main>
  );
}

