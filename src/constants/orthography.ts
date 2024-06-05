import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'a',
  'b',
  'ch',
  'd',
  'ḍ’,
  'e',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  "m",
  'n',
  "ñ",
  'o',
  'p',
  's',
  'sh'
  'th',
  'u',
  'v',
  'w',
   'y',
   "'",
  '-',
  ':'
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
