const LandingContent = () => {
  return (
    <div className="flex mt-8 container mx-auto px-8 gap-8">
      <div className="flex flex-col gap-8">
        <div className="bg-gray-200 rounded px-4 py-1">
          <h4 className="font-bold text-xl">Misión</h4>
          <span>
            Impulsar el desarrollo económico, por medio de la introducción de diferentes restaurantes y facilitar el
            ingreso a restaurantes para mejor comodidad del usuario
          </span>
        </div>
        <div className="bg-gray-200 rounded px-4 py-1">
          <h4 className="font-bold text-xl">Vision</h4>
          <span>
            Fortalecer el manejo y conocimiento de la plataforma donde todas las personas tengan la facilidad al ingreso
            y servicio de los diversos restaurantes aliados a la aplicación
          </span>
        </div>
        <div className="bg-gray-200 rounded px-4 py-1">
          <h4 className="font-bold text-xl">Valores</h4>
          <span>Integridad, Dedicacion, Mejora continua, Pasion, Calidad, Trabajo en equipo</span>
        </div>
      </div>
      <div className="bg-gray-200 rounded px-4 py-1">
        <span className="font-bold text-xl">Valores</span>
        <p>
          1. Integridad: Nos comportamos con honestidad y somos transparentes. Nos importa la confianza y el respeto de
          nuestros clientes.
        </p>
        <p>
          2. Dedicación: Todas nuestras acciones están enfocadas en generar valor para nuestros clientes y para el
          mercado en general y en convertirnos en una referencia de éxito.
        </p>
        <p>
          3. Mejora continua: Aprendemos de nuestros aciertos y errores y mejoramos constantemente en todos los aspectos
          del negocio, para lograr la eficiencia y crecer como individuos y empresa.
        </p>
        <p>
          4. Pasión: Nos sentimos comprometidos y estamos orgullosos, como individuos y como empresa, para ofrecer
          nuestro servicio.
        </p>
        <p>5. Calidad: Continua búsqueda de la excelencia y la mejora continua</p>
        <p>
          6. Trabajo en equipo: Apostamos por la colaboración y el trabajo en equipo, para potenciar el talento
          colectivo y lograr el éxito empresarial. Nos apoyamos y comunicamos con nuestros clientes para juntos
          conseguir nuevos logros y mejoras en nuestro servicio.
        </p>
      </div>
      {/* <img src="public/Valores1.png"> */}
    </div>
  );
};

export default LandingContent;
