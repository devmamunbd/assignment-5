// let seatCount = 0;
// let seatLeft = 0;

// const seatList = document.querySelectorAll('.seats');

// for(const seat of seatList) {
//     seat.addEventListener('click', function() {
//         seat.style.background = 'Green';
//         seatCount += 1;
//         seatLeft -= 1;
//         console.log(seatCount)


//         // const setCount = document.querySelector('.seat-count').innerText;
//         // // console.log(setCount)

//         // const card = price.parentNode.childNodes[2]; 
//         // console.log(card)
//         // const price = cart.getElementById('price').innerText;

//         // totalPrice('total-price', parseInt(price))
//         // grandTotal('grand-total', parseInt(price))
//         // console.log(totalCost, grandTotal)
//         setInnerText('seat-increase', seatCount);
//         setInnerText('seat-left', seatLeft);
//     })


    
// }

// function totalPrice(id, value){
//   const totalPrice =  document.getElementById(id).innerText;
//   const totalPriceConvert = parseInt(totalPrice);
//   const sum = totalPriceConvert + parseInt(value);
//   setInnerText('total-price', sum)
// }

// function grandTotal(id, value){
//     const grandTotal =  document.getElementById(id).innerText;
//     const grandTotalConvert = parseInt(grandTotal);
//     const sum = grandTotalConvert + parseInt(value);
//     setInnerText('grand-total', sum)
//   }

// function setInnerText(id, value) {
//     document.getElementById(id).innerText = value;
// }