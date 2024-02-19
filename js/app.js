let count = 0;
let busAllSeat = [];
const seats = document.getElementsByClassName("seat-btn");
let busSeat = document.getElementById("bus-seat");
const couponText = document.getElementById("coupon");
let discountP = document.getElementById("discount");
let discountDiv = document.getElementById("discount-div");

let sum = 0;
let grandTotal = 0;
for (const seat of seats) {
    seat.addEventListener("click", function () {
        if (count < 4 && !busAllSeat.includes(seat.innerText)) {
            seatColorChange(seat);
            count++;
            busAllSeat.push(seat.innerText);
            sum += 550;
            grandTotal += 550;
            busSeat.innerText = parseInt(busSeat.innerText) - 1;
            selectedSeatInfo(seat.innerText);
            setInnerText("sup-seat", count);
            setInnerText("sum", sum);
            setInnerText("grand-sum", grandTotal);
        }

        if (count === 4) {
            couponText.removeAttribute("disabled");
            const applyBtn = document.getElementById("apply");
            applyBtn.removeAttribute("disabled");
        }
    })

}
const applyForCoupon = document.getElementById("apply");
applyForCoupon.addEventListener("click", function () {
    if (couponText.value === "NEW15") {
        const discount = grandTotal * 0.15;
        grandTotal = grandTotal - discount;
        setInnerText("grand-sum", grandTotal);
        document.getElementById("coupon-textfield").classList.add("hidden");
        discountDiv.classList.remove("hidden");
        setInnerText("discount", discount);

    }
    else if (couponText.value === "Couple 20") {
        const discount = grandTotal * 0.20;
        grandTotal = grandTotal - discount;
        setInnerText("grand-sum", grandTotal);
        document.getElementById("coupon-textfield").classList.add("hidden");
        discountDiv.classList.remove("hidden");
        setInnerText("discount", discount);
    }
})

document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();
    if (count > 0) {
        const modal = document.getElementById("my_modal_5");
        modal.showModal();
    }
    else {
        alert("Firstly book a seat!!!");
    }
});


function selectedSeatInfo(seat) {
    const parentDiv = document.getElementById("selected-seat-info");
    const div = document.createElement("div");
    div.classList.add("flex", "justify-between");

    const seatP = document.createElement("p");
    seatP.innerText = seat;
    const classP = document.createElement("p");
    classP.innerText = "Economoy";
    const priceP = document.createElement("p");
    priceP.innerText = 550;

    div.appendChild(seatP);
    div.appendChild(classP);
    div.appendChild(priceP);
    parentDiv.appendChild(div);
}

function seatColorChange(seat) {
    seat.style.backgroundColor = "#1DD100";
    seat.style.color = "white";
}

function setInnerText(id, val) {
    document.getElementById(id).innerText = val;
}

