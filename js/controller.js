import * as Model from "./model.js";
import updateResultsView from "./view/updateResultsView.js";
import programs from "./view/radioPrograms.js";
import { updateMinPercents } from "./view/utils.js";

import costInput from "./view/costInput.js";
import costRange from "./view/costRange.js";

const text = 'Never forget what you are, for surely the world will not';
const letters = length(text[0]);
// BEGIN (write your solution here)
console.log(letters);
// END
  

window.onload = function() {
    const getData = Model.getData;
    
    // Init programs
    programs(getData);

    // Init cost input
    const cleaveCost = costInput(getData);
    const sliderCost = costRange(getData);

    document.addEventListener('updateForm', (e) => {
        Model.setData(e.detail);
        
        const data = Model.getData();
        const results = Model.getResults();

        // Update all form view based on model
        updateFormAndSliders(data);
        
        // Update results block
        updateResultsView(results);
    });

    function updateFormAndSliders(data) {
        // Update radio btns
        if (data.onUpdate === 'radioProgram') {
            updateMinPercents(data);
        }
        // Cost input
        if (data.onUpdate !== 'inputCost') {
            console.log('UPDATE INPUT COST');
            cleaveCost.setRawValue(data.cost);
        }
        // Cost slider
        if (data.onUpdate !== 'costSlider') {
            console.log('UPDATE COST SLIDER');
            sliderCost.noUiSlider.set(data.cost);
        }
    }
};