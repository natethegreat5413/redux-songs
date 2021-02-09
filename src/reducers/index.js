const songsReducer = () => {
	return [
		{ title: 'Safe', duration: '4:05' },
		{ title: 'Some kind of disaster', duration: '4:10' },
		{ title: 'Home Sweet', duration: '3:05' },
		{ title: 'Business Time', duration: '45:98' }
	];
};

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === 'SONG_SELECTED') {
		return action.payload;
	}
	return selectedSong;
};
