// import { useEffect, useState } from "react";

// function useCurrencyInfo(currency) {
//   const [data, setData] = useState({});

//   useEffect(() => {
//     fetch(`https://open.er-api.com/v6/latest/inr
// `)

//       .then((res) => res.json())
//       .then((res) => setData(res[currency]));
//   }, [currency]);

//   return data;
// }

// export default useCurrencyInfo;



import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!currency) return;

    fetch(`https://open.er-api.com/v6/latest/${currency}`)
      .then(res => res.json())
      .then(res => {
        if (res.result === "success") {
          setData(res.rates);
        } else {
          setData({});
        }
      })
      .catch(() => setData({}));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
