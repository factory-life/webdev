const renderRow = (label, value) => `${label}: ${value}`;

const getMail = ({ name, tel, type, email }) => `
    Get started form submission:
    ---------------------------------
    
    ${renderRow('Name', name)}
    
    ${renderRow('Email', email)}
    
    ${renderRow('Tel', tel)}
    
    ${renderRow('Query Type', type)}
`;

export default getMail;