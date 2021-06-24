/*
 *
 * Yoan Asdrubal Quintana Ramirez.
 *  9/3/2020
 *
 */
export const MesesLabel = ['Enero',
	'Febrero',
	'Marzo',
	'Abril',
	'Mayo',
	'Junio',
	'Julio',
	'Agosto',
	'Septiembre',
	'Octubre',
	'Noviembre',
	'Diciembre'
];

export enum MesEnum {
	'Enero' = 1,
	'Febrero' = 2,
	'Marzo' = 3,
	'Abril' = 4,
	'Mayo' = 5,
	'Junio' = 6,
	'Julio' = 7,
	'Agosto' = 8,
	'Septiembre' = 9,
	'Octubre' = 10,
	'Noviembre' = 11,
	'Diciembre' = 12
}

export function getMesLabelFrom(mes) {
	if (mes < 1 || mes > 12)
		return '';
	return MesesLabel[mes - 1];
}