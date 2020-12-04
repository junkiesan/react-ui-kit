import React from "react";

export default function Button(props) {
    return(<>
        <button disabled={props.disabled} type={props.type} className="ui-button">{props.children}</button>
    </>);
}