export type Params = {
  errors?: number;
  seed?: number;
  region?: keyof FakerMap;
};
export interface UserData {
  id: string;
  name: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
  phone: string;
}

export type FakerMap = {
  af_ZA: any;
  ar: any;
  az: any;
  base: any;
  cs_CZ: any;
  da: any;
  de: any;
  de_AT: any;
  de_CH: any;
  dv: any;
  el: any;
  en: any;
  en_AU: any;
  en_AU_ocker: any;
  en_BORK: any;
  en_CA: any;
  en_GB: any;
  en_GH: any;
  en_HK: any;
  en_IE: any;
  en_IN: any;
  en_NG: any;
  en_US: any;
  en_ZA: any;
  eo: any;
  es: any;
  es_MX: any;
  fa: any;
  fi: any;
  fr: any;
  fr_BE: any;
  fr_CA: any;
  fr_CH: any;
  fr_LU: any;
  fr_SN: any;
  he: any;
  hr: any;
  hu: any;
  hy: any;
  id_ID: any;
  it: any;
  ja: any;
  ka_GE: any;
  ko: any;
  lv: any;
  mk: any;
  nb_NO: any;
  ne: any;
  nl: any;
  nl_BE: any;
  pl: any;
  pt_BR: any;
  pt_PT: any;
  ro: any;
  ro_MD: any;
  ru: any;
  sk: any;
  sr_RS_latin: any;
  sv: any;
  th: any;
  tr: any;
  uk: any;
  ur: any;
  vi: any;
  yo_NG: any;
  zh_CN: any;
  zh_TW: any;
  zu_ZA: any;
};
