"use strict"
const arr = ['223','234','345','23','32','44','1111']

for( let i = 0; i < arr.length; i++){
 if( arr[i].startsWith(2) || arr[i].startsWith(4) ) {
	console.log(arr[i]);
 }

}


let n = 100
loop:
for( let i = 2; i <= n; i++) {

	for(let p = 2; p < i; p++) {
			if( i % p == 0) continue loop;
	}

	console.log('Делители этого числа: 1 и', i)

}

