const input_height = document.querySelector('#height')
const input_weight = document.querySelector('#weight')
const output_result = document.querySelector('output')
const button = document.querySelector('button')

button.addEventListener('click',() => {
    const height = Number(input_height.value)
    const weight = Number(input_weight.value)
    const result = weight / (height * height)
    output_result.innerHTML = result.toFixed(1)
})