isPolindrom = text => {
    txtToLower = text.toLowerCase();
    console.log(txtToLower === txtToLower.split('').reverse().join(''));
}

isPolindrom('ibu')