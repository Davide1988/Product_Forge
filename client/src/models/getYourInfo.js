AccessCode = require('./accessCode.js')
const PubSub = require('../helpers/pub_sub.js')


const GetYourInfo = function(container, button){
  this.container = container
  this.button = button
}


GetYourInfo.prototype.bindEvents = function () {
  this.button.addEventListener("click", (evt) => {
  this.container.innerHTML = " "
  inputDiv = document.createElement('div')
  this.container.appendChild(inputDiv)
  this.createInput(inputDiv);
  })
};

GetYourInfo.prototype.createInput= function (div) {

  const codeInputLabel = document.createElement('label')
  codeInputLabel.textContent = "Insert your reference code :"
  const codeInput = document.createElement('input')
  const subButton = document.createElement('button')
  subButton.textContent = "SUBMIT"

  div.appendChild(codeInputLabel)
  div.appendChild(codeInput)
  div.appendChild(subButton)
  this.getCode(subButton, codeInput)

};

GetYourInfo.prototype.getCode = function (button,input) {
  button.addEventListener('click', (evt) =>{
    const code = input.value;
    this.searchData(code)
  })
};


GetYourInfo.prototype.searchData = function (code) {
  const searchTool = new AccessCode
  const data = searchTool.quickAccess(code)
  this.displayData(data)
};

GetYourInfo.prototype.displayData = function (data) {

  console.log(data);
  const resultDiv = document.createElement('div')
  resultDiv.id = "cancer-result"
  this.container.appendChild(resultDiv)


  const cancerName = document.createElement('h3')
  cancerName.textContent = data.cancer.name
  resultDiv.appendChild(cancerName)

  const descriptionLable = document.createElement('label')
  descriptionLable.textContent = "Description : "
  const description = document.createElement('p')
  description.textContent = data.cancer.description

  resultDiv.appendChild(descriptionLable)
  resultDiv.appendChild(description)

  const treatmentLable = document.createElement('label')
  treatmentLable.textContent = "Treatment : "
  const treatment = document.createElement('p')
  treatment.textContent = data.treatment.name

  resultDiv.appendChild(treatmentLable)
  resultDiv.appendChild(treatment)








};


module.exports = GetYourInfo;
