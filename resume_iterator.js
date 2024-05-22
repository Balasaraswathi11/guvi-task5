const data = {
  fullName: "Balasaraswathi",
  contactInformation: {
    phoneNumber: "9787329631",
    email: "twilightestrella11@gmail.com",
    address: "3/13, Thoppu Street, Muthiahpuram, Thoothukudi."
  },
  objective: "To obtain a Javascript developer position that allows me to utilize my skills in coding and problem-solving to contribute to the success of the company.",
  education: [
    {
      degree: "Bachelor of Arts in English",
      institution: "St.Mary's college",
      yearOfGraduation: "2023"
    }
  ],
  skills: [
    "JavaScript",
    "HTML/CSS",
    "Git",
    "Ms.Exel",
    "Tally Erp9",
    "Ms.Word",
    "Ms.Powerpoint"
  ],
  languages: [
    "Tamil",
    "English",
    "Spanish",
    "Chinese",
    "Hindi"
  ],
  hobbiesInterests: [
    "Reading",
    "Coding",
    "Editing"
  ]
};

// Using for loop to iterate over arrays
for (let i = 0; i < data.skills.length; i++) {
  console.log(data.skills[i]);
}

for (let i = 0; i < data.languages.length; i++) {
  console.log(data.languages[i]);
}

for (let i = 0; i < data.hobbiesInterests.length; i++) {
  console.log(data.hobbiesInterests[i]);
}


// Using for...in to iterate over object properties
for (let key in data) {
  console.log(`${key}: ${data[key]}`);
}

// Using for...in to iterate over nested objects
for (let key in data.contactInformation) {
  console.log(`${key}: ${data.contactInformation[key]}`);
}

// Using for...in to iterate over array of objects
for (let i in data.education) {
  for (let key in data.education[i]) {
    console.log(`${key}: ${data.education[i][key]}`);
  }
}


// Using for...of to iterate over arrays
for (let skill of data.skills) {
  console.log(skill);
}

for (let language of data.languages) {
  console.log(language);
}

for (let hobby of data.hobbiesInterests) {
  console.log(hobby);
}

// Using for...of to iterate over array of objects
for (let education of data.education) {
  for (let key in education) {
    console.log(`${key}: ${education[key]}`);
  }
}


// Using forEach to iterate over arrays
data.skills.forEach(skill => {
  console.log(skill);
});

data.languages.forEach(language => {
  console.log(language);
});

data.hobbiesInterests.forEach(hobby => {
  console.log(hobby);
});

// Using forEach to iterate over array of objects
data.education.forEach(education => {
  for (let key in education) {
    console.log(`${key}: ${education[key]}`);
  }
});

