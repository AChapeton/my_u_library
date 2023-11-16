import {format, parseISO} from 'date-fns'

const useFormatDate = (date) => {

  // Save date with new format
    const parseDate = parseISO(date)
    const newFormatDate = format(parseDate, "MM/dd/yy H:mm")  

  return {newFormatDate}
}

export default useFormatDate