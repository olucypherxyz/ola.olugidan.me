import { homepage } from '@/config/homepage';
import { social } from '@/config/site';

export const aboutPage = {
  title: 'About',
  opening:
    "I've always been interested in what happens when technology has to work in the real world. My background began in Computer Science, but my work gradually took me beyond the technology itself — into web development, business systems, digital growth and eventually technology leadership. Along the way, I've learned to start with what needs to happen, build with the person using it in mind, and keep looking at the wider problem when the solution requires more than technology alone.",
  journey:
    "The path hasn't been completely linear. One area of work has often opened the door to another, and I have learned by following the problem far enough to understand what it actually needs. What started with technology grew into web development and digital growth, then into business systems, leadership and the wider work of helping people and organisations navigate change.",
  technology:
    'Technology has remained an important part of that journey, but I have become increasingly interested in what happens around the technology — the business problem behind it, the people who have to use it, and the systems that need to keep working after something has been built.',
  viix: {
    body: 'A large part of my current professional life sits within VIIX Solutions, where technology, business and the practical work of building a company come together. It has given me room to keep building, solving problems, making decisions and learning what it takes to turn ideas into systems that work in practice.',
    cta: {
      label: 'VIIX Solutions',
      href: 'https://www.viix.solutions/',
    },
  },
  transformation:
    'That same interest in how people navigate change has also led me into coaching. I work one-to-one with professionals who know they are ready for something different but are still working out what needs to change, helping them make sense of where they are and think more clearly about where they want to go.',
  learning:
    "Learning has become another important part of how I think about people and growth. I don't think everyone learns in exactly the same way, and some of my own experiences have made that especially clear to me.",
  homeschool: {
    body: 'I started homeschooling in Nigeria in January 2023, and that experience changed the way I thought about learning, support and community. It also led me to start Homeschool Core — a place for the practical guidance, community and resources I wished I had when I began.',
    cta: { label: 'Explore Homeschool Core', href: '/homeschool-core' },
  },
  service: {
    body: 'Service is also part of my life. My faith and the communities I am part of have given me opportunities to contribute, learn from others and serve where I can. Those experiences have shaped me in ways that are difficult to separate from the rest of who I am.',
    cta: { label: 'Faith and community', href: '/faith-community' },
  },
  thread:
    'Looking across all of it, the common thread is fairly simple: I like building things that are useful, helping people navigate change, creating room for learning, and contributing where I can. The context changes, but the underlying desire to make things work and help people move forward has remained remarkably consistent.',
  closing: {
    title: 'I am still learning, building and evolving.',
    statement:
      'If you want to understand more about the work itself, you can explore the projects, ideas and experiences behind it.',
  },
  portrait: {
    src: '/assets/about/ola-olugidan.png',
    alt: homepage.hero.portraitAlt,
    width: homepage.hero.portraitWidth,
    height: homepage.hero.portraitHeight,
  },
  workCta: { label: 'Explore the work', href: '/work' },
  connectCta: { label: "Let's talk", href: '/connect' },
};

export const workPage = {
  title: 'Work',
  display: 'The rooms of making.',
  opening:
    'A lot of what I build sits at the intersection of technology, business and the people who have to use it when it is finished.',
  build: {
    label: 'BUILD',
    heading: 'Technology, business and digital systems',
    products: {
      heading: 'Product and business systems',
      body: "I've built and worked on systems designed around how businesses actually operate — from sales and inventory to expenses, customer credit and reporting. POSflyt began as an independent build around the realities of offline-first business for African SMEs. VESSA eventually became a distinct project in its own right, where I have contributed to the POS module through feature implementation, QA and phase testing.",
      links: [
        { label: 'POSflyt', href: 'https://posflyt.vercel.app/' },
        { label: 'VESSA', href: 'https://vessa.oryzune.app/' },
      ],
    },
    experiences: {
      heading: 'Digital experiences',
      body: "Websites have been another part of that work — sometimes as a technical build, sometimes as a broader digital-growth problem. I've taken client websites from the beginning of a project through launch, and I've worked on the public-facing digital presence of VIIX Solutions through visual improvements and SEO.",
      links: [
        { label: 'VIIX Solutions', href: 'https://www.viix.solutions/' },
        { label: 'CDR Technical', href: 'https://cdrtechnical.co.za/' },
        { label: 'Sisonke Africa', href: 'https://www.sisonkeafrica.co.za/' },
      ],
    },
    boundary: {
      body: 'Some of this work sits within VIIX Solutions, where technology, digital growth and business systems come together. The company site covers that work and its commercial services in more detail.',
      link: { label: 'VIIX Solutions', href: 'https://www.viix.solutions/' },
    },
  },
  closing: {
    body: 'The work continues to evolve, and there are other parts of what I do that are less about finished projects and more about what I am learning, developing and thinking through.',
    cta: { label: 'Explore Thinking', href: '/thinking' },
  },
};

export const thinkingPage = {
  title: 'Thinking',
  display: 'Ideas, questions and perspectives taking shape.',
  opening:
    'Some of my work happens in finished systems and projects. Some of it happens in questions, observations and ideas that take longer to become something concrete. This is where I keep some of that thinking.',
  supporting:
    'The subjects will vary because the work does. Technology, business systems, digital growth, leadership, education and the things I am still learning all find their way into the questions I ask.',
};

export const connectPage = {
  title: 'Connect',
  opening:
    "If you'd like to talk about something I'm building, exploring or working through, I'd love to hear from you.",
  guidance:
    'For professional conversations, collaboration, coaching, education, or simply to connect, email is the best place to start. LinkedIn is also a good way to find me.',
  channels: [
    {
      label: 'Email',
      detail: social.email,
      href: `mailto:${social.email}`,
      external: true,
      primary: true,
    },
    {
      label: 'LinkedIn',
      detail: 'linkedin.com/in/olayinkaolugidan',
      href: social.linkedin,
      external: true,
    },
  ],
  viix: {
    body: 'If your enquiry is specifically about VIIX Solutions and its commercial services, the company site is the better place to start.',
    cta: {
      label: 'VIIX Solutions',
      href: 'https://www.viix.solutions/',
    },
  },
};

export const transformationPage = {
  label: 'Specialist',
  title: 'Transformation',
  display: 'Over time, I began to see that meaningful change is rarely just about the technology.',
  opening:
    'My work across technology, digital systems, business and leadership gradually changed how I understood transformation. The technical solution is often only one part of the work. What matters just as much is whether people can understand what is changing, work confidently with new tools and ways of working, and turn that change into something practical.',
  fromTechnology: {
    heading: 'From technology to transformation',
    body: "I didn't begin with transformation as a discipline. I arrived at it through the work itself. Building technology exposed me to business problems. Working with businesses showed me that better systems only create value when they fit the way people actually work. Leadership made the human side even clearer: change requires communication, judgement, learning and the willingness to work differently.",
  },
  meaning: {
    heading: 'What transformation means to me',
    paragraphs: [
      'For me, transformation sits at the point where new possibilities have to become practical change. That can mean adopting technology, improving how work gets done, developing digital confidence, strengthening leadership capability, or helping someone make sense of what the next stage of their professional life requires.',
      'The work is therefore not about introducing technology for its own sake. It is about helping people understand the change, make better use of what is available to them, and build the capability to keep moving forward.',
    ],
  },
  coaching: {
    heading: 'The coaching work',
    body: 'That thinking has developed into practical coaching for professionals navigating a changing workplace. My Executive Digital Transformation & Productivity work brings together executive communication, AI productivity, digital workflows and practical digital productivity — with the focus on helping someone become more confident and capable in the way they work.',
  },
  viix: {
    heading: 'Where VIIX fits',
    body: 'Some of my transformation work sits alongside my work through VIIX Solutions. VIIX focuses on the technology, digital growth and business systems that help organisations operate and grow. My transformation work takes the conversation further into the people and professional capability required to make change work.',
    cta: {
      label: 'VIIX Solutions',
      href: 'https://www.viix.solutions/',
    },
  },
  closing:
    'Transformation is still an evolving part of my work. I am interested in the space between what people are capable of today and what they need to become capable of next.',
  connect: { label: 'Connect', href: '/connect' },
};

export const homeschoolCorePage = {
  label: 'Education',
  title: 'Homeschool Core',
  date: 'January 2023',
  display: 'It started with a need at home.',
  opening: [
    'Homeschool Core started in January 2023, when I began homeschooling my child.',
    'At the time, I was not trying to build an education brand. I was simply trying to figure out how to do something that was new to me.',
    'I had questions.',
    "What should we actually be teaching? How do I know if my child is learning? How do I create structure without making learning feel rigid? How do I understand each child's strengths, weaknesses and interests? How do I balance academics with character, life skills, creativity, faith, family and everything else that makes up a child's development?",
    'The more I learned, the more I realised that homeschooling was much bigger than simply choosing a curriculum and teaching lessons at home.',
    'I also realised that many parents probably have the same questions.',
    'That was the beginning of Homeschool Core.',
    'It grew out of a real need in my own home, and then out of a desire to make the things I was learning and developing useful to other families too.',
  ],
  learning: {
    heading: "I don't think everyone learns in exactly the same way.",
    paragraphs: [
      'One of the things homeschooling has taught me is to pay closer attention to the child.',
      "Children are not identical. They don't all become interested in the same things at the same time. They don't always understand something because it has been explained in a particular way. One child may need to see something. Another may need to practise it. Another may need to ask twenty questions before it finally makes sense.",
      'That changed how I think about education.',
      "I don't believe learning should be reduced to simply covering a syllabus or getting through a certain number of pages.",
      'There has to be room to understand the person who is learning.',
      'For me, education is about helping a child develop knowledge, confidence, character, curiosity and the ability to think for themselves.',
      'That does not mean there should be no structure. I actually believe structure is very important. But good structure should support learning, not become the purpose of learning.',
      'Homeschooling has given me the opportunity to see that distinction much more clearly.',
    ],
  },
  systems: {
    heading: 'From homeschooling to building learning systems',
    paragraphs: [
      'As I spent more time homeschooling, I naturally started creating systems around what we were doing.',
      'I was organising ideas, thinking through learning goals, creating routines, looking for better ways to approach different subjects and trying to understand what was actually working.',
      'That is something I tend to do in many areas of my life.',
      'When I encounter a problem, I usually start looking for the structure underneath it.',
      'What is missing?',
      'What needs to happen first?',
      'How can this be made simpler?',
      'How can someone else understand it and use it?',
      'That thinking gradually became part of Homeschool Core.',
      'It also led to ideas and frameworks such as **Confident Homeschool** and the **6P Path**.',
      'These came from the same basic question: *How can we help parents become more intentional and confident about the education they are creating for their child?*',
      'I became increasingly interested in the systems around learning, not just the lessons themselves.',
      'How do you plan?',
      'How do you understand progress?',
      'How do you create an environment where a child can learn well?',
      'How do you help parents feel less overwhelmed?',
      'How do you make the whole process more intentional without making it unnecessarily complicated?',
      'Those questions became part of the work.',
      'Homeschool Core therefore sits somewhere between education, parenting, systems and practical learning.',
      'It is shaped by what I have experienced personally, what I have learned along the way, and what I continue to discover.',
    ],
  },
  reflection: {
    heading: 'Closing reflection',
    paragraphs: [
      'Homeschool Core is personal to me because it began with my own family. It reminds me that some of the most meaningful work begins with a problem you are trying to solve in your own life.',
      'You learn because you need to learn.',
      'You build because something needs to exist.',
      'Then, if what you have built can genuinely help someone else, it becomes bigger than your original need.',
      'That is what Homeschool Core represents for me.',
      'It is part of my journey as a mother, but it is also part of the way I think about systems, learning and development.',
      'Across my work in technology, business, transformation and education, I keep coming back to the same idea: **people do better when they have the right structure, the right tools and the right support to navigate where they are going.**',
      'Homeschool Core is one expression of that belief.',
      'It started at home.',
      'And it continues to grow from there.',
    ],
  },
};

export const faithCommunityPage = {
  label: 'Faith, service & community',
  title: 'Faith, service & community',
  service: {
    heading: 'Service has always been part of how I contribute.',
    paragraphs: [
      'Some of the work I have done over the years does not fit neatly into a professional job description.',
      'It has happened through church, community groups, professional networks, family and relationships with people around me.',
      'I have taken on responsibilities, helped organise things, supported people, connected people to opportunities and stepped in when something needed to be done.',
      "I don't always think of these things as achievements. They are simply part of being part of a community.",
      'But looking back, I can see how much they have shaped the way I lead and work with people.',
    ],
  },
  community: {
    heading: 'Community leadership',
    paragraphs: [
      'I have been involved in different forms of community leadership and coordination, often where people need structure, communication and someone willing to take responsibility.',
      'Sometimes that means organising an initiative, helping an idea become practical, creating ways for people to participate, or simply making sure everyone knows what is happening.',
      'I enjoy this kind of work because it sits somewhere between leadership and service. You are not just trying to get something done. You are helping people work together.',
      'That requires listening, patience, organisation and a willingness to do some of the less visible work that keeps things moving.',
    ],
  },
  tncod: {
    heading: 'TNCOD',
    paragraphs: [
      'My involvement with **TNCOD Professionals** has been another expression of this.',
      'I have been interested in helping professionals within the community become more connected and intentional about supporting one another.',
      'That has included work around professional connections, community participation, the professional directory and the Marketplace Growth and Professional Connection initiative.',
      'For me, the value is in helping people discover the skills, experience, businesses, ideas and opportunities already around them.',
    ],
  },
  people: {
    heading: 'People',
    paragraphs: [
      'A lot of my contribution to people happens quite naturally.',
      'Sometimes it is teaching something I know. Sometimes it is helping someone think through a problem, connecting two people who should know each other, or helping someone organise an idea that is still unclear.',
      'And sometimes it is simply being available.',
      'I enjoy helping someone move from *"I don\'t know how to do this"* to *"Okay, I can see how this could work."*',
      'That is part of why I enjoy teaching, mentoring, building systems and bringing people together.',
    ],
  },
  teaching: {
    heading: 'What service has taught me',
    paragraphs: [
      'Service has taught me that leadership is not always about being the person in front.',
      'Sometimes it is making sure something works. Sometimes it is creating the structure that allows other people to participate. Sometimes it is listening, carrying responsibility, or knowing when to step back and let someone else lead.',
      'I naturally think in systems, so I can easily focus on how something should work. Community has taught me to remember that there are real people inside every system.',
      'People have different circumstances, strengths and ways of contributing.',
      'Good leadership has to make room for that.',
    ],
  },
  faith: {
    heading: 'Faith',
    paragraphs: [
      'My faith is an important part of who I am, and it influences how I understand responsibility, service, leadership and how I relate to people.',
      "I don't see faith and the rest of my life as completely separate categories.",
      'For me, service is about using what I have been given to contribute to other people. Sometimes that happens through my professional work, sometimes through education, community or church, and sometimes through very ordinary things that will never appear on a website.',
      'What matters to me is simple:',
    ],
    statement:
      'show up, take responsibility, help where I can, make room for other people, and leave things better than I found them.',
  },
};
