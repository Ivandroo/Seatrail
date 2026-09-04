import React from 'react';

interface EmailTemplateProps {
  firstName: string;
  companyName: string;
  personalEmail: string;
  service?: string;
  message: string;
}

export function EmailTemplate({ firstName, companyName, personalEmail, service, message }: EmailTemplateProps) {
  return (
    <div>
      <h1>Novo contacto de {firstName}</h1>
      {companyName && <p>Empresa: {companyName}</p>}
      <p>Email: {personalEmail}</p>
      {service && <p>Serviço de interesse: {service}</p>}
      <p>Mensagem: {message}</p>
    </div>
  );
}