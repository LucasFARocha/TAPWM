main();

function main()
{
    do
    {
        jogo();
    
        continuar = confirm("Deseja continuar no sistema?");
    }while(continuar)
}

function jogo()
{
    var user = parseInt(prompt("Sistema de Jokenpô" + 
    "\nEscolha entre:" +
    "\n1 - Pedra" +
    "\n2 - Papel" +
    "\n3 - Tesoura"));

    var bot = Math.floor(Math.random() * 3 + 1);

    alert("Você escolheu: " + verificaEscolha(user)
        + "\nO computador escolheu: " + verificaEscolha(bot)
        + "\n\nResultado: " + verificaJogo(user, bot));
}

function verificaEscolha(escolha)
{
    switch(escolha)
    {
        case 1: return "Pedra";
        //break; ao usar return não é necessário usar break
        case 2: return "Papel";
        default: return "Tesoura";
    }
}

function verificaJogo(user, bot)
{
    if(user == bot)
    {
        return "Empate"
    }
    else if(user == 1)
    {
        switch(bot)
        {
            case 2: return "O computador ganhou!";
            case 3: return "Você ganhou!";
        }
    }
    else if(user == 2)
    {
        switch(bot)
        {
            case 1: return "Você ganhou!";
            case 3: return "O computador ganhou!";
        }
    }
    else
    {
        switch(bot)
        {
            case 1: return "O computador ganhou!";
            case 2: return "Você ganhou!";
        }
    }
}
