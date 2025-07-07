import React, { useState } from 'react';

const AboutPage = () => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (image) {
      // Aquí se enviará la imagen al servidor para su procesamiento.
      alert('Imagen subida. Esperando aprobación...');
      // Lógica para enviar la imagen a un backend (por ejemplo, usando fetch o axios)
    }
  };

  return (
    <div className="py-12 md:py-20 bg-gradient-to-b from-background to-secondary/10">
      {/* El resto del contenido de la página de galería */}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-10 gradient-text">Subir Imagen para la Galería</h2>
        <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="border-2 border-primary p-2"
          />
          <button type="submit" className="btn btn-primary">Subir Imagen</button>
        </form>
      </div>
    </div>
  );
};

export default AboutPage;
