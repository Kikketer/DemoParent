import React from 'react'
import { captureMessage } from 'demoLibrary'

export default () => {
	const onClick = () => {
		console.log('Doing a thing')
		captureMessage('This is a message from the Demo')
	}

	return (
		<button type={'button'} onClick={onClick}>
			Do the thing
		</button>
	)
}
