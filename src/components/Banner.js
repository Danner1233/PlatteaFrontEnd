import React, { useState } from 'react';

const Banner = () => {
  const [bannerImage, setBannerImage] = useState('default-banner.jpg');
  const [profileImage, setProfileImage] = useState('default-profile.jpg');

  const handleBannerChange = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      setBannerImage(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const handleProfileChange = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      setProfileImage(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <div className="perfil-container">
      {/* Banner */}
      <div className="banner-container">
        <img src={bannerImage} alt="Banner" className="banner" />
        <input
          type="file"
          id="banner-upload"
          className="image-upload"
          onChange={handleBannerChange}
        />
        <label htmlFor="banner-upload" className="upload-button">
          Cambiar Banner
        </label>
      </div>

      {/* Foto de Perfil */}
      <div className="profile-pic-container">
        <img src={profileImage} alt="Foto de Perfil" className="profile-pic" />
        <input
          type="file"
          id="profile-upload"
          className="image-upload"
          onChange={handleProfileChange}
        />
        <label htmlFor="profile-upload" className="upload-button">
          Cambiar Foto de Perfil
        </label>
      </div>

      {/* Información del Perfil */}
      <div className="profile-info">
        <h1>Nombre del Usuario</h1>
        <p>Descripción breve del usuario. Esto podría incluir una biografía o algún dato relevante.</p>
      </div>
    </div>
  );
};

export default Banner;
