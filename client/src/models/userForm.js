// 
//
//
// const UserForm = function(container, button){
//   this.container = container;
//   this.button = button;
// }
//
//
// UserForm.prototype.bindEvents = function () {
//   this.button.addEventListener('click' , (evt) => {
//     this.container.innerHTML = " "
//     const divForForm = document.createElement('div')
//     this.container.appendChild(divForForm)
//     this.createForm(divForForm);
//   })
// };
//
//
// UserForm.prototype.createForm = function (div) {
//
//   const dataForm = document.createElement('form')
//   const nameInputLabel = document.createElement('label')
//   nameInputLabel.textContent = "Name :"
//   const nameInput = document.createElement('input')
//   dataForm.appendChild(nameInputLabel)
//   dataForm.appendChild(nameInput)
//
//
//   const ageLabel = document.createElement('label')
//   ageLabel.textContent = "Age :"
//   const ageInput = document.createElement('input')
//   dataForm.appendChild(ageLabel)
//   dataForm.appendChild(ageInput)
//
//
//
//
//   const sexSelector = document.createElement('select')
//   dataForm.appendChild(sexSelector)
//
//   const male = document.createElement("option")
//   male.textContent = "Male"
//   sexSelector.appendChild(male)
//
//   const female = document.createElement("option")
//   female.textContent = "Female"
//   sexSelector.appendChild(female)
//
//
//
//   div.appendChild(dataForm)
//
// };
//
//
// module.exports = UserForm;
