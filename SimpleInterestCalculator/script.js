
document.getElementById('btn').addEventListener('click', function(){
    const principle = parseFloat(document.getElementById('principle').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const time = parseFloat(document.getElementById('time').value);

    if(isNaN(principle) || isNaN(rate) || isNaN(time)){
        alert('Please Enter the Valid Numbers in all field.');
        return;
    }

    const interest = (principle * rate * time) / 100;

    document.getElementById('result').innerText = `The Simple Interest is ${interest.toFixed(2)}`;
});
