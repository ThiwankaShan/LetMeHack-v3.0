// document.addEventListener("DOMContentLoaded", function() {
// var items = document.querySelectorAll("li");

// function isItemInView(item){
//   var rect = item.getBoundingClientRect();
//   return (
//       rect.top >= 0 &&
//       rect.left >= 0 &&
//       rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// }

// function callbackFunc() {
//     // console.log('called');
//     console.log(items);

//     for (var i = 0; i < items.length; i++) {
//       if (isItemInView(items[i])) {
//         items[i].classList.add("show");
//       }
//     }
//   }

//   // listen for events
//   window.addEventListener("load", callbackFunc);
//   window.addEventListener("resize", callbackFunc);
//   window.addEventListener("scroll", callbackFunc);
// });
