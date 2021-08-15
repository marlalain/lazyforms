import { InputUtil } from "./util/input.util"
import { Root } from "./model/root.model"

console.warn("LazyForms v0.1.0")
const inputUtil = new InputUtil()
let root = new Root()

const forms = Array.from(document.getElementsByTagName("form"))
let inputs = inputUtil.getInputsFromDom(forms)

root.addListElementToRoot("Gregory")
root.addListElementToRoot("Chris")

root.addEventsToInputList(inputs)
root.addEventsToItemList(root.getAllListItems())
