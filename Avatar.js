const Avatar = (position, { name, avatar }) => (
  `<h5 
    'id='fighter_${position}'
    data-name='${name}'
    data-avatar='${avatar}'
    class='center fighter'
    >
    ${name}
    </h5>
    <img
    class='avatar'
    src='${avatar}
    alt='avatar'
    />
  `
)