// Base de Datos de Precios y Medidas Estándar
    const DATABASE = {
      ventanas: [
        { w: 50, h: 30, s20: 1450, s25: 1800, monoblok: 0, mosquitero: 550, probba: 3600, gala: 4400, mosquiteroPG: 900 },
        { w: 60, h: 40, s20: 1750, s25: 2150, monoblok: 0, mosquitero: 600, probba: 4000, gala: 5000, mosquiteroPG: 900 },
        { w: 80, h: 40, s20: 2000, s25: 2550, monoblok: 0, mosquitero: 750, probba: 4400, gala: 5500, mosquiteroPG: 950 },
        { w: 80, h: 80, s20: 2450, s25: 3550, monoblok: 6400, mosquitero: 800, probba: 5500, gala: 7000, mosquiteroPG: 1100 },
        { w: 100, h: 40, s20: 2200, s25: 3200, monoblok: 0, mosquitero: 850, probba: 4800, gala: 6000, mosquiteroPG: 1100 },
        { w: 100, h: 50, s20: 2350, s25: 3400, monoblok: 0, mosquitero: 850, probba: 5100, gala: 6500, mosquiteroPG: 1200 },
        { w: 100, h: 60, s20: 2450, s25: 3600, monoblok: 6500, mosquitero: 900, probba: 5400, gala: 6800, mosquiteroPG: 1300 },
        { w: 100, h: 80, s20: 2550, s25: 4000, monoblok: 7000, mosquitero: 950, probba: 6000, gala: 7600, mosquiteroPG: 1400 },
        { w: 100, h: 100, s20: 2750, s25: 4300, monoblok: 7000, mosquitero: 1100, probba: 6500, gala: 8400, mosquiteroPG: 1500 },
        { w: 120, h: 50, s20: 2500, s25: 4100, monoblok: 7000, mosquitero: 1000, probba: 5500, gala: 7000, mosquiteroPG: 1400 },
        { w: 120, h: 60, s20: 2650, s25: 4200, monoblok: 7000, mosquitero: 1050, probba: 5800, gala: 7500, mosquiteroPG: 1450 },
        { w: 120, h: 80, s20: 2750, s25: 4300, monoblok: 7000, mosquitero: 1100, probba: 6300, gala: 8200, mosquiteroPG: 1500 },
        { w: 120, h: 100, s20: 3050, s25: 4650, monoblok: 7400, mosquitero: 1250, probba: 7000, gala: 9000, mosquiteroPG: 1600 },
        { w: 120, h: 120, s20: 3450, s25: 4850, monoblok: 7700, mosquitero: 1300, probba: 7400, gala: 9800, mosquiteroPG: 1700 },
        { w: 150, h: 50, s20: 3000, s25: 4300, monoblok: 7950, mosquitero: 1250, probba: 5900, gala: 7800, mosquiteroPG: 1600 },
        { w: 150, h: 60, s20: 3200, s25: 4650, monoblok: 8250, mosquitero: 1300, probba: 6400, gala: 8300, mosquiteroPG: 1700 },
        { w: 150, h: 80, s20: 3550, s25: 4950, monoblok: 9300, mosquitero: 1400, probba: 7000, gala: 9100, mosquiteroPG: 1850 },
        { w: 150, h: 100, s20: 3750, s25: 5200, monoblok: 9600, mosquitero: 1450, probba: 7600, gala: 9900, mosquiteroPG: 2000 },
        { w: 150, h: 120, s20: 4100, s25: 5850, monoblok: 10150, mosquitero: 1500, probba: 8200, gala: 10800, mosquiteroPG: 2100 },
        { w: 150, h: 150, s20: 5750, s25: 7150, monoblok: 12100, mosquitero: 1650, probba: 9000, gala: 12000, mosquiteroPG: 2400 },
        { w: 150, h: 200, s20: 6600, s25: 8700, monoblok: 17100, mosquitero: 3050, probba: 10600, gala: 14000, mosquiteroPG: 3900 },
        { w: 180, h: 100, s20: 5500, s25: 7600, monoblok: 11550, mosquitero: 1650, probba: 8300, gala: 11000, mosquiteroPG: 2400 },
        { w: 180, h: 120, s20: 5850, s25: 8250, monoblok: 12650, mosquitero: 1800, probba: 9000, gala: 11800, mosquiteroPG: 2600 },
        { w: 180, h: 150, s20: 6300, s25: 8600, monoblok: 15200, mosquitero: 2900, probba: 9900, gala: 13000, mosquiteroPG: 3700 },
        { w: 180, h: 200, s20: 0, s25: 9800, monoblok: 22000, mosquitero: 4000, probba: 11600, gala: 15200, mosquiteroPG: 5000 },
        { w: 200, h: 200, s20: 0, s25: 10350, monoblok: 23100, mosquitero: 4550, probba: 12000, gala: 16000, mosquiteroPG: 5800 },
        { w: 220, h: 200, s20: 0, s25: 11350, monoblok: 28600, mosquitero: 4950, probba: 12800, gala: 16800, mosquiteroPG: 6000 },
        { w: 250, h: 200, s20: 0, s25: 13200, monoblok: 33550, mosquitero: 5500, probba: 13700, gala: 17800, mosquiteroPG: 6800 },
        { w: 300, h: 200, s20: 0, s25: 14850, monoblok: 39600, mosquitero: 6050, probba: 15000, gala: 20000, mosquiteroPG: 7000 }
      ],
      puertas: [
        { tipo: "vidrio entero", precio: 7600 },
        { tipo: "vidrio dividido", precio: 7900 },
        { tipo: "mitad vidrio", precio: 8200 },
        { tipo: "con barrotes", precio: 8500 },
        { tipo: "toda ciega", precio: 9000 },
        { tipo: "medio colonial", precio: 10500 }
      ],
      rejas: [
        { w: 60, h: 40, r12: 1100, r16: 1500, probba: 4000, gala: 5000 },
        { w: 80, h: 40, r12: 1200, r16: 1600, probba: 4400, gala: 5500 },
        { w: 80, h: 80, r12: 1800, r16: 2250, probba: 5500, gala: 7000 },
        { w: 100, h: 50, r12: 1800, r16: 2250, probba: 5100, gala: 6500 },
        { w: 100, h: 60, r12: 1950, r16: 2350, probba: 5400, gala: 6800 },
        { w: 100, h: 80, r12: 2050, r16: 2450, probba: 6000, gala: 7600 },
        { w: 100, h: 100, r12: 2200, r16: 2600, probba: 6500, gala: 8400 },
        { w: 120, h: 50, r12: 1950, r16: 2400, probba: 5500, gala: 7000 },
        { w: 120, h: 60, r12: 2050, r16: 2500, probba: 5800, gala: 7500 },
        { w: 120, h: 80, r12: 2150, r16: 2800, probba: 6300, gala: 8200 },
        { w: 120, h: 100, r12: 2400, r16: 2950, probba: 7000, gala: 9000 },
        { w: 120, h: 120, r12: 2800, r16: 3450, probba: 7400, gala: 9800 },
        { w: 150, h: 50, r12: 2200, r16: 2550, probba: 5900, gala: 7800 },
        { w: 150, h: 60, r12: 2300, r16: 2650, probba: 6400, gala: 8300 },
        { w: 150, h: 80, r12: 2550, r16: 3050, probba: 7000, gala: 9100 },
        { w: 150, h: 100, r12: 2800, r16: 3500, probba: 7600, gala: 9900 },
        { w: 150, h: 120, r12: 3150, r16: 4000, probba: 8200, gala: 10800 },
        { w: 150, h: 150, r12: 3800, r16: 5300, probba: 9000, gala: 12000 }
      ],
      puertaRejas: [
        { w: 80, h: 200, r12: 5500, r16: 6800 },
        { w: 150, h: 200, r12: 7200, r16: 8250, probba: 10600, gala: 14000 },
        { w: 200, h: 200, r12: 8700, r16: 9750, probba: 12000, gala: 16000 }
      ]
    };

    const TOLERANCE = 5; // Tolerancia en cm para redondear a medidas estándar inferiores

    const CERRADURA_PRECIOS = {
      ninguna: 0,
      comun: 1000,
      monopunto: 2700,
      bipunto: 4700
    };

    // Encontrar la medida estándar más cercana (igual o superior, considerando tolerancia)
    function findClosestStandard(type, w, h) {
      const dataset = DATABASE[type];
      if (!dataset) return null;

      const minVal = Math.min(w, h);
      const maxVal = Math.max(w, h);

      // Filtrar todos los que cubren o igualan las dimensiones ingresadas con la tolerancia aplicada (intercambiables)
      const candidates = dataset.filter(item => {
        const itemMin = Math.min(item.w, item.h);
        const itemMax = Math.max(item.w, item.h);
        return itemMin >= (minVal - TOLERANCE) && itemMax >= (maxVal - TOLERANCE);
      });

      if (candidates.length === 0) {
        // Si excede la base de datos, encontrar el máximo disponible para no romper la app
        let maxW = Math.max(...dataset.map(i => i.w));
        let maxH = Math.max(...dataset.map(i => i.h));
        const fallback = dataset.find(item => item.w === maxW && item.h === maxH) || dataset[dataset.length - 1];
        return { item: fallback, isFallback: true };
      }

      // Ordenar los candidatos primero por la dimensión mayor, luego por la menor
      candidates.sort((a, b) => {
        const maxA = Math.max(a.w, a.h);
        const maxB = Math.max(b.w, b.h);
        if (maxA !== maxB) return maxA - maxB;
        return Math.min(a.w, a.h) - Math.min(b.w, b.h);
      });

      return { item: candidates[0], isFallback: false };
    }

    // Variables de estado
    let currentBudget = {
      producto: 'ventanas',
      ancho: 100,
      alto: 100,
      puertaTipo: 'vidrio entero',
            serie: 's20', // s20, s25, probba, gala
      cerradura: 'ninguna', // ninguna, comun, monopunto, bipunto
      tieneCortina: false,
      tieneMosquitero: false,
      tieneDVH: false,
      dolarValor: 40,
      color: 'base', // base, blanco, otros
      rejaTipo: 'r12', // r12, r16
      cantidad: 1,
      total: 0,
      breakdown: {}
    };

    let addedItems = [];

    // Encontrar la descripción legible de un ítem para la lista
    function getItemDescription(item) {
      const p = item.producto;
      const b = item.breakdown;
      if (p === 'ventanas') {
        let colorText = item.color === 'base' ? 'Natural' : (item.color === 'blanco' ? 'Blanco' : 'Negro/Madera');
        let extras = [];
        if (item.tieneCortina && b.cortinaDisponible) extras.push('con cortina');
        if (item.tieneMosquitero) extras.push('con mosquitero');
                if (item.tieneDVH) extras.push('con DVH');
        if (item.cerradura === 'comun') extras.push('con cerradura común');
        else if (item.cerradura === 'monopunto') extras.push('con cerradura monopunto sin llave');
        else if (item.cerradura === 'bipunto') extras.push('con cerradura bipunto con llave');
        const extraStr = extras.length > 0 ? ` (${extras.join(', ')})` : '';
        return `Ventana ${item.serie.toUpperCase()} ${item.ancho}x${item.alto} cm [${colorText}]${extraStr}`;
      } else if (p === 'puertas') {
        let colorText = item.color === 'base' ? 'Natural' : (item.color === 'blanco' ? 'Blanco' : 'Negro/Madera');
        return `Puerta Alum. ${item.puertaTipo} [${colorText}]`;
      } else if (p === 'rejas') {
        return `Reja Hierro ${item.rejaTipo.toUpperCase()} ${item.ancho}x${item.alto} cm`;
      } else if (p === 'puertaRejas') {
        return `Puerta Reja ${item.rejaTipo.toUpperCase()} ${item.ancho}x${item.alto} cm`;
      }
      return 'Producto';
    }

    // Función principal de cálculo del ítem activo
    function calculateBudget() {
      const p = currentBudget.producto;
      let total = 0;
      let breakdown = {};
      let infoMsg = '';

      if (p === 'ventanas') {
        const w = currentBudget.ancho;
        const h = currentBudget.alto;
        const match = findClosestStandard('ventanas', w, h);
        
        if (match) {
          const item = match.item;
          const isExact = !match.isFallback && (
            (item.w === w && item.h === h) ||
            (item.w === h && item.h === w)
          );
          if (isExact) {
            infoMsg = `Medida estándar exacta: ${item.w}x${item.h} cm`;
          } else {
            infoMsg = `Medida aproximada a estándar de: ${item.w}x${item.h} cm`;
          }

          // 1. Obtener precio base de la serie elegida
          let priceBase = 0;
          if (currentBudget.serie === 's20') {
            priceBase = item.s20;
            if (priceBase === 0) {
              priceBase = item.s25;
              infoMsg += ` (Serie 20 no disponible, cotizada en Serie 25)`;
            }
          } else if (currentBudget.serie === 'probba') {
            priceBase = item.probba * 1.10;
          } else if (currentBudget.serie === 'gala') {
            priceBase = item.gala * 1.10;
          } else {
            priceBase = item.s25;
          }

          // 2. Calcular cortina (Monoblok)
          let priceCortina = 0;
          let cortinaDisponible = true;
          if (currentBudget.tieneCortina) {
            if (item.monoblok > 0 && item.s20 > 0) {
              priceCortina = item.monoblok - item.s20;
            } else if (item.monoblok > 0 && item.s20 === 0) {
              priceCortina = item.monoblok - item.s25;
              if (priceCortina < 0) priceCortina = item.monoblok * 0.6;
            } else {
              cortinaDisponible = false;
            }
          }

          // 3. Aplicar incremento de color SOLO a la ventana base
          let colorMultiplier = 1.0;
          if (currentBudget.color === 'blanco') colorMultiplier = 1.10;
          else if (currentBudget.color === 'otros') colorMultiplier = 1.30;

          const windowWithColor = priceBase * colorMultiplier;

          // 4. Mosquitero
          let priceMosquitero = 0;
          if (currentBudget.tieneMosquitero) {
            let baseMosquitero = item.mosquitero;
            if (currentBudget.serie === 'probba' || currentBudget.serie === 'gala') {
              baseMosquitero = (item.mosquiteroPG || item.mosquitero) * 1.10;
            }
            priceMosquitero = baseMosquitero * colorMultiplier;
          }

          // 5. DVH
          let priceDVH = 0;
          if (currentBudget.tieneDVH) {
            const area = (w * h) / 10000;
            const usdCost = Math.max(1, area) * 75;
            priceDVH = usdCost * currentBudget.dolarValor;
          }

          // 6. Cerradura (Accesorio)
          const priceCerradura = CERRADURA_PRECIOS[currentBudget.cerradura] || 0;

          // Aplicar cantidad al subtotal
          const subtotal = (windowWithColor + priceCortina + priceMosquitero + priceDVH + priceCerradura) * currentBudget.cantidad;
          total = subtotal;

          breakdown = {
            base: priceBase,
            colorSurcharge: windowWithColor - priceBase,
            cortina: priceCortina,
            mosquitero: priceMosquitero,
            dvh: priceDVH,
            cerradura: priceCerradura,
            cortinaDisponible,
            standardW: item.w,
            standardH: item.h,
            quantity: currentBudget.cantidad
          };
        }
      } else if (p === 'puertas') {
        const puerta = DATABASE.puertas.find(d => d.tipo === currentBudget.puertaTipo);
        if (puerta) {
          let colorMultiplier = 1.0;
          if (currentBudget.color === 'blanco') colorMultiplier = 1.10;
          else if (currentBudget.color === 'otros') colorMultiplier = 1.30;

          const basePrice = puerta.precio;
          const withColor = basePrice * colorMultiplier;
          const qty = currentBudget.cantidad;
          total = withColor * qty;

          breakdown = {
            base: basePrice,
            colorSurcharge: withColor - basePrice,
            quantity: qty
          };
          infoMsg = `Puerta de aluminio estándar (${puerta.tipo})`;
        }
      } else if (p === 'rejas') {
        const w = currentBudget.ancho;
        const h = currentBudget.alto;
        const match = findClosestStandard('rejas', w, h);
        if (match) {
          const item = match.item;
          const isExact = !match.isFallback && (
            (item.w === w && item.h === h) ||
            (item.w === h && item.h === w)
          );
          if (isExact) {
            infoMsg = `Medida estándar exacta: ${item.w}x${item.h} cm`;
          } else {
            infoMsg = `Medida aproximada a estándar de: ${item.w}x${item.h} cm`;
          }

          const price = (currentBudget.rejaTipo === 'r12' ? item.r12 : item.r16) * currentBudget.cantidad;
          total = price;
          breakdown = {
            base: price,
            standardW: item.w,
            standardH: item.h,
            quantity: currentBudget.cantidad
          };
        }
      } else if (p === 'puertaRejas') {
        const w = currentBudget.ancho;
        const h = currentBudget.alto;
        const match = findClosestStandard('puertaRejas', w, h);
        if (match) {
          const item = match.item;
          const isExact = !match.isFallback && (
            (item.w === w && item.h === h) ||
            (item.w === h && item.h === w)
          );
          if (isExact) {
            infoMsg = `Medida estándar exacta: ${item.w}x${item.h} cm`;
          } else {
            infoMsg = `Medida aproximada a estándar de: ${item.w}x${item.h} cm`;
          }

          const price = (currentBudget.rejaTipo === 'r12' ? item.r12 : item.r16) * currentBudget.cantidad;
          total = price;
          breakdown = {
            base: price,
            standardW: item.w,
            standardH: item.h,
            quantity: currentBudget.cantidad
          };
        }
      }

      currentBudget.total = total;
      currentBudget.breakdown = breakdown;

      updateUI(infoMsg);
    }

    // Agregar ítem actual a la lista
    function addItemToBudget() {
      addedItems.push(JSON.parse(JSON.stringify(currentBudget)));
      calculateBudget();
    }

    // Quitar un ítem de la lista
    function removeItemFromBudget(index) {
      addedItems.splice(index, 1);
      calculateBudget();
    }

    // Actualizar elementos del DOM
    function updateUI(infoMsg) {
      const optVentana = document.getElementById('options-ventana');
      const optPuerta = document.getElementById('options-puerta');
      const optReja = document.getElementById('options-reja');
      const optColor = document.getElementById('options-color');
      const sizeInputs = document.getElementById('size-inputs');

      const p = currentBudget.producto;

      // Toggle Visibility
      sizeInputs.style.display = p === 'puertas' ? 'none' : 'block';
      optVentana.style.display = p === 'ventanas' ? 'block' : 'none';
      optPuerta.style.display = p === 'puertas' ? 'block' : 'none';
      optReja.style.display = (p === 'rejas' || p === 'puertaRejas') ? 'block' : 'none';
      optColor.style.display = (p === 'ventanas' || p === 'puertas') ? 'block' : 'none';

      // Mostrar mensaje de aproximación
      const infoEl = document.getElementById('approximation-info');
      infoEl.textContent = infoMsg;

      const formatPrice = (val) => `$ ${Math.round(val).toLocaleString('es-AR')}`;

      // Desglosar resultados del ítem activo
      const breakdownEl = document.getElementById('breakdown-list');
      breakdownEl.innerHTML = '';

      if (p === 'ventanas') {
        const b = currentBudget.breakdown;
        const qty = currentBudget.cantidad;
        breakdownEl.innerHTML += `<li><span>Ventana Base (${currentBudget.serie.toUpperCase()})${qty>1? ' x'+qty : ''}:</span> <strong>${formatPrice(b.base * qty)}</strong></li>`;
        if (b.colorSurcharge > 0) {
          const colorLabel = currentBudget.color === 'blanco' ? 'Blanco (+10%)' : 'Negro/Madera (+30%)';
          breakdownEl.innerHTML += `<li><span>Recargo Color (${colorLabel})${qty>1? ' x'+qty : ''}:</span> <strong>${formatPrice(b.colorSurcharge * qty)}</strong></li>`;
        }
        if (currentBudget.tieneCortina) {
          if (b.cortinaDisponible) {
            breakdownEl.innerHTML += `<li><span>Cortina de enrollar${qty>1? ' x'+qty : ''}:</span> <strong>${formatPrice(b.cortina * qty)}</strong></li>`;
          } else {
            breakdownEl.innerHTML += `<li class="warning-li"><span>Cortina de enrollar:</span> <strong>No disponible</strong></li>`;
          }
        }
        if (currentBudget.tieneMosquitero) {
          breakdownEl.innerHTML += `<li><span>Mosquitero${qty>1? ' x'+qty : ''}:</span> <strong>${formatPrice(b.mosquitero * qty)}</strong></li>`;
        }
        if (currentBudget.tieneDVH) {
          breakdownEl.innerHTML += `<li><span>Doble Vidrio Hermético (DVH)${qty>1? ' x'+qty : ''}:</span> <strong>${formatPrice(b.dvh * qty)}</strong></li>`;
        }
        if (currentBudget.cerradura && currentBudget.cerradura !== 'ninguna') {
          let cerraduraNombre = 'Cerradura común';
          if (currentBudget.cerradura === 'monopunto') cerraduraNombre = 'Cerradura monopunto sin llave';
          else if (currentBudget.cerradura === 'bipunto') cerraduraNombre = 'Cerradura bipunto con llave';
          breakdownEl.innerHTML += `<li><span>${cerraduraNombre}${qty>1? ' x'+qty : ''}:</span> <strong>${formatPrice(b.cerradura * qty)}</strong></li>`;
        }
        breakdownEl.innerHTML += `<li style="border-top: 1px solid var(--panel-border); margin-top: 5px; padding-top: 8px;"><span>Subtotal de este ítem:</span> <strong>${formatPrice(currentBudget.total)}</strong></li>`;
      } else if (p === 'puertas') {
        const b = currentBudget.breakdown;
        breakdownEl.innerHTML += `<li><span>Puerta Aluminio (${currentBudget.puertaTipo})${b.quantity>1? ' x'+b.quantity : ''}:</span> <strong>${formatPrice(b.base * b.quantity)}</strong></li>`;
        if (b.colorSurcharge > 0) {
          const colorLabel = currentBudget.color === 'blanco' ? 'Blanco (+10%)' : 'Negro/Madera (+30%)';
          breakdownEl.innerHTML += `<li><span>Recargo Color (${colorLabel})${b.quantity>1? ' x'+b.quantity : ''}:</span> <strong>${formatPrice(b.colorSurcharge * b.quantity)}</strong></li>`;
        }
        breakdownEl.innerHTML += `<li style="border-top: 1px solid var(--panel-border); margin-top: 5px; padding-top: 8px;"><span>Subtotal de este ítem:</span> <strong>${formatPrice(currentBudget.total)}</strong></li>`;
      } else {
        const b = currentBudget.breakdown;
        const label = p === 'rejas' ? 'Reja Standard' : 'Puerta Reja';
        const isExact = (b.standardW === currentBudget.ancho && b.standardH === currentBudget.alto) ||
                        (b.standardW === currentBudget.alto && b.standardH === currentBudget.ancho);
        if (!isExact) {
          breakdownEl.innerHTML += `<li class="warning-li"><span>Medida aproximada:</span> <strong>${b.standardW}x${b.standardH} cm</strong></li>`;
        }
        breakdownEl.innerHTML += `<li><span>${label} (${currentBudget.rejaTipo.toUpperCase()})${b.quantity>1? ' x'+b.quantity : ''}:</span> <strong>${formatPrice(currentBudget.total)}</strong></li>`;
      }

      // Renderizar la lista de ítems agregados
      const itemsListEl = document.getElementById('items-list');
      itemsListEl.innerHTML = '';
      
      let overallTotal = 0;

      if (addedItems.length === 0) {
        itemsListEl.innerHTML = `<li style="color: var(--text-secondary); text-align: center; justify-content: center;">Ningún ítem agregado aún</li>`;
        overallTotal = 0; 
      } else {
        addedItems.forEach((item, index) => {
          overallTotal += item.total;
          
          const li = document.createElement('li');
          li.style.display = 'flex';
          li.style.justifyContent = 'space-between';
          li.style.alignItems = 'center';
          li.style.fontSize = '0.9rem';
          li.style.background = 'rgba(255,255,255,0.02)';
          li.style.padding = '8px 12px';
          li.style.borderRadius = '8px';
          li.style.marginBottom = '6px';
          li.style.border = '1px solid var(--panel-border)';

          const descSpan = document.createElement('span');
          let extraInfo = '';
          if (item.cantidad && item.cantidad > 1) extraInfo = ` (x${item.cantidad})`;
          if (item.producto !== 'puertas') {
            const isExact = (item.ancho === item.breakdown.standardW && item.alto === item.breakdown.standardH) ||
                            (item.ancho === item.breakdown.standardH && item.alto === item.breakdown.standardW);
            if (!isExact) {
              extraInfo += ` (Estándar: ${item.breakdown.standardW}x${item.breakdown.standardH} cm)`;
            }
          }
          descSpan.textContent = `${index + 1}. ${getItemDescription(item)}${extraInfo}`;
          descSpan.style.color = 'var(--text-primary)';
          descSpan.style.flex = '1';
          descSpan.style.marginRight = '10px';

          const priceDiv = document.createElement('div');
          priceDiv.style.display = 'flex';
          priceDiv.style.alignItems = 'center';
          priceDiv.style.gap = '10px';

          const priceSpan = document.createElement('strong');
          priceSpan.textContent = formatPrice(item.total);
          priceSpan.style.color = 'var(--text-success)';

          const removeBtn = document.createElement('button');
          removeBtn.innerHTML = '&times;';
          removeBtn.style.padding = '2px 8px';
          removeBtn.style.background = 'var(--danger-color)';
          removeBtn.style.borderRadius = '4px';
          removeBtn.style.fontSize = '1.1rem';
          removeBtn.style.lineHeight = '1';
          removeBtn.style.fontWeight = 'bold';
          removeBtn.addEventListener('click', () => removeItemFromBudget(index));

          priceDiv.appendChild(priceSpan);
          priceDiv.appendChild(removeBtn);
          li.appendChild(descSpan);
          li.appendChild(priceDiv);
          itemsListEl.appendChild(li);
        });
      }

      const displayTotal = addedItems.length > 0 ? overallTotal : currentBudget.total;
      document.getElementById('total-amount').textContent = formatPrice(displayTotal);

      // Formatear Mensaje para Cliente
      generateClientMessage(overallTotal);
    }

    function generateClientMessage(overallTotal) {
      const formatPrice = (val) => `$ ${Math.round(val).toLocaleString('es-AR')}`;
      let msg = '';

      if (addedItems.length === 0) {
        const p = currentBudget.producto;
        const b = currentBudget.breakdown;
        
        if (p === 'ventanas') {
          let serieLabel = 'Serie 20';
          if (currentBudget.serie === 's25') serieLabel = 'Serie 25';
          else if (currentBudget.serie === 'probba') serieLabel = 'Probba';
          else if (currentBudget.serie === 'gala') serieLabel = 'Gala';
          
          msg += `*Producto:* Ventana de Aluminio (${serieLabel})\n`;
          msg += `*Medida:* ${currentBudget.ancho}x${currentBudget.alto} cm\n`;
          let colorText = currentBudget.color === 'base' ? 'Natural/Gris' : (currentBudget.color === 'blanco' ? 'Blanco' : 'Negro o Madera');
          msg += `*Color:* ${colorText}\n`;
          msg += `*Cantidad:* ${currentBudget.cantidad}\n`;
          msg += `*Mosquitero:* ${currentBudget.tieneMosquitero ? 'Sí' : 'No'}\n`;
          msg += `*Cortina:* ${currentBudget.tieneCortina ? (b.cortinaDisponible ? 'Sí' : 'No disponible') : 'No'}\n`;
          msg += `*DVH:* ${currentBudget.tieneDVH ? 'Sí' : 'No'}\n`;
          if (currentBudget.cerradura && currentBudget.cerradura !== 'ninguna') {
            let cerraduraText = 'Común ($1.000)';
            if (currentBudget.cerradura === 'monopunto') cerraduraText = 'Monopunto sin llave ($2.700)';
            else if (currentBudget.cerradura === 'bipunto') cerraduraText = 'Bipunto con llave ($4.700)';
            msg += `*Cerradura:* ${cerraduraText}\n`;
          }
        } else if (p === 'puertas') {
          msg += `*Producto:* Puerta de Aluminio (${currentBudget.puertaTipo})\n`;
          let colorText = currentBudget.color === 'base' ? 'Natural/Gris' : (currentBudget.color === 'blanco' ? 'Blanco' : 'Negro o Madera');
          msg += `*Color:* ${colorText}\n`;
          msg += `*Cantidad:* ${currentBudget.cantidad}\n`;
        } else if (p === 'rejas') {
          msg += `*Producto:* Reja de Hierro (${currentBudget.rejaTipo.toUpperCase()})\n`;
          msg += `*Medida:* ${currentBudget.ancho}x${currentBudget.alto} cm\n`;
          msg += `*Cantidad:* ${currentBudget.cantidad}\n`;
        } else if (p === 'puertaRejas') {
          msg += `*Producto:* Puerta Reja de Hierro (${currentBudget.rejaTipo.toUpperCase()})\n`;
          msg += `*Medida:* ${currentBudget.ancho}x${currentBudget.alto} cm\n`;
          msg += `*Cantidad:* ${currentBudget.cantidad}\n`;
        }
        msg += `\n*Total Presupuesto:* ${formatPrice(currentBudget.total)}\n`;
      } else {
        addedItems.forEach((item, index) => {
          msg += `*${index + 1}) ${getItemDescription(item)}*\n`;
          msg += `   *Cantidad:* ${item.cantidad}\n`;
          const unitPrice = item.total / item.cantidad;
          msg += `   *Precio:* ${formatPrice(unitPrice)} c/u\n\n`;
        });

        msg += `*Total Presupuestado (${addedItems.length} ${addedItems.length === 1 ? 'artículo' : 'artículos'}):* ${formatPrice(overallTotal)}\n`;
      }
      
      document.getElementById('client-message-textarea').value = msg;
    }

    // Configurar Event Listeners al cargar la página
    window.addEventListener('DOMContentLoaded', () => {
      // Listeners de Producto
      const productSelect = document.getElementById('product-select');
      productSelect.addEventListener('change', (e) => {
        currentBudget.producto = e.target.value;
        calculateBudget();
      });

      // Listeners de Medidas
      const inputAncho = document.getElementById('input-ancho');
      const inputAlto = document.getElementById('input-alto');
      document.getElementById('input-cantidad').addEventListener('input', (e) => {
        currentBudget.cantidad = parseInt(e.target.value) || 1;
        calculateBudget();
      });

      inputAncho.addEventListener('input', (e) => {
        currentBudget.ancho = parseInt(e.target.value) || 0;
        calculateBudget();
      });

      inputAlto.addEventListener('input', (e) => {
        currentBudget.alto = parseInt(e.target.value) || 0;
        calculateBudget();
      });

      // Listeners de Ventanas
      document.getElementById('serie-select').addEventListener('change', (e) => {
        currentBudget.serie = e.target.value;
        calculateBudget();
      });

      document.getElementById('check-cortina').addEventListener('change', (e) => {
        currentBudget.tieneCortina = e.target.checked;
        calculateBudget();
      });

      document.getElementById('check-mosquitero').addEventListener('change', (e) => {
        currentBudget.tieneMosquitero = e.target.checked;
        calculateBudget();
      });

      document.getElementById('check-dvh').addEventListener('change', (e) => {
        currentBudget.tieneDVH = e.target.checked;
        calculateBudget();
      });

      document.getElementById('cerradura-select').addEventListener('change', (e) => {
        currentBudget.cerradura = e.target.value;
        calculateBudget();
      });

      document.getElementById('input-dolar').addEventListener('input', (e) => {
        currentBudget.dolarValor = parseFloat(e.target.value) || 0;
        calculateBudget();
      });

      document.getElementById('color-select').addEventListener('change', (e) => {
        currentBudget.color = e.target.value;
        calculateBudget();
      });

      // Listeners de Puertas
      document.getElementById('puerta-select').addEventListener('change', (e) => {
        currentBudget.puertaTipo = e.target.value;
        calculateBudget();
      });

      // Listeners de Rejas
      document.getElementById('reja-select').addEventListener('change', (e) => {
        currentBudget.rejaTipo = e.target.value;
        calculateBudget();
      });

      // Agregar al Presupuesto
      document.getElementById('btn-add-item').addEventListener('click', () => {
        addItemToBudget();
      });

      // Copiar al Portapapeles
      document.getElementById('btn-copy').addEventListener('click', () => {
        const textarea = document.getElementById('client-message-textarea');
        textarea.select();
        document.execCommand('copy');
        
        // Feedback visual en el botón
        const btn = document.getElementById('btn-copy');
        const originalText = btn.textContent;
        btn.textContent = '¡Copiado! ✓';
        btn.style.backgroundColor = '#10B981';
        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.backgroundColor = '';
        }, 2000);
      });

      // Compartir por WhatsApp
      document.getElementById('btn-whatsapp').addEventListener('click', () => {
        const text = encodeURIComponent(document.getElementById('client-message-textarea').value);
        window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
      });

      // Alternar Modo Oscuro
      const btnTheme = document.getElementById('btn-theme-toggle');
      if (localStorage.getItem('dark-mode') === 'enabled') {
        document.body.classList.add('dark-mode');
        btnTheme.textContent = '☀️ Modo Claro';
      }
      btnTheme.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
          localStorage.setItem('dark-mode', 'enabled');
          btnTheme.textContent = '☀️ Modo Claro';
        } else {
          localStorage.setItem('dark-mode', 'disabled');
          btnTheme.textContent = '🌓 Modo Oscuro';
        }
      });

      // Inicializar
      calculateBudget();
    });