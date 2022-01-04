import React from 'react';
import axios from 'axios';

const Home = () => {

	const testAxios = async () => {
		await axios(
			{
				url: '/api/get',
				method: 'GET',
				//data: {
				//	id: 1, name: 'aaa222'
				//},
				baseURL: 'http://localhost:8080',
				withCredentials: true,
			}
		).then(function (response) {
			//console.log(response.data)
			console.log("응답 왔음");
		}).catch(function (error) {
			console.log(error);
			//alert("서버가 없습니다.");
		});
	}

	return (
		<>
			홈 화면 페이지 입니다.
			{/*<form method='get' action="http://localhost:8080/api/get">
			</form>*/}
			<button onClick={testAxios}> 테스트 버튼 </button>
		</>
	)
}

export default Home
