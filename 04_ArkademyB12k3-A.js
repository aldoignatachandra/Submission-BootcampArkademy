function CreateShape(size)
{
    console.log("Dimensi Shape : " + size);

    var dimension = size;
    var edge = ' * ';
    var inside = ' = ';
    var printLine;

    var n = 0;
    var med = 0;
    
    //Find median from size
    for(var i = 1; i <= dimension; i++)
    {
        n += i;

        if(i == size)
        {
            med = n/size;
        }
    }

    //Check Bilangan
    if(size % 2 == 0)
    {
        return "Masukan Bilangan Ganjil";
    }

    //Print Gambar
    for (var i = 1; i <= dimension; i++) 
    {   
        if(i == med)
        {
            printline = Array(dimension + 1).join(edge);
        }
        else
        {
            printline = edge + Array(dimension - 1).join(inside) + edge;
        }
        console.log(printline);
    }

    return "Persegi Dengan Dimensi " + size + " x " + size;
}

console.log(CreateShape(7));