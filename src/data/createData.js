const uuid = require("uuid");
const fs = require("fs");

const names = {
  male: [
    "James",
    "John",
    "Robert",
    "Michael",
    "William",
    "David",
    "Richard",
    "Joseph",
    "Thomas",
    "Charles",
    "Christopher",
    "Daniel",
    "Matthew",
    "Donald",
    "Mark",
    "Paul",
    "Steven",
    "Andrew",
    "Kevin",
    "Joshua",
    "Ronald",
    "Ryan",
    "Nicholas",
    "Justin",
    "Scott",
  ],
  female: [
    "Patricia",
    "Jennifer",
    "Elizabeth",
    "Jessica",
    "Emily",
    "Kimberly",
    "Ashley",
    "Betty",
    "Margaret",
    "Lisa",
    "Nancy",
    "Michelle",
    "Melissa",
    "Deborah",
  ],
};

const surnames = [
  "Smith",
  "Taylor",
  "Jones",
  "Williams",
  "Brown",
  "White",
  "Harris",
  "Martin",
  "Wilson",
  "Cooper",
  "Wright",
  "Clark",
  "Robinson",
  "Turner",
  "Phillips",
  "Moore",
  "Carter",
  "Collins",
  "Parker",
  "Hughes",
];

function getRandomValueFromSet(set) {
  return set[Math.round(Math.random() * set.length)];
}

let lastImageID = 1;

function createPupil() {
  const gender = Math.random() > 0.5 ? "male" : "female";

  const name = `${getRandomValueFromSet(names[gender])} ${getRandomValueFromSet(
    surnames
  )}`;

  const pupil = {
    id: uuid.v4(),
    avatarLink: "https://i.pravatar.cc/150?img=" + lastImageID++,
    description:
      "amet volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris a diam maecenas sed enim ut sem viverra aliquet eget sit amet tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros in cursus turpis massa tincidunt dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam ut porttitor leo a diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis eget nunc lobortis mattis aliquam faucibus purus in massa tempor nec",
    email: name.split(" ").join("-") + "@mail.com",
    grades: [],
    name: name,
  };

  for (let i = 0; i < 4; ++i) {

    pupil.grades.push({
      history: 2 + Math.round(Math.random() * 3),
      literature: 2 + Math.round(Math.random() * 3),
      math: 2 + Math.round(Math.random() * 3),
      physics: 2 + Math.round(Math.random() * 3),
      russian: 2 + Math.round(Math.random() * 3),
    });
    
  }
  return pupil;
}

const buildSchoolClass = () => {
  const schoolClass = {};

  for (let i = 0; i < 20; ++i) {
    const pupil = createPupil();
    schoolClass[pupil.id] = pupil;
  }
  return schoolClass;
};

fs.writeFileSync("./seed.json", JSON.stringify(buildSchoolClass()));