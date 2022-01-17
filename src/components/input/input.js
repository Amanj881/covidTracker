import React,{useState} from 'react';
import {TextField,Box,FormControl} from '@material-ui/core'

export default function input({help,onChnage}) {

	return (
		<FormControl>
			<Box
			      component="form"
			      sx={{
			        '& > :not(style)': { m: 2, width: '50ch' },

			      }}
			      noValidate
			      autoComplete="off"
			    >
				 <TextField 
				 	color='secondary'
				 	onChange = {(e)=>onChnage(e)}
				 	label="Please Enter Name" 
				 	id ="filled-basic" label="Enter The Country Name" variant="filled" 
				 	helperText={help ? '':'Please Enter the Country Name'}
				 	/>
			</Box>
		</FormControl>
	)
}