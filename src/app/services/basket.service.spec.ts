import { TestBed } from '@angular/core/testing';

import { BasketService } from './basket.service';

describe('BasketService', () => {
  let service: BasketService;
  beforeEach(() =>{service = new BasketService()});

  it('should be created', () => {
    const service: BasketService = TestBed.get(BasketService);
    expect(service).toBeTruthy();
  });

  it('calcul price of product with offer one', () => {
    
           const result = service.calculPriceBasket(2, 0);
           expect(result).toEqual(2);
    
       });

       it('calcul price of product with offer tow', () => {
        
               const result = service.calculPriceBasket(2, 1);
               expect(result).toEqual(4);
        
           });
});

class BasketServiceStub{

}