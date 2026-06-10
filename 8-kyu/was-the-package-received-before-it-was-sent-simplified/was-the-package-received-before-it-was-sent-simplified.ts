 
export function was_package_received_yesterday(tz_from:number, tz_to:number, start:number, duration:number):boolean{
  return tz_from - tz_to - duration > start;
}