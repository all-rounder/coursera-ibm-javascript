function resetSearch() {
    const searchInput = document.getElementById("searchInput");
    searchInput.value = "";
}

function searchResult(e) {
    e.preventDefault();
    const searchInput = document.getElementById("searchInput");
    const searchWord = searchInput.value.toLowerCase();
    const url = "api/travel_recommendation_api.json";

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log("Response JSON: ", data);
            if (searchWord == "beach" || searchWord == "beaches") {
                document.getElementById("searchResult").classList.remove("invisible");
                document.getElementsByClassName("image")[0].src = data.beaches[0].imageUrl;
                document.getElementsByClassName("name")[0].innerHTML = data.beaches[0].name;
                document.getElementsByClassName("desc")[0].innerHTML = data.beaches[0].description;
                document.getElementsByClassName("image")[1].src = data.beaches[1].imageUrl;
                document.getElementsByClassName("name")[1].innerHTML = data.beaches[1].name;
                document.getElementsByClassName("desc")[1].innerHTML = data.beaches[1].description;
                // let descElement = document.getElementsByClassName("desc")[0];
            } else if (searchWord == "temple" || searchWord == "temples") {
                document.getElementById("searchResult").classList.remove("invisible");
                document.getElementsByClassName("image")[0].src = data.temples[0].imageUrl;
                document.getElementsByClassName("name")[0].innerHTML = data.temples[0].name;
                document.getElementsByClassName("desc")[0].innerHTML = data.temples[0].description;
                document.getElementsByClassName("image")[1].src = data.temples[1].imageUrl;
                document.getElementsByClassName("name")[1].innerHTML = data.temples[1].name;
                document.getElementsByClassName("desc")[1].innerHTML = data.temples[1].description;
            } else if (searchWord == "country" || searchWord == "countries") {
                document.getElementById("searchResult").classList.remove("invisible");
                document.getElementsByClassName("image")[0].src = data.countries[0].cities[0].imageUrl;
                document.getElementsByClassName("name")[0].innerHTML = data.countries[0].cities[0].name;
                document.getElementsByClassName("desc")[0].innerHTML = data.countries[0].cities[0].description;
                document.getElementsByClassName("image")[1].src = data.countries[1].cities[0].imageUrl;
                document.getElementsByClassName("name")[1].innerHTML = data.countries[1].cities[0].name;
                document.getElementsByClassName("desc")[1].innerHTML = data.countries[1].cities[0].description;
            }
            
        })
        .catch(console.error);

}

let searchForm = document.getElementById("searchForm");
searchForm.addEventListener("submit", searchResult);