import Stripe from 'stripe'

const secret = process.env.STRIPE_SECRET_KEY as string

export const stripe = new Stripe(secret, {
  apiVersion: '2024-10-28.acacia',
  appInfo: {
    name: '@ignite-shop'
  }
})