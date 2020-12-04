import React from "react";
import {render} from "react-dom";
import Link from "./Link.js";

function App() {
    return (<>
        <Link/>
    </>);
}

render(<App />, document.querySelector("#react-root"));
