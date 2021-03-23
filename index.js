document.getElementById("dropdown").addEventListener("change", (e) => {
	const [page, language] = e.target.value.split(' ')

	switch (language) {

		case "en":
			window.location =`../Portfolio_English/${page}.html`;
			break;
		case "es":
			window.location =`../Portfolio_Spanish/${page}.html`;
			break;
		case "pt":
			window.location =`../Portfolio_Portuguese/${page}.html`;
			break;
		  default:
		    break;
	}
})