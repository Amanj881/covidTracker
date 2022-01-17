import React from 'react'
import {Container,Box } from '@material-ui/core';
function Result({res}) {
	return (
		<Container maxWidth="sm">
		<Box sx={{  height: 'auto',mt:4,mb:4 ,borderRadius:4 }} >
			<h1>Total Cases :<span>{res.cases}</span></h1>
			<h1>Total Active Cases :<span>{res.active}</span></h1>	

			<h1>Total Cases Per Million :<span>{res.casesPerOneMillion}</span></h1>
			<h1>Total Critical Cases :<span>{res.critical}</span></h1>
			<h1>Total Death :<span>{res.deaths}</span></h1>
			<h1>Total Recovered :<span>{res.recovered}</span></h1>
			<h1>Total Today Cases :<span>{res.todayCases}</span></h1>
			<h1>Total Today Death :<span>{res.todayDeaths}</span></h1>

			<h1>Total Test :<span>{res.totalTests}</span></h1>
		</Box>
		</Container>
		
	)
}

export default Result