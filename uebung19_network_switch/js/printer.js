export default class Printer{
  #macAddress;
  #ipAddress;
  #maxPaper;
  #printerType;
  #currentPaper;
  #colorPrinter;
  #printResolution;
  constructor(hostname, macAddress, ipAddress, maxPaper, printerType, colorPrinter, printResolution){
    this.hostname = hostname;
    this.macAddress = macAddress;
    this.ipAddress = ipAddress;
    this.maxPaper = maxPaper;
    this.printerType = printerType;
    this.#currentPaper = 0;
    this.colorPrinter = colorPrinter; //boolean
    this.printResolution = printResolution;
    if(Printer.lastOctett > 255){
      throw new Error('Zu viele Drucker im Netzwerk!');
    }
  }

  //getter

  get macAddress(){
    return this.#macAddress;
  }
  get ipAddress(){
    return this.#ipAddress;
  }
  get maxPaper(){
    return this.#maxPaper;
  }
  get printerType(){
    return this.#printerType;
  }
  get currentPaper(){
    return this.#currentPaper;
  }
  get colorPrinter(){
    return this.#colorPrinter;
  }
  get printResolution(){
    return this.#printResolution;
  }
  
  //setter

  set macAddress(value){
    if(this.#checkMAC(value) == true){
      this.#macAddress = value;
    }
  }
  set ipAddress(value){
    if(this.#checkIP(value)==true){
      this.#ipAddress = value;
    }else{
      this.#ipAddress = `192.168.1.${Printer.lastOctett}`;
      Printer.lastOctett++;
    }
  }
  set maxPaper(value){
    if(value <= 1500 && value >= 50){
      this.#maxPaper = value;
    }else{
      this.#maxPaper = 500;
    }
  }
  set printerType(value){
    if(value == 'Laser' || value == 'InkJet' || value == 'ColorLaser'){
      this.#printerType = value;
    }else{
      this.#colorPrinter = 'InkJet';
    }
  }
  set currentPaper(value){
    if(value <= this.#maxPaper){
      this.#currentPaper = value;
    }
  }
  set colorPrinter(value){
    if(value == true || value == false){
      this.#colorPrinter = value;
    }else{
      this.#colorPrinter = true;
    }
  }
  set printResolution(value){
    value = Number(value);
    if(value >= 300 && value <= 2400){
      this.#printResolution = value;
    }else{
      this.#printResolution = 1200;
    }
  }

  //methods (private)
  
  //checks if user entered a valid ip-address

  #checkIP(IP) {
    let ipformat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/; if (IP.match(ipformat)) {
      return true; 
    } 
    return false; 
  }

  //checks if user entered a valid mac-address

  #checkMAC(MAC) {
    let macFormat = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;
    if (MAC.match(macFormat)) {
      return true;
    }
    return false;
  }

  //public methods

  //prints x amount of pages

  printPages(pages){
    if(pages>0 && Number.isInteger(pages) == true && pages <= this.#currentPaper ){
      this.#currentPaper-pages;
    }
  }

  //fills up the printer

  fillPrinter(){
    this.#currentPaper = this.#maxPaper;
  }

  //checks, how much paper is in the printer

  paperStatus(){
    if(this.#currentPaper > 0){
      return true;
    }
    return false;
  }

  //returns all the infos about the printer

  getPrinterInfo(){
    return [
      String(`MAC: ${this.#macAddress}  `),
      String(` IP: ${this.#ipAddress}`),
      String(` Druckername: ${this.hostname}`),
      String(` Maximale Füllung: ${this.#maxPaper}`),
      String(` Aktueller Füllstand: ${this.#currentPaper}`),
      String(` Druckertyp: ${this.#printerType}`),
      String(` Farbdrucker: ${this.#colorPrinter}`),
      String(` Druckerauflösung: ${this.#printResolution}`),
    ];
  }
}

Printer.lastOctett = 1;