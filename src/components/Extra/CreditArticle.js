import React from 'react';

import {
  CreditTitle,
  CreditList,
  CreditListItem,
  CreditListItemLink,
  CreditListItemText,
} from './CreditArticle.styles';

const CreditArticle = ({ children, credits }) => {
  return (
    <div>
      <CreditTitle>{children}</CreditTitle>
      <CreditList>
        {credits.map((credit, index) => (
          <CreditListItem key={index}>
            {/* Ifs credit has a company: render link */}
            {credit.company && (
              <CreditListItemLink
                href={credit.companyLink}
                rel="noopener noreferrer"
                target="_blank"
              >
                {credit.company}
              </CreditListItemLink>
            )}
            {/* If credit has a reason : render it */}
            {credit.whatFor && (
              <CreditListItemText>{credit.whatFor}</CreditListItemText>
            )}
          </CreditListItem>
        ))}
      </CreditList>
    </div>
  );
};

export default CreditArticle;
