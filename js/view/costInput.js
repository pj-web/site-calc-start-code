function init(getData) {
    const data = getData();
    const input = document.querySelector('#input-cost');

    const settings = {
        numeral: true,
        numeralThausandsGroupStyle: 'thousand',
        delimiter: ' '
    }
    
    const cleaveInput = new Cleave(input, settings);
    cleaveInput.setRawValue(data.cost);

    input.addEventListener('input', function () {
        const value = +cleaveInput.getRawValue(); 
        console.log(value);

        // Проверка на минимальную и максимальную цену
        if (value < data.minPrice || value > data.maxPrice) {
            input.closest('.param__details').classList.add('param__details--error');
        }
        if (value >= data.minPrice && value <= data.maxPrice) {
            input.closest('.param__details').classList.remove('param__details--error');
        }
    });

    input.addEventListener('change', function () {
        const value = +cleaveInput.getRawValue();

        if (value > data.maxPrice) {
            input.closest('.param__details').classList.remove('param__details--error');
            cleaveInput.setRawValue(data.maxPrice);
        }
        if (value < data.minPrice) {
            input.closest('.param__details').classList.remove('param__details--error');
            cleaveInput.setRawValue(data.minPrice);
        }
    });
}

export default init;