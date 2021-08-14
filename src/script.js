// gets forms from DOM
const forms = [...document.getElementsByTagName('form')]
// maps forms, flattens the list and filters for inputs
const inputs = forms.map(i => [...i.children])
	.flat().filter(i => i.localName === "input")

console.log(`Loaded ${forms.length} form(s).`)
console.log(forms)

console.log(`Loaded ${inputs.length} input(s).`)
console.log(inputs)