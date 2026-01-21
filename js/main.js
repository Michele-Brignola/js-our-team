const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
  },
];

function printCards() {
  const containerElement = document.getElementById("card-section");

  for (const member of teamMembers) {
    containerElement.innerHTML += generateTeamCard(member);
  }
}

function generateTeamCard(member) {
  const { name, role, email, img } = member;

  const teamCard = `
    <div class="card-team col">
      <div class="d-flex bg-black">
        <div class="col-4 img-card">
          <img class="img-fluid" src="./${img}" alt="${name}" />
        </div>
        <div class="text-card text-white p-3 col-8">
          <h3>${name}</h3>
          <p>${role}</p>
          <a href="mailto:${email}">${email}</a>
        </div>
      </div>
    </div>`;

  return teamCard;
}

printCards();
