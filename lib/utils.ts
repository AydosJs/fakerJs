import { FakerMap } from "@/types/types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import * as fakerModules from "@faker-js/faker";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const LIMIT = 10;

const {
  fakerAF_ZA,
  fakerAR,
  fakerAZ,
  fakerBASE,
  fakerCS_CZ,
  fakerDA,
  fakerDE,
  fakerDE_AT,
  fakerDE_CH,
  fakerDV,
  fakerEL,
  fakerEN,
  fakerEN_AU,
  fakerEN_AU_ocker,
  fakerEN_BORK,
  fakerEN_CA,
  fakerEN_GB,
  fakerEN_GH,
  fakerEN_HK,
  fakerEN_IE,
  fakerEN_IN,
  fakerEN_NG,
  fakerEN_US,
  fakerEN_ZA,
  fakerEO,
  fakerES,
  fakerES_MX,
  fakerFA,
  fakerFI,
  fakerFR,
  fakerFR_BE,
  fakerFR_CA,
  fakerFR_CH,
  fakerFR_LU,
  fakerFR_SN,
  fakerHE,
  fakerHR,
  fakerHU,
  fakerHY,
  fakerID_ID,
  fakerIT,
  fakerJA,
  fakerKA_GE,
  fakerKO,
  fakerLV,
  fakerMK,
  fakerNB_NO,
  fakerNE,
  fakerNL,
  fakerNL_BE,
  fakerPL,
  fakerPT_BR,
  fakerPT_PT,
  fakerRO,
  fakerRO_MD,
  fakerRU,
  fakerSK,
  fakerSR_RS_latin,
  fakerSV,
  fakerTH,
  fakerTR,
  fakerUK,
  fakerUR,
  fakerVI,
  fakerYO_NG,
  fakerZH_CN,
  fakerZH_TW,
  fakerZU_ZA,
} = fakerModules;

export const fakerMap: FakerMap = {
  af_ZA: fakerAF_ZA,
  ar: fakerAR,
  az: fakerAZ,
  base: fakerBASE,
  cs_CZ: fakerCS_CZ,
  da: fakerDA,
  de: fakerDE,
  de_AT: fakerDE_AT,
  de_CH: fakerDE_CH,
  dv: fakerDV,
  el: fakerEL,
  en: fakerEN,
  en_AU: fakerEN_AU,
  en_AU_ocker: fakerEN_AU_ocker,
  en_BORK: fakerEN_BORK,
  en_CA: fakerEN_CA,
  en_GB: fakerEN_GB,
  en_GH: fakerEN_GH,
  en_HK: fakerEN_HK,
  en_IE: fakerEN_IE,
  en_IN: fakerEN_IN,
  en_NG: fakerEN_NG,
  en_US: fakerEN_US,
  en_ZA: fakerEN_ZA,
  eo: fakerEO,
  es: fakerES,
  es_MX: fakerES_MX,
  fa: fakerFA,
  fi: fakerFI,
  fr: fakerFR,
  fr_BE: fakerFR_BE,
  fr_CA: fakerFR_CA,
  fr_CH: fakerFR_CH,
  fr_LU: fakerFR_LU,
  fr_SN: fakerFR_SN,
  he: fakerHE,
  hr: fakerHR,
  hu: fakerHU,
  hy: fakerHY,
  id_ID: fakerID_ID,
  it: fakerIT,
  ja: fakerJA,
  ka_GE: fakerKA_GE,
  ko: fakerKO,
  lv: fakerLV,
  mk: fakerMK,
  nb_NO: fakerNB_NO,
  ne: fakerNE,
  nl: fakerNL,
  nl_BE: fakerNL_BE,
  pl: fakerPL,
  pt_BR: fakerPT_BR,
  pt_PT: fakerPT_PT,
  ro: fakerRO,
  ro_MD: fakerRO_MD,
  ru: fakerRU,
  sk: fakerSK,
  sr_RS_latin: fakerSR_RS_latin,
  sv: fakerSV,
  th: fakerTH,
  tr: fakerTR,
  uk: fakerUK,
  ur: fakerUR,
  vi: fakerVI,
  yo_NG: fakerYO_NG,
  zh_CN: fakerZH_CN,
  zh_TW: fakerZH_TW,
  zu_ZA: fakerZU_ZA,
};

export const localization = [
  { value: "af_ZA", label: "Afrikaans" },
  { value: "ar", label: "Arabic" },
  { value: "az", label: "Azerbaijani" },
  { value: "cz", label: "Czech" },
  { value: "de", label: "German" },
  { value: "de_AT", label: "German (Austria)" },
  { value: "de_CH", label: "German (Switzerland)" },
  { value: "el", label: "Greek" },
  { value: "en", label: "English" },
  { value: "en_AU", label: "English (Australia)" },
  { value: "en_AU_ocker", label: "English (Australia Ocker)" },
  { value: "en_BORK", label: "English (Bork)" },
  { value: "en_CA", label: "English (Canada)" },
  { value: "en_GB", label: "English (Great Britain)" },
  { value: "en_GH", label: "English (Ghana)" },
  { value: "en_IE", label: "English (Ireland)" },
  { value: "en_IND", label: "English (India)" },
  { value: "en_NG", label: "Nigeria (English)" },
  { value: "en_US", label: "English (United States)" },
  { value: "en_ZA", label: "English (South Africa)" },
  { value: "es", label: "Spanish" },
  { value: "es_MX", label: "Spanish (Mexico)" },
  { value: "fa", label: "Farsi" },
  { value: "fi", label: "Finnish" },
  { value: "fr", label: "French" },
  { value: "fr_BE", label: "Français (Belgique)" },
  { value: "fr_CA", label: "French (Canada)" },
  { value: "fr_CH", label: "French (Switzerland)" },
  { value: "ge", label: "Georgian" },
  { value: "he", label: "Hebrew" },
  { value: "hr", label: "Hrvatski" },
  { value: "hu", label: "Hungarian" },
  { value: "hy", label: "Armenian" },
  { value: "id_ID", label: "Indonesia" },
  { value: "it", label: "Italian" },
  { value: "ja", label: "Japanese" },
  { value: "ko", label: "Korean" },
  { value: "lv", label: "Latvian" },
  { value: "mk", label: "Macedonian" },
  { value: "nb_NO", label: "Norwegian" },
  { value: "ne", label: "Nepalese" },
  { value: "nl", label: "Dutch" },
  { value: "nl_BE", label: "Dutch (Belgium)" },
  { value: "pl", label: "Polish" },
  { value: "pt_BR", label: "Portuguese (Brazil)" },
  { value: "pt_PT", label: "Portuguese (Portugal)" },
  { value: "ro", label: "Romanian" },
  { value: "ru", label: "Russian" },
  { value: "sk", label: "Slovakian" },
  { value: "sv", label: "Swedish" },
  { value: "tr", label: "Turkish" },
  { value: "uk", label: "Ukrainian" },
  { value: "ur", label: "Urdu" },
  { value: "vi", label: "Vietnamese" },
  { value: "zh_CN", label: "Chinese" },
  { value: "zh_TW", label: "Chinese (Taiwan)" },
  { value: "zu_ZA", label: "Zulu (South Africa)" },
];
