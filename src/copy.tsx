/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from "react";
import { Link, Text } from "@hackthenorth/north";
import {
  // Stories section
  KoryHeadshotImg,
  KimberHeadshotImg,
  AlexisHeadshotImg,
  AlexHackerHeadshotImg,
  BrunoHackerHeadshotImg,
  JackyHackerHeadshotImg,
  KevinHackerHeadshotImg,
  MichelleHackerHeadshotImg,
  //added this 
  rakshitheadshot,
  // Sponsors & Partners
  TechyonLogoImg,
  SponsorIllustrationImg,
  // About section imgs
  TrudeauHeadshotImg,
  RecapVidButtonBackgroundImg,
  PlayIconImg,
  EngineeringIllustrationImg,
  CloseIconImg,
  ActivityGradient,
  ActivityImg1,
  ActivityImg2,
  ActivityImg3,
  ActivityImg4,
  HackerGradient,
  HackerImg1,
  HackerImg2,
  HackerImg3,
  HackerImg4,
  HardwareGradient,
  HardwareImg1,
  HardwareImg2,
  HardwareImg3,
  HardwareImg4,
  SpeakerGradient,
  SpeakerImg1,
  SpeakerImg2,
  SpeakerImg3,
  SpeakerImg4,
  WaterlooEngLogoImg,
  // Leaders section
  CatHeadshotImg,
  ChamathHeadshotImg,
  ConnieHeadshotImg,
  DylanHeadshotImg,
  EthanWildingHeadshotImg,
  JeffHeadshotImg,
  JenniferHeadshotImg,
  /*TiffaniHeadshotImg,
  TracyHeadshotImg,
  VinodHeadshotImg,*/
  LightbulbBalloonCloudsIllustrationImg,
  // Navbar
  //LogoIconLightImg,
  //LogoIconDarkImg,
  SocialFacebookImg,
  SocialFacebookImgDark,
  SocialInstaImg,
  SocialInstaImgDark,
  SocialTwitterImg,
  SocialTwitterImgDark,
  SocialEmailImg,
  Robogoose4IllustrationImg,
  JitBlack,
  JitWhite,
  PsponsorImg,
  gpolygonImg,
  gtezosImg,
  gportisImg,
  srinidhiheadshot,
  manojheadshot,
  sakethimg,
  shustiimg,
  danushimg,
  prajwaliimg,
  aishimg,
  gcelo,

} from "static/img/";
import { NewLineKind } from "typescript";

interface Sponsor {
  name: string;
  tier: "bronze" | "silver" | "gold" |"platinum" | "startup" | "partner";
  imgSrc: string;
  link: string;
  feature?: {
    text: string;
    link: string;
    linkLabel: string;
  };
}

const sponsors: Sponsor[] = [
 /*{
    name: "JITHack",
    tier: "bronze",
    imgSrc: SponsorLogoImg,
    link: "https://jithack.netlify.app"
  },

  {
    name: "JITHack",
    tier: "bronze",
    imgSrc: SponsorLogoImg,
    link: "https://jithack.netlify.app"
  },
  {
    name: "JITHack",
    tier: "bronze",
    imgSrc: SponsorLogoImg,
    link: "https://jithack.netlify.app"
  },
  {
    name: "JITHack",
    tier: "bronze",
    imgSrc: SponsorLogoImg,
    link: "https://jithack.netlify.app"
  },
  {
    name: "JITHack",
    tier: "bronze",
    imgSrc: SponsorLogoImg,
    link: "https://jithack.netlify.app"
  },
  {
    name: "JITHack",
    tier: "bronze",
    imgSrc: SponsorLogoImg,
    link: "https://jithack.netlify.app"
  },
  {
    name: "JITHack",
    tier: "bronze",
    imgSrc: SponsorLogoImg,
    link: "https://jithack.netlify.app"
  },
  {
    name: "JITHack",
    tier: "bronze",
    imgSrc: SponsorLogoImg,
    link: "https://jithack.netlify.app"
  },
  {
    name: "JITHack",
    tier: "bronze",
    imgSrc: SponsorLogoImg,
    link: "https://jithack.netlify.app"
  },
  {
    name: "JITHack",
    tier: "bronze",
    imgSrc: SponsorLogoImg,
    link: "https://jithack.netlify.app",
    feature: {
      text:
        "JITHack is happening on June 26, 2021 at Jyothy Institute of Techonology.",
      link: "https://jithack.netlify.app",
      linkLabel: "JITHack"
    }
  },
  {
    name: "JITHack",
    tier: "silver",
    imgSrc: SponsorLogoImg,
    link: "https://jithack.netlify.app"
  },
  {
    name: "JITHack",
    tier: "silver",
    imgSrc: SponsorLogoImg,
    link: "https://jithack.netlify.app",
    feature: {
      text:
        "JITHack is happening on June 26, 2021 at Jyothy Institute of Techonology.",
      link: "https://jithack.netlify.app",
      linkLabel: "JITHack"
    }
  },
  {
    name: "JITHack",
    tier: "silver",
    imgSrc: SponsorLogoImg,
    link: "https://jithack.netlify.app",
    feature: {
      text:
        "JITHack is happening on June 26, 2021 at Jyothy Institute of Techonology.",
      link: "https://jithack.netlify.app",
      linkLabel: "JITHack"
    }
  },
  {
    name: "JITHack",
    tier: "silver",
    imgSrc: PsponsorImg,
    link: "https://jithack.netlify.app"
  },*/
  {
    name: "Devfolio",
    tier: "platinum",
    imgSrc: PsponsorImg,
    link: "https://devfolio.co",
    /*feature: {
      text:
        "JITHack is happening on June 26, 2021 at Jyothy Institute of Techonology.",
      link: "https://jithack.netlify.app",
      linkLabel: "JITHack"
    }*/
  },
  {
    name: "Polygon (previously Matic Network)",
    tier: "gold",
    imgSrc: gpolygonImg,
    link: "https://polygon.technology/",
    /*feature: {
      text:
        "JITHack is happening on June 26, 2021 at Jyothy Institute of Techonology.",
      link: "https://jithack.netlify.app",
      linkLabel: "JITHack"
    }*/
  },
  {
    name: "Portis by ShapeShift",
    tier: "gold",
    imgSrc: gportisImg,
    link: "https://www.portis.io",
    /*feature: {
      text:
        "JITHack is happening on June 26, 2021 at Jyothy Institute of Techonology.",
      link: "https://jithack.netlify.app",
      linkLabel: "JITHack"
    }*/
  },
  {
    name: "Tezos",
    tier: "gold",
    imgSrc: gtezosImg,
    link: "https://tezos.com",
    /*feature: {
      text:
        "JITHack is happening on June 26, 2021 at Jyothy Institute of Techonology.",
      link: "https://jithack.netlify.app",
      linkLabel: "JITHack"
    }*/
  },
  {
    name: "Celo",
    tier: "gold",
    imgSrc: gcelo,
    link: "https://celo.org",
    /*feature: {
      text:
        "JITHack is happening on June 26, 2021 at Jyothy Institute of Techonology.",
      link: "https://jithack.netlify.app",
      linkLabel: "JITHack"
    }*/
  },

  // {
  //   name: "Techyon",
  //   tier: "partner",
  //   imgSrc: TechyonLogoImg,
  //   link: "https://techyon.org/"
  // }
];

// Taken from https://github.com/Daplie/knuth-shuffle
const shuffle = <T extends {}>(array: T[]) => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};
const team = [
  
  {
    text: "VINAY M",
    img: CatHeadshotImg,
    alt: "JITHack LOGO"
  },
  {
    text: "Aditya Krishna",
    img: ChamathHeadshotImg,
    alt: "JITHack LOGO"
  },
  {
    text: "Shishira Nataraj",
    img: ConnieHeadshotImg,
    alt: "JITHack LOGO"
  },
  {
    text: "Karthik",
    img: DylanHeadshotImg,
    alt: "JITHack LOGO"
  },
  {
    text: "Suhas Hanjar",
    img: EthanWildingHeadshotImg,
    alt: "JITHack LOGO"
  },
  {
    text: "Shravan",
    img: JeffHeadshotImg,
    alt: "JITHack LOGO"
  },
  {
    text: "Tushar",
    img: JenniferHeadshotImg,
    alt: "JITHack LOGO"
  },
  {
    text: "Rakshith",
    img: rakshitheadshot,
    alt: "JITHack LOGO"
  },
  
];

export default {
  nav: {
    logo: {
      light: JitWhite,
      dark: JitBlack
    },
    sections: ["About", "Devs", "Sponsors", "FAQ"],
    socialLinks: [
      {
        name: "facebook",
        icons: {
          light: SocialFacebookImg,
          dark: SocialFacebookImgDark
        },
        link: "https://www.facebook.com/jyothyitofficial/"
      },
      {
        name: "twitter",
        icons: {
          light: SocialTwitterImg,
          dark: SocialTwitterImgDark
        },
        link: "https://twitter.com/jyothyit/"
      },
      {
        name: "instagram",
        icons: {
          light: SocialInstaImg,
          dark: SocialInstaImgDark
        },
        link: "https://www.instagram.com/jyothyitofficial/"
      }
    ],
    sponsorButton: {
      text: "Interested in sponsoring?"
    }
  },
  hero: {
    firstLine: "Your",
    secondLine: "Presenting JITHack 2021.",
    keyWords: ["idea,", "design,", "story,", "challenge,", "learning,"],
    subtitle: "June 26, 2021  ·  Jyothy Institute of Techonology.",
    emailNotif: " has been added to our mailing list.",
    emailPlaceholder: "Enter your email address for updates",
    emailDupe: "This email is already on the mailing list!",
    emailError: "Error! Please try again."
  },
  sponsorsSection: {
    heading: "Sponsor a special weekend",
    desc: (
      <>
        <Text variant="sectionText">
        Sponsors help us  unite  a large chunk of young minds who are  wondeful designers,developers and builders thus helping those minds emerge in their field of work..Sponsor JITHack now!!
        </Text>
        <Text variant="sectionText" as="p">
          Interested in sponsoring? Email us at{" "}
          <Link href="mailto:jithack@jyothyit.ac.in">
          jithack@jyothyit.ac.in
          </Link>
        </Text>
      </>
    ),
    cta: {
      link: "https://docs.google.com/forms/d/e/1FAIpQLSdu-azPnd6vuGDEqfY4pRwUQWwRKDKe6g22ZWdk6VG-LGFyKw/viewform?usp=sf_link",
      label: "Become a sponsor"
    },
    illustration: SponsorIllustrationImg,
    sponsors
  },
  about: {
    title: "About JITHack",
    sentence1:
      "JITHack is a design and development event which takes place on June 26, 2021 which will be held online, the participating team gets 24 hours to build something incredible..",
    sentence2:
      "A competition like this aims at developing something amazing within a limited timeframe and also infuses work pressure among the participants, thus testing them beyond their limits. The most valuable part of any hackathon is the learning experience. Hackathons are great arenas for establishing bonds with like-minded individuals, gaining knowledge outside your comfort zone and learning how people can work together to achieve a common purpose and become a team..  Let your imagination take wings and fly by turning them into reality!",
    sentence3: "DREAM IT..HACK IT...WIN IT...!",
    gears: [
      {
        name: "speakers",
        body: "",
        images: [
          { id: "speaker1", url: SpeakerImg1 },
          { id: "speaker2", url: SpeakerImg2 },
          { id: "speaker3", url: SpeakerImg3 },
          { id: "speaker4", url: SpeakerImg4 }
        ],
        delay: 2000,
        gradient: { id: "speakerGradient", url: SpeakerGradient }
      },
      {
        name: "activities",
        body: "",
        images: [
          
          { id: "activity1", url: ActivityImg1 },
          { id: "activity2", url: ActivityImg2 },
          { id: "activity3", url: ActivityImg3 },
          { id: "activity4", url: ActivityImg4 }
        ],
        delay: 4000,
        gradient: { id: "activityGradient", url: ActivityGradient }
      },
      {
        name: "hackers",
        body: "",
        images: [
          { id: "hacker1", url: HackerImg1 },
          { id: "hacker2", url: HackerImg2 },
          { id: "hacker3", url: HackerImg3 },
          { id: "hacker4", url: HackerImg4 }
        ],
        delay: 6000,
        gradient: { id: "hackerGradient", url: HackerGradient }
      },
      {
        name: "hardware",
       body: "",
        images: [
          { id: "hardware1", url: HardwareImg1 },
          { id: "hardware2", url: HardwareImg2 },
          { id: "hardware3", url: HardwareImg3 },
          { id: "hardware4", url: HardwareImg4 }
        ],
        delay: 8000,
        gradient: { id: "hardwareGradient", url: HardwareGradient }
      }
    ],
    videoButton: {
      icon: PlayIconImg,
      text: "Watch our recap video",
      background: RecapVidButtonBackgroundImg
    },
    engineering: {
      logo: WaterlooEngLogoImg,
      illustration: EngineeringIllustrationImg,
      text:
        "Jyothy Institute of Technology under the governance of Jyothy Charitable Trust which is headquartered at Bengaluru mainly focuses on delivering quality education that equips students for life and career. We offer Undergraduate, Postgraduate and Research Programmes in various disciplines. Focused teaching facilities coupled with practical and forward-thinking programmes lend a hand to students throughout their academic period. A significant amount of emphasis is given for extracurricular activities through various clubs, technical chapters, sports, and cultural activities."
    },
    video: {
      url:
        "https://www.youtube-nocookie.com/embed/P3VhS7jvXN8?autoplay=1&rel=0&amp;showinfo=0",
      closeIcon: CloseIconImg
    }
  },
  storiesSection: {
    heading: "Everything you need to create something incredible",
    desc:
      "For the past few years, we’ve continued to inspire students to discover the world around them and empower students like you who are eager to learn and create by providing an environment for you to explore and build with workshops, mentorship, and hardware.",
    stories: [
      {
        person: "Justin Trudeau",
        desc: "Prime Minister of Canada",
        img: TrudeauHeadshotImg,
        quote:
          "When I look around this room, I see quick learners, creative thinkers, and natural risk takers who are not only the leaders of tomorrow, but the leaders of today. You have the power to enact positive change right here right now."
      },
      {
        person: "Kory Jeffrey",
        desc: "Google",
        img: KoryHeadshotImg,
        quote:
          "JITHack is North America’s premier hackathon. It brings together the best minds from around the world and takes care of all the logistics so that they can focus on learning and creating. Can’t wait to see what they do next year."
      },
      {
        person: "Kimber Schlegelmilch",
        desc: "Lyft",
        img: KimberHeadshotImg,
        quote:
          "JITHack is one of the best hackathons I've experienced — the organizers are incredible, the projects produced at the end of the weekend are really impressive, and the energy of students and mentors remains insanely high throughout the event."
      },
      {
        person: "Alexis Ohanian",
        desc: "Co-founder of Reddit",
        img: AlexisHeadshotImg,
        quote:
          "There is an undeniable reputation throughout tech of the kind of engineering talent that comes out of the University of Waterloo. The students here are probably going to be the business leaders of this century."
      },
      {
        person: "Alex",
        desc: "JITHack 2017 Finalist",
        img: AlexHackerHeadshotImg,
        link: "https://devpost.com/software/doppel-gallery",
        quote:
          "I collaborated with different people and had the chance to talk to many interesting people. I got a lot of perspective on the beginning to end of a software development project. My team was able to go from an idea to a working app that we could present to people. It was a really unique experience."
      },
      {
        person: "Bruno",
        desc: "JITHack 2021 First-time Hacker",
        img: BrunoHackerHeadshotImg,
        link: "https://devpost.com/software/instaface",
        quote:
          "JITHack was both my first international event and hackathon. I was quite nervous about leaving Brazil and going to the event but once there, everything was better than I could have ever imagined. I met so many cool and interesting people from all over the globe, made a lot of new friends and built something very cool on very little sleep with my team, overall an amazing experience!"
      },
      {
        person: "Jacky",
        desc: "JITHack 2021 Experienced Hacker",
        img: JackyHackerHeadshotImg,
        link: "https://devpost.com/software/tappit-crypto-payments-over-nfc",
        quote:
          "JITHack was – and still is – one of the best 36 hours I’ve ever had. Everything from the caffeine and stress-relief dogs to the amazing speakers, mentors, and organizers. It was amazing when you really needed to get a bite or take a break to walk around and see everyone’s amazing projects. JITHack was a lot of ‘firsts’ and I hope it will be the same for many more in the future."
      },
      {
        person: "Kevin",
        desc: "JITHack 2014 Finalist",
        img: KevinHackerHeadshotImg,
        link: "https://hackthenorth.devpost.com/submissions/27029-open-pokemon",
        quote:
          "JITHack was a weekend where I could learn and start a passion for building great products. The experience was transformative and led me to where I am today. What really stood out to me was this sense of camaraderie between different hackers. I walked away from that weekend with so much more knowledge, and I made a lot of close, new friends."
      },
      {
        person: "Michelle",
        desc: "JITHack 2015/2016 Finalist",
        img: MichelleHackerHeadshotImg,
        link: "https://devpost.com/software/modernized-weasley-clock-yotu43",
        quote:
          "JITHack was my first (and second) hackathon, and the experience is still unforgettable! Everything JITHack provided – inspiring speakers, mentors, workshops, food, coffee and free swag – contributed to an awesome supportive environment that made it really fun to hack away for those 36 hours."
      }
    ]
  },
  faq: {
    title: "Frequently asked questions",
    body: [
      {
        question: "What is a hackathon?🤷‍♂️",
        answer:
          "A hackathon is a social coding event where programmers, designers, and developers collaborate to solve a problem and compete for cash prizes.It’s one part party, one part work-your-butt-off overnight battle against the clock and the competition."
      },
      {
        question: "Why would someone participate in a hackathon? 🎉",
        answer:
          "People participate in hackathons for lots of reasons: the challenge, the creative outlet, the community collaboration, the networking, the swag , exposure ,other exciting oppurtunities and ofcourse  icing on the cake that is the amazing , cool prizes."
      },
      {
        question: "How much does it cost? 💰",
        answer:
          "FREE. Free for spectators. Free for participants."
      },
      {
        question: "Is there anything that I need to prep? 📖",
        answer:
          "Other than finding fellow brilliant minds with complementary skills to team up with, there is nothing that you need to prepare in advance. Ofcourse you need to prepare for being a night owl!!;)"
      },
      {
        question: "Will there be prizes? 🏆",
        answer:
          "yes, there will be amazing prizes!"
      },
      {
        question: "How will teams be judged? 👩‍⚖️",
        answer:
          "This year’s judging process will be based on several factors including Viability / Usefulness , Creativity of execution / Wow-effect , Technical complexity , Collaboration , Presentation"
      },
      {
        question: "Who will be judging? 👩🏻‍⚖️",
        answer:
          "The judge panel composition will be announced closer to the date of the hackathon."
      },
      {
        question:
          "Can I sign up to be a mentor or a judge? 📜",
        answer:
          "You sure can! More information about these roles and the application are on the Hackathon page. "
      },
      {
        question: "Where do I sign up? 📄" ,
        answer:
          "Registration will be available soon!"
      },
      {
        question: "How does the application process work? 🤔",
        answer:
          "We want to make sure that everyone who wants to attend is serious about it, therefore we will review your registration and then notify you fast as possible."
      },
      {
        question: "Are we allowed to use third party components like open source libraries etc. to implement a solution - are there limitations on component licensing? 🤒",
        answer:
          "You can use any software, provided these are declared in the presentation and are being used lawfully i.e. under licence"
      },
      {
        question: "Error 404: Question Not Found ❓",
        answer: (
          <>
            If your question is not listed here, please feel free to reach out
            to us at{" "}
            <Link href="mailto:jithack@jyothyit.ac.in">
            jithack@jyothyit.ac.in
            </Link>{" "}
            or on{" "}
            <Link href="https://instagram.com/techclubjit" newTab>
              Instagram
            </Link>
            .
          </>
        )
      }
    ]
  },
  footer: {
    img: Robogoose4IllustrationImg,
    cta: "#jithack2021 • What will you create?",
    links: [
      {
        text: "About JITHack",
        hyperlink: "#about",
        newTab: false
      },
      {
        text: "Open Source @ JIT",
        hyperlink: "https://github.com/techclubjit",
        newTab: true
      },
      // {
      //   text: "JIT",
      //   hyperlink: "https://jyothyit.ac.in/",
      //   newTab: true

      // },
    ],
    socials: [
      {
        name: "Email",
        img: SocialEmailImg,
        link: "mailto:jithack@jyothyit.ac.in"
      },
      {
        name: "Facebook",
        img: SocialFacebookImg,
        link: "https://www.facebook.com/jyothyitofficial"
      },
      {
        name: "Twitter",
        img: SocialTwitterImg,
        link: "https://twitter.com/Jyothyit"
      },
      {
        name: "Instagram",
        img: SocialInstaImg,
        link: "https://www.instagram.com/jyothyitofficial/"
      }
    ],
    team: shuffle(team),
    defaultOrganizerText:
      "Made with 💕 by students from Jyothy Institute of Techonology"
  },
  leaders: {
    title: "Core Team",
    // desc: (
    //   <Text className="desc" variant="sectionText">
    //     Below are the Core Team Members.
    //   </Text>
    // ),
    img: LightbulbBalloonCloudsIllustrationImg,
    leaders: [
      // {
      //   name: "Vinay M",
      //   title: "Developer",
      //   img: CatHeadshotImg
      // },
      {
        name: "Aditya Krishna",
        title: "Core Team",
        img: ChamathHeadshotImg
      },
      {
        name: "Shishira Nataraj",
        title: "Core Team",
        img: ConnieHeadshotImg
      },
      {
        name: "Karthik B R",
        title: "Core Team",
        img: DylanHeadshotImg
      },
      // {
      //   name: "Suhas Hanjar",
      //   title: "Developer",
      //   img: EthanWildingHeadshotImg
      // },
      // {
      //   name: "Shravan",
      //   title: "Developer",
      //   img: JeffHeadshotImg
      // },
      // {
      //   name: "Tushar",
      //   title: "Developer",
      //   img: JenniferHeadshotImg
      // },
      // {
      //   name: "Rakshith",
      //   title: "Developer",
      //   img: rakshitheadshot
      // },
      {
        name: "Mr. Srinidhi kulkarni V",
        title: "Assistant Professor",
        img: srinidhiheadshot
      },
      {
        name: "Mr. Manoj Kumar M",
        title: "Associate Professor",
        img: manojheadshot
      },
      {
        name: "Saketh",
        title: "Core Team",
        img: sakethimg
      },
      {
        name: "Danush",
        title: "Core Team",
        img: danushimg
      },
      {
        name: "Shrusti",
        title: "Core Team",
        img: shustiimg
      },
      {
        name: "Prajwal",
        title: "Core Team",
        img: prajwaliimg
      },
      {
        name: "Aishwarya",
        title: "Core Team",
        img: aishimg
      }
    ]
  },
  leaders2: {
    title: "Web Team",
    // desc: (
    //   <Text className="desc" variant="sectionText">
    //     Below is out Web Dev team.
    //   </Text>
    // ),
    img: LightbulbBalloonCloudsIllustrationImg,
    leaders2: [
      {
        name: "Vinay M",
        title: "Web Team",
        img: CatHeadshotImg
      },
//       {
//         name: "Aditya Krishna",
//         title: "Developer",
//         img: ChamathHeadshotImg
//       },
// //       {
// //         name: "Shishira Nataraj",
// //         title: "Developer",
// //         img: ConnieHeadshotImg
// //       },
//       {
//         name: "Karthik B R",
//         title: "Developer",
//         img: DylanHeadshotImg
//       },
      {
        name: "Suhas Hanjar",
        title: "Web Team",
        img: EthanWildingHeadshotImg
      },
      {
        name: "Shravan",
        title: "Web Team",
        img: JeffHeadshotImg
      },
      {
        name: "Tushar",
        title: "Web Team",
        img: JenniferHeadshotImg
      },
      {
        name: "Rakshith",
        title: "Designer",
        img: rakshitheadshot
      },
      // {
      //   name: "Mr. Srinidhi kulkarni V",
      //   title: "Assistant Professor",
      //   img: srinidhiheadshot
      // },
      // {
      //   name: "Mr. Manoj Kumar M",
      //   title: "Associate Professor",
      //   img: manojheadshot
      // },
    ]
  }
};
