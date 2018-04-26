const Discord = require('discord.js');
const client = new Discord.Client();

const lista = require("./list");

client.on('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {

	if (message.content === '!lista_toda') {
        message.channel.send( lista.jogos().slice( (lista.jogos().length -50),  lista.jogos().length ) );
    }
    
    //const args = message.content.slice(prefix.length).trim().split(/ +/g);


    if ( message.content.startsWith("!jogo") ){
        var args = message.content.slice("!").trim().split(/ +/g);
        console.log( args )
            if ( args.length > 1 ){

                var gamesFiltrados = [];
                var arr = lista.jogos();

                for (var i = 0; i < arr.length ; i++) {
                    if ( arr[i].tema.toLocaleLowerCase().includes( args[1].toLowerCase()  ) ) {
                        gamesFiltrados.push(arr[i]);
                    }
                }

                var gamesMostrar = [];
                for( var j = 0; j < gamesFiltrados.length; j++ ){
                    gamesMostrar.push( "#" + gamesFiltrados[j].numero + " - " + gamesFiltrados[j].tema + " (" + gamesFiltrados[j].data + ")" )
                }

                //console.log( gamesMostrar )
                console.log("games Mostrar", gamesMostrar)
                if ( gamesMostrar.length === 0 ){
                    message.channel.send("Não jogamos esse jogo...ainda")
                }
                else{
                    message.channel.send( gamesMostrar )
                }
                

            }
            else{
                message.channel.send( "Escreva dessa forma, !jogo nome_do_jogo " )
            }

        //console.log( message.content.slice("!").trim().split(/ +/g)  )


    }


    if (message.content === '!lista') 
        message.channel.send( lista.jogos().slice( (lista.jogos().length -10),  lista.jogos().length ) );
    
});

client.login('NDI0MzIyNTM5MDc0ODc5NTAx.DY3Ryw.GEUuv0znc3SRzSkWz5zlm49RDP8');

