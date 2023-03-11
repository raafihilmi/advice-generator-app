import dividerMobile from './assets/images/pattern-divider-mobile.svg';
import dividerDesktop from './assets/images/pattern-divider-desktop.svg';
import dice from './assets/images/icon-dice.svg';
import { useEffect, useState } from 'react';

export const Advices = () => {
  const [text, setText] = useState(
    `"It's easy to sit up and take notice, what's difficult is getting up and taking action."`
  );
  const [id, setId] = useState(117);

  // useEffect(() => {
  //   fetch('https://api.adviceslip.com/advice')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setAdvices(data.slip.advice);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  const handleClick = () => {
    fetch('https://api.adviceslip.com/advice')
      .then((res) => res.json())
      .then((data) => {
        setText(`"${data.slip.advice}"`);
        setId(`${data.slip.id}`);
        console.log(data.slip.advice);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='container'>
      <blockquote>
        <p className='span'>
          <span>advice #{id}</span>
        </p>
        <p className='advice'>{text}</p>
        <div className='divider'></div>
        <div className='btn' onClick={handleClick}>
          <img src={dice} alt='dice button for reroll advices' />
        </div>
      </blockquote>
    </div>
  );
};
