FirstNameInput = document.querySelector(".firstName")
LastNameInput = document.querySelector(".lastName")
emailInput = document.querySelector(".email")
pswInput = document.querySelector("#pwd")
confirmPswInput = document.querySelector("#confirm-pwd")
registerBtn = document.querySelector(".reg-btn")


registerBtn.addEventListener("click", (e) => {
    console.log("hello word")
    e.preventDefault();

    if (FirstNameInput.value.length === 0) {
        alert("please enter your first name!")
    } else if (LastNameInput.value.length === 0) {
        alert("please enter your last name!")
    } else if (emailInput.value.length === 0) {
        alert("please enter your email")
    } else if (pswInput.value.length === 0) {
        alert("please enter your password")
    } else if (confirmPswInput.value.length === 0) {
        alert("please comfirm your password")
    } else {
        alert(`welcome ${FirstNameInput.value} ${LastNameInput.value}
        you Email Adress is ${emailInput.value}`)
    }
})