import Image from "next/image";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* ウェルカムセクション */}
      <div className="glass rounded-xl p-6 hover-lift">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white mb-2">おかえりなさい、田中さん</h1>
            <p className="text-gray-400">新しい通知が3件あります</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-400">今日の日付</p>
            <p className="text-lg font-semibold text-white">2024年1月15日</p>
          </div>
        </div>
      </div>

      {/* クイックアクション */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <button className="glass rounded-xl p-6 hover-lift gradient-button text-white">
          <div className="flex items-center space-x-3">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <div className="text-left">
              <h3 className="font-semibold">新規申請</h3>
              <p className="text-sm opacity-90">申請書を作成</p>
            </div>
          </div>
        </button>

        <button className="glass rounded-xl p-6 hover-lift bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="flex items-center space-x-3">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <div className="text-left">
              <h3 className="font-semibold">会議予約</h3>
              <p className="text-sm opacity-90">会議室を予約</p>
            </div>
          </div>
        </button>

        <button className="glass rounded-xl p-6 hover-lift bg-gradient-to-r from-green-600 to-teal-600 text-white">
          <div className="flex items-center space-x-3">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <div className="text-left">
              <h3 className="font-semibold">ファイル共有</h3>
              <p className="text-sm opacity-90">ファイルをアップロード</p>
            </div>
          </div>
        </button>

        <button className="glass rounded-xl p-6 hover-lift bg-gradient-to-r from-orange-600 to-red-600 text-white">
          <div className="flex items-center space-x-3">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <div className="text-left">
              <h3 className="font-semibold">社員検索</h3>
              <p className="text-sm opacity-90">社員を検索</p>
            </div>
          </div>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* メインコンテンツ */}
        <div className="lg:col-span-2 space-y-6">
          {/* 最新のお知らせ */}
          <div className="glass rounded-xl p-6 hover-lift">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-white">最新のお知らせ</h2>
              <a href="/announcements" className="text-blue-400 hover:text-blue-300 text-sm font-medium">すべて見る</a>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <div className="flex-1">
                  <h3 className="font-medium text-white">【重要】システムメンテナンスのお知らせ</h3>
                  <p className="text-gray-400 text-sm mt-1">1月20日(土) 2:00-6:00にシステムメンテナンスを実施します。</p>
                  <div className="flex items-center space-x-4 mt-2">
                    <span className="text-xs text-gray-500">総務部 • 2024/01/10</span>
                    <button className="text-xs text-blue-400 hover:text-blue-300">詳細</button>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div className="flex-1">
                  <h3 className="font-medium text-white">新年会のご案内</h3>
                  <p className="text-gray-400 text-sm mt-1">1月25日(木) 18:30より新年会を開催いたします。</p>
                  <div className="flex items-center space-x-4 mt-2">
                    <span className="text-xs text-gray-500">人事部 • 2024/01/08</span>
                    <button className="text-xs text-blue-400 hover:text-blue-300">詳細</button>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div className="flex-1">
                  <h3 className="font-medium text-white">新プロジェクト開始のお知らせ</h3>
                  <p className="text-gray-400 text-sm mt-1">次世代システム開発プロジェクトが開始されました。</p>
                  <div className="flex items-center space-x-4 mt-2">
                    <span className="text-xs text-gray-500">開発部 • 2024/01/05</span>
                    <button className="text-xs text-blue-400 hover:text-blue-300">詳細</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* サイドバー */}
        <div className="space-y-6">
          {/* 今日のスケジュール */}
          <div className="glass rounded-xl p-6 hover-lift">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">今日のスケジュール</h3>
              <a href="/calendar" className="text-blue-400 hover:text-blue-300 text-sm">カレンダー</a>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-white text-sm font-medium">チーム会議</p>
                  <p className="text-gray-400 text-xs">10:00 - 11:00</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-white text-sm font-medium">プロジェクトレビュー</p>
                  <p className="text-gray-400 text-xs">14:00 - 15:30</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-white text-sm font-medium">クライアント打ち合わせ</p>
                  <p className="text-gray-400 text-xs">16:00 - 17:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* 承認待ち */}
          <div className="glass rounded-xl p-6 hover-lift">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">承認待ち</h3>
              <a href="/approvals" className="text-blue-400 hover:text-blue-300 text-sm">すべて見る</a>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg">
                <div>
                  <p className="text-white text-sm font-medium">有給申請</p>
                  <p className="text-gray-400 text-xs">山田 花子</p>
                </div>
                <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full">待機中</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg">
                <div>
                  <p className="text-white text-sm font-medium">出張申請</p>
                  <p className="text-gray-400 text-xs">佐藤 次郎</p>
                </div>
                <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full">待機中</span>
              </div>
            </div>
          </div>

          {/* 月次統計 */}
          <div className="glass rounded-xl p-6 hover-lift">
            <h3 className="text-lg font-semibold text-white mb-4">今月の統計</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">完了タスク</span>
                <span className="text-white font-semibold">24</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">参加会議</span>
                <span className="text-white font-semibold">12</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">共有ファイル</span>
                <span className="text-white font-semibold">8</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
