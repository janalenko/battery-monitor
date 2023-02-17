export interface TimeDifferenceStructuredInterval {
    seconds: number,
    minutes: number,
    hours: number,
    days: number
}

export function transformTimeDiff (diffInMiliseconds : number) : TimeDifferenceStructuredInterval {
    let msec = diffInMiliseconds
    let dd = Math.floor(msec / 1000 / 60 / 60 / 24)
    msec -= dd * 1000 * 60 * 60 * 24
    let hh = Math.floor(msec / 1000 / 60 / 60 )
    msec -= hh * 1000 * 60 * 60
    let mm = Math.floor(msec / 1000 / 60)
    msec -= mm * 1000 * 60
    let ss = Math.floor(msec / 1000)
    return {
      seconds: ss,
      minutes: mm,
      hours: hh,
      days: dd
    } as TimeDifferenceStructuredInterval
  }
