   // funcion departamento ciudad
 document.addEventListener("DOMContentLoaded", function () {
    // Datos de todos los departamentos y ciudades de Colombia
    var colombiaData = [
        {
            "departamento": "Amazonas",
            "ciudades": ["Leticia", "Puerto Nariño"]
        },
        {
            "departamento": "Antioquia",
            "ciudades": [
                "Abejorral", "Abriaquí", "Alejandría", "Amagá", "Amalfi", "Andes", "Angelópolis", "Angostura", "Anorí", "Anzá", "Apartadó",
                "Arboletes", "Argelia", "Armenia", "Barbosa", "Bello", "Belmira", "Betania", "Betulia", "Briceño", "Buriticá", "Cáceres",
                "Caicedo", "Caldas", "Campamento", "Cañasgordas", "Caracolí", "Caramanta", "Carepa", "Carolina del Príncipe", "Caucasia",
                "Chigorodó", "Cisneros", "Ciudad Bolívar", "Cocorná", "Concepción", "Concordia", "Copacabana", "Dabeiba", "Donmatías",
                "Ebéjico", "El Bagre", "El Carmen de Viboral", "El Peñol", "El Retiro", "El Santuario", "Entrerríos", "Envigado", "Fredonia",
                "Frontino", "Giraldo", "Girardota", "Gómez Plata", "Granada", "Guadalupe", "Guarne", "Guatapé", "Heliconia", "Hispania",
                "Itagüí", "Ituango", "Jardín", "Jericó", "La Ceja", "La Estrella", "La Pintada", "La Unión", "Liborina", "Maceo",
                "Marinilla", "Medellín", "Montebello", "Murindó", "Mutatá", "Nariño", "Nechí", "Necoclí", "Olaya", "Peque", "Pueblorrico",
                "Puerto Berrío", "Puerto Nare", "Puerto Triunfo", "Remedios", "Rionegro", "Sabanalarga", "Sabaneta", "Salgar",
                "San Andrés de Cuerquia", "San Carlos", "San Francisco", "San Jerónimo", "San José de la Montaña", "San Juan de Urabá",
                "San Luis", "San Pedro de Urabá", "San Pedro de los Milagros", "San Rafael", "San Roque", "San Vicente", "Santa Bárbara",
                "Santa Fe de Antioquia", "Santa Rosa de Osos", "Santo Domingo", "Segovia", "Sonsón", "Sopetrán", "Támesis", "Tarazá",
                "Tarso", "Titiribí", "Toledo", "Turbo", "Uramita", "Urrao", "Valdivia", "Valparaíso", "Vegachí", "Venecia",
                "Vigía del Fuerte", "Yalí", "Yarumal", "Yolombó", "Yondó", "Zaragoza"
            ]
        },
        {
            "departamento": "Arauca",
            "ciudades": ["Arauca", "Arauquita", "Cravo Norte", "Fortul", "Puerto Rondón", "Saravena", "Tame"]
        },
        {
            "departamento": "Atlántico",
            "ciudades": [
                "Baranoa", "Barranquilla", "Campo de la Cruz", "Candelaria", "Galapa", "Juan de Acosta", "Luruaco", "Malambo", "Manatí", "Palmar de Varela",
                "Piojó", "Polonuevo", "Ponedera", "Puerto Colombia", "Repelón", "Sabanagrande", "Sabanalarga", "Santa Lucía", "Santo Tomás", "Soledad",
                "Suán", "Tubará", "Usiacurí"
            ]
        },
        {
            "departamento": "Bolívar",
            "ciudades": [
                "Achí", "Altos del Rosario", "Arenal", "Arjona", "Arroyohondo", "Barranco de Loba", "Brazuelo de Papayal", "Calamar", "Cantagallo",
                "Cartagena de Indias", "Cicuco", "Clemencia", "Córdoba", "El Carmen de Bolívar", "El Guamo", "El Peñón", "Hatillo de Loba", "Magangué",
                "Mahates", "Margarita", "María la Baja", "Mompós", "Montecristo", "Morales", "Norosí", "Pinillos", "Regidor", "Río Viejo", "San Cristóbal",
                "San Estanislao", "San Fernando", "San Jacinto del Cauca", "San Jacinto", "San Juan Nepomuceno", "San Martín de Loba", "San Pablo",
                "Santa Catalina", "Santa Rosa", "Santa Rosa del Sur", "Simití", "Soplaviento", "Talaigua Nuevo", "Tiquisio", "Turbaco", "Turbaná",
                "Villanueva", "Zambrano"
            ]
        },

        {
            "departamento": "Boyacá",
            "ciudades": [
                "Almeida", "Aquitania", "Arcabuco", "Belén", "Berbeo", "Betéitiva", "Boavita", "Boyacá", "Briceño", "Buenavista", "Busbanzá",
                "Caldas", "Campohermoso", "Cerinza", "Chinavita", "Chiquinquirá", "Chíquiza", "Chiscas", "Chita", "Chitaraque", "Chivatá", "Chivor",
                "Ciénegea", "Cómbita", "Coper", "Corrales", "Covarachía", "Cubar", "Cucaita", "Cuitiva", "Duitama", "El Cocuy", "El Espino",
                "Firavitoba", "Floresta", "Gachantivá", "Gámeza", "Garagoa", "Guacamayas", "Guateque", "Guayatá", "Güicán", "Iza", "Jenesano",
                "Jericó", "La Capilla", "La Uvita", "La Victoria", "Labranzagrande", "Macanal", "Maripí", "Miraflores", "Mongua", "Monguí",
                "Moniquirá", "Motavita", "Muzo", "Nobsa", "Nuevo Colón", "Oicatá", "Otanche", "Pachavita", "Páez", "Paipa", "Pajarito",
                "Panqueba", "Pauna", "Paya", "Paz de Río", "Pesca", "Pisba", "Puerto Boyacá", "Quípama", "Ramiriquí", "Ráquira", "Rondón",
                "Saboyá", "Sáchica", "Samacá", "San Eduardo", "San José de Pare", "San Luis de Gaceno", "San Mateo", "San Miguel de Sema",
                "San Pablo de Borbur", "Santa María", "Santa Rosa de Viterbo", "Santa Sofía", "Santana", "Sativanorte", "Sativasur", "Siachoque",
                "Soatá", "Socha", "Socotá", "Sogamoso", "Somondoco", "Sora", "Soracá", "Sotaquirá", "Susacón", "Sutamarchán", "Sutatenza",
                "Tasco", "Tenza", "Tibaná", "Tibasosa", "Tinjacá", "Tipacoque", "Toca", "Togüí", "Tópaga", "Tota", "Tunja", "Tununguá",
                "Turmequé", "Tuta", "Tutazá", "Úmbita", "Ventaquemada", "Villa de Leyva", "Viracachá", "Zetaquira"
            ]
        },
        {
            "departamento": "Caldas",
            "ciudades": [
                "Aguadas", "Anserma", "Aranzazu", "Belalcázar", "Chinchiná", "Filadelfia", "La Dorada", "La Merced", "Manizales", "Manzanares",
                "Marmato", "Marquetalia", "Marulanda", "Neira", "Norcasia", "Pácora", "Palestina", "Pensilvania", "Riosucio", "Risaralda",
                "Salamina", "Samaná", "Supía", "Victoria", "Villamaría", "Viterbo"
            ]
        },
        {
            "departamento": "Caquetá",
            "ciudades": [
                "Albania", "Belén de los Andaquíes", "Cartagena del Chairá", "Curillo", "El Doncello", "El Paujil", "Florencia", "La Montañita",
                "Milán", "Morelia", "Puerto Rico", "San José del Fragua", "San Vicente del Caguán", "Solano", "Solita", "Valparaíso"
            ]
        },

        {
            "departamento": "Casanare",
            "ciudades": [
                "Aguazul", "Chámeza", "Hato Corozal", "La Salina", "Maní", "Monterrey", "Nunchía", "Orocué", "Paz de Ariporo", "Pore", "Recetor",
                "Sabanalarga", "Sácama", "San Luis de Palenque", "Támara", "Tauramena", "Trinidad", "Villanueva", "Yopal"
            ]
        },
        {
            "departamento": "Cauca",
            "ciudades": [
                "Almaguer", "Argelia", "Balboa", "Bolívar", "Buenos Aires", "Cajibío", "Caldono", "Caloto", "Corinto", "El Tambo", "Florencia",
                "Guachené", "Guapi", "Inzá", "Jambaló", "La Sierra", "La Vega", "López de Micay", "Mercaderes", "Miranda", "Morales", "Padilla",
                "Páez", "Patía", "Piamonte", "Piendamó", "Popayán", "Puerto Tejada", "Puracé", "Rosas", "San Sebastián", "Santa Rosa", "Santander de Quilichao",
                "Silvia", "Sotará", "Suárez", "Sucre", "Timbío", "Timbiquí", "Toribío", "Totoró", "Villa Rica"
            ]
        },
        {
            "departamento": "Cesar",
            "ciudades": [
                "Aguachica", "Agustín Codazzi", "Astrea", "Becerril", "Bosconia", "Chimichagua", "Chiriguaná", "Curumaní", "El Copey", "El Paso",
                "Gamarra", "González", "La Gloria", "La Jagua de Ibirico", "La Paz", "Manaure Balcón del Cesar", "Pailitas", "Pelaya",
                "Pueblo Bello", "Río de Oro", "San Alberto", "San Diego", "San Martín", "Tamalameque", "Valledupar"
            ]
        },
        {
            "departamento": "Chocó",
            "ciudades": [
                "Acandí", "Alto Baudó", "Bagadó", "Bahía Solano", "Bajo Baudó", "Bojayá", "Carmen del Darién", "Cértegui", "Condoto", "El Cantón del San Pablo",
                "El Carmen de Atrato", "El Litoral del San Juan", "Itsmina", "Juradó", "Lloró", "Medio Atrato", "Medio Baudó", "Medio San Juan",
                "Nóvita", "Nuquí", "Quibdó", "Río Iró", "Río Quito", "Riosucio", "San José del Palmar", "Sipí", "Tadó", "Unguía", "Unión Panamericana"
            ]
        },
        {
            "departamento": "Córdoba",
            "ciudades": [
                "Ayapel", "Buenavista", "Canalete", "Cereté", "Chimá", "Chinú", "Ciénaga de Oro", "Cotorra", "La Apartada", "Lorica",
                "Los Córdobas", "Momil", "Montelíbano", "Montería", "Moñitos", "Planeta Rica", "Pueblo Nuevo", "Puerto Escondido", "Puerto Libertador",
                "Purísima", "Sahagún", "San Andrés de Sotavento", "San Antero", "San Bernardo del Viento", "San Carlos", "San José de Uré",
                "San Pelayo", "Tierralta", "Tuchín", "Valencia"
            ]
        },

        {
            "departamento": "Cundinamarca",
            "ciudades": [
                "Agua de Dios", "Albán", "Anapoima", "Anolaima", "Apulo", "Arbeláez", "Beltrán", "Bituima", "Bogotá D.C" , "Bojacá", "Cabrera", "Cachipay",
                "Cajicá", "Caparrapí", "Caqueza", "Carmen de Carupa", "Chaguaní", "Chía", "Chipaque", "Choachí", "Chocontá", "Cogua",
                "Cota", "Cucunubá", "El Colegio", "El Peñón", "El Rosal", "Facatativá", "Fomeque", "Fosca", "Funza", "Fúquene", "Fusagasugá",
                "Gachalá", "Gachancipá", "Gachetá", "Gama", "Girardot", "Granada", "Guachetá", "Guaduas", "Guasca", "Guataquí", "Guatavita",
                "Guayabal de Síquima", "Guayabetal", "Gutiérrez", "Jerusalén", "Junín", "La Calera", "La Mesa", "La Palma", "La Peña",
                "La Vega", "Lenguazaque", "Machetá", "Madrid", "Manta", "Medina", "Mosquera", "Nariño", "Nemocón", "Nilo", "Nimaima",
                "Nocaima", "Pacho", "Paime", "Pandi", "Paratebueno", "Pasca", "Puerto Salgar", "Pulí", "Quebradanegra", "Quetame",
                "Quipile", "Rafael Reyes", "Ricaurte", "San Antonio del Tequendama", "San Bernardo", "San Cayetano", "San Francisco",
                "San Juan de Río Seco", "Sasaima", "Sesquilé", "Sibaté", "Silvania", "Simijaca", "Soacha", "Sopó", "Subachoque",
                "Suesca", "Supatá", "Susa", "Sutatausa", "Tabio", "Tausa", "Tena", "Tenjo", "Tibacuy", "Tibirita", "Tocaima",
                "Tocancipá", "Topaipí", "Ubalá", "Ubaque", "Ubaté", "Une", "Útica", "Vergara", "Vianí", "Villagómez", "Villapinzón",
                "Villeta", "Viotá", "Yacopí", "Zipacón", "Zipaquirá"
            ]
        },
        {
            "departamento": "Guainía",
            "ciudades": [
                "Inírida"
            ]
        },
        {
            "departamento": "Guaviare",
            "ciudades": [
                "Calamar", "El Retorno", "Miraflores", "San José del Guaviare"
            ]
        },
        {
            "departamento": "Huila",
            "ciudades": [
                "Acevedo", "Agrado", "Aipe", "Algeciras", "Altamira", "Baraya", "Campoalegre", "Colombia", "Elías", "Garzón", "Gigante",
                "Guadalupe", "Hobo", "Iquira", "Isnos", "La Argentina", "La Plata", "Nátaga", "Neiva", "Oporapa", "Paicol", "Palermo",
                "Palestina", "Pital", "Pitalito", "Rivera", "Saladoblanco", "San Agustín", "Santa María", "Suaza", "Tarqui", "Tello",
                "Teruel", "Tesalia", "Timaná", "Villavieja", "Yaguará"
            ]
        },
        {
            "departamento": "La Guajira",
            "ciudades": [
                "Albania", "Barrancas", "Dibulla", "Distracción", "El Molino", "Fonseca", "Hatonuevo", "La Jagua del Pilar", "Maicao", "Manaure",
                "Riohacha", "San Juan del Cesar", "Uribia", "Urumita", "Villanueva"
            ]
        },
        {
            "departamento": "Magdalena",
            "ciudades": [
                "Algarrobo", "Aracataca", "Ariguaní", "Cerro de San Antonio", "Chibolo", "Chibolo", "Ciénaga", "Concordia", "El Banco",
                "El Piñón", "El Retén", "Fundación", "Guamal", "Nueva Granada", "Pedraza", "Pijiño del Carmen", "Pivijay", "Plato",
                "Puebloviejo", "Remolino", "Sabanas de San Angel", "Salamina", "San Sebastián de Buenavista", "San Zenón", "Santa Ana",
                "Santa Bárbara de Pinto", "Santa Marta", "Sitionuevo", "Tenerife", "Zapayán", "Zona Bananera"
            ]
        },
        {
            "departamento": "Meta",
            "ciudades": [
                "Acacías", "Barranca de Upía", "Cabuyaro", "Castilla la Nueva", "Cubarral", "Cumaral", "El Calvario", "El Castillo", "El Dorado",
                "Fuente de Oro", "Granada", "Guamal", "La Macarena", "Lejanías", "Mapiripán", "Mesetas", "Puerto Concordia", "Puerto Gaitán",
                "Puerto Lleras", "Puerto López", "Puerto Rico", "Restrepo", "San Carlos de Guaroa", "San Juan de Arama", "San Juanito",
                "San Martín", "Uribe", "Villavicencio", "Vista Hermosa"
            ]
        },
        {
            "departamento": "Nariño",
            "ciudades": [
                "Aldana", "Ancuyá", "Arboleda", "Barbacoas", "Belén", "Buesaco", "Chachagüí", "Colón", "Consacá", "Contadero", "Córdoba", "Cuaspud",
                "Cumbal", "Cumbitara", "El Charco", "El Peñol", "El Rosario", "El Tablón de Gómez", "El Tambo", "Francisco Pizarro", "Funes",
                "Guachucal", "Guaitarilla", "Gualmatán", "Iles", "Imués", "Ipiales", "La Cruz", "La Florida", "La Llanada", "La Tola", "La Unión",
                "Leiva", "Linares", "Los Andes", "Magüí", "Mallama", "Mosquera", "Nariño", "Olaya Herrera", "Ospina", "Pasto", "Policarpa", "Potosí",
                "Providencia", "Puerres", "Pupiales", "Ricaurte", "Roberto Payán", "Samaniego", "San Bernardo", "San Lorenzo", "San Pablo", "San Pedro de Cartago",
                "Sandoná", "Santa Bárbara", "Santacruz", "Sapuyes", "Taminango", "Tangua", "Tumaco", "Túquerres", "Yacuanquer"
            ]
        },
        {
            "departamento": "Norte de Santander",
            "ciudades": [
                "Abrego", "Arboledas", "Bochalema", "Bucarasica", "Cáchira", "Cácota", "Chinácota", "Chitagá", "Convención", "Cúcuta", "Cucutilla",
                "Duranía", "El Carmen", "El Tarra", "El Zulia", "Gramalote", "Hacarí", "Herrán", "La Esperanza", "La Playa", "Labateca", "Los Patios",
                "Lourdes", "Mutiscua", "Ocaña", "Pamplona", "Pamplonita", "Puerto Santander", "Ragonvalia", "Salazar", "San Calixto", "San Cayetano",
                "Santiago", "Sardinata", "Silos", "Teorama", "Tibú", "Toledo", "Villa Caro", "Villa del Rosario"
            ]
        },
        {
            "departamento": "Putumayo",
            "ciudades": [
                "Colón", "Mocoa", "Orito", "Puerto Asís", "Puerto Caicedo", "Puerto Guzmán", "Puerto Leguízamo", "San Francisco", "San Miguel",
                "Santiago", "Sibundoy", "Valle del Guamuez", "Villagarzón"
            ]
        },
        {
            "departamento": "Quindío",
            "ciudades": [
                "Armenia", "Buenavista", "Calarcá", "Circasia", "Córdoba", "Filandia", "Génova", "La Tebaida", "Montenegro", "Pijao", "Quimbaya", "Salento"
            ]
        },
        {
            "departamento": "Risaralda",
            "ciudades": [
                "Apía", "Balboa", "Belén de Umbría", "Dosquebradas", "Guática", "La Celia", "La Virginia", "Marsella", "Mistrató", "Pereira",
                "Pueblo Rico", "Quinchía", "Santa Rosa de Cabal", "Santuario"
            ]
        },
        {
            "departamento": "San Andrés y Providencia",
            "ciudades": [
                "Providencia", "San Andrés"
            ]
        },
        {
            "departamento": "Santander",
            "ciudades": [
                "Aguada", "Albania", "Aratoca", "Barbosa", "Barichara", "Barrancabermeja", "Betulia", "Bolívar", "Bucaramanga", "Cabrera",
                "California", "Capitanejo", "Carcasí", "Cepitá", "Cerrito", "Charalá", "Charta", "Chima", "Chipatá", "Cimitarra", "Concepción",
                "Confines", "Contratación", "Coromoro", "Curití", "El Carmen de Chucurí", "El Guacamayo", "El Peñón", "El Playón", "Encino",
                "Enciso", "Floridablanca", "Galan", "Gámbita", "Girón", "Guaca", "Guadalupe", "Guapotá", "Guavatá", "Güepsa", "Hato",
                "Jesús María", "Jordán", "La Belleza", "La Paz", "Landázuri", "Lebrija", "Los Santos", "Macaravita", "Málaga", "Matanza",
                "Mogotes", "Molagavita", "Ocamonte", "Oiba", "Onzaga", "Palmar", "Palmas del Socorro", "Páramo", "Piedecuesta", "Pinchote",
                "Puente Nacional", "Puerto Parra", "Puerto Wilches", "Rionegro", "Sabana de Torres", "San Andrés", "San Benito", "San Gil",
                "San Joaquín", "San José de Miranda", "San Miguel", "San Vicente de Chucurí", "Santa Bárbara", "Santa Helena del Opón",
                "Simacota", "Socorro", "Suaita", "Sucre", "Suratá", "Tona", "Valle de San José", "Vélez", "Vetas", "Villanueva", "Zapatoca"
            ]
        },
        {
            "departamento": "Sucre",
            "ciudades": [
                "Buenavista", "Caimito", "Chalán", "Colosó", "Corozal", "Coveñas", "El Roble", "Galeras", "Guaranda", "La Unión", "Los Palmitos",
                "Majagual", "Morroa", "Ovejas", "Palmito", "Sampués", "San Benito Abad", "San Juan de Betulia", "San Marcos", "San Onofre",
                "San Pedro", "Sincé", "Sincelejo", "Sucre", "Tolú", "Toluviejo"
            ]
        },
        {
            "departamento": "Tolima",
            "ciudades": [
                "Alpujarra", "Alvarado", "Ambalema", "Anzoátegui", "Armero", "Ataco", "Cajamarca", "Carmen de Apicalá", "Casabianca", "Chaparral",
                "Coello", "Coyaima", "Cunday", "Dolores", "Espinal", "Falán", "Flandes", "Fresno", "Guamo", "Herveo", "Honda", "Ibagué",
                "Icononzo", "Lérida", "Líbano", "Mariquita", "Melgar", "Murillo", "Natagaima", "Ortega", "Palocabildo", "Piedras", "Planadas",
                "Prado", "Purificación", "Rioblanco", "Roncesvalles", "Rovira", "Saldaña", "San Antonio", "San Luis", "Santa Isabel", "Suárez",
                "Valle de San Juan", "Venadillo", "Villahermosa", "Villarrica"
            ]
        },
        {
            "departamento": "Valle del Cauca",
            "ciudades": [
                "Alcalá", "Andalucía", "Ansermanuevo", "Argelia", "Bolívar", "Buenaventura", "Buga", "Bugalagrande", "Caicedonia", "Cali",
                "Calima", "Candelaria", "Cartago", "Dagua", "El Águila", "El Cairo", "El Cerrito", "El Dovio", "Florida", "Ginebra", "Guacarí",
                "Jamundí", "La Cumbre", "La Unión", "La Victoria", "Obando", "Palmira", "Pradera", "Restrepo", "Riofrío", "Roldanillo", "San Pedro",
                "Sevilla", "Toro", "Trujillo", "Tuluá", "Ulloa", "Versalles", "Vijes", "Yotoco", "Yumbo", "Zarzal"
            ]
        },
        {
            "departamento": "Vaupés",
            "ciudades": [
                "Carurú", "Mitú", "Taraira", "Pacoa"
            ]
        },
        {
            "departamento": "Vichada",
            "ciudades": [
                "Cumaribo", "La Primavera", "Puerto Carreño", "Santa Rosalía"
            ]
        }
    ];
    

    const departamentoSelect = document.getElementById("departamento");
            const ciudadSelect = document.getElementById("ciudad");
            const enviarBtn = document.getElementById("enviarBtn");
            const agreeCheckbox = document.getElementById("agreeCheckbox");

            // Poblar los departamentos
            colombiaData.forEach(item => {
                const option = document.createElement("option");
                option.value = item.departamento;
                option.textContent = item.departamento;
                departamentoSelect.appendChild(option);
            });

            // Actualizar las ciudades
            departamentoSelect.addEventListener("change", function () {
                const departamentoSeleccionado = this.value;
                ciudadSelect.innerHTML = '<option value="">Selecciona una ciudad</option>';
                ciudadSelect.disabled = true;

                if (departamentoSeleccionado) {
                    const departamento = colombiaData.find(
                        item => item.departamento === departamentoSeleccionado
                    );
                    if (departamento) {
                        departamento.ciudades.forEach(ciudad => {
                            const option = document.createElement("option");
                            option.value = ciudad;
                            option.textContent = ciudad;
                            ciudadSelect.appendChild(option);
                        });
                        ciudadSelect.disabled = false;
                    }
                }
            });

            // Habilitar o deshabilitar el botón de enviar
            agreeCheckbox.addEventListener("change", function () {
                enviarBtn.disabled = !agreeCheckbox.checked;
            });

            // Manejo del envío del formulario
            document.getElementById("miFormulario").addEventListener("submit", function (event) {
                event.preventDefault();

                const data = {
                    nombre: document.getElementById("nombre").value,
                    apellido: document.getElementById("apellido").value,
                    celular: document.getElementById("celular").value,
                    correo: document.getElementById("correo").value,
                    departamento: departamentoSelect.value || null,
                    ciudad: ciudadSelect.value || null
                };

                // Validación adicional
                if (!data.departamento || !data.ciudad) {
                    alert("Por favor, selecciona un departamento y una ciudad.");
                    return;
                }

                // Enviar los datos al webhook
                fetch("https://hook.us2.make.com/zy7zdxrn7mn30de3ewjbldvvng78m9ni", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data)
                })
                    .then(response => {
                        if (response.ok) {
                            alert("¡Gracias por suscribirte! Pronto recibirás novedades.");
                            window.location.href = "https://www.finca.co/registro-exitoso";
                        } else {
                            alert("Hubo un problema al enviar la información. Inténtalo nuevamente.");
                        }
                    })
                    .catch(error => {
                        console.error("Error:", error);
                        alert("Hubo un error en la conexión. Inténtalo más tarde.");
                    });
            });
        });
