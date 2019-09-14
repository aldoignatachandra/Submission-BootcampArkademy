function FindPhrase(string, subString) 
{
    console.log("String = " + string);
    console.log("Phrase = " + subString);

    var count = 0; 
    var pos = 0;
    var step = subString.length;
    
    string += "";
    subString += "";

    if (subString.length <= 0)
    {
        return (string.length + 1);
    }   

    while (true) 
    {
        pos = string.indexOf(subString, pos);

        if (pos >= 0) 
        {
            ++count;
            pos += step;
        }
        else
        {
            break;
        }   
    }
    return count;
}
console.log("Ditemukan " + FindPhrase("banananana","na") + " Kali Frasa/Kata Yang Sama");