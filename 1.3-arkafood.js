const ArkFood = (harga, voucher, jarak, pajak) => {
	
	let potongan = getPotongan(harga, voucher)
	let ongkirNext = 5000 + ( (jarak - 2) * 3000 )
	let ongkir = jarak <= 2 ? 5000 : ongkirNext
	let tarifPajak = pajak === true ? harga * (5/100) : 0
	let subtotal = (harga - potongan + ongkir) + tarifPajak

	console.log(`Harga 		: ${harga} \nPotongan 	: ${potongan} \nBiaya Antar 	: ${ongkir} \nPajak 		: ${tarifPajak} \nSubotal 	: ${subtotal}`)
}

const getPotongan = (harga, voucher) => {
	let potongan = ''
	if (voucher !== false) {
		
		if (voucher === 'ARKAFOOD5' &&  harga >= 50000) {
			let diskon = harga * (50/100)
			potongan = diskon >= 50000 ? 50000 : diskon

		} else if (voucher === 'DITRAKTIRDEMY' &&  harga >= 25000) {
			let diskon = harga * (60/100)
			potongan = diskon >= 30000 ? 30000 : diskon

		} else {
			potongan = 0

		}
	} else {
		potongan = 0
	}

	return potongan
}

ArkFood(75000, 'ARKAFOOD5', 5, true)