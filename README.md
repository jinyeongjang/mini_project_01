# 영화 검색 웹 애플리케이션

TMDB 오픈 API로 최신 영화 정보를 검색하고, 상세 줄거리와 평점을 확인하는 React 웹앱입니다.

- 배포: https://mini-project-01-seven.vercel.app
- 기간: 2024.06 (미니 프로젝트)
- 역할: 전체 구현 (개인 프로젝트)

## 주요 기능
- TMDB API로 영화 검색 및 카테고리별 목록 조회
- 영화 상세 페이지: 줄거리, 평점
- 비동기 API 통신으로 빠른 검색과 직관적인 UI 인터랙션 구현
- Firebase 연동

## 기술 스택
React · JavaScript · Vite · Firebase · TMDB API · CSS

## 로컬 실행
```bash
npm install
npm run dev        # 개발 서버
npm run build      # 프로덕션 빌드
```

`.env` 파일에 다음 환경 변수를 설정합니다. 실제 값은 리포지토리에 포함하지 않습니다.
```
VITE_TMDB_ACCESS_KEY=...      # TMDB API 액세스 키
VITE_FIREBASE_API_KEY=...     # Firebase 설정
```
