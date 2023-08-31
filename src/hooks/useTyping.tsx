import { useState, useEffect } from 'react';

const useTyping = (t: string[], typingSpeed: number = 80, deletingSpeed: number = 15, waiting: number = 1000) => {
  const [text, setText] = useState('');
  const [active, setActive] = useState(0);
  const [writing, setWriting] = useState(true);
  let i = 1;

  const startTyping = (element: string) => {
    const intervalId = setInterval(() => {
      setText(element.slice(0, i));
      if (element.length === i) {
        setTimeout(() => {
          i = 0;
          setWriting(false)
        }, waiting);
      }
      i++;
    }, typingSpeed);

    return intervalId;
  };

  const startDeleting = (element: string) => {
    const intervalId = setInterval(() => {
      setText(element.slice(0, element.length - i + 1));
      if (element.length === i) {
        i = 0;
        setWriting(true);
        setActive(prevState => (prevState + 1) % t.length);
      }
      i++;
    }, deletingSpeed);

    return intervalId;
  };

  useEffect(() => {
    const intervalId = writing ? startTyping(t[active]) : startDeleting(t[active]);

    return () => {
      clearInterval(intervalId);
    };
  }, [writing]);

  return text;
};

export default useTyping;