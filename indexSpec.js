describe('caesarCipher test', () => {
  const cipher = require('./index.js').cipher

  it('returns an empty string if no string is present.', () => {
    expect(cipher('')).toEqual('');
    expect(cipher('', 2)).toEqual('');
  })

  it('returns same string if no shift is present.', () => {
    expect(cipher('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG')).toEqual('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG');
  });

  it('returns same string if shift is 0', () => {
    expect(cipher('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG', 0)).toEqual('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG');
  });

  it('shifts the string right if a positive number is passed in.', () => {
    expect(cipher('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG', 3)).toEqual('WKH TXLFN EURZQ IRA MXPSV RYHU WKH ODCB GRJ');
  });

  it('shifts the string left if negative number is passed in.', () => {
    expect(cipher('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG', -3)).toEqual('QEB NRFZH YOLTK CLU GRJMP LSBO QEB IXWV ALD');
  });  

  it('shifts correctly even if shift is greater than number of letters in alphabet', () => {
    expect(cipher('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG', 27)).toEqual('UIF RVJDL CSPXO GPY KVNQT PWFS UIF MBAZ EPH');
  });

  it('shifts lower case letters.', () => {
    expect(cipher('the quick brown fox jumps over the lazy dog', 3)).toEqual('wkh txlfn eurzq ira mxpsv ryhu wkh odcb grj');
  });

  it('shifts a mix of lower case and upper case letters.', () => {
    expect(cipher('tHe quick BROWN fox jUmPs over the LazY Dog', 3)).toEqual('wKh txlfn EURZQ ira mXpSv ryhu wkh OdcB Grj');
  });  

  it('returns an empty string if one character is not a letter or whitespace.', () => {
    expect(cipher('TH-E QUICK BROWN FOX JUMPS OVER THE LAZY DOG', 3)).toEqual('');
    expect(cipher('2', 3)).toEqual('');
    expect(cipher('er@', 3)).toEqual('');
  });    
});
