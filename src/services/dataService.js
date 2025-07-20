export default class DataService {
  _data = {
    projectRepo: 'http://github.com/karl-Fernandes/portfolio-v3',
    react95Repo: 'https://github.com/React95/React95',
    binItems: [
      {
        id: 'old_portfolio_1',
        name: 'Portfolio V1',
        icon: 'folder',
        url: 'https://neon-florentine-0e520e.netlify.app/',
      },
      {
        id: 'old_portfolio_2',
        name: 'Portfolio V2',
        icon: 'folder',
        url: 'https://karlfernandes.vercel.app/',
      },
    ],
    items: [
      {
        id: 'about',
        name: 'About.txt',
        icon: 'info_bubble',
        content: {
          paragraphs: [
            "Hi! I am a Computer Science student studying at the University of Bristol. For the last two years I've been studying Software Engineering and working with startups to gain an understanding of how to build secure technologies from the ground up!",
            "I believe that friendly and respectful communication within a team is key to the company's success. With my experience in software development and cloud management, I think I would be a valuable asset to your team.",
            'The main technology I have been using is Python. But during my time at University I fell in love with React and I use it for most of my websites. Moreover, I have a strong understanding of Java and OOP. My other interests include Cyber Security and Finance.',
            'When I am not in front of the computer, I like to workout, go on hikes and long bike rides.',
          ],
        },
      },
      {
        id: 'resume',
        name: 'Resume.txt',
        icon: 'notepad_2',
        content: {
          workExperience: [
            {
              jobTitle: 'Software Developer',
              company: 'Trackr',
              location: 'Bristol',
              period: 'May 2025 – PRESENT',
              accomplishments: [
                'Refactored entire job scraping system to efficiently use Selenium, reducing runtime by 75% and increasing job posting accuracy.',
                'Migrated scraping pipeline to AWS, fully automating job detection and email notifications using SES.',
                'Implemented new features including job removal detection, company performance reports, version tracking and priority detection.',
                'Expanded the overall project’s unit tests coverage from 10% to 80% and implemented CI/CD',
                'Technologies used: Python, AWS, Selenium, Angular',
              ],
            },
            {
              jobTitle: 'Junior AI Automation Developer',
              company: 'Fiftyminds',
              location: 'Bristol',
              period: 'MAY 2025 – JUL 2025',
              accomplishments: [
                'Built an AI voice assistant using Twilio, OpenAI, and FastAPI to conduct real-time outreach calls.',
                'Used concurrent processing to handle multiple outreach calls in parallel, improving throughput and reliability.',
                'Integrated with Microsoft Graph API to read emails and extract potential leads from incoming CSV attachments',
                'Automated personalised calls to leads and offered a gold investment guide; responses logged automaticaly into Zoho CRM or Sharepoint Folder.',
                'Technologies used: Python, OpenAI, Gemini, Twilio, ZohoCRM, Docker, Google Cloud Run, Deepgram',
              ],
            },
            {
              jobTitle: 'Software Engineer',
              company: 'Y-Entertainment',
              location: 'Remote',
              period: 'JUN 2024 – JUL 2024',
              accomplishments: [
                'Developed an interactive website for company',
                'Handled front-end and back-end development using HTML and JavaScript',
                'Technologies used: JavaScript, HTML, CSS',
              ],
            },
          ],
          education: [
            {
              credit: 'Bachelor in Computer Science',
              place: 'University of Bristol, England, Bristol',
              gpa: '1st Class Average',
              period: 'SEPT 2023 – PRESENT',
            },
          ],
        },
      },
      {
        id: 'projects',
        name: 'Projects.txt',
        icon: 'flying_through_space_100',
        content: {
          projects: [
            {
              title: 'Scotland Yard',
              description:
                '',
              myRole:
                'Collaborated on developing a Scotland Yard board game clone in Java, implementing the core game mechanics and rules. Designed and built an AI player that intelligently mimics the behavior of Mr. X, challenging human players with strategic decisions and movements. Applied Object-Oriented Design principles to create a modular and maintainable codebase, enabling future enhancements and AI improvements. Developed a user interface that allows players to interact with the game, visualize moves, and track detective progress. Conducted extensive testing and optimization to ensure smooth gameplay, accurate rule enforcement, and realistic AI behavior.',
              techStack:
                'Java',
            },
            {
              title: 'AI Lead Agent',
              description:
                'Created a voice assistant capable of conversing with potential lead clients on behalf of AU Bullion. The aim of this lead assistant is to send investment guides to potential investors, and then log a transcript of the call to Zoho CRM, allowing an employee at AU Bullion to review the transcript and make a follow-up call if necessary.',
              myRole: 'Creator',
              techStack: 'Python, Twilio, Deepgram and FastAPI Websockets',
            },
            {
              title: 'Game Of Life',
              description:
                "Implemented a distributed and parallel version of the well known simulation 'Game of life'. This required me to learn concepts such as race conditions, mutex locks, and systems such as communicating with a broker to relay information between multiple clients. I had to optimise the code in order to ensure memory protection within the bounds of the program and avoid causing race conditions.",
              myRole:
                "Co-Creator",
              techStack: 'GoLang, AWS',
            },
            {
              title: 'Howami',
              description:
                'Created an Expo app which aims to educate adolescent women about their bodies and how the menstrual cycle works. It is unique from the standard menstrual tracker, because it uses a ring based feature to allow a visual analysis of an indivuals cycle. The rings consist of a feature called "seasons"; which links the four seasons of nature to the four stages in a womens menstrual cycle.',
              myRole:
                "designing the entire backend using Python with Django. This allowed for effecient database queries using PostgreSQL, and JWT authentication. The backend also included models which allowed us to save user's data, allowing them to access it across multiple devices. I also helped in developing the frontend, with my main focus being developing the ring based features, and a graph to reflect the programs algorithm for predicting stages of the users menstrual cycle. Finally I deployed the database and backend system to AWS.",
              techStack:
                'AWS, Python with Django, React + Expo, Pylint for CI',
            },
            {
              title: 'CleverCards',
              description:
                'This app allows students to give prompts to an AI, who will generate a set of flashcards in response to these prompts. This allows students to generate new questions to test their understanding of the content they are learning. They may also save these questions for future reference if they would like to return to them in the future',
              myRole: 'Creator',
              techStack: 'React, Vercel, OpenAI, MaterialUI, Firebase',
              url: 'https://clever-cards.vercel.app/',
            },
            {
              title: 'Inventory Tracker',
              description:
                'This project allows users to enter food items that they currently have available. With this information they can then generate a list of recipes, suggesting what ingredients they could buy, as well as suggesting recipes with the list of ingredients that they already have available. This app can acts as an inventory tracker and a recipe generator.',
              techStack: 'React, Vercel, OpenAI',
              myRole:
                'Creator',
              url: 'https://inventory-tracker-git-main-karls-projects-0d554117.vercel.app/',
            },
            {
              title: 'Recykill',
              description:
                "Developed during a 24 hour hackathon. This game was built during unity and allowed for both keyboard and controller functionality. It was a Unity based game that aimed to raise awareness about recycling by shooting items which you cannot recycle, and saving items that you can recycle.",
              techStack: 'Unity, C#',
              myRole: 'Co-Creator. Implementing backend part.',
              repo: 'https://github.com/Karl-Fernandes/GameJam-2024',
            },
            {
              title: 'Momentum',
              description:
                'This app is still currently in development. As someone who has a passion for bodybuilding, I am creating an app for those who want to learn how to get in shape, but have no idea where to begin. This app will include features such as workout planners, strength charts, and guides on how to lift with proper technique.',
              techStack: 'React Native + Expo, Firebase',
              myRole: 'Creator',
            },
            {
              title: 'My Portfolio Site',
              description:
                'My personal website in old-school Windows95 design.',
              techStack: 'React, GitHub pages',
              repo: '',
            },
          ],
        },
      },
      {
        id: 'skills',
        name: 'Skills.txt',
        icon: 'progman_11',
        content: {
          hard: [
            {
              name: 'Python',
              progress: 100,
            },
            {
              name: 'Java',
              progress: 75,
            },
            {
              name: 'React',
              progress: 90,
            },
            {
              name: 'Docker',
              progress: 50,
            },
            {
              name: 'Typescript',
              progress: 70,
            },
            {
              name: 'AWS',
              progress: 70,
            },
            {
              name: 'Django',
              progress: 60,
            },
          ],
          soft: 'Analytical thinking, Teamwork, Creative Problem solving, Mangement, Leadership, Entrepreneurship',
        },
      },
      {
        id: 'contact',
        name: 'Contact.txt',
        icon: 'inetcfg_2301',
        content: {
          emailText:
            'If you want to hire me or invite to a project, just email me on ',
          email: 'karl@fernandes.me.uk',
          socialText: 'Or you can reach me out through social media:',
          social: [
            {
              name: 'FaLinkedin',
              link: 'https://www.linkedin.com/in/Karl-Fernandes/',
            },
            {
              name: 'FaGithub',
              link: 'https://github.com/Karl-Fernandes',
            },
            {
              name: 'FaInstagram',
              link: 'https://www.instagram.com/karl_fernandes_/',
            },
          ],
        },
      },
    ],
  };

  getItems() {
    return this._data.items.map(({ id, name, icon }) => ({ id, name, icon }));
  }

  getItem(id) {
    return this._data.items.find((x) => x.id === id);
  }

  getProjectInfo() {
    return {
      projectRepo: this._data.projectRepo,
      react95Repo: this._data.react95Repo,
    };
  }

  getBinItems() {
    return this._data.binItems;
  }
}
