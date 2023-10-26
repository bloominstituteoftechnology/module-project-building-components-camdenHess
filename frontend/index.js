function moduleProject3() {

  // 👉 TASK 1 - Write a `buildNav` component that returns a nav

  function buildNav(links) {
    const container = document.createElement('nav')
    links.forEach(link => {
      let newLink = document.createElement('a')
      newLink.textContent = link.textContent
      newLink.href = link.href
      newLink.title = link.title
      container.appendChild(newLink)
    })
    return container
  }

  // ❗ DOM creation using your `buildNav` component (do not change):
  document.querySelector('header').appendChild(buildNav([
    { href: 'https://www.example.com', textContent: 'Home', title: 'Go to the home page' },
    { href: 'https://www.example.com/about', textContent: 'About', title: 'Learn more about our company' },
    { href: 'https://www.example.com/services', textContent: 'Services', title: 'View our available services' },
    { href: 'https://www.example.com/blog', textContent: 'Blog', title: 'Read our latest blog posts' },
    { href: 'https://www.example.com/contact', textContent: 'Contact', title: 'Get in touch with us' },
  ]))

  // 👉 TASK 2A - Write a `buildLearnerCard` component that returns a card

  function buildLearnerCard(learner, languages) {
    let container = document.createElement('div')
    container.classList.add('learner-card')

    let name = document.createElement('p')
    let id = document.createElement('p')
    let dob = document.createElement('p')
    let favLang = document.createElement('p')

    name.textContent = learner.fullName
    id.textContent = `Learner ID: ${learner.id}`
    dob.textContent = `Date of Birth: ${learner.dateOfBirth}`
    let langIdFinder = languages.filter(lang => learner.favLanguage === lang.id)
    favLang.textContent = `Favorite Language: ${langIdFinder[0].name}`
    // let langIdFinder = languages.find(lang => learner.favLanguage === lang.id)
    // favLang.textContent = `Favorite Language: ${langIdFinder.name}`

    container.appendChild(name)
    container.appendChild(id)
    container.appendChild(dob)
    container.appendChild(favLang)

    container.addEventListener('click', evt => {
      document.querySelectorAll('.learner-card').forEach(container => {
        container.classList.remove('active')
      })
      container.classList.add('active')
    })

    return container
  }

  {
    // 👉 TASK 2B - Use the two variables below to make learner Cards, and put them in the DOM

    let languages = [
      { id: 37, name: 'JavaScript', creator: 'Brendan Eich', year: 1995 },
      { id: 82, name: 'Python', creator: 'Guido van Rossum', year: 1991 },
      { id: 12, name: 'Java', creator: 'James Gosling', year: 1995 },
      { id: 53, name: 'C#', creator: 'Microsoft Corporation', year: 2000 },
      { id: 91, name: 'Ruby', creator: 'Yukihiro Matsumoto', year: 1995 }
    ]
    let learners = [
      { id: 24, fullName: 'Kenneth Fisher', dateOfBirth: '1990-01-01', favLanguage: 82 },
      { id: 53, fullName: 'Jess Williams', dateOfBirth: '1985-05-10', favLanguage: 37 },
      { id: 72, fullName: 'Brandon Nguyen', dateOfBirth: '1992-09-15', favLanguage: 53 },
      { id: 41, fullName: 'Sabah Beydoun', dateOfBirth: '1988-03-25', favLanguage: 91 },
      { id: 17, fullName: 'Daniel Castillo', dateOfBirth: '1995-11-05', favLanguage: 12 }
    ]
    learners.forEach(learner => {
      let learnerCard = buildLearnerCard(learner, languages)
      document.querySelector('section').appendChild(learnerCard)
    })
  }

  // 👉 TASK 3 - Write a `buildFooter` component that returns a footer

  function buildFooter(footerData) {
    let footer = document.createElement('footer')

    let companyInfoDiv = document.createElement('div')
    let name = document.createElement('p')
    let address = document.createElement('p')
    let email = document.createElement('p')
    let socialMediaDiv = document.createElement('div')
    let twitter = document.createElement('a')
    let facebook = document.createElement('a')
    let instagram = document.createElement('a')
    let copyRightDiv = document.createElement('div')

    companyInfoDiv.classList.add('company-info')
    name.classList.add('company-name')
    address.classList.add('address')
    email.classList.add('contact-email')
    socialMediaDiv.classList.add('social-media')

    name.textContent = footerData.companyName
    address.textContent = footerData.address
    email.innerHTML = `Email: <a href=mailto:${footerData.contactEmail}> ${footerData.contactEmail}</a>`
    twitter.textContent = 'Twitter'
    facebook.textContent = 'Facebook'
    instagram.textContent = 'Instagram'
    copyRightDiv.textContent = '© BLOOM INSTITUTE OF TECHNOLOGY 2023'
    twitter.href = footerData.socialMedia.twitter
    facebook.href = footerData.socialMedia.facebook
    instagram.href = footerData.socialMedia.instagram

    footer.appendChild(companyInfoDiv)
    footer.appendChild(socialMediaDiv)
    footer.appendChild(copyRightDiv);

    [ name, address, email ].forEach(p => {
      companyInfoDiv.appendChild(p)
    });

    [ twitter, facebook, instagram ].forEach(p => {
      socialMediaDiv.appendChild(p)
    })

    return footer
  }

  // ❗ DOM creation using your `buildFooter` component (do not change):
  document.body.appendChild(buildFooter({
    companyName: 'Bloom Institute of Technology',
    address: '123 Main Street, City, Country',
    contactEmail: 'info@example.com',
    socialMedia: {
      twitter: 'https://twitter.com/example',
      facebook: 'https://www.facebook.com/example',
      instagram: 'https://www.instagram.com/example',
    },
  }))

  // 👉 TASK 4 - Clicking on the section should deactivate the active card
  document.addEventListener('click', evt => {
    if (evt.target === document.querySelector('section')) {
      const learners = document.querySelectorAll('.learner-card')
      learners.forEach(learner => learner.classList.remove('active'))
    }
  })
  
}

// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject3 }
else moduleProject3()
