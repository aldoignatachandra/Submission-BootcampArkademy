function InputUserName(name)
{
    console.log("Username : " + name);

    var checkFirstRegex = /^[0-9~`!@#$%^&()_={}[\]:;,.<>+\/?-]$/;

    //Cek Length dan Index Pertama
    if(name.length < 5 || name.length > 9 )
    {
        return "Username tidak valid (5 - 9 Character)";
    }
    else
    {
        for(var a = 0; a < name.length; a++)
        {
            //Cek First Character
            if (checkFirstRegex.test(name[0]) == true) 
            {
                return "Username tidak valid (tidak bolek diawali angka dan spesial karakter)";
            }
        }
    }

    //Cek Kombinasi
    if(name != "")
    {
        var CheckNumber = /[0-9]/;
        var CheckUpperCase = /[A-Z]/;
        var CheckLowerCase = /[a-z]/;

        if(!CheckNumber.test(name))
        {
            return "Username Tidak Valid (Harus Mengandung Angka)";
        }
        else if(!CheckUpperCase.test(name))
        {
            return "Username Tidak Valid (Harus Mengandung Huruf Besar)";
        }
        else if(!CheckLowerCase.test(name))
        {
            return "Username Tidak Valid (Harus Mengandung Huruf Kecil)";
        }
    }

    return 'Username valid';
}

function InputPassword(password)
{
    console.log("Password : " + password);

    //Cek Length Password
    if(password.length < 8)
    {
        return "Password Tidak Valid (Minimal 8 Karakter)";
    }

    //Cek Kombinasi
    if(password != "")
    {
        var CheckNumber = /[0-9]/;
        var CheckUpperCase = /[A-Z]/;
        var CheckLowerCase = /[a-z]/;
        var CheckSpesial = /[~`!@#$%^&()_={}[\]:;,.<>+\/?-]/;
        var CheckSpesialChar = /[@]/;

        if(!CheckNumber.test(password))
        {
            return "Password Tidak Valid (Harus Mengandung Angka)";
        }
        else if(!CheckUpperCase.test(password))
        {
            return "Password Tidak Valid (Harus Mengandung Huruf Besar)";
        }
        else if(!CheckLowerCase.test(password))
        {
            return "Password Tidak Valid (Harus Mengandung Huruf Kecil)";
        }
        else if (!CheckSpesialChar.test(password))
        {
            return "Password Tidak Valid (Harus Mengandung Spesial Karakter '@')";
        }
        else if (!CheckSpesialChar.test(password))
        {
            return "Password Tidak Valid (Harus Mengandung Spesial Karakter '@')";
        }
    }

    return "Password Valid";
}

console.log(InputUserName("Ayu99va"));
console.log(InputPassword("p@ssW0rd#"));

console.log("");

console.log(InputUserName("@sony"));
console.log(InputPassword("C0d3YourFuture!#"));