// Problem 1
document.getElementById("p1").addEventListener("keyup", e => {
    if(e.key === "Enter") {
        const inputValue = Number(document.getElementById("p1").value);
        const p1answer = radianToDegree(inputValue);
        document.getElementById("r1").innerText = p1answer;
    }
});

document.getElementById("btn-1").addEventListener("click", () => {
    const inputValue = Number(document.getElementById("p1").value);
    const p1answer = radianToDegree(inputValue);
    document.getElementById("r1").innerText = p1answer;
});

// Problem 2
document.getElementById("p2").addEventListener("keyup", (e) => {
    if(e.key === "Enter") {
        const inputValue = document.getElementById("p2").value;
        const p2answer = isJavaScriptFile(inputValue);
        document.getElementById("r2").innerText = p2answer;
    }
});

document.getElementById("btn-2").addEventListener("click", () => {
    const inputValue = document.getElementById("p2").value;
    const p2answer = isJavaScriptFile(inputValue);
    document.getElementById("r2").innerText = p2answer;
});

// Problem 3
document.getElementById("p3-3").addEventListener("keyup", (e) => {
    if(e.key === "Enter") {
        const p1Value = Number(document.getElementById("p3-1").value);
        const p2Value = Number(document.getElementById("p3-2").value);
        const p3Value = Number(document.getElementById("p3-3").value);
        const p3answer = oilPrice(p1Value, p2Value, p3Value);
        document.getElementById("r3").innerText = p3answer;
    }
});

document.getElementById("btn-3").addEventListener("click", () => {
    const p1Value = Number(document.getElementById("p3-1").value);
    const p2Value = Number(document.getElementById("p3-2").value);
    const p3Value = Number(document.getElementById("p3-3").value);
    const p3answer = oilPrice(p1Value, p2Value, p3Value);
    document.getElementById("r3").innerText = p3answer;
});

// Problem 4
document.getElementById("p4").addEventListener("keyup", (e) => {
    if(e.key === "Enter") {
        const inputValue = Number(document.getElementById("p4").value);
        const p4answer = publicBusFare(inputValue);
        document.getElementById("r4").innerText = p4answer;
    }
});

document.getElementById("btn-4").addEventListener("click", () => {
    const inputValue = Number(document.getElementById("p4").value);
    const p4answer = publicBusFare(inputValue);
    document.getElementById("r4").innerText = p4answer;
});

// Problem 5
document.getElementById("p5-4").addEventListener("keyup", (e) => {
    if(e.key === "Enter") {
        const p1Value = document.getElementById("p5-1").value;
        const p2Value = document.getElementById("p5-2").value;
        const p3Value = document.getElementById("p5-3").value;
        const p4Value = document.getElementById("p5-4").value;
        const obj1 = {name: p1Value, friend: p2Value};
        const obj2 = {name: p3Value, friend: p4Value};
        const p5answer = isBestFriend(obj1, obj2);
        document.getElementById("r5").innerText = p5answer;
    }
});

document.getElementById("btn-5").addEventListener("click", () => {
    const p1Value = document.getElementById("p5-1").value;
    const p2Value = document.getElementById("p5-2").value;
    const p3Value = document.getElementById("p5-3").value;
    const p4Value = document.getElementById("p5-4").value;
    const obj1 = {name: p1Value, friend: p2Value};
    const obj2 = {name: p3Value, friend: p4Value};
    const p5answer = isBestFriend(obj1, obj2);
    document.getElementById("r5").innerText = p5answer;
});