import axios from "axios";

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlacesData = async (sw, ne) => {
  try {
    console.log(sw, ne);
    const {
      data: { data },
    } = await axios.get(URL, {
      params: {
        bl_latitude: sw?.lat,
        tr_latitude: ne?.lat,
        bl_longitude: sw?.lng,
        tr_longitude: ne?.lng,
      },
      headers: {
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
        "x-rapidapi-key": "0e60218015msh920a01d7e2489a2p199125jsnf8d94083eeab",
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
