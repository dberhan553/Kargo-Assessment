
EnglishNum = "";  //String to compile output
//Reading inputs
var myArgs = process.argv.slice(2);
numbertoEnglish(myArgs); //calling function


//function should convert an array of integers into an array of strings representing the phonetic equivalent of the
// integer.

function numbertoEnglish(list){

    for(i =0; i < list.length; i++){   //looping through list of elements
        numtoString = list[i].toString();
        for(j =0; j < numtoString.length; j++){   //reading each character and coverting to phonetic equivalent
            if (numtoString[j].toString() == '0'){
                EnglishNum += 'Zero';
            }
            else if (numtoString[j].toString() == '1'){
                EnglishNum += 'One';
            }
            else if (numtoString[j].toString() == '2'){
                EnglishNum += 'Two';
            }
            else if (numtoString[j].toString() == '3'){
                EnglishNum += 'Three';
            }
            else if (numtoString[j].toString() == '4'){
                EnglishNum += 'Four';
            }
            else if (numtoString[j].toString() == '5'){
                EnglishNum += 'Five';
            }
            else if (numtoString[j].toString() == '6'){
                EnglishNum += 'Six';
            }
            else if (numtoString[j].toString() == '7'){
                EnglishNum += 'Seven';
            }
            else if (numtoString[j].toString() == '8'){
                EnglishNum += 'Eight';
            }
            else if (numtoString[j].toString() == '9'){
                EnglishNum += 'Nine';
            }
        }
    if (i != list.length-1){ //adding comma (if nessessary)
        EnglishNum += ",";
    }
    }
    console.log(EnglishNum); //printing to stdout
};
