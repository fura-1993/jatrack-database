import Image from "next/image";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* ウェルカムセクション */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">おはようございます、田中さん！</h1>
        <p className="text-blue-100">今日も一日頑張りましょう。新しい通知が3件あります。</p>
      </div>

      {/* クイックアクション */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center">
            <div className="p-3 bg-green-100 rounded-lg">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-900">新規申請</h3>
              <p className="text-xs text-gray-500">申請を作成</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 rounded-lg">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-900">会議予約</h3>
              <p className="text-xs text-gray-500">会議室を予約</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center">
            <div className="p-3 bg-purple-100 rounded-lg">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-900">ファイル共有</h3>
              <p className="text-xs text-gray-500">ファイルをアップロード</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
          <div className="flex items-center">
            <div className="p-3 bg-orange-100 rounded-lg">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-sm font-medium text-gray-900">社員検索</h3>
              <p className="text-xs text-gray-500">連絡先を検索</p>
            </div>
          </div>
        </div>
      </div>

      {/* メインコンテンツグリッド */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 最新のお知らせ */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">最新のお知らせ</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-900">システムメンテナンスのお知らせ</h3>
                    <p className="text-sm text-gray-500 mt-1">2024年1月15日（月）22:00〜24:00にシステムメンテナンスを実施いたします。</p>
                    <p className="text-xs text-gray-400 mt-2">2024/01/10 - 総務部</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-900">新年会のご案内</h3>
                    <p className="text-sm text-gray-500 mt-1">2024年新年会を1月20日（土）に開催いたします。詳細は添付資料をご確認ください。</p>
                    <p className="text-xs text-gray-400 mt-2">2024/01/08 - 人事部</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-900">新プロジェクト開始のお知らせ</h3>
                    <p className="text-sm text-gray-500 mt-1">JATrack v2.0の開発プロジェクトが正式に開始されました。</p>
                    <p className="text-xs text-gray-400 mt-2">2024/01/05 - 開発部</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <a href="/announcements" className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                  すべてのお知らせを見る →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* サイドバー */}
        <div className="space-y-6">
          {/* 今日の予定 */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">今日の予定</h2>
            </div>
            <div className="p-6">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">チーム会議</p>
                    <p className="text-xs text-gray-500">10:00 - 11:00</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">プロジェクトレビュー</p>
                    <p className="text-xs text-gray-500">14:00 - 15:30</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">クライアント打ち合わせ</p>
                    <p className="text-xs text-gray-500">16:00 - 17:00</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4">
                <a href="/calendar" className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                  カレンダーを見る →
                </a>
              </div>
            </div>
          </div>

          {/* 承認待ち */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">承認待ち</h2>
            </div>
            <div className="p-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">有給申請</p>
                    <p className="text-xs text-gray-500">山田 花子</p>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    承認待ち
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">出張申請</p>
                    <p className="text-xs text-gray-500">佐藤 次郎</p>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    承認待ち
                  </span>
                </div>
              </div>
              
              <div className="mt-4">
                <a href="/approvals" className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                  すべての申請を見る →
                </a>
              </div>
            </div>
          </div>

          {/* 統計情報 */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">今月の統計</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">完了したタスク</span>
                  <span className="text-sm font-semibold text-gray-900">24</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">参加した会議</span>
                  <span className="text-sm font-semibold text-gray-900">18</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">共有したファイル</span>
                  <span className="text-sm font-semibold text-gray-900">12</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
