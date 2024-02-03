// Ex. 1

class ServiceClass {
  constructor() {
    if (!ServiceClass.instance) {
      ServiceClass.instance = this;
    }
    return ServiceClass.instance;
  }

  async fetchData(url) {
    const response = await fetch(url);
    return response.json();
  }

  groupArrayOfObj(array, key) {
    return array.reduce((result, currentItem) => {
      (result[currentItem[key]] = result[currentItem[key]] || []).push(
        currentItem
      );
      return result;
    }, {});
  }

  async getPublicGroupedData() {
    const data = await this.fetchData(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return this.groupArrayOfObj(data, "id");
  }
}

const dataService = new ServiceClass();

dataService
  .getPublicGroupedData()
  .then((groupedData) => console.log(groupedData));
