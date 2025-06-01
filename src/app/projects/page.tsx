export default function Projects() {
  return (
    <div className="space-y-6">
      {/* ページヘッダー */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">プロジェクト管理</h1>
          <p className="text-gray-600">プロジェクトの進捗とタスクの管理</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          新規プロジェクト作成
        </button>
      </div>

      {/* フィルター・検索 */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">プロジェクト検索</label>
            <div className="relative">
              <input
                type="text"
                placeholder="プロジェクト名、担当者で検索..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <svg className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">ステータス</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option value="">全ステータス</option>
              <option value="planning">企画中</option>
              <option value="active">進行中</option>
              <option value="review">レビュー中</option>
              <option value="completed">完了</option>
              <option value="paused">一時停止</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">優先度</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option value="">全優先度</option>
              <option value="high">高</option>
              <option value="medium">中</option>
              <option value="low">低</option>
            </select>
          </div>
        </div>
      </div>

      {/* プロジェクト一覧 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* プロジェクト1 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <h3 className="text-lg font-semibold text-gray-900">新ECサイト開発</h3>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  進行中
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  高優先度
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                新しいECサイトの設計・開発・テスト・リリースまでの一連の作業
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-sm text-gray-600">プロジェクトマネージャー</p>
              <p className="text-sm font-medium text-gray-900">田中 太郎</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">期限</p>
              <p className="text-sm font-medium text-gray-900">2024/03/31</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">チームメンバー</p>
              <div className="flex -space-x-2 mt-1">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white">
                  <span className="text-white text-xs">田</span>
                </div>
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-white">
                  <span className="text-white text-xs">佐</span>
                </div>
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center border-2 border-white">
                  <span className="text-white text-xs">高</span>
                </div>
                <div className="w-6 h-6 bg-gray-500 rounded-full flex items-center justify-center border-2 border-white">
                  <span className="text-white text-xs">+2</span>
                </div>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-600">予算</p>
              <p className="text-sm font-medium text-gray-900">¥5,000,000</p>
            </div>
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">進捗</span>
              <span className="text-sm text-gray-600">65%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{width: '65%'}}></div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-4 text-center">
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-lg font-semibold text-gray-900">12</p>
              <p className="text-xs text-gray-600">総タスク</p>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <p className="text-lg font-semibold text-green-600">8</p>
              <p className="text-xs text-gray-600">完了</p>
            </div>
            <div className="bg-yellow-50 p-3 rounded-lg">
              <p className="text-lg font-semibold text-yellow-600">4</p>
              <p className="text-xs text-gray-600">残り</p>
            </div>
          </div>

          <div className="flex space-x-2">
            <button className="flex-1 bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
              詳細表示
            </button>
            <button className="flex-1 bg-gray-600 text-white px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors text-sm">
              タスク管理
            </button>
          </div>
        </div>

        {/* プロジェクト2 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <h3 className="text-lg font-semibold text-gray-900">社内システム改修</h3>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  レビュー中
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  中優先度
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                既存の社内システムの機能改修とパフォーマンス向上
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-sm text-gray-600">プロジェクトマネージャー</p>
              <p className="text-sm font-medium text-gray-900">山田 花子</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">期限</p>
              <p className="text-sm font-medium text-gray-900">2024/02/28</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">チームメンバー</p>
              <div className="flex -space-x-2 mt-1">
                <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center border-2 border-white">
                  <span className="text-white text-xs">山</span>
                </div>
                <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center border-2 border-white">
                  <span className="text-white text-xs">鈴</span>
                </div>
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center border-2 border-white">
                  <span className="text-white text-xs">渡</span>
                </div>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-600">予算</p>
              <p className="text-sm font-medium text-gray-900">¥2,500,000</p>
            </div>
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">進捗</span>
              <span className="text-sm text-gray-600">85%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-yellow-500 h-2 rounded-full" style={{width: '85%'}}></div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-4 text-center">
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-lg font-semibold text-gray-900">8</p>
              <p className="text-xs text-gray-600">総タスク</p>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <p className="text-lg font-semibold text-green-600">7</p>
              <p className="text-xs text-gray-600">完了</p>
            </div>
            <div className="bg-yellow-50 p-3 rounded-lg">
              <p className="text-lg font-semibold text-yellow-600">1</p>
              <p className="text-xs text-gray-600">残り</p>
            </div>
          </div>

          <div className="flex space-x-2">
            <button className="flex-1 bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
              詳細表示
            </button>
            <button className="flex-1 bg-gray-600 text-white px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors text-sm">
              タスク管理
            </button>
          </div>
        </div>

        {/* プロジェクト3 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <h3 className="text-lg font-semibold text-gray-900">マーケティング戦略</h3>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  企画中
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  低優先度
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                2024年度のマーケティング戦略立案と実行計画の策定
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-sm text-gray-600">プロジェクトマネージャー</p>
              <p className="text-sm font-medium text-gray-900">佐藤 次郎</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">期限</p>
              <p className="text-sm font-medium text-gray-900">2024/04/30</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">チームメンバー</p>
              <div className="flex -space-x-2 mt-1">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-white">
                  <span className="text-white text-xs">佐</span>
                </div>
                <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center border-2 border-white">
                  <span className="text-white text-xs">山</span>
                </div>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-600">予算</p>
              <p className="text-sm font-medium text-gray-900">¥1,000,000</p>
            </div>
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">進捗</span>
              <span className="text-sm text-gray-600">25%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{width: '25%'}}></div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-4 text-center">
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-lg font-semibold text-gray-900">6</p>
              <p className="text-xs text-gray-600">総タスク</p>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <p className="text-lg font-semibold text-green-600">2</p>
              <p className="text-xs text-gray-600">完了</p>
            </div>
            <div className="bg-yellow-50 p-3 rounded-lg">
              <p className="text-lg font-semibold text-yellow-600">4</p>
              <p className="text-xs text-gray-600">残り</p>
            </div>
          </div>

          <div className="flex space-x-2">
            <button className="flex-1 bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
              詳細表示
            </button>
            <button className="flex-1 bg-gray-600 text-white px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors text-sm">
              タスク管理
            </button>
          </div>
        </div>

        {/* プロジェクト4 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <h3 className="text-lg font-semibold text-gray-900">セキュリティ強化</h3>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  完了
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  高優先度
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                社内システムのセキュリティ強化とセキュリティポリシーの策定
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-sm text-gray-600">プロジェクトマネージャー</p>
              <p className="text-sm font-medium text-gray-900">高橋 美咲</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">完了日</p>
              <p className="text-sm font-medium text-gray-900">2024/01/15</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">チームメンバー</p>
              <div className="flex -space-x-2 mt-1">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center border-2 border-white">
                  <span className="text-white text-xs">高</span>
                </div>
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white">
                  <span className="text-white text-xs">田</span>
                </div>
                <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center border-2 border-white">
                  <span className="text-white text-xs">鈴</span>
                </div>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-600">実績予算</p>
              <p className="text-sm font-medium text-gray-900">¥800,000</p>
            </div>
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">進捗</span>
              <span className="text-sm text-gray-600">100%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{width: '100%'}}></div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-4 text-center">
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-lg font-semibold text-gray-900">5</p>
              <p className="text-xs text-gray-600">総タスク</p>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <p className="text-lg font-semibold text-green-600">5</p>
              <p className="text-xs text-gray-600">完了</p>
            </div>
            <div className="bg-yellow-50 p-3 rounded-lg">
              <p className="text-lg font-semibold text-yellow-600">0</p>
              <p className="text-xs text-gray-600">残り</p>
            </div>
          </div>

          <div className="flex space-x-2">
            <button className="flex-1 bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
              詳細表示
            </button>
            <button className="flex-1 bg-gray-600 text-white px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors text-sm">
              レポート
            </button>
          </div>
        </div>
      </div>

      {/* 統計情報 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 rounded-lg">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-2xl font-semibold text-gray-900">12</p>
              <p className="text-sm text-gray-600">総プロジェクト数</p>
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
              <p className="text-2xl font-semibold text-gray-900">7</p>
              <p className="text-sm text-gray-600">進行中</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-3 bg-yellow-100 rounded-lg">
              <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-2xl font-semibold text-gray-900">3</p>
              <p className="text-sm text-gray-600">期限間近</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <div className="p-3 bg-purple-100 rounded-lg">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-2xl font-semibold text-gray-900">28</p>
              <p className="text-sm text-gray-600">参加メンバー</p>
            </div>
          </div>
        </div>
      </div>

      {/* 最近のアクティビティ */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">最近のアクティビティ</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-900">
                  <span className="font-medium">田中 太郎</span> が 
                  <span className="font-medium">新ECサイト開発</span> のタスク「デザインレビュー」を完了しました
                </p>
                <p className="text-xs text-gray-500">2時間前</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-900">
                  <span className="font-medium">山田 花子</span> が 
                  <span className="font-medium">社内システム改修</span> に新しいタスクを追加しました
                </p>
                <p className="text-xs text-gray-500">4時間前</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-900">
                  <span className="font-medium">佐藤 次郎</span> が 
                  <span className="font-medium">マーケティング戦略</span> プロジェクトを開始しました
                </p>
                <p className="text-xs text-gray-500">1日前</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-900">
                  <span className="font-medium">高橋 美咲</span> が 
                  <span className="font-medium">セキュリティ強化</span> プロジェクトにコメントを追加しました
                </p>
                <p className="text-xs text-gray-500">2日前</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 