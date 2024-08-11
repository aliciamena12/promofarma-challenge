import { Product } from "./product-tile/product-tile.component";
import React from 'react';
import { render } from '@testing-library/react';
import ProductList from "./product-list.component";


const mockProduct1: Product = {
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
  
const mockProductList: Array<Product> = [];
mockProductList.push(mockProduct1);
 
 
describe('product-tile component: ', () => {

  it('is rendered', () => {
    //given
    const { getByText, getByTitle, getByAltText } = render(
      <ProductList products={mockProductList} />
    );

    //then
    expect(getByAltText('Image of product: Ibuprofeno').getAttribute('alt')).toEqual("Image of product: " + mockProductList[0].name);
    expect(getByText('Ibuprofeno').innerHTML).toEqual(mockProductList[0].name);
    expect(getByText('20 units · pills').innerHTML).toEqual(mockProductList[0].packagingSize + " · " + mockProductList[0].dosageForm);
    expect(getByText('PillCompany').innerHTML).toEqual(mockProductList[0].supplier);
    expect(getByText('6,50 €').innerHTML).toEqual(mockProductList[0].prices.salesPrice.formattedValue);
    expect(getByText('8,25 €').innerHTML).toEqual(mockProductList[0].prices.recommendedRetailPrice.formattedValue);
    expect(getByText('1 €/St.').innerHTML).toEqual(mockProductList[0].baseprice);
    expect(getByTitle('addToCartButton').id).toBe("addToCartButton");
  });
});
  
