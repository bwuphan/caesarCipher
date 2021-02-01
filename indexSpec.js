describe('caesarCipher test', () => {
  const cipher = require('./index.js')
  it('returns same string if no shift is present.', () => {
    expect(cipher('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG')).toEqual('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG');
  });

  it('shifts the string right if a positive number is passed in.', () => {
    expect(cipher('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG')).toEqual('QEB NRFZH YOLTK CLU GRJMP LSBO QEB IXWV ALD');
  });

  it('shifts the string right if a positive number is passed in.', () => {
    expect(cipher('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG')).toEqual('WKH TXLFN EURZQ IRA MXPSV RYHU WKH ODCB GRJ');
  });  
});
