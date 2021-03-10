import React, { Fragment } from 'react';
import './ServiceInfo.css';
import classNames from 'classnames';

export interface ServiceInfoProps {
  caracteristicas: Record<string, any>;
  onChangeStatus: (id) => void;
}

const noPhoto = "https://www.autodata1.com/img/car_model_default.png";
export const ServiceInfo: React.FC<ServiceInfoProps> = ({ caracteristicas, onChangeStatus }) => {
  const addDefaultSrc = (ev) => {
    ev.target.src = noPhoto;
    ev.target.onerror = null;
  };
  return (
  <Fragment>
    <div className={classNames("card", caracteristicas.estimatedate !== undefined && "cardSelected")}>
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
        <p>Kilometers: {caracteristicas.km}</p>
      )}
      {caracteristicas?.estimatedate && (
        <div>
          <p>Estimated date: {caracteristicas.estimatedate}</p>
          <button onClick={() => onChangeStatus(caracteristicas.id)}>
            Cambiar Status
          </button>
        </div>
      )}
    </div>
  </Fragment>
  );
};
