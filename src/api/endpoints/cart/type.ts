export type SpecialCondition = {
  conditionMinMoney: number
  salePercentage: number
  conditionType: string
}

type RegionSpecialConditions = {
  name: string
  minOrderMoney: number
  specialConditions: SpecialCondition[]
}

export type Condition = {
  SPB: RegionSpecialConditions
  CHINA: RegionSpecialConditions
}

export type Orders = Record<string, number>
