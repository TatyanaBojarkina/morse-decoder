const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
	var arr =expr.split('');
	var arr1 =[];
	var str ='';
	var str_fin ='';
	let k =0;
	for(let i = 0; i < arr.length + 1; i++)
	{
		if(k <10)
		{
			arr1.push(arr[i]);
			k++;
		}else
		{
			if(arr1[0] == '*')
			{
				str_fin = str_fin + ' ';
				k=0;
			arr1.splice(0, arr1.length);
			str = '';
			i = i-1;
				
			}else{
				for(let j = 0; j < arr1.length; j=j+2){
					if(arr1[j]==1 && arr1[j+1]==0)
					{
						str = str + '.';
					}
					if(arr1[j]==1 && arr1[j+1]==1)
					{
						str = str + '-';
					}
					
				}
				str_fin = str_fin + MORSE_TABLE[str];
				
				k=0;
				arr1.splice(0, arr1.length);
				str = '';
				i = i-1;
			}
		}
	}
	return str_fin;
}

module.exports = {
    decode
}