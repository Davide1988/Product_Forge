AccessCode = require('./accessCode.js')
RequestHelper = require('../helpers/request_helper.js')
TellUs = require('./tellUs.js')



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
  this.linkForNoCode();
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

GetYourInfo.prototype.linkForNoCode = function () {
  const link = document.createElement('button')
  link.textContent = "I don't have a code"
  this.container.appendChild(link)
  link.addEventListener('click', (evt) => {
    this.container.innerHTML = " "
    const selectors = new TellUs(this.container)
    selectors.makeSelectorsCancerAndMedication()
  })
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

  this.searchStudiesForCancer(data.cancer.name)
};



GetYourInfo.prototype.displayData = function (data) {

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


  this.divForDrugStudies = document.createElement('div')
  this.container.appendChild(this.divForDrugStudies)


  const drugLable = document.createElement('label')
  drugLable.textContent = "Pharmaceutical : "
  const drug = document.createElement('p')
  drug.textContent = data.treatment.drug

  this.divForDrugStudies.appendChild(drugLable)
  this.divForDrugStudies.appendChild(drug)

  this.searchStudiesForTreatment(data.treatment.drug)


};



GetYourInfo.prototype.searchStudiesForTreatment = function (treatmentName) {
  const url = `https://api.fda.gov/drug/event.json?search=patient.drug.openfda.generic_name:"${treatmentName}"`
  const request = new RequestHelper(url);
  request.get()
      .then((data) =>{
        console.log(data);
        this.renderDrugInfo(data)
      })
};




GetYourInfo.prototype.searchStudiesForCancer = function (cancerName) {
  console.log(cancerName);
};




GetYourInfo.prototype.renderDrugInfo = function (data) {
  const sideEffectLabel = document.createElement('label')
  sideEffectLabel.textContent = "Side effect : "
  const listOfSideEffect = document.createElement('ul')
  data.results[0].patient.reaction.forEach((x) =>{
    const reactionList = document.createElement('li')
    reactionList.textContent = x.reactionmeddrapt
    listOfSideEffect.appendChild(reactionList)
  })

  this.divForDrugStudies.appendChild(sideEffectLabel)
  this.divForDrugStudies.appendChild(listOfSideEffect)
};

module.exports = GetYourInfo;
