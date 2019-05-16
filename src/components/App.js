import React from 'react';
import styles from './App.css';

export default function App() {
  const [selected, updateSelected] = useState('home');

  const content = {
    home: 'Am home',
    about: 'about page',
    blog: 'no blog',
    contact: 'no contact'
  };

  return (
    <section className={styles.App}>
      <p>{content[selected]}</p>
    </section>
  );
}
