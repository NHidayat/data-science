isPalindrom = text => {
	if (typeof text !== 'string' || text === '' ) {
    	console.log('Data harus berupa string')

    } else {
    	txtToLower = text.toLowerCase();
    	txtToLower === txtToLower.split('').reverse().join('') ? 
    	console.log(`"${text}" adalah kata palindrom`) : console.log(`"${text}" bukan kata palindrom`)

    }
}

isPalindrom('kasur rusak')
isPalindrom('kakak')
isPalindrom('motor')