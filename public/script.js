async function findRoute() {
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;

    const res = await fetch(`/api/route?from=${from}&to=${to}`);
    const data = await res.json();

    document.getElementById("result").innerHTML = `
      <h3>Route Found:</h3>
      <p><b>Path:</b> ${data.path.join(" → ")}</p>
      <p><b>Distance:</b> ${data.distance}</p>
      <p><b>Weather:</b> ${data.weather}</p>
    `;
}
