M1) Generazione dei 5 numeri casuali:
Per generare cinque numeri casuali, userò la funzione JavaScript Math.random() abbinata a Math.floor() per ottenere numeri interi. Creerò un array vuoto e lo riempirò con i numeri generati. Utilizzerò un ciclo for per aggiungere i numeri all'array, poi li stamperò in console e sulla pagina per mostrare all'utente quali numeri deve ricordare.

M2) Impostazione del timer e nascondimento dei numeri:
Imposterò un timer di 30 secondi con setTimeout(). Allo scadere del timer, nasconderò i numeri dalla pagina modificando il CSS dell'elemento che li contiene per renderli invisibili. Testerò il timer con un console.log() prima di nascondere i numeri.

M3) Raccolta dei numeri dall'utente:
Dopo aver nascosto i numeri, chiederò all'utente di inserire i numeri che ricorda, utilizzando prompt() per ciascun numero. Salverò questi numeri in un secondo array e li stamperò in console per confermare l'accuratezza della raccolta.

M4) Confronto dei numeri e determinazione dei risultati:
Confronterò i numeri inseriti dall'utente con quelli generati inizialmente. Userò un ciclo per verificare ogni numero inserito contro l'array originale e terrò traccia dei numeri indovinati in un nuovo array. Alla fine, visualizzerò in console quanti e quali numeri sono stati indovinati correttamente.