import * as Model from "./model.js";
import programs from "./view/radioPrograms.js";

window.onload = function() {
    const getData = Model.getData;
    
    // Init programs
    programs(getData);

    document.addEventListener('updateForm', (e) => {
        console.log('FIRED!!!');
        console.log(e.detail);

        Model.setData(e.detail);
    });
};