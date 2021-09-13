window.addEventListener('keypress', function(e) {
  if (e.shiftKey && e.keyCode == 71) {
    alert("Success!");
    navigator.permissions.query({name: "clipboard-write"}).then(result => {
      if (result.state == "granted" || result.state == "prompt") {
        navigator.clipboard.writeText("Howdy, PARTNER!");
      }
    }, () => alert("cant write"));
  }
});
