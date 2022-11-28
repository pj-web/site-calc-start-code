function init(getData) {
    console.log('FIRE!');
    const input = document.querySelector('#input-cost');

    const settings = {
        numeral: true,
        numeralThausandsGroupStyle: 'thousand',
        delimiter: ' '
    }
    
    const cleaveInput = new Cleave(input, settings);
    cleaveInput.setRawValue(getData().cost);

    input.addEventListener('input', function () {
        
    })
}

export default init;