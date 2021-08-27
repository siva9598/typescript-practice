var someElement = document.querySelector(".foo");
console.log("someElement", someElement.value);
someElement.addEventListener("blur", function (event) {
    var target = event.target;
    console.log("target", target.value);
});
