import React from 'react';
import { WORKSHOPS } from '@site/src/data/workshops';
import WorkshopDetail from './_WorkshopDetail';

export default function Page() {
  return <WorkshopDetail workshop={WORKSHOPS.find(w => w.id === 'grassroots-data')} />;
}
