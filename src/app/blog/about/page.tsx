import Image from "next/image";
import React from "react";
import css from "../../../../public/css.png";

const About = () => {
  const skills = [
    "React.js",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Java",
    "PostgreSQL",
    "Git",
    "Adobe Illustrator",
    "Final Cut Pro",
    "Adobe Photoshop",
    "WooCommerce",
  ];

  const certifications = [
    "Introduksjon til Cybersecurity og Lær React Native fra Codecademy, begge utstedt i mai 2023.",
    "Microsoft Sertifisert: Azure Fundamentals, som gir meg en forståelse av skytjenester og hvordan de kan implementeres i moderne applikasjoner.",
    "Python Introduksjon for DevOps fra LearnQuest, som har utvidet mine programmeringsferdigheter.",
  ];

  const experiences = [
    {
      title: "Full Stack Utvikler hos Experis Norway",
      duration: "Oktober 2022 - Mai 2023",
      description:
        "Hadde ansvar for utvikling av komplekse webapplikasjoner. Her fikk jeg muligheten til å arbeide med React.js og Git, samt samarbeid i tverrfaglige team for å sikre at prosjektmål ble nådd effektivt. Jeg fikk også erfaring med kodegjennomgang og implementering av beste praksis for koding og design.",
    },
    {
      title: "Webutvikler hos Sweet Tech",
      duration: "Januar 2021 - April 2021",
      description:
        "Designet og utviklet flere nettsider og applikasjoner, der jeg bygget backend-løsninger ved hjelp av JavaScript. Jeg samarbeidet nært med innholdsteamet for å sikre at teknisk dokumentasjon ble oppdatert og lett tilgjengelig for hele teamet.",
    },
    {
      title: "Junior Webutvikler ved LINK Academy Romania",
      duration: "Januar 2019 - Januar 2020",
      description:
        "Utviklet små applikasjoner som demonstrerte min evne til å skape visuelle og funksjonelle løsninger. Dette var en viktig periode for meg, da jeg lærte å jobbe under press og håndtere tidsfrister mens jeg opprettholdt høy kvalitet på arbeidet mitt.",
    },
  ];

  const education = {
    title: "Utdanning",
    description:
      "Jeg har en bachelorgrad i dataprogrammering fra Noroff, der jeg utviklet et solid fundament innen moderne webteknologier. Gjennom studiene har jeg tilegnet meg omfattende kunnskaper i HTML, CSS, JavaScript, TypeScript, React, Java, React Native og PostgreSQL. Utdannelsen min har ikke bare gjort meg til en dyktig utvikler, men også en designer som forstår viktigheten av brukeropplevelse og visuell kommunikasjon.",
  };

  return (
    <div className="max-w-4xl mx-auto p-6  rounded-lg shadow-lg mt-10">
      {/* Image at the top */}
      <div className="flex justify-center">
        <Image
          src={css}
          alt="Profile Picture"
          className="rounded-full w-48 h-48 object-cover shadow-lg transition-transform duration-300 hover:scale-110"
        />
      </div>

      <div className="mt-6">
        <h2 className="text-4xl font-bold text-gray-800 border-b-2 border-purple-500 pb-2">
          Om Meg
        </h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Jeg heter <span className="font-semibold">Daniel</span>, en dedikert
          og resultatorientert{" "}
          <span className="font-semibold">full stack utvikler</span> og designer
          med over 8 års erfaring innen IT-bransjen. Min karriere har vært
          preget av en konstant søken etter kunnskap og utvikling, kombinert med
          en lidenskap for å skape brukervennlige, responsive og innovative
          web-løsninger. Jeg har spesialisert meg på å bygge applikasjoner som
          ikke bare er funksjonelle, men også estetisk tiltalende og
          tilgjengelige for alle brukere.
        </p>

        <h3 className="text-3xl font-semibold text-gray-800 mt-6 border-b border-gray-300 pb-1">
          {education.title}
        </h3>
        <p className="mt-4 text-gray-700 leading-relaxed">
          {education.description}
        </p>
        <p className="mt-4 text-gray-700 leading-relaxed">
          For å supplere min utdanning har jeg fullført flere kurs og
          sertifikater som har vært avgjørende for min faglige utvikling. Noen
          av mine sertifikater inkluderer:
        </p>
        <ul className="mt-2 list-disc list-inside text-gray-700 leading-relaxed">
          {certifications.map((cert, index) => (
            <li key={index}>{cert}</li>
          ))}
        </ul>

        <h3 className="text-3xl font-semibold text-gray-800 mt-6 border-b border-gray-300 pb-1">
          Erfaring
        </h3>
        {experiences.map((experience, index) => (
          <div key={index} className="mt-4 text-gray-700 leading-relaxed">
            <h4 className="font-semibold">{experience.title}</h4>
            <span className="text-gray-500">{experience.duration}</span>
            <p>{experience.description}</p>
          </div>
        ))}

        <h3 className="text-3xl font-semibold text-gray-800 mt-6 border-b border-gray-300 pb-1">
          Prosjekter og Prestasjoner
        </h3>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Mine tekniske ferdigheter og kreative evner har resultert i flere
          vellykkede prosjekter, mange av dem tilgjengelige på min
          GitHub-profil. Et av høydepunktene i karrieren min var å vinne
          førsteprisen i en webdesignkonkurranse for landingssiden jeg laget for
          prosjektet "Lost in Translation". Denne erfaringen inspirerte meg til
          å utforske grensene for design og teknologi ytterligere.
        </p>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Jeg har også jobbet med å forbedre ytelsen og sikkerheten til
          webapplikasjoner ved å implementere avanserte teknikker som caching,
          autentisering og kryptering. Gjennom disse prosjektene har jeg fått en
          dypere forståelse av hvordan man kan balansere brukeropplevelse med
          sikkerhet og ytelse.
        </p>

        <h3 className="text-3xl font-semibold text-gray-800 mt-6 border-b border-gray-300 pb-1">
          Ferdigheter
        </h3>
        <ul className="mt-2 grid grid-cols-2 gap-4 text-gray-700">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="bg-purple-100 text-purple-800 rounded-lg py-2 px-4 shadow hover:bg-blue-200 transition"
            >
              {skill}
            </li>
          ))}
        </ul>

        <h3 className="text-3xl font-semibold text-gray-800 mt-6 border-b border-purple-300 pb-1">
          Mål
        </h3>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Min ambisjon er å fortsette å utvikle meg som utvikler og designer,
          med fokus på å bidra til innovative prosjekter som gjør en forskjell.
          Jeg søker stadig etter nye utfordringer som kan utvide min kompetanse
          og erfaring. I fremtiden ønsker jeg å arbeide med prosjekter som
          involverer AI, maskinlæring, og cloud computing, da jeg ser stort
          potensial for vekst og utvikling innen disse områdene.
        </p>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Som en del av et dynamisk team, er jeg klar for å dele mine
          erfaringer, lære av andre, og bidra til et miljø hvor innovasjon og
          kreativitet står i fokus.
        </p>
      </div>
    </div>
  );
};

export default About;
