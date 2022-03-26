const player1 = gameboard();            //
                                        //
player1.addShip(1, 2, 'b');             //
player1.addShip(3, 1, 'e');             //
player1.addShip(1, 3, 'f');             //
player1.addShip(4, 4, 'c', true);       //  Here a player and his ships are created
player1.addShip(2, 5, 'e');             //
player1.addShip(3, 5, 'h', true);       //
player1.addShip(1, 7, 'j');             //
player1.addShip(2, 9, 'b', true);       //
player1.addShip(2, 9, 'g');             //
player1.addShip(1, 9, 'j');             //




const player2 = gameboard();            //
                                        //
player2.addShip(1, 1, 'b');             //
player2.addShip(1, 1, 'f');             //
player2.addShip(1, 3, 'i');             //
player2.addShip(2, 4, 'a');             //  Here a player and his ships are created
player2.addShip(2, 4, 'd');             //
player2.addShip(4, 3, 'g', true);       //
player2.addShip(3, 8, 'a');             //
player2.addShip(1, 10, 'a');            //
player2.addShip(3, 8, 'f', true);       //
player2.addShip(2, 9, 'h', true);       //



console.log(player1)


console.log(player2);


///////////////////////////////////////
player1.receiveAttack(1, 'b');
///////////////////////////////////////
Although it is written with player1, it is as if it were equivalent to player2: c
the .addShip() function is located in ./src/test/gameboard.js