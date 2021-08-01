import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Modules, not courses',
    src: 'img/home/ethics-module-card.png',
    description: (
      <>
        The fundamental unit of instruction in Morea is a module, not a course. This creates opportunities for fine-grained curricular dependencies and composition.
      </>
    ),
  },
  {
    title: 'Remix and mashup curriculum',
    src: 'img/home/remix-modules.png',
    description: (
      <>
        Morea makes it easier to remix and mashup curriculum across your own and other Morea courses, creating new opportunities for inter-, cross-, and trans-disciplinary instruction.
      </>
    ),
  },
  {
    title: 'No walled garden',
    src: 'img/home/no-cas-login.png',
    description: (
      <>
        All Morea sites have a public, open access interface, making curriculum content discoverable and available.
      </>
    ),
  },
  {
    title: 'Make the pedagogy visible',
    src: 'img/home/modules-page.png',
    description: (
        <>
          Morea implements a pedagogical pattern: a course is a sequence of Modules, each with one or more learning Outcomes, Readings, Experiences, and Assessments.
        </>
    ),
  },
  {
    title: 'Simplify development with GitHub',
    src: 'img/home/octocat.png',
    description: (
        <>
          Morea is based on GitHub, which provides significant infrastructure for iterative development, deployment, and long-term evolution of curriculum.
        </>
    ),
  },
  {
    title: 'Focus on content, not styling',
    src: 'img/home/jekyll.png',
    description: (
        <>
          Morea leverages Jekyll and Bootstrap to build modern, responsive websites that display well on laptops, tablets, and smart phones. Write content in Markdown, not HTML!
        </>
    ),
  },
];

function Feature({src, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img height="200px" src={src} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p style={{textAlign: "justify"}}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
