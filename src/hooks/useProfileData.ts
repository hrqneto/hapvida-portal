import { useState, useEffect } from "react";

interface ContactInfo {
  phone: string;
  email: string;
}

interface ProfileInfo {
  nome: string;
  category: string;
}

const defaultContactInfo = {
  phone: "(11) 99999-8888",
  email: "hrqneto@gmail.com",
};

const defaultProfileInfo = {
  nome: "Henrique B S Neto",
  category: "Saúde",
};

export const useProfileData = () => {
  const [contactInfo, setContactInfo] = useState<ContactInfo>(() => {
    const saved = localStorage.getItem("contactInfo");
    return saved ? JSON.parse(saved) : defaultContactInfo;
  });

  const [profileInfo, setProfileInfo] = useState<ProfileInfo>(() => {
    const saved = localStorage.getItem("profileInfo");
    return saved ? JSON.parse(saved) : defaultProfileInfo;
  });

  const updateContactInfo = (key: keyof ContactInfo, value: string) => {
    const updated = { ...contactInfo, [key]: value };
    setContactInfo(updated);
    localStorage.setItem("contactInfo", JSON.stringify(updated));
  };

  const updateProfileInfo = (key: keyof ProfileInfo, value: string) => {
    const updated = { ...profileInfo, [key]: value };
    setProfileInfo(updated);
    localStorage.setItem("profileInfo", JSON.stringify(updated));
  };

  useEffect(() => {
    // carrega os dados do localStorage quando o hook e montado
    const savedContactInfo = localStorage.getItem("contactInfo");
    const savedProfileInfo = localStorage.getItem("profileInfo");

    if (savedContactInfo) setContactInfo(JSON.parse(savedContactInfo));
    if (savedProfileInfo) setProfileInfo(JSON.parse(savedProfileInfo));
  }, []);

  return {
    contactInfo,
    profileInfo,
    updateContactInfo,
    updateProfileInfo,
  };
};
