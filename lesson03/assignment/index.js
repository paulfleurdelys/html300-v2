const localData = [
    {
      "name": "Steve Smith",
      "jobTitle": "Project Manage",
      "company": "Front End Dev Co",
      "experience": "3 years",
      "school": "UW",
      "major": "Marketing",
      "email": "steve@fedc.com",
      "linkedInUrl": "steve.linkedinprofile.com",
      "codeLanguages": [
          "HTML", "CSS", "JavaScript", ".NET", "C#"
      ]
    }, 
    {
      "name": "Aaron Katz",
      "jobTitle": "Full Stack Developer",
      "company": "Web Sites and More",
      "experience": "5 years",
      "school": "SU",
      "major": "Computer Science",
      "email": "aaronNotMyemail@uw.com",
      "linkedInUrl": "aaron.linkedinprofile.com",
      "codeLanguages": [
          "HTML", "CSS", "JavaScript", "PHP", "Twig"
      ]
    }, 
    {
      "name": "Kyle Hendricks",
      "jobTitle": "Starting Pitcher",
      "company": "Chicago Cubs",
      "experience": "12 years",
      "school": "USC",
      "major": "Pitching",
      "email": "kyleH@cubs.com",
      "linkedInUrl": "kyle.linkedinprofile.com",
      "codeLanguages": [
          "HTML", "CSS", "JavaScript", "Ruby", "Rails"
      ]
    },
    {
      "name": "Michael Jordan",
      "jobTitle": "Point Guard",
      "company": "Chicago Buls",
      "experience": "20 years",
      "school": "UNC",
      "major": "Trash Talking",
      "email": "mJordan@bulls.com",
      "linkedInUrl": "mJordas.linkedinprofile.com",
      "codeLanguages": [
         "HTML", "CSS", "JavaScript", "Java", "Spring"
      ]
    }
   ]

// Card object code, has data fields and 1 method that returns a string of html to be inserted into page
class Card {
    constructor (data) {
        this.name = data.name;
        this.jobTitle = data.jobTitle;
        this.company = data.company;
        this.experience = data.experience;
        this.school = data.school;
        this.major = data.major;
        this.email = data.major;
        this.linkedInUrl = data.linkedInUrl;
        this.codeLanguages = data.codeLanguages;
    }
    returnHTML() {
        let card = `<main>
            <section>
                <aside>
                    <div class="image"></div>
                    <div class="name-text">${this.name}</div>
                    <div class="job-title-text">${this.jobTitle}</div>
                </aside>
                <article>
                    <div class="description-block-text"><span>Company:</span> ${this.company}</div>
                    <div class="description-block-text"><span>Experience:</span> ${this.experience}</div>
                    <div class="description-block-text"><span>School:</span> ${this.school}</div>
                    <div class="description-block-text"><span>Major:</span> ${this.major}</div>
                    <div class="description-block-text"><span>Email:</span> ${this.email}</div>
                    <div class="linkedin-container"><img src="img/linkedin.svg"> <span>${this.linkedInUrl}</span></div>
                </article>
            </section>
        </main>`
        return card;
    }
}

// Create a card object from each JSON element in the data array.
// Use localData.forEach for data in this index.js file.  Use dataFile to access the variable in the edited data.json (data.js) file thru the script tag in index.html.
var objArr = [];
dataFile.forEach(e => {
    objArr.push(new Card(e));
});

// Use map to return a new array that has the returnHTML result from each card object.
let htmlArr = objArr.map(e => {
    return e.returnHTML();
})

// Insert the new html into the template-hook.
document.querySelector('.template-hook').innerHTML = htmlArr;