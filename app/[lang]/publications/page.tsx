export default function PublicationsPage() {
  return (
    <main className="max-w-4xl mx-auto py-20 px-6 text-gray-800">
      <h1 className="text-4xl font-bold mb-10">研究業績</h1>

      <h2 className="text-2xl font-semibold mt-10 mb-4">国際会議・論文誌</h2>

      <ul className="list-disc pl-6 space-y-4">
        <li>
          <strong>2024</strong><br />
          Stochastic Comparator Architecture for Low-Power SAR ADCs  
          （佐々木ほか）
        </li>

        <li>
          <strong>2023</strong><br />
          Analog-Mixed Signal Modeling Method for SAR ADC Optimization  
          （佐々木ほか）
        </li>

        <li>
          <strong>2022</strong><br />
          Majority-Voting Based Comparator for Low-Voltage ADCs  
          （佐々木ほか）
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-16 mb-4">その他</h2>
      <p className="text-lg leading-relaxed">
        学会発表、研究報告、プロジェクト成果などについては、年度別に整理しています。
        詳細は研究室にお問い合わせください。
      </p>
    </main>
  );
}
