import React,{useState} from 'react'
import {Typography} from '@material-ui/core'; //importing material ui component
import InputComponent from '../input/input';
import Button from '../Button/button';
import Result from '../result/Result';

import axios from 'axios';

export default function header({title,font}) {
	const headstyle ={
	color:'black',
	fontStyle:font,
	}
	const [helper,setHelper] = useState(false);
	const [input,setInput] = useState();
	const [response,setResponse] = useState([]);
	const [error,setError] = useState();
	const [loading,setLoading] = useState(true);
	const handleChange = (e) => {
		const inputValue = e.target.value;
		if(inputValue.length   > 0 )
		{
			setHelper(true);
			setInput(inputValue);
		}
	}

	const onSubmit =async () => {
		const api = "https://coronavirus-19-api.herokuapp.com/countries";
		const country = input;
		const responses =await axios.get(`${api}/${country}`).then(
			(res) =>{
				if(res.data != 'Country not found')
				{
					setResponse(res.data);
					
				}
			}
		).catch((error)=>{
			console.error("u able to fetch",error);
			setError(error);
		}).finally(()=>{
			setLoading(false);
		})
	}
	
	return (
		<div>
			<Typography variant="h1" style={headstyle}>{title}</Typography>
			<InputComponent help={helper} onChnage={handleChange}/>
			<Button submit={onSubmit} setColor="primary" setVariant='contained' setSize='large' setLabel='Check Status'/>
			{response != '' ? <Result res={response}/> : ''}
			
		</div>
	)
}