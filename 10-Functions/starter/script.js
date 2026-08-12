'use strict';

//MINI CHALLANGE WEEK 4

/*
4. Target Tampilan Output Console:
Plaintext
=== BULK DATA PARSER & FINANCIAL PIPELINE ===
Agensi         : PT. CAHAYA REMBULAN SEJATI
Status Pipeline: 4/7 Entri Data Valid Diproses

[DAFTAR KLIEN QUALIFIED & TERSTRUKTUR]
1. [CRS-LEAD-001] Studio Arsitek Garis Lurus
   - Layanan : Web Development
   - Budget  : Rp 15.000.000

2. [CRS-LEAD-002] Cv. Berkah Abadi
   - Layanan : Branding
   - Budget  : Rp 8.500.000

3. [CRS-LEAD-003] Pt. Inovasi Digital Nusantara
   - Layanan : Fullstack App
   - Budget  : Rp 25.000.000

4. [CRS-LEAD-004] Pt. Sinar Mas Arsitektur
   - Layanan : Web Development
   - Budget  : Rp 12.000.000

------------------------------------------------------------
[RINGKASAN EKSEKUSI PIPELINE]
Total Omzet Prospektif : Rp 60.500.000
Rata-rata Budget Klien  : Rp 15.125.000
Klien Budget Terbesar   : Pt. Inovasi Digital Nusantara (Rp 25.000.000)

============================================================
Pipeline Status: Manual Processing Success (Zero Mutation)
*/

//raw data
const rawClientData = [
  '  studio ARSITEK garis Lurus | 15000000 | Web Development  ',
  'KONTRAKTOR BAJA MANDIRI|0|UI/UX Design',
  '  cv. berkah abadi   | 8500000 | Branding ',
  'INVALID DATA ROW',
  '  PT.  inovasi digital  nusantara | 25000000 | Fullstack App  ',
  'Toko Bangunan Jaya | -5000000 | SEO',
  '   pt. SINAR MAS Arsitektur | 12000000 | Web Development  ',
];

const createTokenGenerator = function (token) {
  let countNumber = 0;
  return function () {
    countNumber++;
    const generatedToken = `${token.toUpperCase()}-${countNumber.toString().padStart(3, '0')}`;
    return `${generatedToken}`;
  };
};

// const clientToken = createTokenGenerator('CRS-CLIENT');
// const projectToken = createTokenGenerator('CRS-PROJ');
const leadToken = createTokenGenerator('CRS-LEAD');

const parseRawData = function (rawData) {
  const dataResult = [];

  for (const [i, data] of rawData.entries()) {
    const seperatedData = data.split('|');
    if (seperatedData.length != 3) continue;

    const cleanData = [];
    for (const data of seperatedData) {
      cleanData.push(data.trim());
    }
    const formattedName = cleanData[0].toUpperCase();
    const formattedBudget = Number(cleanData[1]);

    if (isNaN(formattedBudget) || formattedBudget <= 0) continue;
    dataResult.push({
      id: leadToken(),
      clientName: formattedName,
      budget: formattedBudget,
      service: cleanData[2],
    });
  }
  return dataResult;
};

const countFinancialStatistic = function (cleanData) {
  let totalRevenue = 0;
  let maxClient = cleanData[0];

  for (let i = 0; i < cleanData.length; i++) {
    totalRevenue += cleanData[i].budget;

    if (cleanData[i].budget > maxClient.budget) {
      maxClient = cleanData[i];
    }
  }
  const avgRevenue = cleanData.length > 0 ? totalRevenue / cleanData.length : 0;

  return {
    totalRevenue,
    avgRevenue,
    maxClient,
  };
};

const getFinalReport = function (cleanData, stats) {
  console.log(`=== BULK DATA PARSER & FINANCIAL PIPELINE ===`);
  console.log(`Agensi         : PT. CAHAYA REMBULAN SEJATI`);
  console.log(
    `Status Pipeline: ${cleanData.length}/${rawClientData.length} Entri Data Valid Diproses`,
  );

  console.log(`\n[DAFTAR KLIEN QUALIFIED & TERSTRUKTUR]`);
  for (const [i, { id, clientName, budget, service }] of cleanData.entries()) {
    console.log(
      `${i + 1}. [${id}] ${clientName}\n- Layanan : ${service}\n- Budget : Rp.${budget.toLocaleString('id-ID')}`,
    );
    console.log(`\n`);
  }

  console.log(`[RINGKASAN EKSEKUSI PIPELINE]`);
  console.log(`------------------------------------------------------------`);
  console.log(
    `Total Omzet Prospektif : Rp.${stats.totalRevenue.toLocaleString('id-ID')}}\n`,
    `Rata-rata Budget Klien : Rp.${stats.avgRevenue.toLocaleString('id-ID')}\n`,
    `Klien Budget Terbesar  : ${stats.maxClient.clientName} (Rp ${stats.maxClient.budget.toLocaleString('id-ID')})`,
  );
  console.log(
    `============================================================\n`,
    `Pipeline Status: Manual Processing Success (Zero Mutation)`,
  );
};

const cleanData = parseRawData(rawClientData);
const stats = countFinancialStatistic(cleanData);
getFinalReport(cleanData, stats);
