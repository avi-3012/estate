import moment from "moment";

const filter = (data, filters) => {
  try {
    const { price, property, location, date } = filters;
    const result = data.filter((item) => {
      if (price !== 0) {
        if (price === 1) {
          if (item.price < 500 || item.price > 1000) {
            return false;
          }
        }
        if (price === 2) {
          if (item.price < 1001 || item.price > 1500) {
            return false;
          }
        }
        if (price === 3) {
          if (item.price < 1501 || item.price > 2000) {
            return false;
          }
        }
        if (price === 4) {
          if (item.price < 2001) {
            return false;
          }
        }
      }
      if (property !== 0) {
        if (item.type !== property) {
          return false;
        }
      }
      if (location !== "") {
        if (item.location.toLowercase().includes(location.toLowercase())) {
          return true;
        }
        if (item.location !== location) {
          return false;
        }
      }
      if (date && item.moveInDate) {
        if (moment(item.moveInDate).diff(date, "days") > 0) {
          return false;
        }
      }
      return true;
    });
    return result;
  } catch (error) {}
  return null;
};

export { filter };
