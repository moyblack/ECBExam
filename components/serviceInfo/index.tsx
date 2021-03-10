import React, { Fragment, useState } from 'react';
import styles from '../../styles/Services.module.css';
import classNames from 'classnames';

export interface ServiceInfoProps {
  caracteristicas: Record<string, any>;
  onChangeStatus: (name, phone, dueDate, idService) => void;
}

const noPhoto = "https://www.autodata1.com/img/car_model_default.png";
const ServiceInfo: React.FC<ServiceInfoProps> = ({ caracteristicas, onChangeStatus }) => {
  const [addService, setAddService] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");

  const addDefaultSrc = (ev) => {
    ev.target.src = noPhoto;
    ev.target.onerror = null;
  };

  const addServiceInfo = (deliver = false) => {
    if (deliver) {
      onChangeStatus("", "", "", caracteristicas.id);
    } else {
      onChangeStatus(name, phone, date, caracteristicas.id);
    }
  };

  return (
    <Fragment>
      <div className={classNames(styles.card, caracteristicas.estimatedate && caracteristicas.estimatedate !== "" && styles.cardSelected)}>
        {caracteristicas?.image && (
          <img src={caracteristicas.image} alt="Car Image" width="48" height="48" onError={ev => addDefaultSrc(ev)} />
        )}
        {caracteristicas?.make && (
          <h4>{caracteristicas.make}</h4>
        )}
        {caracteristicas?.model && (
          <h4>{caracteristicas.model}</h4>
        )}
        {caracteristicas?.description && (
          <h5>Description: {caracteristicas.description}</h5>
        )}
        {caracteristicas?.km && (
          <h6>Kilometers: {caracteristicas.km}</h6>
        )}
        {caracteristicas?.estimatedate && (
          <h6>Estimated date: {caracteristicas.estimatedate}</h6>
        )}
        {addService && (
          <form onSubmit={() => addServiceInfo()}>
            <label>
              Name:
              <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
            </label>
            <label>
              Phone:
              <input type="text" value={phone} onChange={(event) => setPhone(event.target.value)} />
            </label>
            <label>
              Due Date:
              <input type="text" value={date} onChange={(event) => setDate(event.target.value)} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        )}
        {
          caracteristicas.estimatedate && caracteristicas.estimatedate !== ""
            ? (<button onClick={() => addServiceInfo(true)}>
              {"Entregar Vehiculo"}
            </button>)
            : (
              <button onClick={() => setAddService(!addService)}>
                {addService ? "Cancelar" : "Poner en mantenimiento"}
              </button>
            )
        }
      </div>
    </Fragment>
  );
};

export default ServiceInfo;
