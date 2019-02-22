


const UserForm = function(container, button){
  this.container = container;
  this.button = button;
}


UserForm.prototype.bindEvents = function () {
  this.button.addEventListener('click' , (evt) => {
    this.container.innerHTML = " "
    const divForForm = document.createElement('div')
    this.container.appendChild(divForForm)
    this.createForm(divForForm);
  })
};


UserForm.prototype.createForm = function (div) {



};


module.exports = UserForm;
