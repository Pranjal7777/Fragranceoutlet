async function getData(url) {
    try {
      let res = await fetch(url);

      let data = await res.json();
    //   appendData(data);
    return data
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
//   getData();

  async function appendData(data, location) {
    data.map((elem) => {
      let productDiv = document.createElement("div");
      productDiv.setAttribute("class", "productDiv");

      let productImg = document.createElement("img");
      productImg.setAttribute("src", elem.image);
      productImg.setAttribute("class", "productImg");

      let title = document.createElement("h3");
      title.textContent = elem.title;
      title.setAttribute("class", "title");

      let price = document.createElement("h4");
      price.textContent = "Price: " + "$" + elem.price;
      price.setAttribute("class", "price");

      let discount = document.createElement("p");
      discount.textContent = "BUY 1 GET 1 AT 30% OFF  ";
      discount.setAttribute("class", "discount");

      let mix = document.createElement("p");
      mix.textContent = "MIX & MATCH";
      mix.setAttribute("class", "mix");

      productDiv.append(productImg, title, price, discount);

      location.append(productDiv);
    });
  }


  export {getData, appendData}