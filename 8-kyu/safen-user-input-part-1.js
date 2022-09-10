function htmlspecialchars(formData) {
  return formData
    .split('')
    .map((char) => {
      if (char === '<') return (char = '&lt;')
      if (char === '>') return (char = '&gt;')
      if (char === '"') return (char = '&quot;')
      if (char === '&') return (char = '&amp;')
      return char
    })
    .join('')
}
