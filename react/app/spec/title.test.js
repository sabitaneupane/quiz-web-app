import title from '../component/title';

describe('<Title />', () => {
  it('Should have title', () => {
    expect(title()).toBe("Hello from title");
  });
});
