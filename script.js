// script.js
// Funzioni globali JS estratte da index.html
// (Da completare con tutti i blocchi <script>)

// --- Dashboard ---
// Funzioni per la gestione della dashboard

// --- Modali ---
// Funzioni per apertura/chiusura modali

// --- Import/Export ---
// Funzioni per backup, esportazione, importazione

// --- Filtri e Tabelle ---
// Filtro ricerca materiale registro entrate
document.addEventListener('DOMContentLoaded', function() {
	const incomingMaterialSearchInput = document.getElementById('incomingMaterialSearchInput');
	if (incomingMaterialSearchInput) {
		incomingMaterialSearchInput.addEventListener('input', function() {
			updateIncomingRegisterData();
		});
	}
});

// Filtro ricerca materiale registro uscite
document.addEventListener('DOMContentLoaded', function() {
	const outgoingMaterialSearchInput = document.getElementById('outgoingMaterialSearchInput');
	if (outgoingMaterialSearchInput) {
		outgoingMaterialSearchInput.addEventListener('input', function() {
			updateOutgoingRegisterData();
		});
	}
});
// Filtro ricerca materiale magazzino
document.addEventListener('DOMContentLoaded', function() {
	const materialSearchInput = document.getElementById('materialSearchInput');
	if (materialSearchInput) {
		materialSearchInput.addEventListener('input', function() {
			renderFilteredMaterials();
		});
	}
});
// Funzioni per filtri, aggiornamento tabelle, report

// --- Utility Generali ---
// Funzioni di supporto, helper, validazione

// ...inserire qui le funzioni migrate dai blocchi <script>...
