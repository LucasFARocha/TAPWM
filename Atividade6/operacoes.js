main();

function main()
{
    do
    {
        calculos();

        var continuar = confirm("Deseja continuar no sistema?");
    }while(continuar)
}

function calculos()
{
    var num1 = recebeNum(num1, true);
    var num2 = recebeNum(num2, false);

    var valores = [6];
    
    valores[0] = somar(num1, num2);
    valores[1] = subtrair(num1, num2);
    valores[2] = multiplicar(num1, num2);
    valores[3] = dividir(num1, num2);
    valores[4] = restoInteiro(num1, num2);
    valores[5] = potencia(num1, num2);
    
    //var soma = somar(num1, num2);
    // var sub = subtrair(num1, num2);
    // var mult = multiplicar(num1, num2);
    // var div = dividir(num1, num2);
    // var resto = restoInteiro(num1, num2);
    // var pot = potencia(num1, num2);
    
    alert("A soma entre " + num1 + " e " + num2 + " é: " + valores[0]
    + "\nA diferença entre " + num1 + " e " + num2 + " é: " + valores[1]);
    
    alert("O produto entre " + num1 + " e " + num2 + " é: " + valores[2]
    + "\nO quociente entre " + num1 + " e " + num2 + " é: " + valores[3]);
    
    alert("O resto inteiro entre " + num1 + " e " + num2 + " é: " + valores[4]
    + "\nA potência entre " + num1 + " e " + num2 + " é: " + valores[5]);
}

function recebeNum(num, sequencia)
{
    do
    {
        if(sequencia)
        {
            num = parseFloat(prompt("Digite o primeiro número"));
        }
        else
        {
            num = parseFloat(prompt("Digite o segundo número"));
        }

        if(!num && num != 0)
        {
            alert("Digite um número")
        }
    }while(!num && num != 0)

    return num;
}

function somar(num1, num2)
{
    return num1 + num2;
}

function subtrair(num1, num2)
{
    return num1 - num2;
}

function multiplicar(num1, num2)
{
    return num1 * num2;
}

function dividir(num1, num2)
{
    if(num2 == 0)
    {
        return "Não é possível dividir por zero";
    }
    else
    {
        return num1 / num2;
    }
}

function restoInteiro(num1, num2)
{
    if(num2 == 0)
    {
        return "Não é possível dividir por zero";
    }
    else
    {
        return num1 % num2;
    }
}

function potencia(num1, num2)
{
    return num1 ** num2;
}