export class InputUtil {
  constructor() {}

  getInputsFromDom = (forms: Element[]) => {
    return this.removeSubmitInputsFromArray(
      forms
        .map((i) => Array.from(i.children))
        .flat()
        .filter((i) => i.localName === "input") as HTMLInputElement[]
    )
  }

  removeSubmitInputsFromArray = (inputs: HTMLInputElement[]) => {
    let cleanInputs: HTMLInputElement[] = []
    inputs.map((input: HTMLInputElement) => {
      input.getAttribute("type") !== "submit" && cleanInputs.push(input)
    })
    return cleanInputs
  }

  getInputCoords = (input: HTMLInputElement) => {
    return {
      x: input.clientWidth + input.clientLeft,
      y: input.clientHeight + input.clientTop,
    }
  }
}
