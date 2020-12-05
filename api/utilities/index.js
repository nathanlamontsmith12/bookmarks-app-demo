
const getCurrentUser = (req, field) => {
	try {
		const user = req.session.user;
		return field ? user[field] : user;
	} catch (err) {
		return undefined;
	}
}

const makeStandardCB = (r) => {
	return (err, data) => {
		if (err) {
			r.json(err);
		} else {
			r.send('hey')
			// r.json(data);
		}
	}
}

module.exports = {
	getCurrentUser,
	makeStandardCB,
}