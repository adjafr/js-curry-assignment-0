'use strict'

const entries =
  obj =>
    Object.keys(obj)
      .map(key => [key, obj[key]])

const listing =
  (name, price) => ({
    name,
    price
  })

const customer =
  (name, shoppingList) => ({
    name,
    shoppingList
  })

const cart =
  (customer, ...items) => ({
    customer,
    items
  })

/**
 * should return an array with the `itemName` repeated `count` number of times
 */
const itemRepeater =
  function (itemName) {
    return function (count) {
      //let itemName = customer.shoppingList
      let repeatedArray = []
      for (let i = 0; i < count; i++) {
        repeatedArray.push(itemName)
      }
      return repeatedArray
    }
  }

  // const listedPrice =
  // listing =>
  //   name =>
  //     name === listing.name
  //       ? listing.price
  //       : 0

/**
 * should return an array of carts with each given customer's shopping list
 * as an array of items
 */
const constructCarts =
  listings =>{
  {let itemObject = {}
  listings.forEach(listing => {itemObject[listing.name] = listing.price})
  //create a block of code for Listings that creates an object from the listings, every key of the object is an itemName, the value is the price, then the listing price will be included
    return customers => {
      return customers.map(customer => ({customer: customer.name,items:
      entries(customer.shoppingList).reduce((total, item) => [...total, ...itemRepeater(item[0])(item[1])], [])
      .map((element) =>  listing(element, itemObject[element]))
      // [cart.items.reduce((total, item) => total +=l[cart.items.reduce((total, item) => total += listing.reduce((previous, listingName) => previous + listedPrice (listingName)(item),{}),{})])

    //  .map(item =>)

   })
) }
  }
}


module.exports = {
  listing,
  customer,
  constructCarts
}
