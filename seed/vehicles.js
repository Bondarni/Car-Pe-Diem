const db = require('../db')
const Vehicle = require('../models/vehicle')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const vehicles = [
    {
      imageURL:
        'https://i.pinimg.com/564x/27/49/f2/2749f2b7e213037eafc518e207bf0a91.jpg',
      name: 'Cash',
      year: 1989,
      make: 'Chevy',
      model: 'S10',
      color: 'Black',
      mileage: 360000,
      fuel: 'Gas',
      features: [
        'Not new/old/nice enough to be stolen',
        'Lack of AC allows you to connect with nature'
      ]
    },
    {
      imageURL:
        'https://i.pinimg.com/564x/42/8d/91/428d91ea40c2b260e5feec8e763be780.jpg',
      name: 'Graby',
      year: 2001,
      make: 'Nissan',
      model: 'Altima',
      color: 'Grey',
      mileage: 110000,
      fuel: 'Gas',
      features:
        'The teenager you bought it last left anime stickers on the window, so no one will think you are too old to drive.'
    },
    {
      imageURL: '',
      name: 'The Gigahorse',
      year: 1959,
      make: 'Cadillac',
      model: 'Coupe DeVille',
      color: 'Black',
      mileage: 500000,
      fuel: 'Guzzolene',
      features: 'Spacious interior'
    }
  ]
  await Vehicle.insertMany(vehicles)
  console.log('Created some vehicles')
}
const run = async () => {
  await main()
  db.close()
}

run()
