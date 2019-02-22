const links = require('../../../server/assets/linksHelp.json')

const HelpAndSupport = function(container, button){
  this.container = container
  this.button = button
}


HelpAndSupport.prototype.bindEvents = function () {
  this.button.addEventListener('click', (evt) => {
    this.container.innerHTML = " "

    const divForLinksHelp = document.createElement('div')
    divForLinksHelp.id = 'helps-links'

    const description = document.createElement('h3')
    description.textContent = "Major councelling services in scotland"
    divForLinksHelp.appendChild(description)




    this.container.appendChild(divForLinksHelp)
    const list = document.createElement('ul')
    const cancerResearchUk = document.createElement('a')
    cancerResearchUk.href = "https://www.cancerresearchuk.org/about-cancer/coping/emotionally/talking-about-cancer/counselling/how-to-find-a-counsellor"
    cancerResearchUk.textContent = "Cancer Research UK"
    list.appendChild(cancerResearchUk)

    const cancersupportScotland = document.createElement('a')
    cancersupportScotland.href = "https://www.cancersupportscotland.org/services/talking-therapy/"
    cancersupportScotland.textContent = "Cancer support Scotland"
    list.appendChild(cancersupportScotland)

    const pescanScotCouncelling = document.createElement('a')
    pescanScotCouncelling.href = "https://www.pancanscot.org/support/counselling-therapies/"
    pescanScotCouncelling.textContent = "Pescan Scot Councelling"
    list.appendChild(pescanScotCouncelling)


    divForLinksHelp.appendChild(list)


  })
};





module.exports = HelpAndSupport;
