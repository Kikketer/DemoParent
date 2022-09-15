import React from 'react'
import { createMessage } from 'demoLibrary'

export default ({ sentry }) => {
	const onClick = () => {
		// This triggers a capture message from the library:
		createMessage('This is a message from the Demo Library')
		// sentry.captureMessage('This is a message from the Parent')
	}

	return (
		<button type={'button'} onClick={onClick}>
			Do the thing
		</button>
	)
}
