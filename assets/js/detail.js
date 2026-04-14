// Product data registry
const products = {
    'm19-15': {
        category: 'WATER / MICRO',
        title: 'M19 - 15MM - BOOS',
        image: 'assets/img/products/m19-15mm.jpg',
        description: 'Nuevo contador de chorro multiple M19 de BOOS, para uso domiciliario seleccionado en base a nuestra experiencia en el mercado y la necesidad del cliente. Un producto economico con las innovaciones de la NMP 005-2018 con la calidad y experiencia de BOOS.',
        specs: [
            'Esfera extra seca y orientable 360\u00b0',
            'Pre-instalacion para emisor de pulsos bidireccional.',
            'Transmision magnetica sin engranajes en el agua.',
            'Rango dinamico hasta R160 y R125'
        ]
    },
    's160-15': {
        category: 'WATER / MICRO',
        title: 'S160 - 15MM - ELSTER',
        image: 'assets/img/products/s160-15mm.jpg',
        description: 'Medidor de chorro unico con alta calidad metrologica. Tecnologia de transmision magnetica con cuatro imanes permanentes de ferrita que crean un par proporcional, transfiriendo la rotacion de la turbina al modulo totalizador sin contacto directo con el agua.',
        specs: [
            'Sistema de transmision magnetica sin engranajes en el agua.',
            'Rango dinamico hasta R160, R125 para Q3 2.5 m3/h.',
            'Pre-instalado para emisor de pulsos direccional.',
            'Solo para uso con agua fria.',
            'Certificado MID y OIML R49.'
        ]
    },
    'u-wr': {
        category: 'WATER / MICRO',
        title: 'U-WR 15MM / 20MM - VIEWSHINE',
        image: 'assets/img/products/u-wr-15mm.jpg',
        description: 'Medidor ultrasonico residencial sin partes moviles, logrando una medicion precisa y precision de por vida. Detecta el caudal mas bajo y brinda soluciones para el consumo de agua no reportado.',
        specs: [
            'Tecnologia de medicion ultrasonica, sin partes moviles.',
            'Comunicacion inalambrica integrada compatible con sistemas MDC/MDM.',
            'Modulo de comunicacion de radio bidireccional de baja potencia y largo alcance para redes AMI.',
            'Operacion libre de mantenimiento durante toda la vida util.',
            'Instalacion vertical y horizontal.',
            'Rendimiento metrologico excepcional.'
        ]
    },
    'm19-20': {
        category: 'WATER / MICRO',
        title: 'M19 - 20MM - BOOS',
        image: 'assets/img/products/m19-20mm.jpg',
        description: 'Contador de chorro multiple M19 de BOOS en diametro de 20mm, para uso domiciliario y conexiones de mayor caudal. Seleccionado en base a nuestra experiencia en el mercado con las innovaciones de la NMP 005-2018.',
        specs: [
            'Esfera extra seca y orientable 360\u00b0',
            'Pre-instalacion para emisor de pulsos bidireccional.',
            'Transmision magnetica sin engranajes en el agua.',
            'Rango dinamico hasta R160 y R125',
            'Diametro nominal de 20mm para mayor caudal.'
        ]
    },
    's220-20': {
        category: 'WATER / MICRO',
        title: 'S220 - 20MM - ELSTER',
        image: 'assets/img/products/s220-20mm.jpg',
        description: 'Medidor de velocidad de chorro unico de la familia Honeywell, disenado para uso residencial bajo la norma ISO 4064. Transmision magnetica sin engranajes, totalizador de 5 tambores en metros cubicos.',
        specs: [
            'Diametro de 20mm.',
            'Transmision magnetica sin engranajes en el agua.',
            'Certificado MID y OIML R49.',
            'Pre-instalado para emisor de pulsos inductivo bidireccional o modulo de radio.',
            'Totalizador de 5 tambores (m\u00b3).',
            'Tecnologia de chorro unico.'
        ]
    },
    's19': {
        category: 'WATER / MICRO',
        title: 'S19 - 15MM / 20MM - BOOS',
        image: 'assets/img/products/s19-15mm.jpg',
        description: 'Medidor de chorro unico BOOS para uso residencial. Disponible en diametros de 15mm y 20mm, ideal para la medicion precisa en conexiones domiciliarias con alta calidad metrologica.',
        specs: [
            'Disponible en 15mm y 20mm.',
            'Tecnologia de chorro unico.',
            'Esfera extra seca y orientable 360\u00b0.',
            'Transmision magnetica sin engranajes en el agua.',
            'Alta precision metrologica.'
        ]
    },
    'm120-25': {
        category: 'WATER / MICRO',
        title: 'M120 - 25MM - ELSTER',
        image: 'assets/img/products/m120-25mm.jpg',
        description: 'Medidor multichorro certificado MID para caudales pequenos y medianos. Precision R160 en posicion horizontal, con sistema de turbina interna accionada por chorros de agua desde varias direcciones.',
        specs: [
            'Diametro de 25mm.',
            'Emisor de pulsos con deteccion de fraude.',
            'Longitudes y roscas compatibles con otros modelos.',
            'Sistema multichorro con turbina interna accionada por chorros de agua.',
            'Alto nivel de proteccion contra humedad e impactos.',
            'Certificacion MID, precision R160 horizontal.'
        ]
    },
    'v200-20': {
        category: 'WATER / MICRO',
        title: 'V200 - 20MM - ELSTER',
        image: 'assets/img/products/v200-20mm.jpg',
        description: 'Medidor volumetrico de piston ranurado que previene el deposito de particulas solidas, reduciendo la detencion del contador. Tecnologia de acoplamiento magnetico y deteccion de caudales extremadamente bajos.',
        specs: [
            'Conectividad EMERIS por radiofrecuencia integrada.',
            'Transmision piston-esfera protegida por acoplamiento magnetico.',
            'Montaje calibrado para deteccion de caudales extremadamente bajos.',
            'Operacion sin contacto con lecturas absolutas y genuinas.',
            'Diseno de mecanismo sin friccion.',
            'Piston ranurado anti-deposito de particulas.'
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
