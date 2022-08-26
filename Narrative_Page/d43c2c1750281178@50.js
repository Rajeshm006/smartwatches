// https://observablehq.com/@rajeshm006/this-is-a-page-for-narrative-header@50
import define1 from "./16df937a98a34251@627.js";

function _1(md){return(
md`# NarrativePage`
)}

function _4($0){return(
$0
)}

function _5(md){return(
md`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

`
)}

function _7($0){return(
$0
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], _1);
  const child1 = runtime.module(define1);
  main.import("viewof chart12", child1);
  main.import("chart12", child1);
  const child2 = runtime.module(define1);
  main.import("viewof chart1", child2);
  main.import("chart1", child2);
  main.variable(observer()).define(["viewof chart1"], _4);
  main.variable(observer()).define(["md"], _5);
  const child3 = runtime.module(define1);
  main.import("viewof chart2", child3);
  main.import("chart2", child3);
  main.variable(observer()).define(["viewof chart2"], _7);
  return main;
}
