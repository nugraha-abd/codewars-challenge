// return masked string
function maskify(cc) {
  if (cc.length - 1 > 3) {
    let lastFourDigit = cc.slice(-4, cc.length + 1)
    let maskedData = cc.slice(0, -4)

    let maskedCC = maskedData.replace(maskedData, '#'.repeat(maskedData.length))
    return maskedCC + lastFourDigit
  }

  return cc
}
