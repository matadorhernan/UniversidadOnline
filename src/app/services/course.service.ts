import { Injectable } from '@angular/core';

@Injectable()
export class CourseService {

    private courses: any = [
        {
            "id": 1,
            "titulo": "Aprende Programación en C desde cero",
            "autor": "Alejandro Miguel Taboada Sanchez",
            "idioma": "Español",
            "fechaActualizacion": "3/2016",
            "descripcion": "C es el lenguaje de programación de propósito general asociado, de modo universal, al sistema operativo UNIX. Sin embargo, la popularidad, eficacia y potencia de C, se ha producido porque este lenguaje no está prácticamente asociado a ningún sistema operativo, ni a ninguna máquina, en especial. Ésta es la razón, C, es conocido como el lenguaje de programación de sistemas, por excelencia. Ventajas de C El lenguaje C es poderoso y flexible, con órdenes, operaciones y funciones de biblioteca que se pueden utilizar para escribir la mayoría de los programas que corren en la computadora. C se utiliza por programadores profesionales para desarrollar software en la mayoría de los modernos sistemas de computadora. Se puede utilizar C para desarrollar sistemas operativos, compiladores, sistemas de tiempo real y aplicaciones de comunicaciones. Un programa C puede ser escrito para un tipo de computadora y trasladarse a otra computadora con pocas o ninguna modificación ",
            "costo": "$270",
            "puntuacion": "4.6",
            "img": "assets/img/c.jpg",
            "habilidades": {
                "1": "diseñar programas en C.",
                "2": "Plantear el algoritmo correcto para solucionar un problema.",
                "3": "Entender la lógica necesaria de los lenguajes de programación."
            },
            "inscritos": "2500"
        },
        {
            "id": 2,
            "titulo": "Java SE, Java EE (Web) con MySQL - De básico hasta avanzado",
            "autor": "IVAN ELISEO TINAJERO DIAZ",
            "idioma": "Español",
            "fechaActualizacion": "1/2019",
            "descripcion": "Bienvenido al curso Java SE, Java EE (Web) con MySQL - De básico hasta avanzado, el curso en el que aprenderás a programar desde cero con el lenguaje de programación Java. Comenzaremos aprendiendo las bases del lenguaje de programación Java (NIVEL BASICO), continuaremos viendo el desarrollo de aplicaciones web (NIVEL INTERMEDIO) y terminarás aprendiendo a configurar tu propio servidor Linux Ubuntu Server con Apache Tomcat con tu propio dominio para publicar tus aplicaciones web (NIVEL AVANZADO).",
            "costo": "$2970.00",
            "puntuacion": "4.5",
            "img": "assets/img/java.png",
            "habilidades": {
                "1": "Aprender los fundamentos del lenguaje de programación Java SE utilizando Windows.",
                "2": "Aprender desarrollo web con Java EE (Servlets y JSPs) utilizando Linux.",
                "3": "Implementar seguridad a tus aplicaciones web con el estándar de Java EE.",
                "4": "Aprender la Programación Orientada a Objetos.",
                "5": "Aplicar el patrón de diseño MVC en tus aplicaciones web."
            },
            "inscritos": "2500"
        },
        {
            "id": 3,
            "titulo": "Fundamentos de C# para Principiantes",
            "autor": "Enrique Munguía",
            "idioma": "Español",
            "fechaActualizacion": "5/2016",
            "descripcion": "Si quieres empezar tu carrera como desarrollador de software, este curso es el lugar indicado. Aquí aprenderás los conceptos básicos de programación con C# uno de los lenguajes de programación más populares en la actualidad.Temas como declaración de variables, control de flujo, ciclos y métodos serán algo natural para ti después de concluir el curso. Pero no solo eso, también aprenderás los fundamentos de Programación Orientada a Objetos, el paradigma de programación más utilizado en la industria que se utiliza para escribir código reutilizable, eficiente y que cumple con los más altos estándares. Para aprender un lenguaje de programación se necesita mucha práctica, es por eso que la teoría explicada está acompañada de retos de programación que son ejercicios para reforzar los temas vistos y que intentes por tu cuenta solucionar diversos problemas.Además al final realizarás un proyecto final que engloba todos los conceptos aprendidos durante el curso, esto te dará la confianza para que empieces a crear tus propias aplicaciones de inmediato.",
            "costo": "$570",
            "puntuacion": "4.5",
            "img": "assets/img/Csharp.png",
            "habilidades": {
                "1": "Diseñar y crear programas con el lenguaje de programación C#",
                "2": "Escribir código con buenas prácticas que es entendible y reutilizable",
                "3": "Aprender otro lenguaje de programación con facilidad",
                "4": "Utilizar con habilidad el IDE Microsoft Visual Studio"
            },
            "inscritos": "2500"

        },
        {
            "id": 4,
            "titulo": "Aprende PHP MySQL y Servidor Web: Curso Práctico Desde 0",
            "autor": "Juan Francisco Da Silva Do Nascimento",
            "idioma": "Español",
            "fechaActualizacion": "1/2018",
            "descripcion": "PHP es un lenguaje de código abierto muy popular especialmente adecuado para el desarrollo web y que puede ser incrustado en HTML. Si tienes conocimientos de HTML y CSS habrás tenido ocasiones de comprobar que su principal limitación es la imposibilidad de crear Páginas Webs dinámicas, por el contrario no te preocupes.El siguiente paso en tu proceso de convertirte en todo un Profesional de la Programación Web y para ello debes aprender PHP. Comenzaremos desde lo básico, conociendo la historia del lenguaje y su estado actual, todo esto de forma fácil y amena.Con PHP se han hecho muchos sitios hoy día como lo son: Yahoo y Facebook(también Udemy). Curso en el cual te enseña a Desarrollar una Aplicación o Sitio Web, la cual podrás visualizar de forma Local o Remota(Accediendo desde cualquier parte del Mundo) y desde cualquier dispositivo móvil, tablet o Pc.Pon en práctica tus conocimientos básicos para así ir aumentando y facilitando la forma en la que programes.",
            "costo": "2550",
            "puntuacion": "4.4",
            "img": "assets/img/php.jpg",
            "habilidades": {
                "1": "Capaz de hacer cualquier Aplicación Web desde 0 con PHP, MYSQL y Aprendes a montar tu propio servidor Web de Acceso tanto Local como Remoto (Accediendo desde Cualquier País).",
                "2": "Programar en PHP, el lenguaje de programación más importante en Internet.",
                "3": "Registrar, Modificar y Eliminar Datos Contenidos en Tu BD desde PHP."
            },
            "inscritos": "2500"

        },
        {
            "id": 5,
            "titulo": "Programación de Android desde Cero +35 horas Curso COMPLETO",
            "autor": "Alejandro Lora",
            "idioma": "Español",
            "fechaActualizacion": "2/2018",
            "descripcion": "Aprende a crear aplicaciones para android desde cero y de forma sencilla con Android Studio y las herramientas más profesionales del momento. En este curso aprenderás:",
            "costo": "$2970",
            "puntuacion": "4.3",
            "img": "assets/img/android.jpg",
            "habilidades": {
                "1": "Programar y publicar sus propias Aplicaciones para Android",
                "2": "Administración de Base de Datos para las apps",
                "3": "Administración de GPS, Google Maps, etc",
                "4": "Control de Versiones con Git y GitHub para proyectos en equipos de trabajo"

            },
            "inscritos": "2500"

        },
        {
            "id": 6,
            "titulo": "Excel Completo - Desde Principiante Hasta Avanzado",
            "autor": "Miguel Maraby",
            "idioma": "Español ",
            "fechaActualizacion": "4/2019",
            "descripcion": "El Curso Completo de Microsoft Excel, está pensado analíticamente para brindarle al estudiante todos los conocimientos necesarios para lograr ser un experto en esta poderosa plataforma. Empezaremos este gran viaje desde lo más básico para personas que estén iniciando su proceso y se les pueda facilitar su avance a niveles superiores, luego pasaremos al nivel intermedio que es una parte bastante importante, debido que es una de las más utilizadas actualmente por las empresas y una alta demanda en sus funciones, y finalmente llegaremos al nivel avanzado brindando herramientas maravillosas con casos prácticos y reales que serán de gran utilidad en la vida profesional. El curso está orientado a mejorar la productividad y pensado estratégicamente para automatizar las tareas y ser eficientes en el ahorro del tiempo. ¡Vamos!",
            "costo": "160.00",
            "puntuacion": "4,5",
            "img": "assets/img/excel.png",
            "habilidades": {
                "1": "Manejar Profesionalmente Excel",
                "2": "Serás un Experto en el Manejo Integral de Excel",
                "3": "Manejar Correctamente Grandes Cantidades de Datos en una Lista",
                "4": "Manejar Correctamente Grandes Cantidades de Datos en una Lista"

            },
            "inscritos": "2500"

        },
        {
            "id": 7,
            "titulo": "Diseño Web Desde Cero a Avanzado 45h Curso COMPLETO",
            "autor": "Jose Javier Villena",
            "idioma": "Español ",
            "fechaActualizacion": "11/2017",
            "descripcion": "A lo largo del curso tendrás varias horas de ejemplos prácticos para que captes bien el sentido de cada concepto y sepas aplicarlo en tus propios proyectos. Tendrás varios ejercicios en archivos pdf descargables, así como el código de los ejemplos mostrados en los videos.El curso está estructurado de forma modular, así que tú decides en qué orden ver las secciones, sin necesidad de seguir una secuencia obligatoria.Tienes más de 40 horas de videos que irán aumentando con el tiempo, ya que esté curso estará en constante renovación y ampliación. Además te transmitiré mi experiencia para que seas un profesional del diseño web.Al final este curso serás capaz de crear una página moderna y atractiva sin ningún problema : ) Permíteme explicarte por qué debes tomar este curso: Tengo más de 10 años de experiencia tanto como profesor, como tambien Analista - Programador.El formato de mis videos es muy didáctico y ameno, no es como la gran mayoría de cursos en la que te limitas a observar una pantalla y a escuchar una voz de fondo.En mi caso me verás a mí insertado dentro del pantalla, como si estuviera frente a tí explicándote cada punto relacionado con el Diseño Web.Te acompañaré desde el principio, haciendo ejercicios juntos y ayudándote con tus dudas.",
            "costo": "2970.00",
            "puntuacion": "4,5 ",
            "img": "assets/img/html.png",
            "habilidades": {
                "1": "Crear páginas web con los estándares actuales de HTML5",
                "2": "Control de Versiones con Git y GitHub para proyectos en equipos de trabajo",
                "3": "Maquetar sus sitios webs con los estándares actuales de CSS3",
                "4": "Utilizar herramientas de edición de código de un modo más ágil",
                "5": "Saber qué pasos seguir desde cero en el proceso de creación web a través de una Metodología de Trabajo Profesional"

            },
            "inscritos": "2500"

        }, {
            "id": 8,
            "titulo": "Master en PHP, SQL, POO, MVC, Laravel, Symfony 4, WordPress+",
            "autor": "Víctor Robles",
            "idioma": "Español ",
            "fechaActualizacion": "2/2019",
            "descripcion": "Bienvenido al Máster en PHP, en el que aprenderemos todo lo necesario para dominar el lenguaje de programación del lado del servidor(backend) más popular en la actualidad y todas las tecnologías a su alrededor con más futuro y demanda laboral.",
            "costo": "2970.00",
            "puntuacion": "4.5",
            "img": "assets/img/laravel.png",
            "habilidades": {
                "1": "Aprender a programar desde cero",
                "2": "Aprender programación orientada a objetos en PHP",
                "3": "Dominar SQL y MySQL",
                "4": "Conocimientos en Frameworks de desarrollo"
            },
            "inscritos": "2500"
        }, {
            "id": 9,
            "titulo": "Curso completo de Machine Learning: Data Science en Python",
            "autor": "Juan Gabriel Gomila Salas",
            "idioma": "Español",
            "fechaActualizacion": "4/2019",
            "descripcion": "¿Te suenan las palabras Machine Learning o Data Scientist? ¿Te pica la curiosidad de para qué sirven estas técnicas o por qué empresas de todo el mundo pagan un sueldo de 120.000 hasta 200.000$ al año a un científico de datos? Pues este curso está pensado y diseñado por todo un profesional del mundo del Data Science como es Juan Gabriel Gomila, de modo que os va a compartir todo su conocimiento y ayudaros a entender la teoría tan compleja sobre las matemáticas que tiene detrás, los algoritmos y librerías de programación con Python para convertiros en todo unos expertos a pesar de que no tengáis experiencia previa. Veremos paso a paso como empezar a trabajar con conceptos y algoritmos del mundo del Machine Learning.Con cada nueva clase y sección que completes tendrás unas nuevas habilidades que te ayudarán a entender este mundo tan completo y lucrativo que puede ser esta rama del Data Science.",
            "costo": "2435.00",
            "puntuacion": "4,6",
            "img": "assets/img/python.jpg",
            "habilidades": {
                "1": "Ser todo un master Jedi del Machine Learning con Python",
                "2": "Utilizar las técnicas de Machine Learning para uso personal y para asesorar empresas",
                "3": "Tener una buena intuición de la mayoría de modelos de Machine Learning",
                "4": "Conocer qué modelo de Machine Learning se ajusta mejor a cada tipo de problema"
            },
            "inscritos": "2500"

        }, {
            "id": 10,
            "titulo": "Introducción a MongoDB (NoSQL) - los conceptos esenciales",
            "autor": "Christian Gámez",
            "idioma": "Español",
            "fechaActualizacion": " 10/2017",
            "descripcion": "Un elemento clave del éxito de las bases de datos relacionales ha sido disponer del lenguaje estándar de consultas SQL. Sin embargo, el surgimiento del denominado «Big Data» ha traído el nacimientos de nuevas necesidades y formas de procesamiento y almacenamiento de la información. En este curso vamos a trabajar los conceptos esenciales para trabajar en una compañía con bases de datos MongoDB. ",
            "costo": "450.00",
            "puntuacion": "4.3",
            "img": "assets/img/mongo.png",
            "habilidades": {
                "1": "Modelar Bases de datos NoSQL",
                "2": "Crear usuarios y asignar permisos",
                "3": "Crear usuarios y asignar permisos",
                "4": "Operaciones de inserción, actualización, consulta y borrado",
                "5": "Cuando usar base de datos NoSQL"

            },
            "inscritos": "2500"
        }]

    constructor() { }

    getCourses() {
        return this.courses;
    }

    getIndexCourse(index: number) {

        let result = this.courses.filter(function (course) { return course.id === index; });
        return result[0];

    }

    notateCurrency(value: string) {
        let parts = value.split('$')
        return (parts.length > 1) ? parts[1] : parts[0];
    }

    notateRating(value: string) {

        let parts = value.split(',');
        let rate;

        if (parts.length > 1) {
            rate = Number(`${parts[0]}.${parts[1]}`)
        } else {
            rate = Number(value);
        }

        return rate;

    }

    filterCourses(value:any) {

        let filteredCourses: any = [];
        value = value.toLowerCase();

        filteredCourses = this.courses.filter((course) => {
            return course.titulo.toLowerCase().indexOf(value) >= 0;
        })

        return filteredCourses;
    }

}