class Arxitektor {
  constructor(ism, tajriba) {
    this.ism = ism;
    this.tajriba = tajriba;
  }

  ishlaydi() {
    if (this.tajriba === "Google" || this.tajriba === "Meta") {
      return true;
    } else {
      return false;
    }
  }
}

class Kod {
  constructor(arxitektor) {
    this.arxitektor = arxitektor;
  }

  yozadi() {
    if (this.arxitektor.ishlaydi()) {
      return "Muvaffaqiyat! Kod yozishda doimiy ravishda o'sib boring!";
    } else {
      return "Kod yozishda muvaffaqiyatga erisha olmadim.";
    }
  }
}

const arxitektor = new Arxitektor("Ism", "Google");
const kod = new Kod(arxitektor);
console.log(kod.yozadi());
