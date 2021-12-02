function getElementByXpath(path) {
  return document.evaluate(
    path,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;
}

setTimeout(function() {
  getElementByXpath(
    "//*[@id='react-root']/section/nav/div[2]/div/div/div[3]/div/div[5]/a"
  ).click();
  setTimeout(function() {
    getElementByXpath(
      "//*[@id='react-root']/section/nav/div[2]/div/div/div[3]/div/div[5]/div/div[2]/div[2]/div/div/div/div[1]"
    ).click();
    setTimeout(function() {
      for (var i = 1; i < 100; i++) {
        getElementByXpath(
          "//*[@id='react-root']/section/nav/div[2]/div/div/div[3]/div/div[5]/div/div[2]/div[2]/div/div/div/div[1]/div[" +
            i +
            "]/div[3]/div/div[1]/button"
        ).click();
      }
    }, 10000);
  }, 10000);
}, 10000);
