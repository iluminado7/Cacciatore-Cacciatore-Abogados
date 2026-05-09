const modal = document.getElementById("teamModal");
const buttons = document.querySelectorAll(".open-modal");
const closeBtn = document.querySelector(".close-modal");

const modalImg = document.getElementById("modalImg");
const modalContent = document.getElementById("modalContent");

// CONTENIDO DE CADA PERSONA
const teamData = {

    pablo: {
        img: "img/team/Dr. Pablo-Cacciatore.png",
        content: `
                               <h2>DR. PABLO NICOLÁS CACCIATORE</h2>
                                <p><strong>Founding Partner</strong><br>
                                Chief Legal Officer (CLO)<br>
                                Corporate Lawyer</p>

                                <p>
                               El Dr. Pablo N. Cacciatore es Co-Fundador y miembro de la alta dirección de Cacciatore & Cacciatore Abogados. 
                                En su carácter de Chief Legal Officer, combina visión jurídica con estrategia de negocio para mitigar riesgos y asegurar el cumplimiento normativo, procurando así la preservación de los intereses y del patrimonio de empresas. 
                                Como empresario y abogado corporativo, lidera la estrategia procesal en litigios complejos y en la resolución de conflictos en contextos empresariales de alto impacto económico.

                                </p>

                                <h3>Formación académica</h3>
                                <p>
                                Abogado — Universidad Nacional de Lomas de Zamora <br>
                                Mediador — Escuela de Posgrado del CPACF <br>
                                Productor Asesor de Seguros — Superintendencia de Seguros de la Nación <br>
                                Formación ejecutiva continua — Cuenta con diversos certificados y diplomas que acreditan su formación y actualización profesional, obtenidos en instituciones como la Universidad de Buenos Aires (UBA), la Escuela de Posgrado del CPACF y la UNLZ, entre otras entidades de reconocido prestigio académico.

                                </p>

                                <h3>Membresías</h3>
                                <p>
                                Matrícula: Abogado — Colegio Público de Abogados de la Capital Federal 
                                Matrícula: Productor Asesor de Seguros — Superintendencia de Seguros de la Nación 
                                Membresía: Asociación Argentina de Productores Asesores de Seguros

                                </p>

                                <h3>Perfil Ejecutivo</h3>
                                <p>
                                Con más de 20 años de ejercicio profesional, el Dr. Pablo Nicolás Cacciatore cuenta con una sólida trayectoria como letrado patrocinante y apoderado de empresas en litigios complejos.
                                Es especialista en sucesiones y planificación sucesoria para la continuidad de empresas familiares, así como en seguros patrimoniales, daños y perjuicios.
                                Su formación como Mediador le permite intervenir en negociaciones de alta complejidad, aplicando métodos alternativos de resolución de conflictos ante disputas en escenarios sensibles y de alto impacto económico 
                                Posee amplia experiencia en la redacción y negociación de contratos comerciales para empresas.
                                Es Fundador del estudio jurídico integral Cacciatore & Asociados, a través del cual ha asesorado durante más de dos décadas a particulares y compañías de diversos sectores en múltiples áreas del Derecho —Civil, Comercial, Laboral, Penal, Familia y Sucesiones—. 
                                Asimismo, se desempeñó como Asesor Legal del Ministerio de Seguridad Nacional de la República Argentina, participando en investigaciones interagenciales junto a fuerzas federales.
                                </p>

                                <h3>Áreas con mayor participacion estratégica</h3>
                                <p>Continuidad empresaria y sucesión</p>
                                <p>Gobierno corporativo en empresas familiares</p>
                                <p>Resolución alternativa de conflictos</p>
                                <p>Seguros como herramienta de gestión</p>
                                <p>Negociación estratégica (Harvard Method)</p>
                                <p>Contratos de alto impacto económico</p>
                                <p>Litigios civiles y comerciales</p>
                                <p>Interacción con organismos regulatorios</p>
                                <p>Expansión empresarial</p>
                                <p>Desarrollo comercial</p>
                                <p>Creación de nuevos negocios</p>
                                <p>Apertura de mercados</p>
                                <p>Dirección estratégica de equipos de negociación</p>
                                <p>Estrategia comercial</p>
                                <p>Negocios disruptivos</p>
                                <p>Prospección comercial</p>
                                <p>Franchising Management</p>
                                <p>Estratega en expansión empresarial</p>

                                <h3>Si tu organización enfrenta desafíos vinculados a continuidad empresaria, sucesión en empresas familiares, gestión de riesgos legales o resolución de conflictos complejos, podrás contar con el asesoramiento de nuestro equipo.</h3>
                                <!-- CTA -->
                                <a href="#contacto" class="modal-btn">Contactar al Dr. Pablo Cacciatore</a>
        `
    },

alejandro: {
    img: "img/team/Dr. Alejandro Romeo.png",
    content: `
        <h2>DR. ALEJANDRO ROMEO</h2>
        <p><strong>Founding Partner</strong><br>
        Chief Commercial Officer (CCO)<br>
        Certified Public Accountant</p>

        <p>
       El Dr. Alejandro Romeo es Co-Fundador y miembro de la alta dirección de Cacciatore & Cacciatore Abogados.
        En su carácter de Chief Commercial Officer, lidera la estrategia comercial del ecosistema, integrando visión financiera, desarrollo y creación de nuevos negocios y optimización de estructuras empresariales.
        Como hombre de negocios, su enfoque combina análisis económico, prevención de riesgos fiscales e inteligencia comercial para impulsar el crecimiento sostenible de empresas

        </p>

        <h3>Formación académica</h3>
        <p>
        Contador Público Nacional — Universidad Kennedy<br>
        Formación ejecutiva continua — Cuenta con diversos certificados y diplomas obtenidos en instituciones como la Universidad de Buenos Aires (UBA), el Consejo Profesional de Ciencias Económicas de la Ciudad Autónoma de Buenos Aires (CPCE), la Universidad Kennedy (UK), HSBC Bank Argentina, entre otras entidades de reconocido prestigio académico.<br>
        Experiencia docente en programas educativos de formación de la UBA.
        </p>

        <h3>Membresías y Credenciales </h3>
        <p>
        Matrícula: Contador Público Nacional — Consejo Profesional de Ciencias Económicas de la Ciudad Autónoma de Buenos Aires
        </p>

        <h3>Perfil Ejecutivo</h3>
        <p>
        Con más de 23 años de trayectoria en el sector Banking y Finanzas, el Dr. Alejandro Romeo ha desarrollado una sólida experiencia en el asesoramiento a empresas, PYMES, emprendedores y startups, especialmente en el desarrollo y gestión de grandes cuentas.
        Es Fundador del estudio contable y fiscal Romeo & Asociados, a través del cual ha brindado asesoramiento estratégico a empresas de diversos sectores en materia contable, fiscal, impositiva, aduanera y comercial.
        Se destaca por su perfil comercial senior, su empatía y calidez humana, su capacidad de escucha activa y su enfoque en la detección de necesidades empresariales, permitiéndole diseñar soluciones integrales orientadas a la eficiencia, la rentabilidad y el crecimiento sostenido.
        Cuenta con amplia experiencia en la estructuración de modelos de gestión, optimización de recursos, mejora de márgenes de rentabilidad y administración de flujo de fondos (cash flow).
        Asimismo, ha participado en el desarrollo e implementación de Políticas KYC (Know Your Customer), Due Diligence de terceros y programas de prevención de lavado de activos (AML), en el marco de la Ley 25.246, normativa de la UIF y estándares internacionales del GAFI, incorporando una visión integral de Compliance en la gestión empresarial.
        </p>
        <p>
        A su vez, cumple un rol clave en la optimización de procesos, tiempos y recursos empresariales, contribuyendo a la reducción de costos operativos y al incremento de márgenes de rentabilidad, con foco en el desarrollo, crecimiento ordenado y expansión de empresas.
        </p>

        <h3>Áreas con mayor participación estratégica:</h3>
        <p>Estrategia comercial y desarrollo de nuevos negocios</p>
        <p>Negocios B2B, B2C y B2B2C</p>
        <p>E-Commerce Management</p>
        <p>Franchising Management</p>
        <p>Capacitaciones comercial in / out company</p>
        <p>Negociación estratégica</p>
        <p>Estructuración financiera y optimización de recursos</p>
        <p>Planificación fiscal e impositiva</p>
        <p>Gestión de cash flow y rentabilidad</p>
        <p>Fidelización y desarrollo de clientes</p>
        <p>Expansión empresarial</p>
        <p>Optimización de procesos empresariales</p>
        <p>Reducción de costos</p>
        <p>Redacción de Manuales Operativos</p>
        <p>Ampliación de márgenes de rentabilidad</p>
        <p>Automatización de procesos</p>
        <p>Inteligencia Artificial aplicada a procesos de trabajo</p>
        <p>Integración de IA en modelos de negocio</p>
        <p>Técnicas de Up-Selling y Cross-Selling para incrementar ticket promedio</p>
        <p>Prospección comercial: High Ticket</p>
        <p>Desarrollo de Franquicias</p>
        <p>Asesoramiento a PYMES, StartUps y grandes empresas</p>
        <p>Apertura de mercados</p>
        <p>Estratega en expansión empresarial</p>

        <h3>
        Si tu empresa necesita optimizar recursos y crecer estratégicamente,
        contar con nuestro acompañamiento es clave.
        </h3>

        <a href="https://www.linkedin.com/in/alejandroromeo79/" class="modal-btn">Contactar al Dr. Alejandro Romeo</a>
    `
},
horacio: {
    img: "img/team/Dr. Horacio Cacciatore.png",
    content: `
        <h2>DR. HORACIO CACCIATORE</h2>
        <p><strong>Founding Partner</strong><br>
        Chief Executive Officer (CEO)<br>
        Corporate Lawyer | Compliance Specialist</p>
        <p>
        El Dr. Horacio Cacciatore es Co-Fundador y Director Ejecutivo de Cacciatore & Cacciatore Abogados.
        En su carácter de Chief Executive Officer, lidera la arquitectura y visión estratégica del ecosistema, integrando derecho, compliance y desarrollo de negocios para diseñar estructuras empresariales sostenibles y crear modelos de negocio, escalables y orientados a la expansión.
        Su enfoque combina arquitectura legal, pensamiento estratégico y dirección empresarial, con una fuerte orientación a la prevención de riesgos, la generación de alianzas clave y la promoción de la expansión de empresas.
        </p>

        <h3>Formación académica:  Grado y Posgrado</h3>
      <p>  Abogado — Universidad del Museo Social Argentino (UMSA)<br>
        Specialization in Compliance — The George Washington University, School of Business (USA)<br>
        Programa Especializado en Compliance — ADEN University, Business School (USA)<br>
        International Certified Compliance Practitioner (CIPC) — International Federation of Compliance Associations (Ireland)<br>
        International Law — International Business Management Institute IBMI (Germany)<br>
        McKinsey Forward Program 2025 — McKinsey & Company<br>
        Certificación Internacional 2025: “Ecosistemas de tecnologías. Introducción a las nuevas tecnologías disruptivas” — Organización de Estados Americanos (OEA).<br>
        Advanced Anti-Corruption: Prevention of Corruption e-Learning Certificate — United Nations Office on Drugs and Crime (UNODC)<br>
        Protección de los Denunciantes e-Learning Certificate — United Nations Office on Drugs and Crime (UNODC)<br>
        Certificación Internacional en Inteligencia Artificial 2023 (OAS Youth Academy: Academia para Jóvenes en Tecnologías Transformadoras para las Américas de la OEA) — Organización de Estados Americanos (OEA).<br>
        Certificación Internacional Impacto de la Inteligencia Artificial en la empresa — Organización de Estados Americanos (OEA).<br>
        Certificación Internacional en Ética y Compliance — Universidad del CEMA<br>
        Diplomatura en Derecho Procesal Civil y Comercial (Posgrado) — UMSA<br>
        Diplomatura en Derecho de la Propiedad Horizontal, Administración de Consorcios y Urbanizaciones — Universidad de Belgrano<br>

        <strong>Formación en curso:</strong><br>
        Specialization in AI for business - The George Washington University (USA)<br>
        Negotiation — University of Michigan (USA)<br>

         <strong>Membresías y trayectoria académica</strong><br>
        Matrícula: Abogado — Colegio Público de Abogados de la Capital Federal<br>
        Matrícula: Agente de la Propiedad Industrial INPI — Instituto Nacional de la Propiedad Industrial<br>
        Profesor de Posgrado - Diplomatura en Programas de Integridad, Compliance y Transparencia (1° y 2° Cohorte, 2021 y 2022) — Universidad de Belgrano.<br>
        Professor de Pós-Graduação em Direito (convidado): Seminário Jurídico Internacional Compliance 2020 (Brasil) - Faculdade Olga Mettig (Brasil)<br>
        Membership “Society of Corporate Compliance and Ethics” (SCCE), (2019-2020) Minneapolis, Minnesota, United States of América.<br>
        Miembro de "World Compliance Association" (España) (2018 – 2022).<br>
        Ex Coordinador de los Comités Técnicos de Compliance — Capítulo Argentina de la WCA (2021-2022).<br>
        Miembro de “International Federation of Compliance” (FINASOC), México (2026).<br>
        Miembro de la “Asociación Argentina de Ética y Compliance” (2018-2020).<br>
        Miembro del Comité de Innovación, MetLife Seguros S.A. (2016).<br>
        Miembro del Comité de Investigación de Mercado de Compañías de Seguros, MetLife Seguros S.A. (2014).<br>
        Autor de más de 15 obras académicas sobre Derecho y Compliance para el Grupo Editorial Errepar–Erreius (2017-2020).<br>
        Expositor y conferencista en congresos nacionales e internacionales.<br>  </p>

        <h3> Perfil Ejecutivo - Trayectoria Profesional</h3>
        <p>
        Con una sólida trayectoria en derecho corporativo, compliance y consultoría empresarial, el Dr. Horacio Cacciatore ha desarrollado su carrera combinando práctica legal, diseño de estructuras empresariales y desarrollo de negocios.
        Es Fundador de Cacciatore & Cacciatore Abogados, desde donde ha asesorado a empresas en materia civil, comercial, contractual, empresarial y compliance, con un enfoque centrado en la prevención de riesgos y la expansión empresarial.
        Se especializa en la constitución de sociedades, registro de marcas y patentes, redacción de contratos y acuerdos complejos, consultoría de franquicias, negociación estratégica y diseño de programas de compliance adaptados a los riesgos a los que se enfrenta cada organización.
        A lo largo de su carrera, ha participado en la creación y desarrollo de sistemas de franquicias, redes de distribución y dropshipping, modelos de licenciamiento de marcas y esquemas de expansión comercial.
        Cuenta con experiencia en compañías nacionales e internacionales como HSBC Bank, MetLife Seguros, Errepar, Erreius, PTM, Garbarino y Falabella, desempeñándose en áreas vinculadas a negociación, compra y contrataciones, desarrollo de negocios y estructuras contractuales.
        </p>

        <h3> Trayectoria emprendedora</h3>
        <p>
        Fundador de Infinity RockStone 1981® (e-commerce business) <br>
        Creador de Programas Académicos sobre Compliance, IA y Franquicias, desarrollados para diversas entidades académicas.<br>  
        Impulsor del proyecto “Universidades” y de la “Iniciativa Compliance” dentro del Grupo Editorial Errepar <br>
        Desarrollo de múltiples modelos de negocio y sistemas de franquicias para diferentes clientes-empresa a lo largo de su trayectoria <br>
        Participación activa en desarrollos tecnológicos con IA
        </p>

        <h3>Áreas estratégicas</h3>
        <p>
        Estrategia empresarial y expansión de negocios <br>
        Compliance y gobierno corporativo <br>
        Estructuración legal de negocios <br>
        Negociación estratégica (Harvard Method) <br>
        Contratos complejos <br>
        Creación de sistemas de franquicias y modelos de expansión <br>
        Franchising Management <br>
        Licenciamiento de marcas y derechos de propiedad intelectual <br>
        Prevención de riesgos legales y empresariales <br>
        Integración de IA en modelos de negocio <br>
        Creación y desarrollo de ecosistemas empresariales
        </p>

        <h3>Reconocimientos</h3>
        <p>
        Candidato a Best CEO Awards 2026 — Madrid, España <br>
        Candidato WIPO Global Awards 2026 (World Intellectual Property Organization), organismo especializado del Sistema de Naciones Unidas, creado en 1967 – Categoría: Emerging company – Ginebra, Suiza. <br>
        McKinsey Forward Program 2025, McKinsey & Company – New York, USA https://www.credly.com/badges/06ca9abc-319e-4363-bc45-a2b984015626 <br>
        Nomination for "Small Business Awards 2022", Corporate Vision, Staffordshire, United Kingdom. <br>
        Calificado para la "1ª Convención Region LatAm - MetLife" Representante de MetLife Argentina para la "Región Americas" - Destino: Atenas 2017 (Grecia) – Premio expedido por Dirección de MetLife Seguros S.A. – Argentina, mayo 2017. <br>
        Seniority MetLife, obtención de Categoría "Business Seniority" (Reconocimiento a la excelencia y el desarrollo profesional durante el período 2016/2017, expedido por la Dirección Comercial de MetLife Seguros S.A., marzo 2017)
        </p>
        <h3>
        Si tu empresa necesita optimizar recursos y crecer estratégicamente,
        contar con nuestro acompañamiento es clave.
        </h3>
        <a href="https://wa.me/5491134007699" class="modal-btn">Contactar al Dr. Horacio Cacciatore</a>
        `
},

eduardo: {
    img: "img/team/Eduardo Rovito.png",
    content: `
        <h2>EDUARDO ROVITO</h2>
        <p><strong>Business Consultant</strong><br>
        

        <p>
        Su perfil como hombre de negocios, le otorga un enfoque que combina visión empresarial, arquitectura de nuevos negocios, innovación disruptiva y capacidad de ejecución para diseñar, validar y escalar modelos de negocio en múltiples industrias y sectores.
        </p>

        <h3>Trayectoria Profesional y Empresarial</h3>
        <img src="img/Logo-cerrajeria (1).png" alt="Profesional" class="logo-empresa">
        <p>
        Con más de 30 años de trayectoria como empresario, Eduardo Rovito es Fundador y CEO de Cerrajería Leonardo®, empresa líder en Control de Accesos y soluciones de seguridad para Consorcios, fundada en la Ciudad Autónoma de Buenos Aires en 1994, la cual cuenta con una sólida presencia en el mercado y un modelo de negocio escalable que dio origen al desarrollo de su sistema de franquicias, conformando así la primera red de franquicias de sistemas de control de accesos inteligente, cerraduras digitales y domótica para Consorcios de Propiedad Horizontal y Fideicomisos Real Estate en la República Argentina.
        Es creador del Sistema de Franquicias de Cerrajería Leonardo®, consolidando un modelo de expansión basado en eficiencia operativa, estandarización y desarrollo territorial.
        Cerrajería Leonardo® no sólo es líder en la Ciudad Autónoma de Buenos Aires, sino que también ha sido la empresa pionera en la innovación tecnológica aplicada al control de accesos en Argentina, incorporando equipamiento de estándares internacionales.
        Para ello trabaja con tecnología de la prestigiosa empresa HID Global®, perteneciente al grupo ASSA ABLOY®, líder mundial en soluciones de identidad segura y control de accesos, con presencia operativa destacada en puertos, universidades, grandes empresas y aeropuertos nacionales e internacionales de todo el mundo.  
        Adicionalmente, Eduardo ha desarrollado y liderado desde 2019 a la fecha, junto al equipo de legales de Cerrajería Leonardo®, la creación de un compendio de documentos legales basados en su modelo de negocios, denominado “Pack de Legales”, el cual está integrado por diversos instrumentos (contratos de comodato y prestación de servicios para consorcios y fideicomisos, políticas internas, protocolos internos de actuación ante casos específicos, disclaimers, avisos legales, leyendas legales, adecuación de sitios web, apartado de legales y una serie de contratos comerciales orientados a la expansión estratégica), que en su  conjunto han reducido de manera probada y exitosa la existencia de reclamos y conflictos, llevando a cero la litigiosidad, y ha promovido así la optimización de procesos y recursos internos, a la vez que ha generado la reducción de costes operativos, ampliando los márgenes de rentabilidad del negocio. 
        El precitado “Pack de Legales” forma parte de los activos intangibles que a partir del 2026 Cerrajería Leonardo® pone a disposición de las empresas del sector de cerrajería digital, electrónica y control de accesos del mercado de la Ciudad Autónoma de Buenos Aires.
        Actualmente Cerrajería Leonardo® cuenta más de 1300 consorcios activos, más de 50.000 unidades funcionales y más de 250.000 usuarios finales que diariamente utilizan su know-how, productos y servicios.
        Cerrajería Leonardo® representa hoy la evolución del tradicional servicio de cerrajería hacia un ecosistema inteligente de control de accesos, seguridad y gestión tecnológica para edificios.
        Con una trayectoria consolidada, partners estratégicos, alianzas tecnológicas de nivel internacional y una visión clara de futuro, la empresa continúa liderando la transformación del sector en Argentina.

        <h3>Innovación y desarrollo</h3>
            <img src="img/Logo-acceso1 (1).png" alt="Profesional" class="logo-empresa">
        <p>
        Asimismo, Eduardo es Co-Fundador y CEO de Acceso 1®, startup tecnológica orientada al desarrollo de soluciones y automatización para el sector de control de accesos, cerrajería electrónica, biométrica y digital.
        Dicho software también es compatible a toda empresa que brinda servicios a Consorcios de Propiedad Horizontal, Condominios, Edificios, Barrios Cerrados, Countries, Garage, Parking y Fideicomisos Real Estate, como ser: prestadore de servicios de ascensores y auto elevadores de edificios, limpieza, seguridad y fumigación, entre otro tipo de servicios.

        En el marco de Acceso 1®, Eduardo fue clave en la creación y el desarrollo de los siguientes activos:
        Sistema de Gestión A1®, ya que el mismo se basa en el exitoso modelo de negocio de Cerrajería Leonardo®
        Placa electrónica CA1® 
        Token DNI A1® (sistema de acceso y apertura mediante el uso de smartphones) 
        Abrepuertas eléctricos de la serie RVT®, compatibles con Sabbat, cuya creación y desarrollo industrial también se basa en el exitoso modelo de negocio de Cerrajería Leonardo®

        Actualmente, Eduardo se encuentra liderando el proceso de expansión estratégica de Cerrajería Leonardo® 2026, próximo a generar la apertura de nuevas sedes franquiciadas en puntos geográficos clave de la Ciudad Autónoma de Buenos Aires, y con miras a proyectar la expansión a zonas estratégicas del resto del país -Mar del Plata, San Carlos de Bariloche, Santa Fe, Rosario, Mendoza, Córdoba y La Plata-, previo a analizar la expansión internacional de la marca.
        A su vez, Eduardo lidera la estrategia de expansión de Acceso 1® hacia nuevos segmentos de mercado, mientras elabora junto a sus partners la agenda de los próximos desarrollos tecnológicos.

        Sin lugar a dudas, la destacada trayectoria de Eduardo como empresario argentino se caracteriza por la creación de modelos de negocio disruptivos, el desarrollo de productos escalables y la generación de acuerdos comerciales en esquemas B2B, B2C y B2B2C.
        A lo largo de su carrera, ha desafiado estructuras tradicionales mediante innovación constante, incorporación de tecnología —incluyendo inteligencia artificial— y soluciones con alto impacto operativo y comercial.
        </p> <br>

        <h3>Reconocimientos</h3>
        <p>
       Candidato a Best CEO Awards 2026 — Madrid, España  <br>
       Creador del la 1° cadena de franquicias de cerrajerías electrónicas, digitales, biométricas y sistemas de control de accesos para edificios, consorcios, fideicomisos real estate y empresas.
        </p>
 
        <h3Áreas de enfoque estratégico</h3>
        <p>Desarrollo de nuevos negocios</p>
        <p>Creación y validación de modelos empresariales</p>
        <p>Desarrollo de Sistemas de Franquicias</p>
        <p>Licencia de Marcas</p>
        <p>Licencia de Software</p>
        <p>Desarrollo de nuevas tecnologías</p>
        <p>Desarrollo industrial</p>
        <p>Consultoría empresarial</p>
        <p>Asesoría de negocios</p>
        <p>Ordenamiento de estructura interna del negocio</p>
        <p>Innovación aplicada a productos y servicios</p>
        <p>Innovación industrial y tecnológico</p>
        <p>Estrategia comercial</p>
        <p>Estrategias B2B, B2C y B2B2C</p>
        <p>Generación de oportunidades y alianzas estratégicas</p>
        <p>Negocios disruptivos</p>
        <p>Negociación de alto nivel</p>
        <p>Creación de ecosistemas</p>
        <p>Fidelización de clientes</p>
        <p>Estratega en expansión empresarial</p>
        <p>Escalabilidad y expansión empresarial</p>
        <p>Integración de tecnología en modelos tradicionales</p>

        <a href="https://wa.me/5491161736925" class="modal-btn">Contactar a Eduardo Rovito</a>
    `}
};

// ABRIR MODAL
buttons.forEach(btn => {
    btn.addEventListener("click", function(e) {
        e.preventDefault();

        const member = this.getAttribute("data-member");

        modalImg.src = teamData[member].img;
        modalContent.innerHTML = teamData[member].content;

        modal.style.display = "flex";
    });
});

// CERRAR
closeBtn.onclick = () => modal.style.display = "none";

window.onclick = (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
};