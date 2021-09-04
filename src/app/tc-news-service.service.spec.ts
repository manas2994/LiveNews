import { TestBed } from '@angular/core/testing';

import { TcNewsServiceService } from './tc-news-service.service';

describe('TcNewsServiceService', () => {
  let service: TcNewsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TcNewsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
