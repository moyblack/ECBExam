import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';

const adapter = new FileSync('db.json');
const db = low(adapter);
type CallbackFunction = (status: number, response?: Record<string, any>) => void;

const initializeServices = (): void => {
  db.defaults({ services: [], users: [] }).write();
  // Add default response
  db.get('services')
  .push({ id: 3340, description: "change of suspension", make:"Nissan", model:"Versa", estimatedate:"2021/12/01", image:"http://3.23.108.188/cars/versa.jpg"})
  .push({ id: 3341, description: "motor adjustment", make:"Honda", model:"CR-V", estimatedate:"", image:"http://3.23.108.188/cars/CR-V.jpg"})
  .push({ id: 3342, description: "engine tuning", make:"Honda", model:"Versa", estimatedate:"2020/20/12", km:90000, image:"http://3.23.108.188/cars/civic.jpg"})
  .push({ id: 3343, description: "oil change", make:"Volkswaguen", model:"Tiguan", km:13500 , image:"http://3.23.108.188/cars/tiguan.jpg"})
  .push({ id: 3344, description: "change of pads", make:"Nissan", model:"Sentra", km: 6000, image:"http://3.23.108.188/cars/sentra.jpg"})
  .push({ id: 3345, description: "change of pads", make:"Volkswagen", model:"Vento", km: 80050, image:"http://3.23.108.188/cars/vento.jpg"})
  .push({ id: 3346, description: "Change Transmission (CVT)", make:"Chevrolet", model:"Aveo NG", estimatedate:"2021/09/07", km: 33460, image:"http://3.23.108.188/cars/aveo.jpg"})
  .push({ id: 3347, description: "Change ligths", make:"Chevrolet", model:"Spark", km: 16098, image:"http://3.23.108.188/cars/spark.jpg"})
  .write();
};

const getCurrentServices = (cb: CallbackFunction): void => {
  cb(200, db.get('services').value())
};

export {
  getCurrentServices,
  initializeServices,
};
