export interface Estadisticas {
  temperatura_promedio: number;
  humedad_promedio: number;
  temperatura_min: number;
  temperatura_max: number;
  humedad_min: number;
  humedad_max: number;
}

export interface Lectura {
  fecha_hora: string;
  timestamp: number;
  temperatura: number;
  humedad: number;
  velocidad_ventilador: string;
}

export interface ApiResponse {
  total_lecturas: number;
  estadisticas?: Estadisticas;
  lecturas: Lectura[];
}
