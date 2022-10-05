import React from 'react'

export default function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div className="container position-fixd-bottom " style={{height: "50px"}}>
            {props.alert && <div className={`alert alert-${props.alert.type} p-2`} role="alert">
                <strong>{capitalize(props.alert.type)}</strong> : {props.alert.message}
            </div>}
        </div>
    )
}
