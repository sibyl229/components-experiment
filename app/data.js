//const Tabletop = require('tabletop/src/tabletop');
//const Tabletop = require('tabletop');
const blockspring = require('blockspring');
import d from 'datascript';

const BLOCKSPRING_API_KEY = '';

const dataSourcesMap = {
  people: 'https://docs.google.com/spreadsheets/d/1AnASAXDVKwttJOBvv2GK4woa_pSmptylmI7_VfKR1QY/edit#gid=0',
  //projects: 'https://docs.google.com/spreadsheets/d/1nLBfHtpcJaiFWEdJez80TwmAn7NsC6TEM-PJx21cKH4/edit?usp=sharing',
  projects: 'https://docs.google.com/spreadsheets/d/1nLBfHtpcJaiFWEdJez80TwmAn7NsC6TEM-PJx21cKH4/edit#gid=0',
  papers: 'https://docs.google.com/spreadsheets/d/106FXfZq1zzMaFijNGsNHCpdw3fK1P1WJbxD4y6xJ9VY/edit#gid=0'
};


function dataClean(data) {

  return data.map(function(row) {
    let newRow = {};
    for (var name of Object.keys(row)) {
      var value = row[name];
      if (name && value !== null) { newRow[name] = row[name]; }
    }
    return newRow;
  });
}

function getData(type, query = null) {

  let url = dataSourcesMap[type];

  // // Return a new promise.
  // return new Promise(function(resolve, reject) {

  //   Tabletop.init( { key: url,
  //                    callback: function(data, tabletop) { resolve(data) },
  //                    simpleSheet: true } );

  // });

  // Return a new promise.
  return new Promise(function(resolve, reject) {

    blockspring.runParsed(
      "query-google-spreadsheet", {
        "query": query || "SELECT *",
        "url": url
      }, {
        "api_key": ""
      },
      function(res) {
        try {
          var data = res.params.data || [];
          data = dataClean(data);
          resolve(data);
        }
        catch (err) {
          reject(err);
        }

      });
  });

}

const databaseSchema = {
  "project/id": {":db/unique": ":db.unique/identity"}
  //"people/projects": {":db/valueType": ":db.type/ref"}
};

//Now let's use it:
function buildDatabase(){
  let allDataTypes = Object.keys(dataSourcesMap);
  let promisedData = allDataTypes.map(function(type){ return getData(type); });
  return Promise.all(promisedData).then(function(allData) {
    let mergedData = allData.reduce(function(accumulator, oneTypeData){
      return [...accumulator, ...oneTypeData];
    }, []);
    const db = d.db_with(d.empty_db(databaseSchema), mergedData);
    return db;
  });
}

buildDatabase().then(function(db) {
  var a = d.pull_many(db, "[*]", [1,33, 40]);
  console.log("Success!", a);
}, function(error) {
  console.error("Failed!", error);
});

const db; // = buildDatabase();
//console.log(db);
export default db;
