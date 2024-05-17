const getMedicines = () => {
    return [
        {
          id: 1,
          name: 'Amoxicillin',
          description: 'A penicillin antibiotic that fights bacteria.',
          productionDate: '2020-01-15',
          expiryDate: '2022-01-15',
          expiryStatus: 'Expired',
          storedAtTimestamp: new Date('2020-01-15T10:32:49Z').toISOString(),
          lastUpdatedTimestamp: new Date('2021-05-29T15:48:24Z').toISOString()
        },
        {
          id: 2,
          name: 'Ibuprofen',
          description: 'A nonsteroidal anti-inflammatory drug (NSAID) used to reduce fever and treat pain or inflammation.',
          productionDate: '2019-05-20',
          expiryDate: '2022-05-20',
          expiryStatus: 'Expired',
          storedAtTimestamp: new Date('2019-05-23T09:22:48Z').toISOString(),
          lastUpdatedTimestamp: new Date('2019-05-23T09:22:48Z').toISOString()
        },
        {
          id: 3,
          name: 'Metformin',
          description: 'An oral diabetes medicine that helps control blood sugar levels.',
          productionDate: '2019-08-30',
          expiryDate: '2022-08-30',
          expiryStatus: 'Expired',
          storedAtTimestamp: new Date('2019-09-01T10:06:59Z').toISOString(),
          lastUpdatedTimestamp: new Date('2024-03-22T16:42:38Z').toISOString()
        },
        {
          id: 4,
          name: 'Lisinopril',
          description: 'An ACE inhibitor used to treat high blood pressure and heart failure.',
          productionDate: '2020-03-01',
          expiryDate: '2022-10-01',
          expiryStatus: 'Expired',
          storedAtTimestamp: new Date('2020-03-05T16:46:29Z').toISOString(),
          lastUpdatedTimestamp: new Date('2021-10-07T11:18:03Z').toISOString()
        },
        {
          id: 5,
          name: 'Atorvastatin',
          description: 'A statin used to lower cholesterol and reduce the risk of heart disease.',
          productionDate: '2020-06-15',
          expiryDate: '2022-09-15',
          expiryStatus: 'Expired',
          storedAtTimestamp: new Date('2020-06-16T12:34:26Z').toISOString(),
          lastUpdatedTimestamp: new Date('2020-06-16T12:34:26Z').toISOString()
        },
        {
          id: 6,
          name: 'Levothyroxine',
          description: 'A thyroid medicine that replaces a hormone normally produced by your thyroid gland to regulate the body\'s energy and metabolism.',
          productionDate: '2022-05-28',
          expiryDate: '2024-05-28',
          expiryStatus: 'Will Expire Soon',
          storedAtTimestamp: new Date('2022-05-30T13:49:11Z').toISOString(),
          lastUpdatedTimestamp: new Date('2022-06-01T16:58:36Z').toISOString()
        },
        {
          id: 7,
          name: 'Simvastatin',
          description: 'Used to lower levels of cholesterol and other fats in the blood.',
          productionDate: '2021-12-04',
          expiryDate: '2024-06-04',
          expiryStatus: 'Will Expire Soon',
          storedAtTimestamp: new Date('2021-05-16T14:03:06Z').toISOString(),
          lastUpdatedTimestamp: new Date('2024-02-20T17:02:24').toISOString()
        },
        {
          id: 8,
          name: 'Omeprazole',
          description: 'A proton pump inhibitor that decreases the amount of acid produced in the stomach.',
          productionDate: '2023-08-10',
          expiryDate: '2025-03-10',
          expiryStatus: 'Not Expired',
          storedAtTimestamp: new Date('2023-08-12T15:28:47Z').toISOString(),
          lastUpdatedTimestamp: new Date('2023-08-12T15:28:47Z').toISOString()
        },
        {
          id: 9,
          name: 'Amlodipine',
          description: 'A calcium channel blocker that dilates blood vessels and improves blood flow.',
          productionDate: '2024-01-01',
          expiryDate: '2026-09-01',
          expiryStatus: 'Not Expired',
          storedAtTimestamp: new Date('2024-01-06T16:54:32Z').toISOString(),
          lastUpdatedTimestamp: new Date('2024-01-06T16:54:32Z').toISOString()
        },
        {
          id: 10,
          name: 'Metoprolol',
          description: 'A beta-blocker that affects the heart and circulation (blood flow through arteries and veins).',
          productionDate: '2022-10-15',
          expiryDate: '2024-10-15',
          expiryStatus: 'Not Expired',
          storedAtTimestamp: new Date('2022-10-21T17:39:28Z').toISOString(),
          lastUpdatedTimestamp: new Date('2023-07-25T17:18:09Z').toISOString()
        },
        {
          id: 11,
          name: 'Hydrochlorothiazide',
          description: 'A diuretic medication often used to treat high blood pressure and swelling due to fluid build up.',
          productionDate: '2024-01-01',
          expiryDate: '2026-11-01',
          expiryStatus: 'Not Expired',
          storedAtTimestamp: new Date('2024-01-02T18:24:46Z').toISOString(),
          lastUpdatedTimestamp: new Date('2024-01-02T18:24:46Z').toISOString()
        },
        {
          id: 12,
          name: 'Gabapentin',
          description: 'Used to treat neuropathic pain and to prevent seizures in adults and children.',
          productionDate: '2023-12-15',
          expiryDate: '2026-01-15',
          expiryStatus: 'Not Expired',
          storedAtTimestamp: new Date('2023-12-18T19:13:19Z').toISOString(),
          lastUpdatedTimestamp: new Date('2023-12-18T19:13:19Z').toISOString()
        },
        {
          id: 13,
          name: 'Albuterol',
          description: 'A bronchodilator that helps relax muscles in the airways and increases air flow to the lungs.',
          productionDate: '2024-05-16',
          expiryDate: '2026-10-20',
          expiryStatus: 'Not Expired',
          storedAtTimestamp: new Date('2024-05-17T23:38:19Z').toISOString(),
          lastUpdatedTimestamp: new Date('2024-05-17T23:38:19Z').toISOString()
        },
        {
          id: 14,
          name: 'Losartan',
          description: 'An angiotensin II receptor antagonist drug used mainly to treat high blood pressure.',
          productionDate: '2023-09-10',
          expiryDate: '2025-05-10',
          expiryStatus: 'Not Expired',
          storedAtTimestamp: new Date('2023-09-11T21:33:02Z').toISOString(),
          lastUpdatedTimestamp: new Date('2024-02-02T17:39:11Z').toISOString()
        },
        {
          id: 15,
          name: 'Prednisone',
          description: 'A corticosteroid used to treat many different conditions such as allergic disorders, skin conditions, ulcerative colitis, arthritis, lupus, psoriasis, or breathing disorders.',
          productionDate: '2022-06-05',
          expiryDate: '2025-03-05',
          expiryStatus: 'Not Expired',
          storedAtTimestamp: new Date('2022-06-10T22:48:39Z').toISOString(),
          lastUpdatedTimestamp: new Date('2022-06-10T22:53:56Z').toISOString()
        }    
      ];
}

module.exports = getMedicines;