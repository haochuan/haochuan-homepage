import { useSpring, animated } from 'react-spring';
import styles from '../styles/Message.module.css';

function Message({ m, index }) {
  if (m.status === 'loading') {
    const animation = useSpring({
      config: { duration: 150 },
      width: '3.5rem',
      from: { width: '0rem' },
    });
    return (
      <animated.div key={index} className={styles.loading} style={animation}>
        <div className={styles.dotWrapper}>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
        </div>
      </animated.div>
    );
  } else if (m.status === 'loaded') {
    return (
      <div key={index} className={styles.message} style={{ width: m.width }}>
        {m.content}
      </div>
    );
  } else {
    return null;
  }
}

export default Message;
