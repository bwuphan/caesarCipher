const cipher = (string, shift) => {
  if (!shift) shift = 0;

  let result = '';

  for (let i = 0; i < string.length; ++i) {
    // The current char code at string[i].
    const charCode = string.charCodeAt(i);

    // The new char code after processing.
    let newCharCode = null;

    // Upper case.
    if (charCode >= 65 && charCode < 97) {
      newCharCode = (charCode - 65 + shift) % 26
      // For negative shifts, need to add 26 if less than 0.
      if (newCharCode < 0) newCharCode += 26;
      
      newCharCode += 65
    }
    // Lower case.
    else if (charCode >= 97 && charCode < 123) {
      newCharCode = (charCode - 97 + shift) % 26
      // For negative shifts, need to add 26 if less than 0.
      if (newCharCode < 0) newCharCode += 26;

      newCharCode += 97;
    }
    // Whitespace.
    else if (charCode === 32) newCharCode = 32;
    // Error case, return empty string.
    else return '';

    
    result += String.fromCharCode(newCharCode);
  }

  return result;
}

module.exports = {
  cipher
}