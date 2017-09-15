export default () => {
    const element = document.createElement('div');
    element.className = 'synth-form';
    const form = document.createElement('form');
    const txtInput = document.createElement('input');
    txtInput.classList.add('txt');
    const voiceSelect = document.createElement('select');
    const pitchValue = document.createElement('input');
    pitchValue.classList.add('pitch-value');
    pitchValue.type = 'number';
    const rateValue = document.createElement('input');
    rateValue.classList.add('rate-value');
    rateValue.type = 'number';
    const submit = document.createElement('input');
    submit.type = 'submit';
    submit.value = 'Submit';
    form.appendChild(txtInput);
    form.appendChild(voiceSelect);
    form.appendChild(pitchValue);
    form.appendChild(rateValue);
    form.appendChild(submit);
    element.appendChild(form);
    return element;
}
