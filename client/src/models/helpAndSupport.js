

const HelpAndSupport = function(container, button){
  this.container = container
  this.button = button
}


HelpAndSupport.prototype.bindEvents = function () {
  this.button.addEventListener('click', (evt) => {

    this.container.innerHTML = "HELP AND SUPPORT INFORMATION"
  })
};





module.exports = HelpAndSupport;
