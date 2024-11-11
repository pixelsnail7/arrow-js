import { $id } from "./src/dom.mjs";
import { useState } from "./src/arow.mjs";

const [count , setCount] = useState(0);

function increment() {
    setCount(count() + 1);
    $id('counterOut').innerHTML = count();
}

$id('counterBtn').onclick = increment;
