export default function Approvals() {
  return (
    <div className="space-y-6">
      {/* ページヘッダー */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">申請・承認</h1>
          <p className="text-gray-600">各種申請の管理と承認業務</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          新規申請作成
        </button>
      </div>

      {/* タブナビゲーション */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6" aria-label="Tabs">
            <button className="border-b-2 border-blue-500 py-4 px-1 text-sm font-medium text-blue-600">
              承認待ち
            </button>
            <button className="border-b-2 border-transparent py-4 px-1 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
              自分の申請
            </button>
            <button className="border-b-2 border-transparent py-4 px-1 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
              承認済み
            </button>
            <button className="border-b-2 border-transparent py-4 px-1 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
              却下済み
            </button>
          </nav>
        </div>

        {/* 承認待ち一覧 */}
        <div className="p-6">
          <div className="space-y-4">
            {/* 有給申請 */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">有給休暇申請</h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      承認待ち
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      緊急
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600">申請者</p>
                      <p className="text-sm font-medium text-gray-900">山田 花子（営業部）</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">申請日</p>
                      <p className="text-sm font-medium text-gray-900">2024/01/10</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">休暇期間</p>
                      <p className="text-sm font-medium text-gray-900">2024/01/15 - 2024/01/16（2日間）</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">理由</p>
                      <p className="text-sm font-medium text-gray-900">家族の病気のため</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2">詳細</p>
                    <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-lg">
                      家族が急病のため、看病と病院への付き添いが必要となりました。
                      急な申請で申し訳ございませんが、ご承認のほどよろしくお願いいたします。
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-medium">山</span>
                    </div>
                    <span className="text-sm text-gray-600">申請者</span>
                  </div>
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-medium">田</span>
                    </div>
                    <span className="text-sm text-gray-600">承認者（あなた）</span>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm">
                    却下
                  </button>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm">
                    承認
                  </button>
                </div>
              </div>
            </div>

            {/* 出張申請 */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">出張申請</h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      承認待ち
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600">申請者</p>
                      <p className="text-sm font-medium text-gray-900">佐藤 次郎（開発部）</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">申請日</p>
                      <p className="text-sm font-medium text-gray-900">2024/01/09</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">出張期間</p>
                      <p className="text-sm font-medium text-gray-900">2024/01/20 - 2024/01/22（3日間）</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">出張先</p>
                      <p className="text-sm font-medium text-gray-900">大阪府大阪市</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2">目的</p>
                    <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-lg">
                      クライアント先でのシステム導入作業およびトレーニング実施のため。
                      現地での作業が必要な案件となります。
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">予算</p>
                      <p className="text-sm font-medium text-gray-900">¥150,000（交通費・宿泊費込み）</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">宿泊先</p>
                      <p className="text-sm font-medium text-gray-900">大阪ビジネスホテル</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-medium">佐</span>
                    </div>
                    <span className="text-sm text-gray-600">申請者</span>
                  </div>
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-medium">田</span>
                    </div>
                    <span className="text-sm text-gray-600">承認者（あなた）</span>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm">
                    却下
                  </button>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm">
                    承認
                  </button>
                </div>
              </div>
            </div>

            {/* 備品購入申請 */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">備品購入申請</h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                      承認待ち
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600">申請者</p>
                      <p className="text-sm font-medium text-gray-900">鈴木 一郎（総務部）</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">申請日</p>
                      <p className="text-sm font-medium text-gray-900">2024/01/08</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">購入予定品</p>
                      <p className="text-sm font-medium text-gray-900">プロジェクター × 1台</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">予算</p>
                      <p className="text-sm font-medium text-gray-900">¥80,000</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2">購入理由</p>
                    <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-lg">
                      会議室Cのプロジェクターが故障したため、新しいプロジェクターの購入が必要です。
                      プレゼンテーション業務に支障をきたしているため、早急な対応をお願いします。
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-medium">鈴</span>
                    </div>
                    <span className="text-sm text-gray-600">申請者</span>
                  </div>
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-medium">田</span>
                    </div>
                    <span className="text-sm text-gray-600">承認者（あなた）</span>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm">
                    却下
                  </button>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm">
                    承認
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 統計情報 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-3 bg-yellow-100 rounded-lg">
              <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-2xl font-semibold text-gray-900">3</p>
              <p className="text-sm text-gray-600">承認待ち</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-3 bg-green-100 rounded-lg">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-2xl font-semibold text-gray-900">12</p>
              <p className="text-sm text-gray-600">今月承認済み</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-3 bg-red-100 rounded-lg">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-2xl font-semibold text-gray-900">2</p>
              <p className="text-sm text-gray-600">今月却下</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 rounded-lg">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-2xl font-semibold text-gray-900">17</p>
              <p className="text-sm text-gray-600">今月総申請数</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 