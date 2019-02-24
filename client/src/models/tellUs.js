const data = require('../../../server/assets/cancerlist.json')
const jsonfile = require('../../../server/assets/cancerObj');

const TellUs = function(container){
  this.container = container
}



TellUs.prototype.makeSelectorsCancerAndMedication = function () {


  this.selectorCancer = document.createElement('select')
  this.container.appendChild(this.selectorCancer)

  const selectCancerHolder = document.createElement('option')
  selectCancerHolder.selected = "true"
  selectCancerHolder.disabled = "disabled"
  selectCancerHolder.textContent = "Select one option"
  this.selectorCancer.appendChild(selectCancerHolder)

  this.selectorMedication = document.createElement('select')
  this.container.appendChild(this.selectorMedication)

  const selectTeraphyHolder = document.createElement('option')
  selectTeraphyHolder.selected = "true"
  selectTeraphyHolder.disabled = "disabled"
  selectTeraphyHolder.textContent = "Select a teraphy"
  this.selectorMedication.appendChild(selectTeraphyHolder)




  this.selectorDrug = document.createElement('select')
  this.container.appendChild(this.selectorDrug)


  const selectMedicineHolder = document.createElement('option')
  selectMedicineHolder.selected = "true"
  selectMedicineHolder.disabled = "disabled"
  selectMedicineHolder.textContent = "Select a Drug"
  this.selectorDrug.appendChild(selectMedicineHolder)

  this.populateCancerSelector()
  this.selectorCancer.addEventListener('change', (evt) =>{
  const cancerSelected = evt.target.value
  this.createDataForTreatementSelector(cancerSelected);
});
}


TellUs.prototype.populateCancerSelector = function () {
  data.forEach((cancer) =>{
    const cancerOption = document.createElement('option')
    cancerOption.textContent = cancer
    this.selectorCancer.appendChild(cancerOption)
  })
};

  TellUs.prototype.createDataForTreatementSelector = function (name) {
    this.objectFiltered = jsonfile.filter(file => file.name === name)
    this.objectFiltered[0].treatments.forEach((treatment) => {
      const treatmentOption = document.createElement('option')
      treatmentOption.textContent = treatment.name
      this.selectorMedication.appendChild(treatmentOption)
    })
    this.selectorMedication.addEventListener('change', (evt) =>{
        const treatmentSelected = evt.target.value
        this.makeDrugSelector(treatmentSelected)
    })
  };

  TellUs.prototype.makeDrugSelector = function (treatment) {

    const treatmentFiltered = this.objectFiltered[0].treatments.filter(cure => cure.name === treatment)

    const drugOption = document.createElement('option')

    drugOption.textContent = treatmentFiltered[0].drug
    this.selectorDrug.appendChild(drugOption)


  };







module.exports = TellUs;
