# Magazzino - Materiali di consumo

Single-file web app per gestire i materiali di consumo di uno studio dentistico.

Caratteristiche:
- Inserimento materiali con scadenza, prezzo, quantità, distributore
- Notifiche in-app e notifiche browser quando la scadenza si avvicina o il materiale è in esaurimento (<=2)
- Salvataggio e sincronizzazione su Firebase Firestore

Deploy:
- Sostituire la configurazione Firebase in `index.html` con i valori del tuo progetto Firebase.
- Abilitare Firestore nel progetto Firebase.
- Per Netlify: creare un nuovo sito e caricare il singolo file `index.html` (o collegare un repository Git).

Note importanti:
- `index.html` usa la build compat di Firebase per semplicità. Per produzione valutare l'uso del SDK modulare e regole di sicurezza Firestore.
- Le chiavi di Firebase (apiKey ecc.) vanno tenute con attenzione. Le regole Firestore devono essere configurate per limitare l'accesso.

Istruzioni rapide:
1. Crea un progetto Firebase e abilita Firestore.
2. Copia i valori di config (apiKey, authDomain, projectId...) e incollali in `index.html` nella variabile `firebaseConfig`.
3. Apri `index.html` in un browser o deploya su Netlify.

Se vuoi, posso:
- Aggiungere autenticazione (es. account dello studio)
- Aggiungere ricerca e filtri
- Creare una versione con SDK modulare (consigliata per produzione)
