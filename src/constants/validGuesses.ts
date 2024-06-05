import { CONFIG } from './config'

export const VALIDGUESSES = [
'gi:ik',
   'cheoj',
   'cheia',
  'sivol',
  "ba'ag",
'gigik',
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
