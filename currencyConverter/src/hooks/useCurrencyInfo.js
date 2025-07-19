import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data, setData] = useState({})

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        //.console.log(data); This console.log is breaking the UI logic
        //.console.log(data) chained to a promise, as this is invalid JavaScript and may cause errors
    }, [currency])
    return data;
}

export default useCurrencyInfo;