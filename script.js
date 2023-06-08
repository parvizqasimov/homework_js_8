let slc = document.getElementById('select');
slc.addEventListener('change', () => {
    let selectedValue = parseInt(slc.value);
    let color = '';
    let data = '';

    for (let i = 0; i < selectedValue; i++) {
        data += '<tr>';
        for (let j = 0; j < selectedValue; j++) {
            color = (i + j) % 2 === 0 ? 'black' : 'white';
            data += `<td style="background-color:${color};"></td>`;
        }
        data += '</tr>';
    }
    
    document.getElementById('tbl').innerHTML = data;
});


