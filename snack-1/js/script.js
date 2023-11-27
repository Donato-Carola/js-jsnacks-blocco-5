/*Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
 
Infine stampa separatamente i 3 array.*/


const auto = [
    {
      marca: "Ferrari",
      modello: "f40",
      alimentazione: "benzina",
    },
    {
        marca: "Ferrari",
        modello: "f40",
        alimentazione: "benzina",
      },
      {
        marca: "Ferrari",
        modello: "f40",
        alimentazione: "benzina",
      },
      {
        marca: "Ferrari",
        modello: "f40",
        alimentazione: "benzina",
      },
      {
        marca: "Ferrari",
        modello: "f40",
        alimentazione: "benzina",
      },
      {
          marca: "Ferrari",
          modello: "f40",
          alimentazione: "benzina",
      },
        {
          marca: "Ferrari",
          modello: "f40",
          alimentazione: "benzina",
        },
        {
          marca: "Ferrari",
          modello: "f40",
          alimentazione: "gpl",
        },
        {
            marca: "Ferrari",
            modello: "f40",
            alimentazione: "elettrica",
          },
          {
            marca: "Ferrari",
            modello: "f40",
            alimentazione: "diesel",
          },
  ];
  
  console.log(auto)

  const autoBenzina= auto.filter((autoBen) => {
   if (autoBen.alimentazione == 'benzina'){
       return true;
   }
  });

  console.log(autoBenzina);

  const autoDiesel= auto.filter((autoBen) => {
    if (autoBen.alimentazione == 'diesel'){
        return true;
    }
   });
 
   console.log(autoDiesel);

   const autoNon= auto.filter((autoBen) => {
    if (autoBen.alimentazione !== 'diesel' && autoBen.alimentazione !== 'benzina'){
        return true;
    }
   });
 
   console.log(autoNon);
