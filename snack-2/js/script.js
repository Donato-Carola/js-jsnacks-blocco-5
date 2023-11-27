/*Crea un array di oggetti che rappresentino delle persone.
Ogni persona ha un nome, un cognome e un'età.

Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.*/

const persona = [
    {
      nome: "mario",
     cognome: "rossi",
      età: 18,
    },
    {
        nome: "giuseppe",
       cognome: "rossi",
        età: 15,
      },
      {
        nome: "giggio",
       cognome: "rossi",
        età: 12,
      },
      {
        nome: "pippo",
       cognome: "rossi",
        età: 18,
      },
      {
          nome: "topolino",
         cognome: "rossi",
          età: 50,
        },
        {
          nome: "Luffy",
         cognome: "rossi",
          età: 70,
        },
  ];
  
  const newArrayPersone = persona.map((singolaPersona) => {
     
   singolaPersona.nomePerson = singolaPersona.nome + ' ' + singolaPersona.cognome
   singolaPersona.magiorenne = singolaPersona.età <= 18 
   return singolaPersona;
     
  });

  console.log(newArrayPersone)

