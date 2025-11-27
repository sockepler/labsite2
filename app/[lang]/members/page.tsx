export default function MembersPage() {
  return (
    <main className="max-w-4xl mx-auto py-20 px-6 text-gray-800">
      <h1 className="text-4xl font-bold mb-10">メンバー</h1>

      <h2 className="text-2xl font-semibold mb-4">教員</h2>
      <ul className="list-disc pl-6 mb-10">
        <li>
          <strong>佐々木 昌浩（ささき まさひろ）准教授</strong><br />
          先端集積回路、アナログ・ミックスドシグナル回路、データコンバータ
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">大学院生</h2>
      <ul className="list-disc pl-6 mb-10">
        <li>張帆（修士課程1年）</li>
        <li>その他数名</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">学部生</h2>
      <ul className="list-disc pl-6">
        <li>B3 / B4 数名（年度により変動）</li>
      </ul>
    </main>
  );
}
