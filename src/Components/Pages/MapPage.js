import React, { useEffect } from 'react';
import styled from 'styled-components';
const { naver } = window;

const MapPage = () => {

	const Container = styled.div`
width: 100%;
height: 500px;
	
`;
	//const mapDiv = document.getElementById("map");

	//var map = new naver.maps.Map('map', {
	//	center: new naver.maps.LatLng(37.3595704, 127.105399),
	//	zoom: 10
	//});

	//const mapOptions = {
	//	center: new naver.maps.LatLng(37.3595704, 127.105399),
	//	zoom: 10
	//}

	//const map = new naver.maps.Map('map', mapOptions);

	useEffect(() => {
		let mapContainer = document.getElementById("map")

		let mapOption = {
			center: new naver.maps.LatLng(37.3595704, 127.105399),
			zoom: 10
		}
		const map = new naver.maps.Map(mapContainer, mapOption);
	}, [])

	return (
		<>
			123
			{/*<Container id="map"></Container>*/}
			<div id="map" style={{ width: "300px", height: "300px" }}> </div>
		</>
	)
}

export default MapPage

