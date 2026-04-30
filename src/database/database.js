import fs from "node:fs/promises"

const DATABASE_PATH = new URL("db.json", import.meta.url)

export class Database {
  #database = {};

  constructor() {
    fs.readFile(DATABASE_PATH, "utf-8")
      .then((data) => {
        this.#database = JSON.parse(data); // se o arquivo existir, transforma o conteúdo em um objeto e armazena na propriedade #database
      })
      .catch(() => {
        this.#persist(); // se o arquivo não existir, cria um novo com um objeto vazio
      })
  }

  #persist() {
    fs.writeFile(DATABASE_PATH, JSON.stringify(this.#database));
  }

  insert(table, data) {
    if (Array.isArray(this.#database[table])) {
      this.#database[table].push(data);
    } else {
      this.#database[table] = [data];
    }

    this.#persist();
  }

  select(table) {
     let data = this.#database[table] ?? [];
     return data;
  }
}