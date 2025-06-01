export default function Calendar() {
  const daysOfWeek = ['日', '月', '火', '水', '木', '金', '土'];
  const currentMonth = '2024年1月';
  
  // カレンダーのダミーデータ
  const calendarDays = [
    { day: 31, isCurrentMonth: false, events: [] },
    { day: 1, isCurrentMonth: true, events: ['新年'] },
    { day: 2, isCurrentMonth: true, events: [] },
    { day: 3, isCurrentMonth: true, events: [] },
    { day: 4, isCurrentMonth: true, events: [] },
    { day: 5, isCurrentMonth: true, events: ['新プロジェクト開始'] },
    { day: 6, isCurrentMonth: true, events: [] },
    { day: 7, isCurrentMonth: true, events: [] },
    { day: 8, isCurrentMonth: true, events: ['新年会案内'] },
    { day: 9, isCurrentMonth: true, events: [] },
    { day: 10, isCurrentMonth: true, events: ['チーム会議', 'システムメンテナンス告知'] },
    { day: 11, isCurrentMonth: true, events: [] },
    { day: 12, isCurrentMonth: true, events: [] },
    { day: 13, isCurrentMonth: true, events: [] },
    { day: 14, isCurrentMonth: true, events: [] },
    { day: 15, isCurrentMonth: true, events: ['システムメンテナンス'] },
    { day: 16, isCurrentMonth: true, events: [] },
    { day: 17, isCurrentMonth: true, events: [] },
    { day: 18, isCurrentMonth: true, events: [] },
    { day: 19, isCurrentMonth: true, events: [] },
    { day: 20, isCurrentMonth: true, events: ['新年会'] },
    { day: 21, isCurrentMonth: true, events: [] },
    { day: 22, isCurrentMonth: true, events: [] },
    { day: 23, isCurrentMonth: true, events: [] },
    { day: 24, isCurrentMonth: true, events: [] },
    { day: 25, isCurrentMonth: true, events: ['セキュリティ研修'] },
    { day: 26, isCurrentMonth: true, events: [] },
    { day: 27, isCurrentMonth: true, events: [] },
    { day: 28, isCurrentMonth: true, events: [] },
    { day: 29, isCurrentMonth: true, events: [] },
    { day: 30, isCurrentMonth: true, events: [] },
    { day: 31, isCurrentMonth: true, events: [] },
    { day: 1, isCurrentMonth: false, events: [] },
    { day: 2, isCurrentMonth: false, events: [] },
    { day: 3, isCurrentMonth: false, events: [] },
  ];

  return (
    <div className="space-y-6">
      {/* ページヘッダー */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">カレンダー</h1>
          <p className="text-gray-600">スケジュールと会議室の管理</p>
        </div>
        <div className="flex space-x-3">
          <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
            会議室予約
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            新規予定作成
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* メインカレンダー */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            {/* カレンダーヘッダー */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">{currentMonth}</h2>
              <div className="flex items-center space-x-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button className="px-3 py-1 text-sm text-blue-600 hover:bg-blue-50 rounded-lg">今日</button>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* 曜日ヘッダー */}
            <div className="grid grid-cols-7 border-b border-gray-200">
              {daysOfWeek.map((day, index) => (
                <div key={day} className={`p-4 text-center text-sm font-medium ${
                  index === 0 ? 'text-red-600' : index === 6 ? 'text-blue-600' : 'text-gray-700'
                }`}>
                  {day}
                </div>
              ))}
            </div>

            {/* カレンダーグリッド */}
            <div className="grid grid-cols-7">
              {calendarDays.map((dayData, index) => (
                <div
                  key={index}
                  className={`min-h-[120px] p-2 border-r border-b border-gray-100 ${
                    !dayData.isCurrentMonth ? 'bg-gray-50' : 'bg-white hover:bg-gray-50'
                  } ${dayData.day === 10 ? 'bg-blue-50' : ''}`}
                >
                  <div className={`text-sm font-medium mb-2 ${
                    !dayData.isCurrentMonth ? 'text-gray-400' : 
                    dayData.day === 10 ? 'text-blue-600' : 'text-gray-900'
                  }`}>
                    {dayData.day}
                  </div>
                  <div className="space-y-1">
                    {dayData.events.map((event, eventIndex) => (
                      <div
                        key={eventIndex}
                        className="text-xs p-1 rounded bg-blue-100 text-blue-800 truncate cursor-pointer hover:bg-blue-200"
                      >
                        {event}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* サイドバー */}
        <div className="space-y-6">
          {/* 今日の予定 */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">今日の予定</h3>
              <p className="text-sm text-gray-500">1月10日（水）</p>
            </div>
            <div className="p-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-1.5"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">チーム会議</p>
                    <p className="text-xs text-gray-500">10:00 - 11:00</p>
                    <p className="text-xs text-gray-500">会議室A</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-1.5"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">プロジェクトレビュー</p>
                    <p className="text-xs text-gray-500">14:00 - 15:30</p>
                    <p className="text-xs text-gray-500">会議室B</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mt-1.5"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">クライアント打ち合わせ</p>
                    <p className="text-xs text-gray-500">16:00 - 17:00</p>
                    <p className="text-xs text-gray-500">オンライン</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 会議室の空き状況 */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">会議室の空き状況</h3>
            </div>
            <div className="p-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">会議室A</p>
                    <p className="text-xs text-gray-500">8名収容</p>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                    使用中
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">会議室B</p>
                    <p className="text-xs text-gray-500">12名収容</p>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    空き
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">会議室C</p>
                    <p className="text-xs text-gray-500">6名収容</p>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    空き
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">大会議室</p>
                    <p className="text-xs text-gray-500">20名収容</p>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    14:00-15:30予約済
                  </span>
                </div>
              </div>
              
              <div className="mt-4">
                <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                  会議室を予約する
                </button>
              </div>
            </div>
          </div>

          {/* 今後の重要な予定 */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">今後の重要な予定</h3>
            </div>
            <div className="p-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full mt-1.5"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">システムメンテナンス</p>
                    <p className="text-xs text-gray-500">1月15日 22:00-24:00</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-1.5"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">新年会</p>
                    <p className="text-xs text-gray-500">1月20日 18:00-</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mt-1.5"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">セキュリティ研修</p>
                    <p className="text-xs text-gray-500">1月25日 14:00-</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 