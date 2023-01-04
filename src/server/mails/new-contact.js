import escape from 'escape-html';

const renderRow = (label, value) => `
  <p><b style="margin-right: 15px">${label}:</b>${escape(value)}</p>
`;

const getMail = ({ name, tel, type, email }) => `
  <div style="padding: 30px; background: #FFF">
    <div style="width: 540px; margin: 0 auto; background: #D8D8D8; color: #0a0a0a; padding: 30px; font-family: Verdana, Arial, sans-serif;">
      <h2>Get started form submission</h2>
      ${renderRow('Name', name)}
      ${renderRow('Email', email)}
      ${renderRow('Tel', tel)}
      ${renderRow('Query type', type)}
    </div>
  </div>
`;

export default getMail;