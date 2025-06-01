export default function Announcements() {
  return (
    <div className="space-y-6">
      {/* ページヘッダー */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">お知らせ</h1>
          <p className="text-gray-600">社内の重要な情報をお知らせします</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          新規お知らせ作成
        </button>
      </div>

      {/* 検索・フィルター */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="お知らせを検索..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex gap-2">
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>すべての部署</option>
              <option>総務部</option>
              <option>人事部</option>
              <option>開発部</option>
              <option>営業部</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
              <option>すべての期間</option>
              <option>今日</option>
              <option>今週</option>
              <option>今月</option>
            </select>
          </div>
        </div>
      </div>

      {/* お知らせ一覧 */}
      <div className="space-y-4">
        {/* 重要なお知らせ */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-3 h-3 bg-red-500 rounded-full mt-2"></div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  重要
                </span>
                <span className="text-sm text-gray-500">総務部</span>
                <span className="text-sm text-gray-400">•</span>
                <span className="text-sm text-gray-500">2024/01/10</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">システムメンテナンスのお知らせ</h3>
              <p className="text-gray-700 mb-4">
                2024年1月15日（月）22:00〜24:00にシステムメンテナンスを実施いたします。
                この間、すべてのシステムがご利用いただけません。ご不便をおかけしますが、ご理解とご協力をお願いいたします。
              </p>
              <div className="flex items-center space-x-4">
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">詳細を見る</button>
                <button className="text-gray-500 hover:text-gray-700 text-sm">ブックマーク</button>
              </div>
            </div>
          </div>
        </div>

        {/* 通常のお知らせ */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-3 h-3 bg-blue-500 rounded-full mt-2"></div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  イベント
                </span>
                <span className="text-sm text-gray-500">人事部</span>
                <span className="text-sm text-gray-400">•</span>
                <span className="text-sm text-gray-500">2024/01/08</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">新年会のご案内</h3>
              <p className="text-gray-700 mb-4">
                2024年新年会を1月20日（土）18:00より開催いたします。
                会場は〇〇ホテル2階宴会場です。詳細は添付資料をご確認ください。
              </p>
              <div className="flex items-center space-x-4">
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">詳細を見る</button>
                <button className="text-gray-500 hover:text-gray-700 text-sm">ブックマーク</button>
                <div className="flex items-center space-x-1 text-sm text-gray-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.586-6.586a2 2 0 00-2.828-2.828z" />
                  </svg>
                  <span>添付ファイル: 新年会案内.pdf</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-3 h-3 bg-green-500 rounded-full mt-2"></div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  プロジェクト
                </span>
                <span className="text-sm text-gray-500">開発部</span>
                <span className="text-sm text-gray-400">•</span>
                <span className="text-sm text-gray-500">2024/01/05</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">新プロジェクト開始のお知らせ</h3>
              <p className="text-gray-700 mb-4">
                JATrack v2.0の開発プロジェクトが正式に開始されました。
                新機能の追加とパフォーマンスの向上を目指します。
              </p>
              <div className="flex items-center space-x-4">
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">詳細を見る</button>
                <button className="text-gray-500 hover:text-gray-700 text-sm">ブックマーク</button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-3 h-3 bg-purple-500 rounded-full mt-2"></div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  研修
                </span>
                <span className="text-sm text-gray-500">人事部</span>
                <span className="text-sm text-gray-400">•</span>
                <span className="text-sm text-gray-500">2024/01/03</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">セキュリティ研修のお知らせ</h3>
              <p className="text-gray-700 mb-4">
                情報セキュリティ研修を1月25日（木）14:00より実施いたします。
                全社員参加必須となりますので、スケジュールの調整をお願いいたします。
              </p>
              <div className="flex items-center space-x-4">
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">詳細を見る</button>
                <button className="text-gray-500 hover:text-gray-700 text-sm">ブックマーク</button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-3 h-3 bg-orange-500 rounded-full mt-2"></div>
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                  制度変更
                </span>
                <span className="text-sm text-gray-500">総務部</span>
                <span className="text-sm text-gray-400">•</span>
                <span className="text-sm text-gray-500">2024/01/01</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">勤務時間制度の変更について</h3>
              <p className="text-gray-700 mb-4">
                2024年4月より、フレックスタイム制度を導入いたします。
                詳細な運用方法については、後日説明会を開催予定です。
              </p>
              <div className="flex items-center space-x-4">
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">詳細を見る</button>
                <button className="text-gray-500 hover:text-gray-700 text-sm">ブックマーク</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ページネーション */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-700">
          <span>1-5件を表示中（全23件）</span>
        </div>
        <div className="flex items-center space-x-2">
          <button className="px-3 py-2 text-sm text-gray-500 hover:text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50">
            前へ
          </button>
          <button className="px-3 py-2 text-sm bg-blue-600 text-white rounded-lg">1</button>
          <button className="px-3 py-2 text-sm text-gray-700 hover:text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50">
            2
          </button>
          <button className="px-3 py-2 text-sm text-gray-700 hover:text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50">
            3
          </button>
          <button className="px-3 py-2 text-sm text-gray-500 hover:text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50">
            次へ
          </button>
        </div>
      </div>
    </div>
  );
} 