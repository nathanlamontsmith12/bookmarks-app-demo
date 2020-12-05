const express = require('express');
const router = express.Router();
const Bookmark = require('../models/bookmark');
const User = require('../models/user');


router.get('/', (req, res, next) => {
	console.log('hitting')
	Bookmark.find({}, (err, bookmarks) => {
		if (err) {
			res.json({error: 'Error finding bookmarks!'})
		} else {
			res.json(bookmarks)
		}
	});
});

router.post('/', (req, res, next) => {
	Bookmark.create(req.body, (err, createdBookmark) => {
		if (err) {
			res.json({error: 'Error creating bookmark!'})
		} else {
			res.json(createdBookmark)
		}
	})
});

router.put('')

module.exports = router;