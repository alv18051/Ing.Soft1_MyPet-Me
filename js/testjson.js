const url = "../json/vets.json";

const fetchJson = async () => {
    try {
      const data = await fetch(url);
      const response = await data.json();      
      // Creo que desde acá tocará que trabajar con los json
      console.log(response);
      console.log(response["1"]);
    } catch (error) {
      console.log(error);
    }
};

fetchJson()