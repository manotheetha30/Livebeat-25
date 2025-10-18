import React, { useState } from "react";
import "./Events.css";
import paperxplore from "../assets/paperxplore.png";
import techquest from "../assets/techquest.png";
import codeforge from "../assets/codeforge.png";
import circuitsprint from "../assets/circuitsprint.png";
import treasurehunt from "../assets/treasurehunt.png";
import clashofcards from "../assets/clashofcards.png";

type ContactInfo = {
  name: string;
  phone: string;
};

type EventInfo = {
  name: string;
  logo: string;
  shortDescription: string;
  descript: string;
  longDescription: string[];
  registerLink: string;
  contacts?: ContactInfo[]; // add this line
};

const events: EventInfo[] = [
  {
    name: "Paper Xplore",
    shortDescription: "Showcase innovative ideas in a technical paper contest",
    descript:"Step into the world of innovation with Paper Xplore, a technical paper presentation event that celebrates creativity and research excellence! It’s a platform for students to present innovative ideas, analytical studies, or project-based papers in various engineering and technology domains.",
    longDescription: [
    
      "Event Format and Rules:",
      "1. Team Size: 1–3 members",
      "2. Paper Format: IEEE (4–6 pages)",
      "3. Topics: Open to all engineering and technology fields",
      "4. Presentation Time: 10 minutes + 2 minutes Q&A",
      "5. Plagiarism Limit: ≤ 20%"
    ],
    logo: paperxplore,
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSee1C2CvB8gsTnj7kuLbbgm9dHal4C44GsyB7dzZ7Y3WAQAbw/viewform?usp=header",
    contacts: [
      {name:"Venkatesh S",phone:"+91 8637493621"},
      {name:"Rajappa M",phone:"+91 8667077899"}
    ]
  },
  {
    name: "Tech Quest",
    shortDescription: "Test your tech knowledge in a thrilling quiz",
    descript:"Get ready to challenge your tech knowledge and teamwork skills in Tech Quest, an exciting two-round event designed to test how well you and your partner can think, communicate, and conquer!",
    longDescription: [
  "Event Format and Rules:",
  "1. Team Size: 2",
  "2. Round 1 – Tech Talk: One teammate gives clues for a tech word while the other guesses against the clock.",
  "3. Round 2 – Brain Bytes: Teams answer multiple-choice tech questions; speed and accuracy matter.",
  "4. Tie Breaker: A rapid-fire round for the fastest minds if there’s a tie."
],
    logo: techquest,
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSfL8UuhT1KFYu9Ha_C5vWmhUlA05rjb-LVdXV3I3KWuPP8ikQ/viewform?usp=header",
       contacts: [
      {name:"Nithya Devi S",phone:"+91 9894684550"},
      {name:"Mohamed Murshida S",phone:"+91 8838046048"} ]
 },
  {
    name: "Code Forge",
    shortDescription: "Test your coding skills with algorithmic challenges",
    descript: "Sharpen your coding skills and tackle algorithmic challenges in Code Forge! Compete to solve problems efficiently and demonstrate your programming expertise.",
longDescription:["Event Format and Rules:",
  "1. Team Size: 1-2",
"2. Round 1: Solve 2 questions within 45 minutes.",
"3. Final Round: Solve 1 question within 30 minutes.",
"4. Allowed languages: C, C++, Java, JavaScript, C#, Python.",
"5. Each program must include a proper function definition for the main logic."],

    logo: codeforge,
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSdm68aQAUd1xMC6jDaubxatQrK7RTR0Tizeqw2pV75cEZK08Q/viewform?usp=header",
         contacts: [
      {name:"Bharath R",phone:"+91 7418099057"},
      {name:"Daphne Starina J",phone:"+91 9345631936"} ] },
  {
    name: "Circuit Sprint",
    descript:"Circuit Sprint challenges participants to design and implement circuits to process real-world signals. Competitors will showcase their skills in both simulation and practical signal processing.",
    shortDescription: "Design and debug circuits against the clock",
    longDescription: ["Event Format and Rules:",
      "1. Team Size: 1-2",
      "2. Round 1: Design the given circuit using Proteus, LTSPICE, NGSPICE, or any EDA simulation tool.",
      "3. Round 2: Design a circuit to process a real-world audio signal, focusing on filter design using MATLAB."
    ],
    logo: circuitsprint,
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSdxGzRg1DC-yuCINXSvhth8plKG4oD4St5HV2sKx-RGOzRqPQ/viewform?usp=header",
     contacts: [
      {name:"Venkatajhalam S",phone:"+91 6374001217"},
   ]
  },
  {
    name: "Treasure Hunt",
    shortDescription: "Solve clues and race to hidden treasure",
    descript:"Gear up for an exciting adventure across the campus in Treasure Hunt! Participants will solve clues and collect tokens hidden around the campus. Test your observation, problem-solving, and teamwork skills as you race against the clock to gather as many tokens as possible.",
    longDescription: ["Event Format and Rules: ", "1. Team Size: 3", "2. Part 1: Main Play",
  "  - Duration: 45 minutes",
  "  - Objective: Collect tokens hidden around the campus.",
  "  - Clues: All clues will be provided at the start of the round.",
  "",
  "3. Part 2: Bonus Play",
  "  - Duration: 15 minutes",
  "  - Objective: Collect additional tokens around the campus.",
  "  - Clues: Clues will be revealed at intervals of 3 minutes."],
    logo: treasurehunt,
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSc5TDxdPMmvVBo8Ggr4t4Sg8r_hp4RTS5eacbaY9gK8gaQ0_Q/viewform?usp=header",
   contacts: [
      {name:"Divyadharshini BS",phone:"+91 8148626020"},
      {name:"Keerthana R",phone:"+91 6380641800"} ]},
  {
    name: "Clash of Cards: UNO",
    descript:"Get ready to showcase your strategy and quick thinking in Clash of Cards! This solo UNO tournament will test your ability to outplay your opponents, manage your hand wisely, and claim victory by being the first to discard all your cards. With multiple elimination rounds leading to a thrilling final match, only the sharpest players will survive to the end.",
    shortDescription: "Outsmart rivals in a fast-paced UNO battle",
    longDescription: [  "Event Format and Rules:",
  "1. Individual Participation",
  "2. Number of players per table: 4",
  "3. Multiple elimination rounds culminating in a final match",
  "4. Standard UNO rules will be followed throughout the event."],
    logo: clashofcards,
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSc--eztCRbk1oOf6-SJ0ML9Z3pSeVzOs46xV7j6cjhkNg_Mww/viewform?usp=header",
   contacts: [
      {name:"Swathi G",phone:"+91 9942428260"},
      {name:"Vishnu Varshni V",phone:"+91 8946065513"} ]}
];
const EventSection: React.FC = () => {
  const [activeEvent, setActiveEvent] = useState<EventInfo | null>(null);

  return (
    <section id="events" className="event-section">
      <h2 className="event-section-title">Events</h2>

      {/* Event Cards */}
      <div className="event-carousel">
        {events.map((event) => (
          <div
            key={event.name}
            className="event-card"
            onClick={() => setActiveEvent(event)}
          >
            <img src={event.logo} alt={event.name} className="event-logo" />
            <h3 className="event-name">{event.name}</h3>
            <p className="event-shortdesc">{event.shortDescription}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeEvent && (
        <div className="event-modal" onClick={() => setActiveEvent(null)}>
          <div
            className="event-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="event-modal-close"
              onClick={() => setActiveEvent(null)}
            >
              ×
            </button>

            {/* Description */}
            <p className="event-description">{activeEvent.descript}</p>

            {/* Long Description with bold for Event Format / Rules */}
            {activeEvent.longDescription.map((line, idx) => (
              <p key={idx} className="event-longdesc">
                {line.includes("Event Format") || line.includes("Rules")
                  ? <strong>{line}</strong>
                  : line}
              </p>
            ))}
            
            {/* Contact Section (Above Register Button) */}
            {activeEvent.contacts && activeEvent.contacts.length > 0 && (
              <div className="event-contacts">
                <p className="contact-title2">For any assistance or event-related queries, reach out to:</p>
                <ul>
                  {activeEvent.contacts.map((c, i) => (
                    <li key={i}>
                      <a href={`tel:${c.phone}`} className="contact-link">
                        {c.name} — {c.phone}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <button
              className="event-register-btn"
              onClick={() => (window.location.href = activeEvent.registerLink)}
            >
              Register
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default EventSection;


