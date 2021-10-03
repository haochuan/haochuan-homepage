export default [
  {
    status: 'loading',
    width: '4.4rem',
    data: [
      {
        type: 'text',
        content: 'Hey there',
      },
    ],
  },
  {
    status: 'hidden',
    width: '18rem',
    data: [
      {
        type: 'text',
        content: "I'm Haochuan. Friends prefer call me `H`",
      },
    ],
  },
  {
    status: 'hidden',
    width: '13.5rem',
    data: [
      {
        type: 'text',
        content:
          'I write code for Javascript infra, productivity tooling, audio processing, and music on ',
      },
      {
        type: 'link',
        content: 'my github',
        url: 'https://github.com/haochuan',
      },
      {
        type: 'text',
        content: ' using JS/TS, Rust and C++',
      },
    ],
  },
  {
    status: 'hidden',
    width: '10.5rem',
    data: [
      {
        type: 'text',
        content: 'I write blogs in ',
      },
      {
        type: 'link',
        content: 'medium',
        url: 'https://medium.com/@haochuan',
      },
    ],
  },
  {
    status: 'hidden',
    width: '16.2rem',
    data: [
      {
        type: 'text',
        content: 'I play guitar on ',
      },
      {
        type: 'link',
        content: 'my youtube channel',
        url: 'https://www.youtube.com/channel/UCNESazgvF_NtDAOJrJMNw0g',
      },
    ],
  },
  // {
  //   status: 'hidden',
  //   data: [
  //     {
  //       type: 'link',
  //       content: 'VSCode',
  //       url: 'https://code.visualstudio.com/',
  //     },
  //     {
  //       type: 'text',
  //       content:
  //         ' is great, but I stay with vim/neovim since starting writing code',
  //     },
  //     {
  //       type: 'link',
  //       content: 'vim',
  //       url: 'https://www.vim.org/',
  //     },
  //     {
  //       type: 'text',
  //       content: '/',
  //     },
  //     {
  //       type: 'link',
  //       content: 'neovim',
  //       url: 'https://neovim.io/',
  //     },
  //     {
  //       type: 'text',
  //       content: ' since starting writing code',
  //     },
  //   ],
  // },
  {
    status: 'hidden',
    width: '17.2rem',
    data: [
      {
        type: 'text',
        content:
          'I spend ~2 hours on weight lifting/jumping rope/burpee/basketball everyday',
      },
    ],
  },
  // {
  //   status: 'hidden',
  //   data: [
  //     {
  //       type: 'text',
  //       content:
  //         "I love modern progressive metal and 80's thrash metal, I have a studio doing recording/mixing/music production",
  //     },
  //   ],
  // },
  {
    status: 'hidden',
    width: `${getTimeMessage().width}rem`,
    data: [
      {
        type: 'text',
        content: getTimeMessage().text,
      },
    ],
  },
];

function getTimeMessage() {
  const currentDate = new Date();
  const currentHour = currentDate.getHours();
  return currentHour < 18
    ? { text: 'Have a nice day!', width: 7.5 }
    : { text: 'Have a good night!', width: 8.5 };
}
