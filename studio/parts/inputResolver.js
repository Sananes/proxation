import Slider from "./Slider";

export default function resolveInput(type) {
  if (type.name === "number" && type.options && type.options.range) {
    return Slider;
  }
}
