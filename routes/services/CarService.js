const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

//const url = "mongodb://localhost:27017/?readPreference=primary&ssl=false";
const url =
  "mongodb+srv://sanjay:Password%231234@cluster0.gjopb.mongodb.net?retryWrites=true&w=majority";

const dbName = "carlist";

let client = null;
/**
 * Logic for fetching speakers information
 */
class CarService {
  constructor() {}

  async connect() {
    client = new MongoClient(url, { useNewUrlParser: true });
    await client.connect();

    const db = client.db(dbName);
    return db;
  }

  close() {
    client.close();
  }

  /**
   * Get a Car List by Quarter
   */
  async getListByQuarter(year, quarter) {
    const db = await this.connect();

    const firstDayofQuarter = new Date(year, (quarter - 1) * 3, 1);
    const lastDayofQuarter = new Date(year, quarter * 3, 0);

    const projection = {
      _id: 0,
      index: 1,
      make: 1,
      model: 1,
      image: 1,
      release_date: 1,
      price: 1,
    };

    let listCollection = await db.collection("list");

    const listCursor = listCollection
      .find({
        release_date: {
          $gte: firstDayofQuarter,
          $lt: lastDayofQuarter,
        },
      })
      .project(projection)
      .sort({ release_date: 1 });
    const allList = await listCursor.toArray();

    this.close();

    return allList;
  }

  /**
   * Get a Car Details by Id
   */
  async getCarDetails(index) {
    const db = await this.connect();

    let listCollection = await db.collection("list");

    const carDetails = await listCollection.findOne({ index: parseInt(index) });

    this.close();

    return carDetails;
  }
}
module.exports = CarService;
