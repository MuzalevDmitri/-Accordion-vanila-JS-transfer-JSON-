let accordions
const accordionWrapper = document.querySelector('.accordion-wrapper')

const contentData = [
    {
    id: 1,
    title: "title 1",
    content: "Content Content Content" 
    },

    {
        id: 2,
        title: "title 2",
        content: " Content Content Content Content Content Content" 
    },

    {
        id: 3,
        title: "title 3",
        content: "Content Content Content Content Content Content Content Content Content Content Content Content" 
    },

    {
        id: 4,
        title: "title 4",
        content: "Content Content Content Content Content Content Content Content Content Content Content Content" 
    },


    {
        id: 5,
        title: "title 5",
        content: "Content Content Content Content Content Content Content Content Content Content Content Content" 
    },

    {
        id: 6,
        title: "title 6",
        content: "Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content" 
        }
]

const createTemplate = item => {
    return  `
  <div class="accordion-item">
  <div class="accordion-item-title">${item.title}</div>
  <div class="accordion-item-content">${item.content}</div>    
</div>

  `
}

const fillHtmlList = () => {
    contentData.forEach(item => {
        accordionWrapper.innerHTML += createTemplate(item)
    })
     accordions = document.querySelectorAll('.accordion-item')
}

fillHtmlList()

for (item of accordions) {
    item.addEventListener('click', function() {
        if(this.classList.contains('active')) {
            this.classList.remove('active')

        } else {
            for (el of accordions) {
                el.classList.remove('active')
            
            }
            this.classList.add('active')
        }
    })
}