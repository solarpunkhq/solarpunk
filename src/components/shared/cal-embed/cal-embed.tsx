'use client';

import { useEffect } from 'react';

import Cal, { getCalApi } from '@calcom/embed-react';

function CalEmbed({ id, name, email }: { id: string; name: string; email: string }) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: 'exploration' });
      cal('ui', {
        styles: { branding: { brandColor: '#000000' } },
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    })();
  }, []);

  return (
    <Cal
      namespace="exploration"
      calLink={`team/solarpunk/exploration?submission_id=${id}&name=${name}&email=${email}`}
      style={{ width: '100%', height: '450px', overflow: 'scroll' }}
      config={{ layout: 'month_view' }}
    />
  );
}

export default CalEmbed;
