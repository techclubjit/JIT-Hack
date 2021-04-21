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
  // Sponsors & Partners
  TechyonLogoImg,
  SponsorLogoImg,
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
  //MichalHeadshotImg,
  OrganizerHeadshotImg,
  JitHackTransp,
  JitHackMainWhite,
  JitBlack,
  JitWhite
} from "static/img";

interface Sponsor {
  name: string;
  tier: "bronze" | "silver" | "gold" | "startup" | "partner";
  imgSrc: string;
  link: string;
  feature?: {
    text: string;
    link: string;
    linkLabel: string;
  };
}

const sponsors: Sponsor[] = [
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
    imgSrc: SponsorLogoImg,
    link: "https://jithack.netlify.app"
  },
  {
    name: "JITHack",
    tier: "gold",
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
    tier: "gold",
    imgSrc: SponsorLogoImg,
    link: "https://jithack.netlify.app",
    feature: {
      text:
        "JITHack is happening on June 26, 2021 at Jyothy Institute of Techonology.",
      link: "https://jithack.netlify.app",
      linkLabel: "JITHack"
    }
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
    text: "Made with 💕 by students from Jyothy Institute of Techonology",
    img: JitHackTransp,
    alt: "JITHack LOGO"
  },
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
    text: "Made with 💕 by students from Jyothy Institute of Techonology",
    img: OrganizerHeadshotImg,
    alt: "JITHack LOGO"
  },
  {
    text: "Made with 💕 by students from Jyothy Institute of Techonology",
    img: OrganizerHeadshotImg,
    alt: "JITHack LOGO"
  },
  {
    text: "Made with 💕 by students from Jyothy Institute of Techonology",
    img: OrganizerHeadshotImg,
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
          Each year, our sponsors help us unite 1,000+ emerging developers,
          designers, and builders. Our sponsors make it possible for hackers to
          build something they're proud of. Stay tuned as we confirm more
          sponsors for the event.
        </Text>
        <Text variant="sectionText" as="p">
          Interested in sponsoring? Email us at{" "}
          <Link href="mailto:sponsor@jithack.tech">sponsor@jithack.tech</Link>
        </Text>
      </>
    ),
    cta: {
      link: "mailto:sponsor@jithack.tech",
      label: "Become a sponsor"
    },
    illustration: SponsorIllustrationImg,
    sponsors
  },
  about: {
    title: "About JITHack",
    sentence1:
      "JITHack is a design and development event which takes place on 26.06.2021 which will be held online, the participating team gets 24 hours to build something incredible..",
    sentence2:
      "A competition like this aims at developing something amazing within a limited timeframe and also infuses work pressure among the participants, thus testing them beyond their limits. The most valuable part of any hackathon is the learning experience. Hackathons are great arenas for establishing bonds with like-minded individuals, gaining knowledge outside your comfort zone and learning how people can work together to achieve a common purpose and become a team..  Let your imagination take wings and fly by turning them into reality ! DREAM IT..HACK IT...WIN IT...!",
    gears: [
      {
        name: "speakers",
        body: "RECOGNIZED IN THE BAND OF 251-300 TOP ENGINEERING COLLEGES OF INDIA BY NIRF",
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
        body: "while(timer!=0){ hackathon(); continue;}",
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
        body: "“First, solve the problem. Then, write the code.” – John Johnson",
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
       body: "Alone we can do so little; together we can do so much",
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
        question: "What is JITHack?",
        answer:
          "JITHack is a hackathon where students of different skill levels come together from around the world to experiment and create unique software or hardware projects from scratch. We empower and enable teams to make something great in only 36 hours by providing an abundance of resources like workshops, mentors, sponsors, and hardware components."
      },
      {
        question: "Who can participate?",
        answer:
          "Students of any education level from anywhere in the nation are eligible to apply for JITHack!"
      },
      {
        question: "How much does it cost to attend JITHack?",
        answer:
          "Admission to JITHack is completely free. We also provide food and accommodation for the entire event and help out as much as we can with your transportation to and from the University of Waterloo!"
      },
      {
        question: "Is there anything that I need to prep?",
        answer:
          "Other than finding fellow brilliant minds with complementary skills to team up with, there is nothing that you need to prepare in advance, Ofcourse you need to prepare for being a night owl!!"
      },
      {
        question: "How many people can be on a team?",
        answer:
          "You can form teams of up to 4 people. There are no restrictions for who they can be, so you can team up with hackers from any college"
      },
      {
        question: "What if I've never been to a hackathon before?",
        answer:
          "JITHack welcomes students of all skill levels. Hackathons can be a great place to learn new skills in a short amount of time. Just be eager to learn, and excited to meet lots of awesome people."
      },
      {
        question: "Can I start working on my hack before the event?",
        answer:
          "No. In the interest of fairness, students should not be working on their projects before JITHack begins and we do not allow participants to work on pre-existing projects. However, you can familiarize yourself with all the tools and technologies you intend to use beforehand! Hardware will also be provided to hackers who fill out hardware request forms made available after they have been accepted to the event."
      },
      {
        question:
          "Can I sign up to be a mentor or a judge?",
        answer:
          "You sure can! More information about these roles and the application are on the Hackathon page."
      },
      {
        question: "When will applications for JITHack 2021 open?",
        answer:
          "They'll be opening in early June - follow us on social media to find out exactly when!"
      },
      {
        question: "404: Question Not Found",
        answer: (
          <>
            If your question is not listed here, please feel free to reach out
            to us at{" "}
            <Link href="mailto:jithack@jyothyit.ac.in">
              jithack@jyothyit.ac.in
            </Link>{" "}
            or on{" "}
            <Link href="https://www.facebook.com/jyothyitofficial" newTab>
              Facebook
            </Link>
            .
          </>
        )
      }
    ]
  },
  footer: {
    img: Robogoose4IllustrationImg,
    cta: "#YourJITHack • What will you create?",
    links: [
      {
        text: "About JITHack",
        hyperlink: "#about",
        newTab: false
      },
      {
        text: "Open Source",
        hyperlink: "https://github.com/techclubjit",
        newTab: true
      },
      {
        text: "JIT",
        hyperlink: "https://jyothyit.ac.in/",
        newTab: true

      },
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
    title: "Student Developers",
    desc: (
      <Text className="desc" variant="sectionText">
        Stay tuned for updates on this year's speakers and judges.
      </Text>
    ),
    img: LightbulbBalloonCloudsIllustrationImg,
    leaders: [
      {
        name: "VINAY M",
        title: "Developer",
        img: CatHeadshotImg
      },
      {
        name: "Aditya Krishna",
        title: "Developer",
        img: ChamathHeadshotImg
      },
      {
        name: "Shishira Nataraj",
        title: "Developer",
        img: ConnieHeadshotImg
      },
      {
        name: "Karthik",
        title: "Developer",
        img: DylanHeadshotImg
      },
      {
        name: "Suhas Hanjar",
        title: "Developer",
        img: EthanWildingHeadshotImg
      },
      {
        name: "Shravan",
        title: "Developer",
        img: JeffHeadshotImg
      },
      {
        name: "Tushar",
        title: "Developer",
        img: JenniferHeadshotImg
      }
    ]
  }
};
