const data = {
    Name: "Balasaraswathi",
    ContactInformation: {
      PhoneNumber: "9787329631",
      Email: "twilightestrella11@gmail.com",
      Address: "3/13, Thoppu Street, Muthiahpuram, Thoothukudi."
    },
    Objective: "To obtain a Javascript developer position that allows me to utilize my skills in coding and problem-solving to contribute to the success of the company.",
    Education: [
      {
        degree: "Bachelor of Arts in English",
        institution: "St.Mary's college",
        yearOfGraduation: "2023"
      }
    ],
    Skills: [
      "JavaScript",
      "HTML/CSS",
      "Git",
      "Ms.Exel",
      "Tally Erp9",
      "Ms.Word",
      "Ms.Powerpoint"
    ],
    Languages: [
      "Tamil",
      "English",
      "Spanish",
      "Chinese",
      "Hindi"
    ],
    HobbiesInterests: [
      "Reading",
      "Coding",
      "Editing"
    ]
  };
//using for loop
  const keys = Object.keys(data);
for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  const value = data[key];
  if (Array.isArray(value)) {
    console.log(`${key}:`);
    for (let j = 0; j < value.length; j++) {
      console.log(`  - ${value[j]}`);
    }
  } else if (typeof value === 'object') {
    console.log(`${key}:`);
    const subKeys = Object.keys(value);
    for (let j = 0; j < subKeys.length; j++) {
      const subKey = subKeys[j];
      console.log(`  ${subKey}: ${value[subKey]}`);
    }
  } else {
    console.log(`${key}: ${value}`);
  }
}

//for in loop

for (const key in data) {
    const value = data[key];
    if (Array.isArray(value)) {
      console.log(`${key}:`);
      for (let j = 0; j < value.length; j++) {
        console.log(`  - ${value[j]}`);
      }
    } else if (typeof value === 'object') {
      console.log(`${key}:`);
      for (const subKey in value) {
        console.log(`  ${subKey}: ${value[subKey]}`);
      }
    } else {
      console.log(`${key}: ${value}`);
    }
  }

//for of loop
const entries = Object.entries(data);
for (const [key, value] of entries) {
  if (Array.isArray(value)) {
    console.log(`${key}:`);
    for (const item of value) {
      console.log(`  - ${item}`);
    }
  } else if (typeof value === 'object') {
    console.log(`${key}:`);
    for (const subKey in value) {
      console.log(`  ${subKey}: ${value[subKey]}`);
    }
  } else {
    console.log(`${key}: ${value}`);
  }
}
//for each loop

 const entries = Object.entries(data);

  Object.entries(data).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      console.log(`${key}:`);
      value.forEach(item => {
        console.log(`  - ${item}`);
      });
    } else if (typeof value === 'object') {
      console.log(`${key}:`);
      Object.entries(value).forEach(([subKey, subValue]) => {
        console.log(`  ${subKey}: ${subValue}`);
      });
    } else {
      console.log(`${key}: ${value}`);
    }
  });
  


  
  

  
 

  
  

  
 
