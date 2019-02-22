

const TellUs = function(container,button){
  this.container = container
  this.button = button
}

TellUs.prototype.bindEvents = function () {
  this.button.addEventListener('click' , (evt) =>{
    this.container.innerHTML = " "
    this.makeSelectorCancer();
    this.makeSelectorMedication();
  })
};


TellUs.prototype.makeSelectorCancer = function () {

  selectorCancer = document.createElement('select')
  this.container.appendChild(selectorCancer)

};


TellUs.prototype.makeSelectorMedication = function () {

  selectorMedication = document.createElement('select')
  this.container.appendChild(selectorMedication)

};


module.exports = TellUs;
