var myArgs = process.argv.slice(2); //reading inputs
numbertoEnglish(myArgs); //calling function with inputs

function numbertoEnglish(list){
    EnglishNum = "";
    for(i =0; i < list.length; i++){ //looping through each number
        numtoString = list[i].toString();
        for(j =0; j < numtoString.length; j++){  //looping through each digit in the number
            // Find the phonetic corresponding to each digit
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
        //add comma if necessary
    if (i != list.length-1){
        EnglishNum += ",";
    }
    }
    //print output
    console.log(EnglishNum);
};
