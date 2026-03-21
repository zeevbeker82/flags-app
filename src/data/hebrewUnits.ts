// ============================================================
// Hebrew Units Index File
// Aggregates all unit data files and re-exports types.
// Data files (hebrewUnitsData1–5) will be created by other agents.
// ============================================================

import { HebrewUnit, UnitCategory, UNIT_CATEGORIES } from './hebrewUnitsTypes';

// Each data file is imported separately so that missing files can be
// swapped in later without changing this index.
// NOTE: If any data file does not yet exist, TypeScript compilation will
// fail. Replace the import with an empty array export in that file to
// unblock the build while the data is being populated.
import { hebrewUnitsData1 } from './hebrewUnitsData1';
import { hebrewUnitsData2 } from './hebrewUnitsData2';
import { hebrewUnitsData3 } from './hebrewUnitsData3';
import { hebrewUnitsData4 } from './hebrewUnitsData4';
import { hebrewUnitsData5 } from './hebrewUnitsData5';

export const allHebrewUnits: HebrewUnit[] = [
  ...hebrewUnitsData1,
  ...hebrewUnitsData2,
  ...hebrewUnitsData3,
  ...hebrewUnitsData4,
  ...hebrewUnitsData5,
].sort((a, b) => a.number - b.number);

export type { HebrewUnit, UnitCategory };
export { UNIT_CATEGORIES };
export { hebrewUnitsData1, hebrewUnitsData2, hebrewUnitsData3, hebrewUnitsData4, hebrewUnitsData5 };
