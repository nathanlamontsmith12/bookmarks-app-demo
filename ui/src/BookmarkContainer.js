import React, { Component } from 'react';
import Bookmark from './Bookmark';

export default class BookmarkContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			bookmarks: []
		}
	}
	componentDidMount() {
		const url = 'http://localhost:3001/bookmarks';
		
		// fetch our bookmarks and then set state w/ fetched bookmarks: 
		fetch(url).then(rawResponse => {
			return rawResponse.json()
		}).then(bookmarks => {
			this.setState({
				bookmarks: bookmarks
			})
		})
	}
	deleteBookmark() {
		console.log('DELETE THIS BOOKMARK!!')
	}
	render() {
		// console.log(this.state)

		const bookmarks = this.state.bookmarks.map((bookmark, index) => {
			return (
				<Bookmark key={bookmark._id} bookmarkData={bookmark} deleteBookmark={this.deleteBookmark}/>
			)
		})

		return (
			<div> 
				Bookmark Container: Rendered!
				Here are our bookmarks:  
				{ bookmarks }
			</div>
		)
	}
}