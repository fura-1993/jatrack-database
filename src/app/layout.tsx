import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JATrack ポータル",
  description: "社内ポータルサイト",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen">
        <div className="flex h-screen">
          {/* サイドバー */}
          <div className="w-64 glass border-r border-gray-700/50 flex flex-col">
            <div className="p-6 border-b border-gray-700/50">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                JATrack
              </h1>
              <p className="text-gray-400 text-sm mt-1">ポータル</p>
            </div>
            
            <nav className="flex-1 p-4 space-y-2">
              <a href="/" className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-800/50 transition-all duration-200 hover-lift group">
                <svg className="w-5 h-5 text-blue-400 group-hover:text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m8 7 4-4 4 4" />
                </svg>
                <span className="text-gray-300 group-hover:text-white">ダッシュボード</span>
              </a>
              
              <a href="/announcements" className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-800/50 transition-all duration-200 hover-lift group">
                <svg className="w-5 h-5 text-green-400 group-hover:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
                <span className="text-gray-300 group-hover:text-white">お知らせ</span>
              </a>
              
              <a href="/calendar" className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-800/50 transition-all duration-200 hover-lift group">
                <svg className="w-5 h-5 text-purple-400 group-hover:text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-300 group-hover:text-white">カレンダー</span>
              </a>
              
              <a href="/files" className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-800/50 transition-all duration-200 hover-lift group">
                <svg className="w-5 h-5 text-yellow-400 group-hover:text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-300 group-hover:text-white">ファイル共有</span>
              </a>
              
              <a href="/file-delivery" className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-800/50 transition-all duration-200 hover-lift group">
                <svg className="w-5 h-5 text-orange-400 group-hover:text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M9 21V9l3-2 3 2v12" />
                </svg>
                <span className="text-gray-300 group-hover:text-white">ファイル便</span>
              </a>
              
              <a href="/directory" className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-800/50 transition-all duration-200 hover-lift group">
                <svg className="w-5 h-5 text-indigo-400 group-hover:text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="text-gray-300 group-hover:text-white">社員ディレクトリ</span>
              </a>
              
              <a href="/projects" className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-800/50 transition-all duration-200 hover-lift group">
                <svg className="w-5 h-5 text-red-400 group-hover:text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <span className="text-gray-300 group-hover:text-white">プロジェクト管理</span>
              </a>
              
              <a href="/approvals" className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-800/50 transition-all duration-200 hover-lift group">
                <svg className="w-5 h-5 text-teal-400 group-hover:text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-300 group-hover:text-white">承認ワークフロー</span>
              </a>
            </nav>
          </div>

          {/* メインコンテンツ */}
          <div className="flex-1 flex flex-col">
            {/* ヘッダー */}
            <header className="glass border-b border-gray-700/50 px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="検索..."
                      className="w-80 px-4 py-2 bg-gray-800/50 border border-gray-600/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent text-gray-300 placeholder-gray-500"
                    />
                    <svg className="absolute right-3 top-2.5 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4 19h6v-6H4v6zM16 3h5v5h-5V3zM4 3h6v6H4V3z" />
                    </svg>
                    <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                  </button>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-medium">田</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">田中 太郎</p>
                      <p className="text-xs text-gray-400">開発部</p>
                    </div>
                  </div>
                </div>
              </div>
            </header>

            {/* ページコンテンツ */}
            <main className="flex-1 overflow-auto p-6">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
