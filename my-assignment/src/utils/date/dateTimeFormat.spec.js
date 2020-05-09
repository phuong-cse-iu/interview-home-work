import { formatDate, fromNow } from './dateTimeFormat';

describe('Test dateTimeFormat func', () => {
  it('when timestamp passed in then it should return correct format', () => {
    expect(formatDate(1576506719083)).toEqual('December 16, 2019');
  });

  it('when timestamp passed in then it should return date from now', () => {
      expect(fromNow(1576506719083)).toEqual('5 months ago');
  })
});
