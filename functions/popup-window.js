const projects = [
  {
    name: 'To-Do-List',
    description:
      " Prioritize & Organize your Team's Tasks! Be more efficient and successful! Start with. A simple To-Do-List, add more Details as you go ! Free for up to 50 User! Try it now! Instant Messaging. Intuitive Drag & Drop. Up-To Date Information.",
    featuredImageSource: 'images/to-do-list.jpg',
    featuredImageAlt: 'Project image',
    technology: ['CSS', 'HTML', 'JavaScript'],
    demoLive: '',
    sourceLink: '',
  },
  {
    name: 'Weather App',
    description:
      'The weather app also provides atmospheric pressure, weather conditions, visibility distance, relative humidity, precipitation in different unites, dew point, wind speed and direction, in addition to ten days in future and hourly weather forecast.',
    featuredImageSource: 'images/weather-app.avif',
    featuredImageAlt: 'Project image',
    technology: ['CSS', 'HTML', 'JavaScript'],
    demoLive: '',
    sourceLink: '',
  },
  {
    name: 'Calculator App',
    description:
      'This is a fully functional and free taste of our very popular scientific calculator. It includes an optional RPN mode, multiple undo and redo, unit conversions and constants, as well as two stylish themes and our highly praised design.',
    featuredImageSource: 'images/calculator.jpg',
    featuredImageAlt: 'Project image',
    technology: ['CSS', 'HMTL', 'JavaScript'],
    demoLive: '',
    sourceLink: '',
  },
  {
    name: 'Road Trip Planner',
    description:
      'A travelling restrictions are beginning to be lifted globally, maybe it’s finally time for you to plan that roadtrip! In this project, you’ll give users the opportunity to list out the destinations they want to visit, let users order them, and display the best route between destinations.',
    featuredImageSource: 'images/road-trip.jpg',
    featuredImageAlt: 'Project image',
    technology: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
    demoLive: '',
    sourceLink: '',
  },
];

const workContainer = document.getElementById('portfolio');
workContainer.style.gridTemplateRows = `80px repeat(${projects.length},fr)`;

function hideProject(prevProject) {
  document.getElementById('projectWindow').remove();
  prevProject.querySelector('.project-picture').style.filter = 'blur(0)';
  document.querySelector('.header-container').style.filter = 'blur(0)';
  prevProject.querySelector('.project-body').style.filter = 'blur(0)';
  if (prevProject.nextSibling) {
    prevProject.nextSibling.querySelector('.picture').style.filter = 'blur(0)';
  }
}

function displayProject(projectIndex) {
  const prevWindow = document.getElementById('projectWindow');
  if (prevWindow) {
    prevWindow.parentElement.querySelector('.project-picture').style.filter = 'blur(0)';
    prevWindow.parentElement.querySelector('.project-body').style.filter = 'blur(0)';
    if (prevWindow.parentElement.nextSibling) {
      prevWindow.parentElement.nextSibling.querySelector('.project-picture').style.filter = 'blur(0)';
    }
    prevWindow.remove();
  }

  let screen = window.matchMedia('(min-width: 1024px)');
  const projectWindowWrapper = document.createElement('main');
  const projectWindow = document.createElement('section');
  const projectWindowHeader = document.createElement('header');
  const imageContainer = document.createElement('img');
  const projectDescription = document.createElement('p');
  const projectTechnology = document.createElement('ul');
  const projectBtnGoLive = document.createElement('a');
  const projectBtnSeeSrc = document.createElement('a');
  const projectBtnWrapper = document.createElement('div');
  const currentProject = document.getElementById(`p${projectIndex + 1}`);
  const projectTechnologies = currentProject.querySelector('.project-body .technologies');
  function mediaQuery(screen) {
    const headerContainer = document.querySelector('.header-container');
    if (screen.matches) {
      headerContainer.style.filter = 'blur(12px)';
      projectWindowWrapper.style.backgroundColor = '#100F45';
      projectWindowWrapper.style.backgroundImage = "url('images/portfolio-2.svg')";
      projectWindowWrapper.style.backgroundRepeat = 'no-repeat';
      projectWindowWrapper.style.backgroundSize = ' 100% 100%';
      projectWindowWrapper.style.width = '100%';
      projectWindowWrapper.style.height = 'max-content';
      projectWindowWrapper.style.padding = '3% 10% 3%';
      projectDescription.style.maxWidth = '700px';
      imageContainer.style.maxWidth = '1108px';
      imageContainer.style.height = '405px';
      projectWindowHeader.style.maxWidth = '1108px';
      projectWindowHeader.style.marginBottom = '20px';
      projectBtnWrapper.style.flexDirection = 'row';
    } else {
      headerContainer.style.filter = 'blur(0)';
      projectWindowWrapper.style.backgroundColor = 'transparent';
      projectWindowWrapper.style.backgroundImage = 'none';
      projectWindowWrapper.style.padding = '0';
      projectDescription.style.maxWidth = 'unset';
      projectWindowHeader.style.width = '100%';
      imageContainer.style.width = '100%';
      imageContainer.style.height = '30%';
      projectBtnWrapper.style.flexDirection = 'column';
    }
  }

  currentProject.querySelector('.project-picture').style.filter = 'blur(12px)';
  currentProject.querySelector('.project-body').style.filter = 'blur(20px)';
  // if (currentProject.nextSibling) {
  //   currentProject.nextSibling.querySelector('.project-picture').style.filter =
  //     'blur(0px)';
  // }
  projectWindowHeader.innerHTML = `<h1>${projects[projectIndex].name}</h1><img src="images/cancel.png" alt="X-icon" onmouseover="" style="cursor: pointer;">`;
  imageContainer.src = `${projects[projectIndex].featuredImageSource}`;
  imageContainer.alt = `${projects[projectIndex].featuredImageAlt}`;
  projectDescription.textContent = `${projects[projectIndex].description}`;
  projectTechnology.innerHTML = `${projectTechnologies.innerHTML}`;
  const projectTechnologyItems = Array.from(projectTechnology.children);
  projectBtnGoLive.innerHTML = 'See Live <img src="images/see-live.png" alt="see-live-icon">';
  projectBtnGoLive.href = `${projects[projectIndex].demoLive}`;
  projectBtnSeeSrc.innerHTML = 'See Source <img src="images/github.png" alt="github-icon">';
  projectBtnSeeSrc.href = `${projects[projectIndex].sourceLink}`;
  projectBtnSeeSrc.setAttribute('target', '_blank');
  projectBtnSeeSrc.setAttribute('rel', 'noopener');
  projectBtnGoLive.setAttribute('target', '_blank');
  projectBtnGoLive.setAttribute('rel', 'noopener');
  projectBtnSeeSrc.style.textDecoration = 'none';
  projectBtnGoLive.style.textDecoration = 'none';
  projectWindowWrapper.id = 'projectWindow';
  projectWindowHeader
    .querySelector('img')
    .setAttribute('onClick', `hideProject(p${projectIndex + 1})`);

  projectWindow.style.backgroundColor = 'rgba(255, 255, 255, 0.16)';
  projectWindow.style.border = '1px solid #FFFFFF';
  projectWindow.style.boxShadow = '0px 48px 48px rgba(37, 47, 137, 0.08)';
  projectWindow.style.padding = '2rem';
  projectWindowWrapper.style.margin = '1rem 24px 24px';
  projectWindowWrapper.style.position = 'absolute';
  projectWindowWrapper.style.zIndex = '999999';
  projectWindowWrapper.style.display = 'flex';
  projectWindowWrapper.style.justifyContent = 'center';
  projectWindowWrapper.style.top = '0';
  projectWindowWrapper.style.height = '90vh';
  projectWindowWrapper.style.width = '90%';
  projectWindow.style.width = '90%';
  projectWindow.style.height = 'max-content';
  projectWindow.style.display = 'flex';
  projectWindow.style.flexDirection = 'column';
  projectWindow.style.alignItems = 'center';

  projectWindowHeader.style.display = 'flex';
  projectWindowHeader.style.justifyContent = 'space-between';
  projectWindowHeader.style.height = '60px';
  projectWindowHeader.style.width = '95%';
  projectWindowHeader.querySelector('img').style.height = '40px';
  projectWindowHeader.querySelector('img').style.width = '40px';
  projectWindowHeader.querySelector('h1').style.alignSelf = 'center';
  projectWindowHeader.querySelector('h1').style.color = 'white';
  projectWindowHeader.querySelector('h1').style.fontSize = '20px';

  imageContainer.style.height = '30%';
  imageContainer.style.margin = '0 auto';

  projectDescription.style.textAlign = 'center';
  projectDescription.style.fontSize = '16px';
  projectDescription.style.margin = '1.5rem 0';
  projectDescription.style.fontWeight = 'normal';
  projectDescription.style.lineHeight = '24px';
  projectDescription.style.color = 'white';

  projectTechnology.classList.add('technologies');
  projectTechnology.style.listStyle = 'none';
  projectTechnology.style.justifyContent = 'center';
  projectTechnology.firstChild.style.borderLeft = '1px solid #81818C';
  projectTechnology.lastChild.style.borderRight = 'visible';
  projectTechnologyItems.forEach((item) => {
    item.style.marginRight = '0 20px';
    item.style.padding = '0 20px';
    item.style.borderRight = '1px solid #81818C';
    item.style.color = 'white';
  });
  projectBtnGoLive.classList.add('btn-primary');
  projectBtnGoLive.style.display = 'block';
  projectBtnGoLive.style.marginTop = '10px';
  projectBtnGoLive.style.marginBottom = '10px';
  projectBtnGoLive.style.alignSelf = 'center';
  projectBtnGoLive.style.fontSize = '12px';
  projectBtnGoLive.style.color = 'white';
  projectBtnGoLive.style.display = 'flex';
  projectBtnGoLive.style.justifyContent = 'center';
  projectBtnGoLive.style.alignItems = 'center';
  projectBtnGoLive.querySelector('img').style.marginLeft = '10px';
  projectBtnGoLive.querySelector('img').style.height = '20px';
  projectBtnGoLive.querySelector('img').style.width = '20px';
  projectBtnSeeSrc.classList.add('btn-primary');
  projectBtnSeeSrc.style.display = 'block';
  projectBtnSeeSrc.style.width = '130px';
  projectBtnSeeSrc.querySelector('img').style.height = '40px';
  projectBtnSeeSrc.querySelector('img').style.width = '40px';
  projectBtnSeeSrc.querySelector('img').style.marginLeft = '10px';
  projectBtnSeeSrc.style.margin = '10px';
  projectBtnSeeSrc.style.alignSelf = 'center';
  projectBtnSeeSrc.style.color = 'white';
  projectBtnSeeSrc.style.display = 'flex';
  projectBtnSeeSrc.style.justifyContent = 'center';
  projectBtnSeeSrc.style.alignItems = 'center';
  projectBtnSeeSrc.style.fontSize = '12px';
  projectBtnWrapper.style.display = 'flex';
  projectBtnWrapper.style.flexDirection = 'column';
  projectBtnWrapper.style.flexWrap = 'wrap';
  projectBtnWrapper.style.justifyContent = 'space-between';
  projectBtnWrapper.style.position = 'relative';
  projectBtnWrapper.style.width = '316px';

  projectBtnWrapper.appendChild(projectBtnGoLive);
  projectBtnWrapper.appendChild(projectBtnSeeSrc);
  projectWindow.appendChild(projectWindowHeader);
  projectWindow.appendChild(imageContainer);
  projectWindow.appendChild(projectDescription);
  projectWindow.appendChild(projectTechnology);
  projectWindow.appendChild(projectBtnWrapper);
  projectWindowWrapper.appendChild(projectWindow);
  currentProject.appendChild(projectWindowWrapper);
  currentProject.insertBefore(
    projectWindowWrapper, currentProject.querySelector('.header-container'));

  mediaQuery(screen);
  screen.addListener(mediaQuery);
}

function createProjectStructure(projNo) {
  const projectContainer = document.createElement('section');
  const projectPicture = document.createElement('div');
  const projectPictureImage = document.createElement('img');
  const projectBody = document.createElement('div');
  const projectTitle = document.createElement('h2');
  const projectDescription = document.createElement('p');
  const projectTechnologies = document.createElement('ul');
  const projectBtnWrapper = document.createElement('div');
  const projectBtn = document.createElement('button');

  projectBtn.textContent = 'See Project';

  projectContainer.className = `project p${projNo}`;
  projectContainer.id = `p${projNo}`;
  projectPicture.className = 'project-picture';
  projectBody.className = 'project-body';
  projectTitle.className = 'Project-title';
  projectTechnologies.className = 'technologies';
  projectBtnWrapper.className = 'See-Project';
  projectBtn.className = 'btn-primary';

  projectBtnWrapper.appendChild(projectBtn);
  projectBody.appendChild(projectTitle);
  projectBody.appendChild(projectDescription);
  projectBody.appendChild(projectTechnologies);
  projectBody.appendChild(projectBtnWrapper);
  projectPicture.appendChild(projectPictureImage);
  projectContainer.appendChild(projectPicture);
  projectContainer.appendChild(projectBody);
  workContainer.appendChild(projectContainer);
}

function projectInit(projValues, projNo) {
  const projectContainer = document.getElementById(`p${projNo}`);
  const projectPictureImage = projectContainer.querySelector('.project-picture img');
  const projectTitle = projectContainer.querySelector('.Project-title');
  const projectDescription = projectContainer.querySelector('.project-body p');
  const projectTechnologies = projectContainer.querySelector('.technologies');
  const projectBtn = projectContainer.querySelector('.btn-primary');

  projectPictureImage.src = projValues.featuredImageSource;
  projectPictureImage.alt = projValues.featuredImageAlt;
  projectTitle.textContent = projValues.name;
  projectDescription.textContent = projValues.description;
  for (let i = 0; i < projValues.technology.length; i += 1) {
    const listItem = document.createElement('li');
    listItem.textContent = projValues.technology[i];
    projectTechnologies.appendChild(listItem);
  }
  projectBtn.setAttribute('onClick', `displayProject(${projNo - 1})`);
}

for (let index = 0; index < projects.length; index += 1) {
  createProjectStructure(index + 1);
  projectInit(projects[index], index + 1);
}