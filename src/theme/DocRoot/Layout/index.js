import React from 'react';
import Layout from '@theme-original/DocRoot/Layout';
import PlaybookSubBar from '@site/src/components/PlaybookSubBar';

// Wraps the docs layout to show the in-playbook top menu bar on every
// playbook page (the docs route /AfriPlaybook/*), just below the navbar.
export default function DocRootLayoutWrapper(props) {
  return (
    <>
      <PlaybookSubBar />
      <Layout {...props} />
    </>
  );
}
