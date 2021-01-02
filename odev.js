import data from "./data.js"
import {createTableElements} from "./main.js";

/*
  ALWAYS USE IMPORTED data ARRAY TO MAKE MANIPULATIONS

  ID for allcities table is #allcities
  ID for singlecity table is #singlecity
/*

/*
* PASS ARRAY TO createTableElements function to fill tables
* first argument - data
* second argument - tableId
* Example createTableElements([{name: "Istanbul"}], "allcities");
*/

/*
    ids for buttons and select

    Population - bigger than 500.000 => #populationBigger
    land area - less than 1000 => #landAreaLess
    Does any city has population less than 100.000? => #isPopulationLess
    Does every city has land area bigger than 100? => #isLandBigger
    city select => #selectcity
*/

/* RESET ACTION */
document.querySelector("#reset").addEventListener("click", () => {
    createTableElements(data, "allcities");
    createTableElements([], "singlecity")
});

/* START CODING HERE */

//Population - bigger than 500.000 => #populationBigger
document.querySelector("#populationBigger").addEventListener("click", () => {
  const biggerThan500Thousand = data.filter(city => city.population > 500_000); //filter kullanarak city arrayi içerisinde bulunan populationı 500K dan büyük olan değerleri bulup biggerThan500Thousand arrayine atadık.
  createTableElements(biggerThan500Thousand, "allcities");
});

//land area - less than 1000 => #landAreaLess
document.querySelector("#landAreaLess").addEventListener("click", () => {  //filter kullanarak city arrayi içerisinde bulunan landArea 100K dan küçük olan değerleri bulup lessThanThousand arrayine atadık.
  const lessThanThousand = data.filter(city => city.landArea < 1000);      //filter:verilen dizi içerisindeki elemaların şartı true dönen değerleri yeni dizi oluşturarak geri döndürür. 
  createTableElements(lessThanThousand, "allcities");

});

//Does any city has population less than 100.000? => #isPopulationLess
document.querySelector('#isPopulationLess').addEventListener("click", () => {  //some kullanarak city arrayi içerisinde bulunan population 100K dan küçük olan en az bir değer varsa True dönüyor değil ise false dönüyor ve alert yazdırıyoruz.
  const isPopulationLess = data.some(city => city.population < 100_000);       //some:dizi elemanlarından bir tanesi bile koşulu sağlarsa geriye true değeri döndürülür hiç biri sağlamazsa false döner.
  if(isPopulationLess==true){
    alert("Yes");
  }else{
    alert("No");
  }
})

//Does every city has land area bigger than 100? => #isLandBigger
document.querySelector('#isLandBigger').addEventListener("click", () => {  //every kullanarak city arrayi içerisinde bulunan population degerlerinin tamamı 100 dan büyük mü diye kontrol ediyoruz varsa True dönüyor değil ise false dönüyor ve alert yazdırıyoruz.
  const isLandBigger = data.every(city => city.population > 100);          //every: Eğer tüm dizi elemanları koşulu sağlarsa geriye true değeri döndürülür. Eğer bir tane bile koşulu sağlamayan dizi elemanı olursa geriye false değeri döndürülür.
  if(isLandBigger==true){
    alert("Yes");
  }else{
    alert("No");
  }
})

//city select => #selectcity
const selectOptions = (data) => {                  //  cityleri cekmek için selectOptions fonksiyon olşuturuyoruz.
  const selectOptionElement = document.querySelector("#inputGroupSelect01"); // inputGroupSelect01 selecti seciyoruz.
  data.forEach((city) => {                                     //arrayimiz içerisindeki elemanlarda dolaşıyoruz.
    const cityOption = document.createElement("option");       //selectimizin optionslarını oluşturuyoruz.
    cityOption.text = city.name;
    cityOption.value = city.name;
    selectOptionElement.appendChild(cityOption);            //Oluşturduğumuz option elementlerini selectimize uyguluyoruz.
  });
};

selectOptions(data);                                        //fonksiyonu çalıştırıyoruz


document.querySelector('#inputGroupSelect01').addEventListener("change", (e) => {  //Select içerisinde değişiklik olup olmadığını dinler
  let selectedCityName = e.target.value;                                          //Selectin value sini alıyoruz.
  
  const selectedCity = data.find(city => city.name === selectedCityName);          //Alınan değer ile array içerisinde gelen deger eşleşirse bu degeri selectedCity arrayıne atıyoruz.
  createTableElements([selectedCity], "singlecity");                              //singlecity tablosunu oluşturmak için selectedCity arrayını createTableElements fonksiyonuna gönderiyoruz.
}); 
