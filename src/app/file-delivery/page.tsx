export default function FileDelivery() {
  return (
    <div className="space-y-6">
      {/* ヘッダーセクション */}
      <div className="glass rounded-xl p-6 hover-lift">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white mb-2">ファイル便</h1>
            <p className="text-gray-400">大容量ファイルの安全な送受信サービス</p>
          </div>
          <div className="flex space-x-3">
            <button className="gradient-button px-6 py-3 rounded-lg text-white font-medium hover-lift">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <span>ファイル送信</span>
              </div>
            </button>
            <button className="glass border border-gray-600/50 px-6 py-3 rounded-lg text-gray-300 hover:text-white hover:border-gray-500/50 transition-all hover-lift">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>受信履歴</span>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* メインコンテンツ */}
        <div className="lg:col-span-2 space-y-6">
          {/* ファイル送信フォーム */}
          <div className="glass rounded-xl p-6 hover-lift">
            <h2 className="text-xl font-semibold text-white mb-6">ファイル送信</h2>
            
            <div className="space-y-6">
              {/* ファイルドロップエリア */}
              <div className="border-2 border-dashed border-gray-600/50 rounded-xl p-8 text-center hover:border-blue-500/50 transition-colors">
                <svg className="w-16 h-16 text-gray-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <h3 className="text-lg font-medium text-white mb-2">ファイルをドラッグ&ドロップ</h3>
                <p className="text-gray-400 mb-4">または、クリックしてファイルを選択</p>
                <button className="gradient-button px-6 py-2 rounded-lg text-white font-medium">
                  ファイルを選択
                </button>
                <p className="text-xs text-gray-500 mt-3">最大ファイルサイズ: 2GB | 対応形式: すべて</p>
              </div>

              {/* 送信先設定 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">送信先メールアドレス</label>
                  <input
                    type="email"
                    placeholder="example@company.com"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent text-gray-300 placeholder-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">有効期限</label>
                  <select className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent text-gray-300">
                    <option>7日間</option>
                    <option>3日間</option>
                    <option>1日間</option>
                    <option>12時間</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">メッセージ（任意）</label>
                <textarea
                  rows={4}
                  placeholder="送信先へのメッセージを入力してください..."
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent text-gray-300 placeholder-gray-500 resize-none"
                ></textarea>
              </div>

              {/* セキュリティオプション */}
              <div className="space-y-3">
                <h3 className="text-lg font-medium text-white">セキュリティオプション</h3>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-800 border-gray-600 rounded focus:ring-blue-500" />
                    <span className="text-gray-300">パスワード保護</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-800 border-gray-600 rounded focus:ring-blue-500" />
                    <span className="text-gray-300">ダウンロード通知</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-800 border-gray-600 rounded focus:ring-blue-500" />
                    <span className="text-gray-300">ダウンロード回数制限</span>
                  </label>
                </div>
              </div>

              <button className="w-full gradient-button py-4 rounded-lg text-white font-semibold text-lg hover-lift">
                ファイルを送信
              </button>
            </div>
          </div>

          {/* 送信履歴 */}
          <div className="glass rounded-xl p-6 hover-lift">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">送信履歴</h2>
              <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">すべて見る</button>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-white">プロジェクト資料.pdf</h3>
                    <p className="text-sm text-gray-400">送信先: client@example.com • 2024/01/15</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">ダウンロード済み</span>
                  <button className="text-gray-400 hover:text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-white">設計書_v2.zip</h3>
                    <p className="text-sm text-gray-400">送信先: team@company.com • 2024/01/14</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full">送信中</span>
                  <button className="text-gray-400 hover:text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-white">会議資料.pptx</h3>
                    <p className="text-sm text-gray-400">送信先: manager@company.com • 2024/01/13</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="px-3 py-1 bg-red-500/20 text-red-400 text-xs rounded-full">期限切れ</span>
                  <button className="text-gray-400 hover:text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* サイドバー */}
        <div className="space-y-6">
          {/* 使用状況 */}
          <div className="glass rounded-xl p-6 hover-lift">
            <h3 className="text-lg font-semibold text-white mb-4">使用状況</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">今月の送信容量</span>
                  <span className="text-white">2.4GB / 10GB</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full" style={{width: '24%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">送信回数</span>
                  <span className="text-white">12 / 50</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-green-500 to-teal-600 h-2 rounded-full" style={{width: '24%'}}></div>
                </div>
              </div>
            </div>
          </div>

          {/* 受信ファイル */}
          <div className="glass rounded-xl p-6 hover-lift">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">受信ファイル</h3>
              <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">3件</span>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 bg-gray-800/30 rounded-lg">
                <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-white text-sm font-medium">契約書.pdf</p>
                  <p className="text-gray-400 text-xs">from: legal@company.com</p>
                </div>
                <button className="text-blue-400 hover:text-blue-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </button>
              </div>

              <div className="flex items-center space-x-3 p-3 bg-gray-800/30 rounded-lg">
                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-white text-sm font-medium">画像素材.zip</p>
                  <p className="text-gray-400 text-xs">from: design@company.com</p>
                </div>
                <button className="text-blue-400 hover:text-blue-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </button>
              </div>

              <div className="flex items-center space-x-3 p-3 bg-gray-800/30 rounded-lg">
                <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-white text-sm font-medium">プレゼン資料.pptx</p>
                  <p className="text-gray-400 text-xs">from: sales@company.com</p>
                </div>
                <button className="text-blue-400 hover:text-blue-300">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* セキュリティ情報 */}
          <div className="glass rounded-xl p-6 hover-lift">
            <h3 className="text-lg font-semibold text-white mb-4">セキュリティ</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-gray-300 text-sm">エンドツーエンド暗号化</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-gray-300 text-sm">パスワード保護対応</span>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-300 text-sm">自動削除機能</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 