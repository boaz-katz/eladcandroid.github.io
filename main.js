function useFetch(url, show) {
  axios.get(url).then(function (show) {
    let img = document.querySelector("img");
    img.src = show.data[0].url;
    console.log(show.data);
  });
}

function callbackFunc(dataInFunc) {
  const input = document.querySelector("input");
  var value = input.value;
  const resultDiv = document.querySelector(".result");
  resultDiv.innerHTML = value * dataInFunc.rates.ILS;
}

var button = document.querySelector("button");
button.onclick = function () {
  useFetch("https://api.exchangeratesapi.io/latest", callbackFunc);
};
