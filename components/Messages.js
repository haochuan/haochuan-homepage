import React, { Component, PropTypes } from 'react';
import styles from '../styles/Message.module.css';
import MESSAGES from '../data/messages';
import Message from './Message';
import Link from 'next/link';

const MESSAGE_DELAY = 2000;

export class Messages extends Component {
  constructor(props) {
    super(props);
    this.currentId = 0; // the index of current loading message
    this.runner = null;
    this.state = { messages: MESSAGES };
  }

  componentDidMount() {
    this.runner = setInterval(() => {
      if (this.currentId === this.state.messages.length - 1) {
        clearInterval(this.runner);
        this.setState((state) => {
          const messages = [
            ...state.messages.slice(0, this.currentId),
            {
              ...state.messages[this.currentId],
              status: 'loaded',
            },
          ];
          this.currentId++;
          return { messages };
        });
      } else {
        this.setState((state) => {
          const messages = [
            ...state.messages.slice(0, this.currentId),
            {
              ...state.messages[this.currentId],
              status: 'loaded',
            },
            {
              ...state.messages[this.currentId + 1],
              status: 'loading',
            },
            ...state.messages.slice(this.currentId + 2),
          ];
          this.currentId++;
          return { messages };
        });
      }
    }, MESSAGE_DELAY);
  }

  render() {
    const { messages } = this.state;
    const messageList = messages.map((m) => {
      // let charCount = 0;
      let content = {
        status: m.status,
        width: m.width,
        content: m.data.map((c, i) => {
          if (c.type === 'text') {
            // charCount += c.content.length;
            return <span key={i}>{c.content}</span>;
          } else {
            // charCount += c.content.length;
            return (
              <Link key={i} href={c.url}>
                {c.content}
              </Link>
            );
          }
        }),
      };
      // content.width = `${Math.min(charCount / 2, 12)}rem`;
      return content;
    });
    return (
      <div className={styles.board}>
        {messageList.map((m, index) => {
          return <Message m={m} index={index} key={index} />;
        })}
      </div>
    );
  }
}

export default Messages;
