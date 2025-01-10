elements.Crodium = {
	color: "#b26111",
	behavior: behaviors.LIQUID,
	category: "Bundle",
	state: "solid",
	stateHigh: "MOLTEN_Crodium",
	tempHigh:1760,
	tempLow:0,
	stateLow: "Crodiminimum",
}

elements.Crodium_Powder = {
	color: "#ffb37f",
	behavior: [
		"XX|XX|XX",
		"XX|XX|XX",
		"XX|M1|XX",
	],
	category: "Bundle",
	state: "solid",
	stateHigh: "Crodium",
	temp:400,
	tempHigh:1760,
	tempLow:0,
	stateLow: "ash",
}

elements.molten_Crodium = {
	color: "#cf4211",
	behavior: behaviors.MOLTEN,
	category: "Bundle",
	state: "solid",
	stateHigh: "Crodiminimize",
	tempHigh:2500,
	tempLow:0,
	stateLow: "Crodim",
	hidden:1,
}

elements.Crodim = {
	color: "#cf4211",
	behavior: behaviors.WALL,
	category: "Bundle",
	state: "solid",
	stateHigh: "Crodiminimize",
	tempHigh:2500,
	tempLow:100,
	stateLow: "MOLTEN_Crodium",
	hidden:1,
}

elements.Crodiminimize = {
	color: "#835100",
	behavior: behaviors.DGAS,
	category: "Bundle",
	state: "solid",
}

elements.Crodiminimum = {
	color: "#835100",
	behavior: behaviors.DGAS,
	category: "Bundle",
	state: "solid",
}

elements.Crodium_bugs = {
	color: "#b27615",
	behavior: behaviors.FLY,
	reactions: {
		"head": {elem2:null, chance:40, func:behaviors.KILLPIXEL2 },
	},
	category: "life",
	state: "solid",
	breakInto: "Crodium",
}

elements.Crodium_Bugs = {
	color: "#b27615",
	behavior: behaviors.FLY,
	reactions: {
		"head": {elem2:null, chance:40, func:behaviors.KILLPIXEL2 },
	},
	category: "Bundle",
	state: "solid",
	breakInto: "Crodium",
}

elements.Crodium_Explosion = {
	color: "#ffcb19",
	behavior: [
        "XX|XX|XX",
        "XX|XX|XX",
        "M1|M2 AND EX:10>fire,|M1",
    ],
	category: "weapons",
	state: "solid",
	breakInto: "Crodium",
}

elements.Crodium_explosion = {
	color: "#ffcb19",
	behavior: [
        "XX|XX|XX",
        "XX|XX|XX",
        "M1|M2 AND EX:10>fire,|M1",
    ],
	category: "Bundle",
	state: "solid",
	breakInto: "Crodium",
}

elements.Powderlizer = {
	color: "#8d8d8d",
	behavior: behaviors.WALL,
	reactions: {
		"Crodium": { elem2:["Crodium_Powder"], chance:0.5 },
	},
	category: "Bundle",
	state: "solid",
	breakInto: "ash",
}

elements.Crodium_Nuke = {
	color: "#876f1b",
	behavior: [
        "XX|EX:10>plasma,fire,plasma,fire,plasma,nuke,|XX",
        "EX:10>plasma,fire,plasma,fire,plasma,nuke,|XX|EX:10>plasma,fire,plasma,fire,plasma,nuke,",
        "M1|M2 AND EX:10>plasma,fire,plasma,fire,plasma,nuke,|M1",
    ],
	category: "Bundle",
	state: "solid",
	breakInto: "Crodium_explosion",
}

elements.Crodium_nuke = {
	color: "#876f1b",
	behavior: [
        "XX|EX:10>plasma,fire,plasma,fire,plasma,nuke,|XX",
        "EX:10>plasma,fire,plasma,fire,plasma,nuke,|XX|EX:10>plasma,fire,plasma,fire,plasma,nuke,",
        "M1|M2 AND EX:10>plasma,fire,plasma,fire,plasma,nuke,|M1",
    ],
	category: "weapons",
	state: "solid",
	breakInto: "Crodium_explosion",
}

elements.Deadly_fire = {
	color: "#ff7f2b",
	behavior: behaviors.FLY,
	reactions: {
		"Deadly_fire": {elem2:null, chance:40, func:behaviors.KILLPIXEL1 },
	},
	category: "energy",
	state: "solid",
	breakInto: "bomb",
}

elements.Merge = {
	color: "#8d8d8d",
	behavior: behaviors.WALL,
	reactions: {
		"": { elem2:["Crodium_energy"], chance:0.5, elem1: "ash"},
		"Crodium_energy": { elem2:["Crodium Power"], chance:0.5 },
		"Crodium_power": { elem2:["Crodium_explosion"], chance:0.5 },
	},
	category: "Bundle",
	state: "solid",
	breakInto: "ash",
}
