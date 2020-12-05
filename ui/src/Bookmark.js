import * as React from 'react';

export default function Bookmark (props) {
	// console.log(props)
	const title = props.bookmarkData.title
	const url = "https://" + props.bookmarkData.url 
	return (
		<div> 
			{title}
			<br /> 
			<a href={url} target="_blank" rel="noopener noreferrer"> Link </a>
			<button onClick={() => props.deleteBookmark()}> Click here to delete!! </button>
		</div>
	)
}