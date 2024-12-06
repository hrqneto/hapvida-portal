import { useState, useCallback } from "react";
import {
  faVideo,
  faUserMd,
  faVial,
  faCalendarCheck,
  faHospital,
  faFileMedical,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

export const useServices = () => {
  const services = [
    { label: "Agendar teleconsulta", icon: faVideo },
    { label: "Agendar consulta", icon: faUserMd },
    { label: "Agendar exame", icon: faVial },
    { label: "Meus agendamentos", icon: faCalendarCheck },
    { label: "Pronto atendimento digital", icon: faHospital },
    { label: "Resultado de exames", icon: faFileMedical },
    { label: "Autorização de procedimentos", icon: faCheckCircle },
  ];

  const [filteredServices, setFilteredServices] = useState(services);

  const handleSearch = useCallback(
    (query: string) => {
      if (query.trim() === "") {
        setFilteredServices(services);
      } else {
        const results = services.filter((service) =>
          service.label.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredServices(results);
      }
    },
    [services]
  );

  console.log({ services, filteredServices });
  return { services, filteredServices, handleSearch };
};
