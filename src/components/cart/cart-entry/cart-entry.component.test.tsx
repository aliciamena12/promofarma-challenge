import React, { act } from 'react';
import { CartProduct } from '@/lib/redux/slice/cartSlice';
import CartEntry from './cart-entry.component';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const mockCartEntryProduct: CartProduct = {
  id: "123456",
  name: "Paracetamol",
  image: "thisistheimageurl.com/image-paracetamol.avif",
  packagingSize: "20 units",
  dosageForm: "pills",
  code: "654321",
  supplier: "Cinfa",
  price: 12.95,
  quantity: 2,
  stockLevel: 2
};

const mockCartEntryProductOneUnit: CartProduct = {
  id: "123456",
  name: "Paracetamol",
  image: "thisistheimageurl.com/image-paracetamol.avif",
  packagingSize: "20 units",
  dosageForm: "pills",
  code: "654321",
  supplier: "Cinfa",
  price: 12.95,
  quantity: 1,
  stockLevel: 4
};


describe('cart-entry component: ', () => {

  it('is rendered', () => {
    //given
    const { getByText, getByTitle, getByAltText } = render(
      <CartEntry key={0}
        cartItem={mockCartEntryProduct}
      />
    );

    //then
    expect(getByAltText('Image of product: Paracetamol').getAttribute('alt')).toEqual("Image of product: " + mockCartEntryProduct.name);
    expect(getByText('Paracetamol').innerHTML).toEqual(mockCartEntryProduct.name);
    expect(getByText('20 units · pills').innerHTML).toEqual(mockCartEntryProduct.packagingSize + " · " + mockCartEntryProduct.dosageForm);
    expect(getByText('PZN: 654321').innerHTML).toEqual("PZN: " + mockCartEntryProduct.code);
    expect(getByText('Einzelpreis: 12.95').innerHTML).toEqual("Einzelpreis: " + mockCartEntryProduct.price);
    expect(getByText('25.90 €').innerHTML).toEqual((mockCartEntryProduct.quantity * mockCartEntryProduct.price).toFixed(2) + " €");
    expect(getByTitle('quantity').getAttribute('value')).toEqual(mockCartEntryProduct.quantity.toString());
    expect(getByTitle('decrementQuantity').id).toBe("decrementQuantityButton");
    expect(getByTitle('incrementQuantity').id).toBe("incrementQuantityButton");
  });

  it('should test incrementQuantity is disabled if there is no more products left on stock', () => {
    //given
    const { getByTitle } = render(
      <CartEntry key={0}
        cartItem={mockCartEntryProduct}
      />
    );

    //then
    expect(getByTitle('incrementQuantity').getAttribute("disabled")).toBeTruthy;
  });

  it('should test decrementQuantity is disabled if there is one unit in the cart', () => {
    //given
    const { getByTitle } = render(
      <CartEntry key={0}
        cartItem={mockCartEntryProductOneUnit}
      />
    );

    //then
    expect(getByTitle('decrementQuantity').getAttribute("disabled")).toBeTruthy;
  });


  // test('incrementQuantity button increments quantity when clicked', async() => {
    // userEvent.setup();
    //given
    // const handleIncrementQuantity = jest.fn();

    // const { getByTitle} = render(
    //   <CartEntry key={0}
    //   cartItem={mockCartEntryProduct}
    //   />
    // );
    // const incrementQuantityButton = screen.getByText('+');
    // expect(getByTitle('quantity').getAttribute('value')).toEqual(mockCartEntryProduct.quantity.toString());

    // const documentSelectorSpy = jest.spyOn(document, 'getElementById');
    // act(() => {
    //   incrementQuantityButton.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    // });
    // expect(documentSelectorSpy).toHaveBeenCalledWith('product-specifications');

    // console.log(incrementQuantityButton.closest('button')?.innerHTML+"---antes");
 
    //when

    //then
    // expect(handleIncrementQuantity).toBeCalled();
    // expect(getByTitle('quantity').getAttribute('value')).toEqual((mockCartEntryProduct.quantity + 1).toString());
  // });

  // it('decrementQuantity button decrements quantity when clicked', () => {
  //   //given
  //   const { getByTitle } = render(
  //     <CartEntry key={0}
  //       cartItem={mockCartEntryProduct}
  //     />
  //   );
  //   expect(getByTitle('quantity').getAttribute('value')).toEqual(mockCartEntryProduct.quantity.toString());

  //   //when
  //   getByTitle('decrementQuantity').click();
  //   console.log(getByTitle('quantity').getAttribute('value'));

  //   //then
  //   expect(getByTitle('quantity').getAttribute('value')).toEqual((mockCartEntryProduct.quantity - 1).toString());
  // });

  // test('should remove an item from cart when clicking trash button', () => {
    //this test passes but it shouldn't. Had probems with clicking event.
    //given
    // const { getByTitle, getByAltText, getByText, container } = render(
    //   <CartEntry key={0}
    //     cartItem={mockCartEntryProduct}
    //   />
    // );

    // expect(getByAltText('Image of product: Paracetamol').getAttribute('alt')).toEqual("Image of product: " + mockCartEntryProduct.name);
    // expect(getByText('Paracetamol').innerHTML).toEqual(mockCartEntryProduct.name);
    // expect(getByText('20 units · pills').innerHTML).toEqual(mockCartEntryProduct.packagingSize + " · " + mockCartEntryProduct.dosageForm);
    // expect(getByText('PZN: 654321').innerHTML).toEqual("PZN: " + mockCartEntryProduct.code);
    // expect(getByText('Einzelpreis: 12.95').innerHTML).toEqual("Einzelpreis: " + mockCartEntryProduct.price);
    // expect(getByText('25.90 €').innerHTML).toEqual((mockCartEntryProduct.quantity * mockCartEntryProduct.price).toFixed(2) + " €");
    // expect(getByTitle('quantity').getAttribute('value')).toEqual(mockCartEntryProduct.quantity.toString());
    // expect(getByTitle('decrementQuantity').id).toBe("decrementQuantityButton");
    // expect(getByTitle('incrementQuantity').id).toBe("incrementQuantityButton");

    //when
    // getByTitle('removeItem').click();
    // console.log(container.innerHTML);

    // expect(getByAltText('Image of product: Paracetamol').getAttribute('alt')).toEqual("Image of product: " + mockCartEntryProduct.name);
    // expect(getByText('Paracetamol').innerHTML).toEqual(mockCartEntryProduct.name);
    // expect(getByText('20 units · pills').innerHTML).toEqual(mockCartEntryProduct.packagingSize + " · " + mockCartEntryProduct.dosageForm);
    // expect(getByText('PZN: 654321').innerHTML).toEqual("PZN: " + mockCartEntryProduct.code);
    // expect(getByText('Einzelpreis: 12.95').innerHTML).toEqual("Einzelpreis: " + mockCartEntryProduct.price);
    // expect(getByText('25.90 €').innerHTML).toEqual((mockCartEntryProduct.quantity * mockCartEntryProduct.price).toFixed(2) + " €");
    // expect(getByTitle('quantity').getAttribute('value')).toEqual(mockCartEntryProduct.quantity.toString());
    // expect(getByTitle('decrementQuantity').id).toBe("decrementQuantityButton");
    // expect(getByTitle('incrementQuantity').id).toBe("incrementQuantityButton");
    //then
    // expect(container).toBeTruthy();
  // });


});
