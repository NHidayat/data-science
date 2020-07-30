const reverseWords = (text) => {

	if (typeof text !== 'string' || text === '') {
		console.log('Data harus berupa string')

	} else {
		result = text.split(' ').reverse().join(' ')
		console.log(result)
	}
}

reverseWords('kasur rusak')
reverseWords(123)