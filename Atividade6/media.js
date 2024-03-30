main();

function main()
{
    do
    {
        media();

        var continuar = confirm("Deseja continuar no sistema?");
    }while(continuar)
}

function media()
{
    var nome = recebeNome(nome);
    //declarar uma variável com "var" limita ela à função ou bloco de código em que está
    //é possível declarar uma variável escrevendo seu nome direto, sem o "var", ex:
    // num = 10;
    //porém isso fará com que ela seja visível por todo o código
    
    var nota1 = recebeNota(nota1, 1);
    var nota2 = recebeNota(nota2, 2);
    var nota3 = recebeNota(nota3, 3);

    var media = (nota1 + nota2 + nota3) / 3;

    alert(nome + ", sua média é: " + media);
}

function recebeNome(nome)
{
    do
    {
        var nome = prompt("Digite seu nome");

        if(!nome)
        {
            alert("Digite um nome");
        }
    }while(!nome)

    return nome;
}

function recebeNota(nota, sequencia)
{
    do
    {
        if(sequencia == 1)
        {
            var nota = parseFloat(prompt("Insira sua primeira nota"));
        }
        else if(sequencia == 2)
        {
            var nota = parseFloat(prompt("Insira sua segunda nota"));
        }
        else
        {
            var nota = parseFloat(prompt("Insira sua terceira nota"));
        }
        
        verificaNota(nota);

    }while(nota >10 || nota <0 || (!nota && nota != 0))

    return nota;
}

function verificaNota(nota)
{
    if(nota >10 || nota <0 || (!nota && nota != 0))
    {
        alert("A nota deve estar entre 0 e 10");
    }
}