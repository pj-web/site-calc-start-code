import updateModel from '../utils/updateModel.js';

function init(getData) {
    const input = document.querySelector('#input-downpayment');

    const settings = {
        numeral: true,
        numeralThausandsGroupStyle: 'thousand',
        delimiter: ' '
    };
    
    const cleaveInput = new Cleave(input, settings);
    cleaveInput.setRawValue(getData().payment);

    input.addEventListener('input', function () {
        const value = +cleaveInput.getRawValue(); 

        // Проверка на минимальную и максимальную сумму первого платежа
        if (value < getData().getMinPayment() || value > getData().getMaxPayment()) {
            input.closest('.param__details').classList.add('param__details--error');
        }
        if (value >= getData().getMinPayment() <= getData().getMaxPayment()) {
            input.closest('.param__details').classList.remove('param__details--error');
        }
        // Обновить модель
        updateModel(input, {payment: value, onUpdate: 'inputPaypent'});
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

        // Обновить модель
        updateModel(input, {cost: +cleaveInput.getRawValue(), onUpdate: 'inputCost'});
    });

    return cleaveInput;
}

export default init;