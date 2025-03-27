export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-6">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold">임승민 | IT & AI 포트폴리오</h1>
        <p className="text-lg mt-2">끊임없이 성장하는 기술 전문가</p>
        <a
          href="https://github.com/lsmlub99?tab=repositories"
          target="_blank"
          className="text-blue-600 underline mt-2 inline-block"
        >
          GitHub 바로가기
        </a>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">👨‍💻 소개</h2>
        <p>
          병원 IT 전산팀에서 서버, 네트워크, 보안 운영을 경험하며 실무 역량을 키웠고,
          AI 프로젝트를 통해 데이터 기반 문제 해결 능력을 쌓았습니다.
          다양한 기술을 익히며, 클라우드/DevOps/AI 분야에서의 성장을 목표로 하고 있습니다.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">🛠 기술 스택</h2>
        <ul className="grid grid-cols-2 gap-2 list-disc list-inside">
          <li>Python, Java, C</li>
          <li>PyTorch, Firebase, Arduino</li>
          <li>Git & GitHub</li>
          <li>Unix/Linux</li>
          <li>서버 & 네트워크 유지보수</li>
          <li>정보처리기사 필기 합격</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">📁 프로젝트</h2>

        <div className="mb-6">
          <h3 className="text-xl font-bold">보이스피싱 예측 모델</h3>
          <p>
            Google Speech API를 통해 음성을 텍스트로 변환하고, BERT 모델을 사용해 문맥 기반 보이스피싱 여부를 예측하는 NLP 프로젝트입니다.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-bold">손글씨 분류 모델</h3>
          <p>
            ResNet-34를 기반으로 손글씨 이미지를 분류한 딥러닝 프로젝트로, PyTorch의 Dataset 클래스를 활용한 데이터 처리와 모델 학습 경험 포함.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-bold">실시간 채팅 앱</h3>
          <p>
            Firebase Realtime Database를 기반으로 개인/단체 채팅, 로그인 등 기능을 구현한 실시간 채팅 애플리케이션 개발.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold">낙상 감지 알리미 (IoT)</h3>
          <p>
            아두이노와 센서를 활용해 낙상 시 보호자에게 알림을 보내는 IoT 시스템을 개발. 가속도/기울기/높이 센서 데이터를 실시간 분석.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">📌 연락처</h2>
        <p>Email: lsm*****@gmail.com</p>
        <p>GitHub: <a href="https://github.com/lsmlub99" className="text-blue-600 underline">lsmlub99</a></p>
      </section>
    </div>
  );
}
