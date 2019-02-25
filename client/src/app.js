// const TellUs = require('./models/tellUs.js')
// const UserForm = require('./models/userForm.js')
const GetYourInfo = require('./models/getYourInfo.js')
const HelpAndSupport = require('./models/helpAndSupport.js')
const LeafletMap = require('./models/leafletMap')



document.addEventListener('DOMContentLoaded', () => {

console.log("javaloaded");


  const container = document.querySelector('#container');



  // const tellUsButton = document.querySelector('#tellUsButton');
  // const tellUs = new TellUs(container, tellUsButton);
  // tellUs.bindEvents();


  // const userFormButton = document.querySelector('#userFormButton')
  // const userForm = new UserForm(container, userFormButton)
  // userForm.bindEvents();


  const helpAndSupportButton = document.querySelector('#helpAndSupport')
  const helpAndSupport = new HelpAndSupport(container, helpAndSupportButton)
  helpAndSupport.bindEvents();


  const getYourInfoButton = document.querySelector('#getInfo')
  const getYourInfo = new GetYourInfo(container, getYourInfoButton)
  getYourInfo.bindEvents();

  // const getMapButton = document.querySelector('#map')
  // const leafletMap = new LeafletMap(container, getMapButton);
  // leafletMap.bindEvents();




});
