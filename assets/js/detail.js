// Product data registry
const products = {
    'm19-15': {
        category: 'WATER / MICRO',
        title: 'M19 - 15MM - BOOS',
        image: 'assets/img/products/m19-15mm.jpg',
        description: 'Nuevo contador de chorro múltiple M19 de BOOS, para uso domiciliario seleccionado en base a nuestra experiencia en el mercado y la necesidad del cliente. Un producto económico con las innovaciones de la NMP 005-2018 con la calidad y experiencia de BOOS.',
        specs: [
            'Esfera extra seca y orientable 360\u00b0',
            'Pre-instalación para emisor de pulsos bidireccional.',
            'Transmisión magnética sin engranajes en el agua.',
            'Rango dinámico hasta R160 y R125'
        ]
    },
    's160-15': {
        category: 'WATER / MICRO',
        title: 'S160 - 15MM - ELSTER',
        image: 'assets/img/products/s160-15mm.jpg',
        description: 'Medidor de chorro único con alta calidad metrológica. Tecnología de transmisión magnética con cuatro imanes permanentes de ferrita que crean un par proporcional, transfiriendo la rotación de la turbina al módulo totalizador sin contacto directo con el agua.',
        specs: [
            'Sistema de transmisión magnética sin engranajes en el agua.',
            'Rango dinámico hasta R160, R125 para Q3 2.5 m3/h.',
            'Pre-instalado para emisor de pulsos direccional.',
            'Solo para uso con agua fría.',
            'Certificado MID y OIML R49.'
        ]
    },
    'u-wr': {
        category: 'WATER / MICRO',
        title: 'U-WR 15MM / 20MM - VIEWSHINE',
        image: 'assets/img/products/u-wr-15mm.jpg',
        description: 'Medidor ultrasónico residencial sin partes móviles, logrando una medición precisa y precisión de por vida. Detecta el caudal más bajo y brinda soluciones para el consumo de agua no reportado.',
        specs: [
            'Tecnología de medición ultrasónica, sin partes móviles.',
            'Comunicación inalámbrica integrada compatible con sistemas MDC/MDM.',
            'Módulo de comunicación de radio bidireccional de baja potencia y largo alcance para redes AMI.',
            'Operación libre de mantenimiento durante toda la vida útil.',
            'Instalación vertical y horizontal.',
            'Rendimiento metrológico excepcional.'
        ]
    },
    'm19-20': {
        category: 'WATER / MICRO',
        title: 'M19 - 20MM - BOOS',
        image: 'assets/img/products/m19-20mm.jpg',
        description: 'Contador de chorro múltiple M19 de BOOS en diámetro de 20mm, para uso domiciliario y conexiones de mayor caudal. Seleccionado en base a nuestra experiencia en el mercado con las innovaciones de la NMP 005-2018.',
        specs: [
            'Esfera extra seca y orientable 360\u00b0',
            'Pre-instalación para emisor de pulsos bidireccional.',
            'Transmisión magnética sin engranajes en el agua.',
            'Rango dinámico hasta R160 y R125',
            'Diámetro nominal de 20mm para mayor caudal.'
        ]
    },
    's220-20': {
        category: 'WATER / MICRO',
        title: 'S220 - 20MM - ELSTER',
        image: 'assets/img/products/s220-20mm.jpg',
        description: 'Medidor de velocidad de chorro único de la familia Honeywell, diseñado para uso residencial bajo la norma ISO 4064. Transmisión magnética sin engranajes, totalizador de 5 tambores en metros cúbicos.',
        specs: [
            'Diámetro de 20mm.',
            'Transmisión magnética sin engranajes en el agua.',
            'Certificado MID y OIML R49.',
            'Pre-instalado para emisor de pulsos inductivo bidireccional o módulo de radio.',
            'Totalizador de 5 tambores (m\u00b3).',
            'Tecnología de chorro único.'
        ]
    },
    's19': {
        category: 'WATER / MICRO',
        title: 'S19 - 15MM / 20MM - BOOS',
        image: 'assets/img/products/s19-15mm.jpg',
        description: 'Medidor de chorro único BOOS para uso residencial. Disponible en diámetros de 15mm y 20mm, ideal para la medición precisa en conexiones domiciliarias con alta calidad metrológica.',
        specs: [
            'Disponible en 15mm y 20mm.',
            'Tecnología de chorro único.',
            'Esfera extra seca y orientable 360\u00b0.',
            'Transmisión magnética sin engranajes en el agua.',
            'Alta precisión metrológica.'
        ]
    },
    'm120-25': {
        category: 'WATER / MICRO',
        title: 'M120 - 25MM - ELSTER',
        image: 'assets/img/products/m120-25mm.jpg',
        description: 'Medidor multichorro certificado MID para caudales pequeños y medianos. Precisión R160 en posición horizontal, con sistema de turbina interna accionada por chorros de agua desde varias direcciones.',
        specs: [
            'Diámetro de 25mm.',
            'Emisor de pulsos con detección de fraude.',
            'Longitudes y roscas compatibles con otros modelos.',
            'Sistema multichorro con turbina interna accionada por chorros de agua.',
            'Alto nivel de protección contra humedad e impactos.',
            'Certificación MID, precisión R160 horizontal.'
        ]
    },
    'v200-20': {
        category: 'WATER / MICRO',
        title: 'V200 - 20MM - ELSTER',
        image: 'assets/img/products/v200-20mm.jpg',
        description: 'Medidor volumétrico de pistón ranurado que previene el depósito de partículas sólidas, reduciendo la detención del contador. Tecnología de acoplamiento magnético y detección de caudales extremadamente bajos.',
        specs: [
            'Conectividad EMERIS por radiofrecuencia integrada.',
            'Transmisión pistón-esfera protegida por acoplamiento magnético.',
            'Montaje calibrado para detección de caudales extremadamente bajos.',
            'Operación sin contacto con lecturas absolutas y genuinas.',
            'Diseño de mecanismo sin fricción.',
            'Pistón ranurado anti-depósito de partículas.'
        ]
    },
    'v200-15': {
        category: 'WATER / MICRO',
        title: 'V200 - 15MM - ELSTER',
        image: 'assets/img/products/v200-15mm.jpg',
        description: 'El contador V200P pertenece a la familia de contadores volumétricos de ELSTER IBERCONTA. Diseñado para facturación de consumos, ofrece alta precisión en cualquier posición de instalación.',
        specs: [
            'Disponible en diámetros de 15mm y 20mm.',
            'Capacidad de flujo de 1.6 a 4 m\u00b3/h.',
            'Transmisión magnética con protección.',
            'Cámara y pistón fabricados en polímeros técnicos de alta resistencia.',
            'Instalación en cualquier posición.',
            'Alta precisión metrológica para facturación.'
        ]
    },
    'v110-15': {
        category: 'WATER / MICRO',
        title: 'V110 - 15MM - ELSTER',
        image: 'assets/img/products/v110-15mm.jpg',
        description: 'El principio volumétrico de medición del pistón rotativo garantiza registro incluso a las tasas de flujo más bajas con mantenimiento de precisión sobre el rango de flujo completo.',
        specs: [
            'Pistón rotativo volumétrico de alta precisión.',
            'Registro garantizado a tasas de flujo mínimas.',
            'Mantenimiento de precisión en todo el rango de flujo.',
            'Diseño compacto para instalaciones residenciales.',
            'Diámetro nominal de 15mm.'
        ]
    },
    'h4000': {
        category: 'WATER / MACRO',
        title: 'H4000 - 50MM / 80MM / 100MM / 200MM / 250MM - ELSTER',
        image: 'assets/img/products/h4000.jpg',
        description: 'El H4000I ha sido diseñado para la medición de grandes caudales de agua fría tanto para aplicaciones comerciales como industriales. Dispone de un campo de medida extendido que supera la Clase B metrológica.',
        specs: [
            'Esfera encapsulada IP68 con rotación de 360\u00b0.',
            'Rango de calibres de 40mm a 300mm.',
            'Pre-instalación para emisor de pulsos bidireccional.',
            'Instalacion horizontal, vertical e inclinada.',
            'Esfera sellada con carátula rotativa.',
            'Campo de medida superior a Clase B metrológica.',
            'Ideal para aplicaciones comerciales e industriales.'
        ]
    },
    'uwr2-15': {
        category: 'WATER / MICRO',
        title: 'UWR2-15 ABS Q3 2.5 R500 15MM X 110MM - VIEWSHINE',
        image: 'assets/img/products/uwr2-15.jpg',
        description: 'Para uso como el medidor convencional, pero con alta calidad de medición. Medidores para agua de 1/2" Marca VIEWSHINE modelo U WR2-15. Fabricado en CHINA con tecnología avanzada de medicion ultrasonica.',
        specs: [
            'Diámetro nominal de 15mm, longitud 110mm.',
            'Construcción en ABS de alta resistencia.',
            'Clasificación Q3 con factor de capacidad 2.5.',
            'Designación R500 de alta precision.',
            'Tecnología ultrasónica sin partes móviles.',
            'Compatible con medidores convencionales.'
        ]
    },
    'shd': {
        category: 'WATER / MACRO',
        title: 'SHD - MEDIDOR DE FLUJO ELECTROMAGNETICO',
        image: 'assets/img/products/shd-electromagnético.jpg',
        description: 'El medidor de flujo electromagnético es un tipo de instrumento inductivo diseñado por la ley de inducción electromagnética de Faraday para medir el flujo de medios conductivos en tuberias cerradas.',
        specs: [
            'Principio de medición basado en la Ley de Faraday.',
            'Sin partes móviles, sin pérdida de presión.',
            'Apto para medios conductivos en tuberias cerradas.',
            'Alta precisión en medición de grandes caudales.',
            'Ideal para aplicaciones industriales y comerciales.',
            'Señal de salida proporcional al flujo.'
        ]
    }
};

// Load product based on URL parameter
function loadProduct() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    if (id && products[id]) {
        const p = products[id];

        document.getElementById('productCategory').textContent = p.category;
        document.getElementById('productTitle').textContent = p.title;
        document.getElementById('productImage').src = p.image;
        document.getElementById('productImage').alt = p.title;
        document.getElementById('productDescription').textContent = p.description;
        document.title = p.title + ' | Ventas Corporativas';

        const specsList = document.getElementById('productSpecs');
        specsList.innerHTML = '';
        p.specs.forEach(spec => {
            const li = document.createElement('li');
            li.innerHTML = '<i class="fas fa-circle-dot"></i> ' + spec;
            specsList.appendChild(li);
        });
    }
}

document.addEventListener('DOMContentLoaded', loadProduct);
