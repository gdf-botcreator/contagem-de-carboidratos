const config = require("./config.json")
const DXT = parseFloat(config.DX)
const Glicemia_Ideal = parseInt(config.Glicemia_Ideal)
const FS = parseInt(config.FS)
const carboidratos = parseFloat(config.carboidratos)
const UPG = parseInt(config.unidade_por_grama)
if (config.glicemia == "S") {
const calculo1 = DXT - Glicemia_Ideal
const calculo2 = calculo1 / FS
const calculo3 = carboidratos / UPG
const calculoF = calculo3 + calculo2
console.log(`Você agora vai tomar: ${calculoF} unidades!`)
} else {
	const calculoF = carboidratos / UPG
	console.log(`Você agora vai tomar: ${calculoF} unidades!`)
}