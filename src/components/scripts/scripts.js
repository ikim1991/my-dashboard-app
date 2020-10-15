export const validateLoginForm = () => {
  const inputs = Array.from(document.querySelectorAll("#login-form input"))
  inputs.forEach(target => target.classList.remove("border", "border-danger"))

  if(inputs[0].value.length === 0){
    alert("Input valid email...")
    inputs[0].classList.add("border", "border-danger")
  } else if(inputs[1].value.length === 0){
    alert("Input valid password...")
    inputs[1].classList.add("border", "border-danger")
  }
}

export const validateRegisterForm = () => {
  const inputs = Array.from(document.querySelectorAll("#register-form input"))
  inputs.forEach(target => target.classList.remove("border", "border-danger"))

  if(inputs[0].value.length === 0){
    alert("Input valid email...")
    inputs[0].classList.add("border", "border-danger")
  } else if(inputs[1].value.length === 0){
    alert("Input valid username...")
    inputs[1].classList.add("border", "border-danger")
  } else if(inputs[2].value.length === 0){
    alert("Input valid password...")
    inputs[2].classList.add("border", "border-danger")
    inputs[3].classList.add("border", "border-danger")
  } else if(inputs[2].value !== inputs[3].value){
    alert("Please confirm your password...")
    inputs[2].classList.add("border", "border-danger")
    inputs[3].classList.add("border", "border-danger")
  }
}

export const clearLoginForm = () => {
  document.querySelector("#login-form").reset()
  Array.from(document.querySelectorAll("#login-form input")).forEach(target => target.classList.remove("border", "border-danger"))
}

export const clearRegisterForm = () => {
  document.querySelector("#register-form").reset()
  Array.from(document.querySelectorAll("#register-form input")).forEach(target => target.classList.remove("border", "border-danger"))
}
