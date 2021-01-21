// Hälsa på spelaren med console logs och en rule som skriver ut allt varje gång spelet startar

// Intro till spel
// Gissa ordet/meningen
// slumpad mening utifrån de jag valt
// feedback på bokstaven fel/rätt
// Stor eller liten bokstav är samma
// 
// visa de correkta orden i rätt ordning tex ä__le/p_r_n_pl_t
// Antal försök 7st
// Extra funktionalitet är att ge spelaren hints efter 2 misslyckade försök i rad
// log vinst
// log förlust
// gg wp

Vilken extra funktionalitet har du tänkt implementera?
Svar: Att måla ut gubben och ge en hint efter 2 misslyckade försök i rad
<br>

Vilka variabler behöver du och till vilket syfte? Här vill jag ha med variabelnamn, datatyp och en förklaring på vad variabeln är till för - på varje variabel.



Vilka olika konstrollstrukturer behövs och till vilket syfte? (Loopar, villkor, etc.) Var så detaljerad som möjligt.
villkor som gör att när gisningarna är slut så avslutas spelet

Vilken funktionalitet kan (och borde) du skapa funktioner av? Här vill jag ha funktionsnamn, returtyp, eventuella parametrar samt vad funktionen ska göra.
Function GuessWord där randomwords ska kunna identifieras med Mathfloor så att det blir ett random ord. sedan splitwords där ordet ska delas upp till bokstäverna så att man kan gissa bokstaven. sen logga boktstäverna i rätt ordninig.

Vilka variabler behöver vara åtkomliga inom hela klassen?
wrong tries variabler som inte ligger i en funktion kan anropas när som helst i koden