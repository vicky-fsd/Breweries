
async function foo() {
  var res = await fetch("https://api.openbrewerydb.org/v1/breweries")
  var result = await res.json();
  console.log(result);
  var root = document.getElementById("root")
  root.innerHTML=" "
  for (a in  result) {
              console.log(a,result[a])
              var div = document.createElement("div")
              div.setAttribute("class","col-3 mt-3")
              div.innerHTML=`
              <div class="card" style="width: 250px;">
              <div class="card-body">
                <h5 class="card-title">${result[a].name}</h5>
                <h6 class="card-subtitle mb-2">${result[a].brewery_type}</h6>
                <address><i class="fa-solid fa-location-dot fa-bounce" style="color: #ffffff;"></i>${result[a].street}<br>
                ${result[a].city}<br>
                ${result[a].state}<br>
                ${result[a].country}-${result[a].postal_code}</address>
                <a href="${result[a].website_url}" class="btn btn-primary" target="blank">More Info</a>                
              </div>
            </div>
            </div>
              `
              root.appendChild(div)
             }
}

foo();