import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Learn',
    Svg: require('@site/static/img/EasyToLearn.svg').default,
    description: (
      <>
        Markdown syntax is quite easy to learn. With minimal syntax, you can get started with writing markdown documents.
      </>
    ),
  },
  {
    title: 'Easy to Write',
    Svg: require('@site/static/img/EasyToWrite.svg').default,
    description: (
      <>
        It's almost like writing a simple text document - with some syntax here and there.
      </>
    ),
  },
  {
    title: 'Easy to Read',
    Svg: require('@site/static/img/EasyToRead.svg').default,
    description: (
      <>
        Again, for the same reason, it's very easy to read.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
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
