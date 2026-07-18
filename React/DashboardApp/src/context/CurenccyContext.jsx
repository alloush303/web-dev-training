import { createContext, useState } from "react";

export let CurenccyContext = createContext()

export function CurenccyProvider({ children }) {
    let [curenccy, setCurenccy] = useState("dollarBounds")

    let selectCurenccy = (tempValue) => {

        setCurenccy(tempValue)
    }

    let value = {
        curenccy, selectCurenccy
    }

    return (
        <CurenccyContext.Provider value={value}>
            {children}
        </CurenccyContext.Provider>
    )
}