var myArgs = process.argv.slice(2);
numbertoEnglish(myArgs);

function numbertoEnglish(list){
    EnglishNum = "";
    for(i =0; i < list.length; i++){
        numtoString = list[i].toString();
        for(j =0; j < numtoString.length; j++){
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
    if (i != list.length-1){
        EnglishNum += ",";
    }
    }
    console.log(EnglishNum);
};
