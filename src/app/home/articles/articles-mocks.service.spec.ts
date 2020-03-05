import { TestBed } from '@angular/core/testing';

import { ArticlesMocksService } from './articles-mocks.service';

describe('ArticlesMocksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArticlesMocksService = TestBed.get(ArticlesMocksService);
    expect(service).toBeTruthy();
  });
});
