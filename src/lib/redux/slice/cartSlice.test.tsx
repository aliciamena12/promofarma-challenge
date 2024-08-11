import { Product } from '@/components/product-list/product-tile/product-tile.component';
import { CartState, StateCart } from './cartSlice';
import { CartProduct } from './cartSlice';
import reducer, {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItemFromCart
} from './cartSlice';


const mockCart: StateCart = {
  id:0,
  cartItems: [],
  totalQuantityCount: 0,
  totalPrice: 0
};

const mockCartState: CartState = {
  cart: mockCart
};

const mockProduct: Product = {
  code: "234234",
  name: "Ibuprofeno",
  supplier: "PillCompany",
  dosageForm: "pills",
  rating: 0,
  reviewCount: 0,
  packagingSize: "20 units",
  defaultSaleCondition: "OR",
  baseprice: "1 €/St.",
  url: "/ibuprofeno/234234",
  available: true,
  stock: 4,
  categories: [
    {
      id: "EN001",
      name: "Ernährung & Lifestyle"
    },
  ],
  saleConditions: {
    OR: [
      {
        code: "14024547",
        packagingSize: "2 x 14 St."
      }
    ]
  },
  prices: {
    salesPrice: {
      value: 6.5,
      formattedValue: "6,50 €"
    },
    recommendedRetailPrice: {
      value: 8.25,
      formattedValue: "8,25 €"
    }, 
    savings: {
      "value": 1.75,
      "formattedValue": "1,75 €"
    },
    savingsPercentageFormatted: "15%"
  },
  images: [
    {
      id: 432432,
      versionNumber: 2,
      meta: {
        tags: [
          "/headache",
        ]
      },
      variants: {
        90: {
          formats: {
            avif: {
              resolutions: {
                '1x': {
                  url: "https://thisisanurl.com/code/432432/ibuprofeno-imagen.avif"
                },
                '2x': {
                  url: "https://thisisanurl.com/code/432432/ibuprofeno-imagen@2x.avif"
                }
              }
            },
            jpg: {
              resolutions: {
                '1x': {
                  url: "https://thisisanurl.com/code/432432/ibuprofeno-imagen.jpg"
                },
                '2x': {
                  url: "https://thisisanurl.com/code/432432/ibuprofeno-imagen@2x.jpg"
                }
              }
            },
            webp: {
              resolutions: {
                '1x': {
                  url: "https://thisisanurl.com/code/432432/ibuprofeno-imagen-default-90.webp"
                },
                '2x': {
                  url: "https://thisisanurl.com/code/432432/ibuprofeno-imagen-default-90@2x.webp"
                }
              }
            }
          },
          width: 90,
          height: 90
        },
        100: {
          formats: {
            avif: {
              resolutions: {
                '1x': {
                  url: "https://thisisanurl.com/code/432432/ibuprofeno-imagen-default-100.avif"
                },
                '2x': {
                  url: "https://thisisanurl.com/code/432432/ibuprofeno-imagen-default-100@2x.avif"
                }
              }
            },
            jpg: {
              resolutions: {
                '1x': {
                  url: "https://thisisanurl.com/code/432432/ibuprofeno-imagen-default-100.jpg"
                },
                '2x': {
                  url: "https://thisisanurl.com/code/432432/ibuprofeno-imagen-default-100@2x.jpg"
                }
              }
            },
            webp: {
              resolutions: {
                '1x': {
                  url: "https://thisisanurl.com/code/432432/ibuprofeno-imagen-default-100.webp"
                },
                '2x': {
                  url: "https://thisisanurl.com/code/432432/ibuprofeno-imagen-default-100@2x.webp"
                }
              }
            }
          },
          width: 100,
          height: 100
        },
        140: {
          formats: {
            avif: {
              resolutions: {
                '1x': {
                  url: "https://thisisanurl.com/code/432432/ibuprofeno-imagen-default-140.avif"
                },
                '2x': {
                  url: "https://thisisanurl.com/code/432432/ibuprofeno-imagen-default-140@2x.avif"
                }
              }
            },
            jpg: {
              resolutions: {
                '1x': {
                  url: "https://thisisanurl.com/code/432432/ibuprofeno-imagen-default-140.jpg"
                },
                '2x': {
                  url: "https://thisisanurl.com/code/432432/ibuprofeno-imagen-default-140@2x.jpg"
                }
              }
            },
            webp: {
              resolutions: {
                '1x': {
                  url: "https://thisisanurl.com/code/432432/ibuprofeno-imagen-default-140.webp"
                },
                '2x': {
                  url: "https://thisisanurl.com/code/432432/ibuprofeno-imagen-default-140@2x.webp"
                }
              }
            }
          },
          width: 140,
          height: 140
        },
        300: {
          formats: {
            avif: {
              resolutions: {
                '1x': {
                  url: "https://thisisanurl.com/code/432432/ibuprofeno-imagen-default-300.avif"
                },
                '2x': {
                  url: "https://thisisanurl.com/code/432432/ibuprofeno-imagen-default-300@2x.avif"
                }
              }
            },
            jpg: {
              resolutions: {
                '1x': {
                  url: "https://thisisanurl.com/code/432432/ibuprofeno-imagen-default-300.jpg"
                },
                '2x': {
                  url: "https://thisisanurl.com/code/432432/ibuprofeno-imagen-default-300@2x.jpg"
                }
              }
            },
            webp: {
              resolutions: {
                '1x': {
                  url: "https://thisisanurl.com/code/432432/ibuprofeno-imagen-default-300.webp"
                },
                '2x': {
                  url: "https://thisisanurl.com/code/432432/ibuprofeno-imagen-default-300@2x.webp"
                }
              }
            }
          },
          width: 300,
          height: 300
        },
        420: {
          formats: {
            avif: {
              resolutions: {
                '1x': {
                  url: "https://thisisanurl.com/code/432432/ibuprofeno-imagen-default-420.avif"
                },
                '2x': {
                  url: "https://thisisanurl.com/code/432432/ibuprofeno-imagen-default-420@2x.avif"
                }
              }
              },
              jpg: {
                resolutions: {
                  '1x': {
                    url: "https://thisisanurl.com/code/432432/ibuprofeno-imagen-default-420.jpg"
                  },
                  '2x': {
                    url: "https://thisisanurl.com/code/432432/ibuprofeno-imagen-default-420@2x.jpg"
                  }
                }
              },
              webp: {
                resolutions: {
                  '1x': {
                    url: "https://thisisanurl.com/code/432432/ibuprofeno-imagen-default-420.webp"
                  },
                  '2x': {
                    url: "https://thisisanurl.com/code/432432/ibuprofeno-imagen-default-420@2x.webp"
                  }
                }
              }
            },
          width: 420,
          height: 420
        },
        1000: {
          formats: {
            avif: {
              resolutions: {
                '1x': {
                  url: "https://thisisanurl.com/code/432432/ibuprofeno-imagen-default-1000.avif"
                },
                '2x': {
                  url: "https://thisisanurl.com/code/432432/ibuprofeno-imagen-default-1000@2x.avif"
                }
              }
              },
              jpg: {
                resolutions: {
                  '1x': {
                    url: "https://thisisanurl.com/code/432432/ibuprofeno-imagen-default-1000.jpg"
                  },
                  '2x': {
                    url: "https://thisisanurl.com/code/432432/ibuprofeno-imagen-default-1000@2x.jpg"
                  }
                }
              },
              webp: {
                resolutions: {
                  '1x': {
                    url: "https://thisisanurl.com/code/432432/ibuprofeno-imagen-default-1000.webp"
                  },
                  '2x': {
                    url: "https://thisisanurl.com/code/432432/ibuprofeno-imagen-default-1000@2x.webp"
                  }
                }
              }
          },
          width: 1000,
          height: 1000
        }
      }
    }
  ]
}

const mockProductOne : CartProduct = {
  id: "234234",
  name: "Ibuprofeno",
  dosageForm: "pills",
  packagingSize: "20 units",
  supplier: "PillCompany",
  code: "14024547",
  image: "https://s3-alpha-sig.figma.com/img/646f/08f5/333a22505486f4364a3616ec3b1b3591?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NXt2BAM~HaaT2T3dVsoRPoAbSMso6gIy9XWAjqC2OFn9lVq1mE57dYhvIMqFtJ3YFosutL8Y~FV0IMcyPih8ZqIyQ54bjiSqvOGwd94b3xoNNtmbr0HKlOJRflNMpa-p6Kz7yUqgvIGoyW0Yae7igVjVbjqFopzvTVHKI3xAc6lyt9~RVu4TyrpL96MCHn29Yc80u64E5joAT0sluuXdFvyi9VRKONBlHQGCJxegJMOFHhd10Hsvykz9icGIQNfWrm6oTokxTai2EAB0V93xSftcw3Q~qGn~bYbcjJkMjSvu5e7JtkQXaRfOzizl8qez7N~LrcHMAe0SEk9Xdk8j-Q__",
  price: 6,
  quantity: 2,
  stockLevel: 4,
}

const mockProductTwo : CartProduct = {
  id: "456456",
  name: "Gelocatil",
  dosageForm: "pills",
  packagingSize: "20 units",
  supplier: "PillCompany",
  code: "14024547",
  image: "https://s3-alpha-sig.figma.com/img/646f/08f5/333a22505486f4364a3616ec3b1b3591?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NXt2BAM~HaaT2T3dVsoRPoAbSMso6gIy9XWAjqC2OFn9lVq1mE57dYhvIMqFtJ3YFosutL8Y~FV0IMcyPih8ZqIyQ54bjiSqvOGwd94b3xoNNtmbr0HKlOJRflNMpa-p6Kz7yUqgvIGoyW0Yae7igVjVbjqFopzvTVHKI3xAc6lyt9~RVu4TyrpL96MCHn29Yc80u64E5joAT0sluuXdFvyi9VRKONBlHQGCJxegJMOFHhd10Hsvykz9icGIQNfWrm6oTokxTai2EAB0V93xSftcw3Q~qGn~bYbcjJkMjSvu5e7JtkQXaRfOzizl8qez7N~LrcHMAe0SEk9Xdk8j-Q__",
  price: 5,
  quantity: 2,
  stockLevel: 4,
}

const mockProductThree : CartProduct = {
  id: "789789",
  name: "Dolotil",
  dosageForm: "pills",
  packagingSize: "30 units",
  supplier: "PillCompany",
  code: "14024547",
  image: "https://s3-alpha-sig.figma.com/img/646f/08f5/333a22505486f4364a3616ec3b1b3591?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NXt2BAM~HaaT2T3dVsoRPoAbSMso6gIy9XWAjqC2OFn9lVq1mE57dYhvIMqFtJ3YFosutL8Y~FV0IMcyPih8ZqIyQ54bjiSqvOGwd94b3xoNNtmbr0HKlOJRflNMpa-p6Kz7yUqgvIGoyW0Yae7igVjVbjqFopzvTVHKI3xAc6lyt9~RVu4TyrpL96MCHn29Yc80u64E5joAT0sluuXdFvyi9VRKONBlHQGCJxegJMOFHhd10Hsvykz9icGIQNfWrm6oTokxTai2EAB0V93xSftcw3Q~qGn~bYbcjJkMjSvu5e7JtkQXaRfOzizl8qez7N~LrcHMAe0SEk9Xdk8j-Q__",
  price: 4,
  quantity: 1,
  stockLevel: 4,
}
const mockCartWithThreeItems: CartState = {
  cart: {
    id:0,
    cartItems: [
      mockProductOne,
      mockProductTwo,
      mockProductThree
    ],
    totalQuantityCount: 3,
    totalPrice: 0
  }
}

describe('cartSlice: ', () => {

  it('should add to cart a new cart', async () => {
    const resultState = reducer(
      mockCartState,
      addToCart(mockProduct)
    );
    console.log(resultState)
    expect(resultState).toEqual({
      cart: {
        id: 0,
        cartItems: [ {
          code: "14024547",
          dosageForm: "pills",
          id: "234234",
          image: "https://s3-alpha-sig.figma.com/img/646f/08f5/333a22505486f4364a3616ec3b1b3591?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NXt2BAM~HaaT2T3dVsoRPoAbSMso6gIy9XWAjqC2OFn9lVq1mE57dYhvIMqFtJ3YFosutL8Y~FV0IMcyPih8ZqIyQ54bjiSqvOGwd94b3xoNNtmbr0HKlOJRflNMpa-p6Kz7yUqgvIGoyW0Yae7igVjVbjqFopzvTVHKI3xAc6lyt9~RVu4TyrpL96MCHn29Yc80u64E5joAT0sluuXdFvyi9VRKONBlHQGCJxegJMOFHhd10Hsvykz9icGIQNfWrm6oTokxTai2EAB0V93xSftcw3Q~qGn~bYbcjJkMjSvu5e7JtkQXaRfOzizl8qez7N~LrcHMAe0SEk9Xdk8j-Q__",
          name: "Ibuprofeno",
          packagingSize: "20 units",
          price: 6.5,
          quantity: 1,
          stockLevel: 4,
          supplier: "PillCompany",
        } ],
        totalQuantityCount: 1,
        totalPrice: 6.5
      }
    });
  });

  it('should increment the quantity of an item and the totalQuantity of the cart', async () => {
    const resultState = reducer(
      mockCartWithThreeItems,
      incrementQuantity("234234")
    );

    // writing mockProductOne but changing the quantity
    expect(resultState).toEqual({
      cart: {
        id: 0,
        cartItems: [
          {id: "234234",
          name: "Ibuprofeno",
          dosageForm: "pills",
          packagingSize: "20 units",
          supplier: "PillCompany",
          code: "14024547",
          image: "https://s3-alpha-sig.figma.com/img/646f/08f5/333a22505486f4364a3616ec3b1b3591?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NXt2BAM~HaaT2T3dVsoRPoAbSMso6gIy9XWAjqC2OFn9lVq1mE57dYhvIMqFtJ3YFosutL8Y~FV0IMcyPih8ZqIyQ54bjiSqvOGwd94b3xoNNtmbr0HKlOJRflNMpa-p6Kz7yUqgvIGoyW0Yae7igVjVbjqFopzvTVHKI3xAc6lyt9~RVu4TyrpL96MCHn29Yc80u64E5joAT0sluuXdFvyi9VRKONBlHQGCJxegJMOFHhd10Hsvykz9icGIQNfWrm6oTokxTai2EAB0V93xSftcw3Q~qGn~bYbcjJkMjSvu5e7JtkQXaRfOzizl8qez7N~LrcHMAe0SEk9Xdk8j-Q__",
          price: 6,
          quantity: 3,
          stockLevel: 4,},
          mockProductTwo,
          mockProductThree
        ],
        totalQuantityCount: 6,
        totalPrice: 32
      }
    });
  });


  it('should decrement the quantity of an item and the totalQuantity of the cart', async () => {
    const resultState = reducer(
      mockCartWithThreeItems,
      decrementQuantity("234234")
    );

    // writing mockProductOne but changing the quantity
    expect(resultState).toEqual({
      cart: {
        id: 0,
        cartItems: [
          {id: "234234",
          name: "Ibuprofeno",
          dosageForm: "pills",
          packagingSize: "20 units",
          supplier: "PillCompany",
          code: "14024547",
          image: "https://s3-alpha-sig.figma.com/img/646f/08f5/333a22505486f4364a3616ec3b1b3591?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NXt2BAM~HaaT2T3dVsoRPoAbSMso6gIy9XWAjqC2OFn9lVq1mE57dYhvIMqFtJ3YFosutL8Y~FV0IMcyPih8ZqIyQ54bjiSqvOGwd94b3xoNNtmbr0HKlOJRflNMpa-p6Kz7yUqgvIGoyW0Yae7igVjVbjqFopzvTVHKI3xAc6lyt9~RVu4TyrpL96MCHn29Yc80u64E5joAT0sluuXdFvyi9VRKONBlHQGCJxegJMOFHhd10Hsvykz9icGIQNfWrm6oTokxTai2EAB0V93xSftcw3Q~qGn~bYbcjJkMjSvu5e7JtkQXaRfOzizl8qez7N~LrcHMAe0SEk9Xdk8j-Q__",
          price: 6,
          quantity: 1,
          stockLevel: 4,},
          mockProductTwo,
          mockProductThree
        ],
        totalQuantityCount: 4,
        totalPrice: 20
      }
    });
  });


  it('should remove an item from the cart', async () => {
    const resultState = reducer(
      mockCartWithThreeItems,
      removeItemFromCart(mockProductTwo)
    );

    expect(resultState).toEqual({
      cart: {
        id: 0,
        cartItems: [
          mockProductOne,
          mockProductThree
        ],
        totalQuantityCount: 3,
        totalPrice: 16
      }
    });
  });
});
