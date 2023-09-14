class DbManager {
  getData() {
    return [
      { name: "John", age: 23 },
      { name: "Alexander", age: 22 },
    ];
  }
}

class FileStorage {
  getPhoto() {
    return "photo.jpg";
  }
}

class Facade {
  constructor(private dbManager: DbManager, private fileStorage: FileStorage) { }

  getData() {

    const data = this.dbManager.getData();
    const photo = this.fileStorage.getPhoto();

    return { data, photo }
  }
}

const facade = new Facade(new DbManager(), new FileStorage())
console.log(facade.getData())