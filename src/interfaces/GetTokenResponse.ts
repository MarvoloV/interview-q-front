export interface GetTokenResponse {
  tokenCard: TokenCard
}

export interface TokenCard {
  _id: string
  card_number: number
  expiration_month: string
  expiration_year: string
  email: string
  token: string
  exp: number
  __v: number
}
