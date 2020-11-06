import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { RouteComponentProps } from '@reach/router';

import ContactForm from './ContactForm';
import GhostPage from '@components/GhostPage';

const Contact = (props: RouteComponentProps) => {
  const contactData = useStaticQuery<GatsbyTypes.ContactQuery>(graphql`
    query Contact {
      ghostPage(title: { eq: "Contact" }) {
        id
        html
      }
    }
  `);
  const page = contactData?.ghostPage;

  if (!page || !page.html) throw new Error('Contact content does not exist');
  return (
    <>
      <GhostPage html={page.html} />
      <ContactForm />
    </>
  );
};

export default Contact;
