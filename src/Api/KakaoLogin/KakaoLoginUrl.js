const CLIENT_ID = "b50e5aef31e171b0755ccea12366ed2b";
// 로그인 한 후에 Redirect할 url 지정
const REDIRECT_URI = "http://localhost:3000/oauth/callback/kakaologin";
export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
