// DECLARAÇÃO DE VARIAVEIS 
const RANKS_ = [ 10, [ 11, 20 ], [ 21, 50 ], [ 51, 80 ], [ 81, 90 ], [ 91, 100 ], 101 ];
const LEVELS_ = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"];
var player_one_wins = 0;
var player_two_wins = 0;

// FUNÇÃO PRINCIPAL
function main() {
    random_players_result();
    const player_one_level = get_level( player_one_wins );
    const player_two_level = get_level( player_two_wins );
    console.log(`O Herói um tem de saldo de ${player_one_wins} vitórias, está no nível de ${player_one_level}` );
    console.log(`O Herói dois tem de saldo de ${player_two_wins} vitórias, está no nível de ${player_two_level}` )
}

// FUNÇÃO PEGAR LEVEL DO PERSONAGEM
function get_level ( wins ){
    if ( wins <= RANKS_[0] )                                   return LEVELS_[0];
    else if ( wins >= RANKS_[1][0] && wins <= RANKS_[1][1] )   return LEVELS_[1];
    else if ( wins >= RANKS_[2][0] && wins <= RANKS_[2][1] )   return LEVELS_[2];
    else if ( wins >= RANKS_[3][0] && wins <= RANKS_[3][1] )   return LEVELS_[3];
    else if ( wins >= RANKS_[4][0] && wins <= RANKS_[4][1] )   return LEVELS_[4];
    else if ( wins >= RANKS_[5][0] && wins <= RANKS_[5][1] )   return LEVELS_[5];
    else if ( wins >= RANKS_[6] )                              return LEVELS_[6];
}

// FUNÇÃO CALCULAR O NUMERO DE VITORIAS - DERROTAS
function calcule_wins ( wins=0, loses=0 ){
    if ( wins - loses <= 0 ) return 0;
    else return ( wins - loses );
}

// FUNÇÃO DE GERAR VITORIAS, E DERROTAS ALEATORIAS
function random_players_result(){
    while ( player_one_wins <= 0 ){
        player_one_wins = calcule_wins( Math.floor(Math.random() * RANKS_[6]),
                                        Math.floor(Math.random() * RANKS_[6]/2) )
    } while ( player_two_wins <= 0 ){
        player_two_wins = calcule_wins( Math.floor(Math.random() * RANKS_[6]),
                                        Math.floor(Math.random() * RANKS_[6]/2) )
    }
    return 0;
}

// CHAMA A FUNÇÃO MAIN
if (require.main === module) {
    main();
}
