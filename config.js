/*
 * TAD STORY OKR 통합 대시보드 — 공유 서버 설정
 *
 * ▼ 이 파일에서 바꿀 곳은 firebase { ... } 안의 6줄뿐입니다.
 *   Firebase 콘솔 → 톱니바퀴(프로젝트 설정) → 일반 → 내 앱 → 'SDK 설정 및 구성' 의
 *   firebaseConfig 값을 따옴표 안에 그대로 붙여넣으세요. (설정 가이드 5단계)
 *   ※ 이 값들은 비밀번호가 아니라 '어느 서버로 연결할지' 알려주는 주소입니다.
 *     데이터 보호는 회사 구글 계정 로그인 + Firestore 보안 규칙이 담당합니다.
 */
window.OKR_CONFIG = {
  firebase: {
    apiKey: "AIzaSyCZBNT9eJ9ecczAm1imlf6Uq3dwnN0VX7g",
    authDomain: "okr-dashboard-782a7.firebaseapp.com",
    projectId: "okr-dashboard-782a7",
    storageBucket: "okr-dashboard-782a7.firebasestorage.app",
    messagingSenderId: "323565912957",
    appId: "1:323565912957:web:e9f42f39cce95269ae4214"
  },

  // 로그인을 허용할 회사 이메일 도메인 (여러 개면 ["tadstory.com", "다른도메인.com"])
  // ※ 바꾸면 firestore.rules 의 도메인도 똑같이 바꿔야 합니다.
  allowedDomains: ["tadstory.com"],

  // 한 Firebase 프로젝트에 대시보드를 여러 개 둘 때만 바꾸세요.
  dashboardId: "tadstory-okr"
};
