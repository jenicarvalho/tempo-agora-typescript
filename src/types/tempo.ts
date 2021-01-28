export interface Tempo {
  name: string,
  main: Main
}

export interface Main {
  temp: number,
  temp_max: number,
  temp_min: number
}