import api from "@/config/http-common";

export default class ShiftService {
  // getShift() {
  //   api.send("movies", "GET");
  // }

  async getShift() {
    const { data, success } = await api.send("shift", "GET");
    return {
      data: data,
      success: success,
    };
  }

  async saveShift(url, method, shiftData) {
    const { data, success } = await api.send(url, method, null, shiftData);
    return {
      data: data,
      success: success,
    };
  }

  async deleteShift(id) {
    const { data, success } = await api.send("delete-shift", "PUT", null, {
      id: id,
    });
    return {
      data: data,
      success: success,
    };
  }

  async restoreShift(id) {
    const { data, success } = await api.send("restore-shift", "PUT", null, {
      id: id,
    });
    return {
      data: data,
      success: success,
    };
  }
}
