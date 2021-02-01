describe('caesarCipher test', () => {
  const cipher = require('./index.js')
  it('returns same string if no shift is present.', () => {
    expect(cipher('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG')).toEqual('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG');
  });

  it('returns same string if shift is 0', () => {
    expect(cipher('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG', 0)).toEqual('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG');
  });

  it('shifts the string right if a positive number is passed in.', () => {
    expect(cipher('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG', 3)).toEqual('QEB NRFZH YOLTK CLU GRJMP LSBO QEB IXWV ALD');
  });

  it('shifts the string left if negative number is passed in.', () => {
    expect(cipher('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG', -10)).toEqual('DRO AESMU LBYGX PYH TEWZC YFOB DRO VKJI NYQ');
  });  
});
