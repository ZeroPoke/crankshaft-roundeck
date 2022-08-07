import { SMM } from '@crankshaft/types';
import { EMERALD0874Outline } from './EMERALD0874Outline';
import { EMERALD0874Main } from './EMERALD0874Main';

export const load = (smm: SMM) => {
	console.info('RoundDeck Loading...');
  
	InjectRoundDeck()

};

export const unload = (smm: SMM) => {
	document.getElementById("RoundDeck")?.remove();
	document.getElementById("RoundDeckEMERALD0874")?.remove();

	console.info('...RoundDeck unloaded!');

};

function InjectRoundDeck() {
    // create a style element
    var RoundDeck = document.createElement('style');
    RoundDeck.setAttribute("id","RoundDeck");

    var RoundDeckEMERALD0874 = document.createElement('style');
    RoundDeckEMERALD0874.setAttribute("id","RoundDeck-EMERALD0874");

     // add the CSS as a string
    RoundDeck.innerHTML = `
		li {
			border-radius: 20px;
		}

		ul {
			border-radius: 20px;
		}

		button {
			border-radius: 20px;
		}

		select {
			border-radius: 20px;
		}

		.cs-gp-focus {
			border-radius: 20px;
			cursor: pointer;
		}

		.smm-menu-item-button {
			border-radius: 20px;
		}
	`;

	RoundDeckEMERALD0874.innerHTML = EMERALD0874Outline + EMERALD0874Main;

    // add it to the head
    document.getElementsByTagName('head')[0].appendChild(RoundDeck);
    document.getElementsByTagName('head')[0].appendChild(RoundDeckEMERALD0874);
};