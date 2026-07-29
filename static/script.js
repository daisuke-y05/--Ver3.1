const addButton = document.querySelector(".add");
const list = document.getElementById("list");
const total = document.querySelector(".total");

let grandTotal = 0;

addButton.addEventListener("click", function () {

    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;
    const start = document.getElementById("start").value;
    const goal = document.getElementById("goal").value;
    const vehicle = document.getElementById("vehicle").value;
    const trip = document.getElementById("trip").value;
    const money = Number(document.getElementById("money").value);

    if (
        startDate === "" ||
        endDate === "" ||
        start === "" ||
        goal === "" ||
        money === 0
    ){
        alert("入力漏れがあります");
        return;
    }

    const first = new Date(startDate);
    const last = new Date(endDate);

    const days =
        Math.floor((last - first) / (1000 * 60 * 60 * 24)) + 1;

    const sum = days * money;

    grandTotal += sum;

    if(list.innerHTML.includes("まだ登録")){
        list.innerHTML="";
    }

    list.innerHTML += `
    <tr>
        <td>${startDate} ～ ${endDate}</td>
        <td>${start} → ${goal}</td>
        <td>${vehicle}</td>
        <td>${trip}</td>
        <td>${days}日</td>
        <td>${sum.toLocaleString()}円</td>
    </tr>
    `;

    total.innerHTML =
        `今月合計：${grandTotal.toLocaleString()}円`;

});