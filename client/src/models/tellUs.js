const data = require('../../../server/assets/cancerlist.json')

const TellUs = function(container,button){
  this.container = container
  this.button = button
}

TellUs.prototype.bindEvents = function () {
  this.button.addEventListener('click' , (evt) =>{
    this.container.innerHTML = " "
    selectorDiv = document.createElement('div')
    this.container.appendChild(selectorDiv)
    this.makeSelectorsCancerAndMedication(selectorDiv);
  })
}


TellUs.prototype.makeSelectorsCancerAndMedication = function (div) {
  this.selectorCancer = document.createElement('select')
  div.appendChild(this.selectorCancer)
  selectorMedication = document.createElement('select')
  div.appendChild(selectorMedication)
  this.populateCancerSelector()
  this.selectorCancer.addEventListener('change', (evt) =>{
  const cancerSelected = evt.target.value
});
}


TellUs.prototype.populateCancerSelector = function () {
  data.forEach((cancer) =>{
    const cancerOption = document.createElement('option')
    cancerOption.textContent = cancer
    this.selectorCancer.appendChild(cancerOption)
  })
};







module.exports = TellUs;
