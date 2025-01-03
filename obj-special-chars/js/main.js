function htmlspecialchars(formData) {
    const chars = {
      '&': '&amp;',
      '<' : '&lt;',
      '>' : '&gt;',
      '"' : '&quot;',
    }
    for (let char in chars){
      formData = formData.replaceAll(char, chars[char])
    }
    return formData
  }

  console.log(
    htmlspecialchars("<h2>Hello World</h2>"),
    "&lt;h2&gt;Hello World&lt;/h2&gt;"
  );
  console.log(
    htmlspecialchars("Hello, how would you & I fare?"),
    "Hello, how would you &amp; I fare?"
  );
  console.log(
    htmlspecialchars('How was "The Matrix"?  Did you like it?'),
    'How was &quot;The Matrix&quot;?  Did you like it?'
  );
  console.log(
    htmlspecialchars("<script>alert('Website Hacked!');</script>"),
    "&lt;script&gt;alert('Website Hacked!');&lt;/script&gt;"
  );