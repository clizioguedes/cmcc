import 'dayjs/locale/pt-br'

import dayjsLib from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjsLib.extend(relativeTime)
dayjsLib.locale('pt-br')

export { dayjsLib as dayjs }
