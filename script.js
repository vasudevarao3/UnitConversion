// ----------------------------------------
//           Unit Toggler Logic 
// ----------------------------------------

const selector = document.querySelectorAll('.selector');
const displayBoxes = document.querySelectorAll('.display-box');
let selectedUnitType = 'length';

selector.forEach(selector => {
    selector.addEventListener('click', () => {
        displayBoxes.forEach(target => {
            target.style.display = 'none';
        });
        const displayBoxId = selector.getAttribute('data-target');
        document.getElementById(displayBoxId).style.display = 'grid';
        selectedUnitType = displayBoxId;
        inputValue.value = "";
        outputValue.value = "";
    } );
});

// ----------------------------------------
//     Actual Unit Conversion Logic 
// ----------------------------------------

const unitConversion = () => {
    // Type Casting input sting value to Float
    const value = parseFloat(inputValue.value);
    
    if (fromOption == null || toOption == null || isNaN(value) || value == "") {
        outputValue.value = "";
        return;
    }

    // For executing respective Unit Conversion
    if (selectedUnitType == 'length') {
        outputValue.value = convertLength(value, fromOption, toOption);
    } else if (selectedUnitType == 'temp') {
        outputValue.value = convertTemp(value, fromOption, toOption );
    } else if (selectedUnitType == 'area') {
        outputValue.value = convertArea(value, fromOption, toOption );
    } else if (selectedUnitType == 'volume') {
        outputValue.value = convertVolume(value, fromOption, toOption );
    } else if (selectedUnitType == 'weight') {
        outputValue.value = convertWeight(value, fromOption, toOption );
    } else if (selectedUnitType == 'time') {
        outputValue.value = convertTime(value, fromOption, toOption );
    } else {
        outputValue.value = -1;
    }
}


// ----------------------------------------
//     Unit Conversion I/O DOM Logic 
// ----------------------------------------

const inputValue = document.getElementById('from-value');
const outputValue = document.getElementById('to-value');
let fromOption = null, toOption = null;


displayBoxes.forEach( displayBox => {
    const from = displayBox.querySelector('.from select');
    const to = displayBox.querySelector('.to select');

    from.addEventListener('change', () => {
        fromOption = from.options[from.selectedIndex].value;
        unitConversion();
    });

    to.addEventListener('change', () => {
        toOption = to.options[to.selectedIndex].value;
        unitConversion();
    });
} );

inputValue.addEventListener('input', () => {
    unitConversion();
} );
