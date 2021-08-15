export class Root {
  private root: HTMLUListElement
  private id: string = "lazy-forms-root"
  private currentInput: HTMLInputElement

  constructor() {
    this.root = document.createElement("ul")
    this.root.id = this.id
    this.root.style.backgroundColor = "red"
    this.root.style.height = "10%"
    this.root.style.width = "10%"
    this.root.style.paddingBottom = "1"
    this.root.style.position = "absolute"
    this.root.style.display = "none"
    this.root.style.listStyle = "none"
    document.body.appendChild(this.root)
  }

  setRoot(root: HTMLUListElement) {
    this.root = root
  }

  getRoot(): HTMLUListElement {
    return this.root
  }

  addListElementToRoot = (name: string) => {
    let newListItem = document.createElement("li")
    newListItem.innerText = name
    newListItem.className = "lazy-forms-item"
    this.root.appendChild(newListItem)
  }

  addEventsToInputList = (inputs: HTMLInputElement[]) => {
    inputs.map((input: HTMLInputElement) => {
      input.addEventListener("click", () => {
        let coords = {
          x: input.offsetLeft - input.offsetWidth,
          y: input.offsetTop,
        }
        input.autocomplete = "false"
        this.root.style.top = `${coords.y + 20}px`
        this.root.style.left = `${coords.x + input.clientWidth}px`
        this.root.style.width = `${input.clientWidth}px`
        this.root.style.display = "block"
        this.currentInput = input
      })

      input.addEventListener("focusout", () => {
        this.root.style.display = "none"
      })
    })
  }

  getAllListItems = () => {
    return Array.from(
      document.getElementsByClassName("lazy-forms-item")
    ) as HTMLLIElement[]
  }

  addEventsToItemList = (items: HTMLLIElement[]) => {
    items.map((item) => {
      item.addEventListener("mousedown", () => {
        this.currentInput.value = item.innerHTML
      })
    })
  }
}
