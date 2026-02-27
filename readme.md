# Magazzino - Materiali di consumo

Single-file web app per gestire i materiali di consumo di uno studio dentistico.

Caratteristiche:
- Entrate di magazzino gestite da Nuovo Ordine e Nuovo Materiale
- Uscite di magazzino gestite dal Registro Consumi con scarico automatico FEFO
- Scadenza e soglia quantità gestite direttamente dalla vista Magazzino
- Notifiche in-app e notifiche browser quando la scadenza si avvicina o il materiale è in esaurimento (<=2)
- Salvataggio e sincronizzazione su Firebase Firestore

Flag rapido restrizioni eliminazione (UI principale):
- Nella schermata principale è disponibile il toggle: "🔒 Restrizioni elimina admin".
- Toggle OFF: modalità test veloce (eliminazione consentita agli utenti autenticati).
- Toggle ON: elimina consentito solo agli admin definiti in `ADMIN_DELETE_UIDS` dentro `index.html`.
- Lo stato del toggle è salvato in localStorage (persistente tra refresh e riaperture).

Quando vuoi passare a modalità admin sicura:
1. Inserisci gli UID admin reali nell'array `ADMIN_DELETE_UIDS` in `index.html`.
2. Attiva il toggle "🔒 Restrizioni elimina admin" dalla schermata principale.
3. In `firestore.rules`, imposta `allow delete: if isDeleteAdmin();` per `materials` e `implants`.
4. Pubblica le regole con: `firebase deploy --only firestore:rules`.

Checklist pre-produzione (rapida):
- Verifica che `ADMIN_DELETE_UIDS` in `index.html` contenga solo UID autorizzati.
- Attiva il toggle "🔒 Restrizioni elimina admin" nella pagina principale.
- Verifica in `firestore.rules` che `delete` sia consentito solo con `isDeleteAdmin()`.
- Esegui deploy regole: `firebase deploy --only firestore:rules`.
- Test finale: utente non admin (delete bloccato) e utente admin (delete consentito).

Deploy:
- Sostituire la configurazione Firebase in `index.html` con i valori del tuo progetto Firebase.
- Abilitare Firestore nel progetto Firebase.
- Per Netlify: creare un nuovo sito e caricare il singolo file `index.html` (o collegare un repository Git).

Deploy automatico da GitHub a Firebase Hosting:
- Workflow già pronta in `.github/workflows/deploy-firebase-hosting.yml` (trigger su push in `main`).
- Crea in GitHub il secret repository: `FIREBASE_SERVICE_ACCOUNT_GESTIONE_MATERIALI_DI_CONSUMO`.
- Valore del secret: JSON dell'account di servizio Firebase con permessi Hosting Admin (e Firestore se necessario).
- Dopo aver aggiunto il secret, ogni push su `main` pubblica automaticamente su Firebase Hosting (canale `live`).

Regola operativa deploy (sempre):
- Eseguire il deploy solo tramite GitHub (`push` su `main`), evitando deploy manuali da terminale.
- Flusso standard: modifica locale → commit → push su GitHub → deploy automatico via workflow.

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
