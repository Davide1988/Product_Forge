const TellUs = require('./models/tellUs.js')
const HelpAndSupport = require('./models/helpAndSupport.js')



document.addEventListener('DOMContentLoaded', () => {

console.log("javaloaded");



  const container = document.querySelector('#container')
  const tellUsButton = document.querySelector('#tellUsButton')
  const tellUs = new TellUs(container,tellUsButton)
  tellUs.bindEvents();


  const helpAndSupportButton = document.querySelector('#helpAndSupport')
  const helpAndSupport = new HelpAndSupport(container, helpAndSupportButton)
  helpAndSupport.bindEvents()




});
