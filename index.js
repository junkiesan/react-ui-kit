import React from "react";
import {render} from "react-dom";
import Link from "./Link.js";
import Button from "./Button.js";
import Container from "./Container.js";

function App() {
    return (<>
        <Link/>
        <Button/>
        <Container/>

    </>);
}

render(<App />, document.querySelector("#react-root"));
