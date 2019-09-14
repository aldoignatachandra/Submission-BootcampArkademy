function PrintNumber(number) 
{
    console.log("Cetak " + number + " String acak (32 Karakter) : ");

    var result = '';
    var temp = '';
    var characters = "0123456789abcdefghijklmnopqrstuvwxyz";
 
    for (var a = 0; a < number; a++) 
    {
       for (var i = 0; i < number; i++) 
       {
            temp = characters.charAt(Math.floor(Math.random() * characters.length));
          
            //Pengecekan karakter yang sama
            //dan penambahan setiap random karakter ke var result
            if (!result.includes(temp)) 
            {
                result += temp;
            }

            //Keluar dari loop jika sudah mencapaai 32 karakter
            if (result.length <= 32) 
            {
                i = 0;
            }
            else 
            {
                break;
            }
       }
       console.log(result);
       result = "";
    }
    return result;
 }

 console.log(PrintNumber(5));