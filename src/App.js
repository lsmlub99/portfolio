import { useState } from 'react';

const projects = [
  {
    title: '보이스피싱 예측 모델',
    category: 'AI',
    img: '/voice.png',
    description: 'Google Speech API를 통해 음성을 텍스트로 변환하고, BERT 모델을 사용해 문맥 기반 보이스피싱 여부를 예측하는 NLP 프로젝트입니다.'
  },
  {
    title: '손글씨 분류 모델',
    category: 'AI',
    img: '/handwriting.png',
    description: 'ResNet-34를 기반으로 손글씨 이미지를 분류한 딥러닝 프로젝트로, PyTorch의 Dataset 클래스를 활용한 데이터 처리와 모델 학습 경험 포함.'
  },
  {
    title: '실시간 채팅 앱',
    category: 'App',
    img: '/chat.png',
    description: 'Firebase Realtime Database를 기반으로 개인/단체 채팅, 로그인 등 기능을 구현한 실시간 채팅 애플리케이션 개발.'
  },
  {
    title: '낙상 감지 알리미 (IoT)',
    category: 'IoT',
    img: '/fall.png',
    description: '아두이노와 센서를 활용해 낙상 시 보호자에게 알림을 보내는 IoT 시스템을 개발. 가속도/기울기/높이 센서 데이터를 실시간 분석.'
  }
];

export default function App() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6 font-sans">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">임승민 | IT & AI 포트폴리오</h1>
        <p className="text-lg mt-2 text-gray-600">끊임없이 성장하는 기술 전문가</p>
        <a
          href="https://github.com/lsmlub99?tab=repositories"
          target="_blank"
          className="text-blue-600 underline mt-3 inline-block"
        >
          GitHub 바로가기
        </a>
      </header>

      <main className="max-w-5xl mx-auto">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold border-b pb-2 mb-4">📁 프로젝트</h2>

          {/* 필터 버튼 */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {['All', 'AI', 'App', 'IoT'].map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full border transition ${
                  filter === cat ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* 프로젝트 카드 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {filtered.map((p, i) => (
              <div key={i} className="bg-white rounded-xl shadow p-5">
                <img src={p.img} alt={p.title} className="w-full h-48 object-cover rounded-md mb-4" />
                <h3 className="text-xl font-bold text-gray-900">{p.title}</h3>
                <p className="text-gray-700 mt-2 text-sm whitespace-pre-line">{p.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold border-b pb-2 mb-4">📌 연락처</h2>
          <p className="text-gray-700">Email: lsm*****@gmail.com</p>
          <p className="text-gray-700">GitHub: <a href="https://github.com/lsmlub99" className="text-blue-600 underline">lsmlub99</a></p>
        </section>
      </main>
    </div>
  );
}