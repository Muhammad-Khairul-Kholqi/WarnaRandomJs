const kotak = document.getElementsByClassName('kotak')[0];
const range = document.querySelector('input[name=kWarna]');
const nilaiWarna = document.querySelector('.kotak p');

range.addEventListener('input', function () {
    const r = range.value;
    const g = range.value;
    // const b = range.value;

    kotak.style.backgroundColor = 'rgb(' + r + ', ' + g + ', 100)';
    nilaiWarna.textContent = 'RGB: ' + r + ', ' + g + ', 100';
});