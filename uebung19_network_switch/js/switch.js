import Printer from './printer.js';

export default class Switch{
  #ports;
  #currentPrinters;
  constructor(name, ports){
    this.name = name;
    this.printers = new Map();
    this.ports = ports;
    this.#currentPrinters = 0;
  }

  //getter

  get ports(){
    return this.#ports;
  }
  get currentPrinters(){
    return this.#currentPrinters;
  }
  get freePorts(){
    return this.#ports-this.#currentPrinters;
  }

  //setter

  set ports(value){
    if(value >= 4 && value <= 16){
      this.#ports = value;
    }else{
      this.#ports = 8;
    }
  }
  set currentPrinters(value){
    this.#currentPrinters += value;
  }

  //methods

  connectPrinter(hostname, macAdress, ipAdress, maxPaper, printerType, colorPrinter, printResolution){
    if(this.#ports <= this.#currentPrinters){
      return false;
      //no free ports
    }
    let printer = new Printer(hostname, macAdress, ipAdress, maxPaper, printerType, colorPrinter, printResolution);
    this.printers.set(macAdress, printer);
    this.#currentPrinters++;
    return true;
  }

  removePrinter(macAddress){
    if(this.printers.has(macAddress) == true){
      this.printers.delete(macAddress);
      this.currentPrinters -= 1;
      return true;
    }
    return false;
  }

  findByMac(macAddress){
    if(this.printers.has(macAddress) == true){
      return this.printers.get(macAddress);
    }
    return null;
  }
  findByName(name){
    for(let value of this.printers.values){
      if(value.hostname == name){
        return value;
      }
    }
    return null;
  }
  print(macAddress, pages){
    if(this.printers.has(macAddress) == true){
      let printer = this.printers.get(macAddress);
      printer.printPages(pages);
    }
  }
  fillPrinters(){
    for(let printer of this.printers){
      printer.fillPrinter();
    }
  }
}


