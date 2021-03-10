import low from 'lowdb';
import moment from 'moment';
import FileSync from 'lowdb/adapters/FileSync';

const adapter = new FileSync('db.json');
const db = low(adapter);

export default function handler(req, res) {
  const { estimatedate, name, phone, id } = req.body;
  db.get('services')
    .find({ id })
    .assign({ estimatedate, name, phone })
    .write();
  res.status(200).json(db.get('services').value());
}