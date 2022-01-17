import React from 'react'
import {Button,Box} from '@material-ui/core'; 
function button({setColor,setSize,setVariant,setLabel,submit}) {
	return (
		<Box mt={8}>	
			<Button color={setColor} variant={setVariant} size={setSize} onClick = {submit}>{setLabel}</Button>		
		</Box>
	)
}

export default button