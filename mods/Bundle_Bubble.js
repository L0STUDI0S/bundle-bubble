elements.Crodium = {
	color: "#b26111",
	behavior: behaviors.LIQUID,
	category: "Bundle",
	state: "solid",
	stateHigh: "molten_Crodium",
	temp: 2000,
	tempHigh:3760,
	tempLow:-250,
	stateLow: "Crodiminimize",
	isFood: true
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
	temp:1500,
	tempHigh:2500,
	tempLow:0,
	stateLow: "Crodim",
	hidden:1,
}

elements.Crodim = {
	color: "#ffcb7c",
	behavior: behaviors.WALL,
	colorPattern: [
		"#ffd97c|#ffcb7c|#ffd97c",
		"#ffcb7c|#ffcb7c|#ffcb7c",
		"#ffd97c|#ffcb7c|#ffd97c",
	],
	category: "Bundle",
	state: "solid",
	stateHigh: "Crodiminimum",
	tempHigh:2500,
	tempLow:-250,
	stateLow: "glass",
	hidden:1,
}

elements.Crodiminimimum = {
	color: "#77230d",
	behavior: behaviors.DGAS,
	temp:300,
	category: "Bundle",
	state: "solid",
}

elements.Crodiminimize = {
	color: "#b68568",
	behavior: behaviors.DGAS,
	temp:200,
	category: "Bundle",
	state: "solid",
}

elements.Crodium_bugs = {
	color: "#b27615",
	behavior: behaviors.FLY,
	reactions: {
		"head": {elem2:null, chance:40, func:behaviors.FEEDPIXEL },
		"body": {elem2:null, chance:40, func:behaviors.FEEDPIXEL },
		
	},
	category: "life",
	state: "solid",
	hardness:30,
	breakInto: "Crodium",
}

elements.Crodium_Bugs = {
	color: "#b27615",
	behavior: behaviors.FLY,
	reactions: {
		"head": {elem2:null, chance:40, func:behaviors.FEEDPIXEL },
		"body": {elem2:null, chance:40, func:behaviors.FEEDPIXEL },
		"Crodium": {elem2:null, chance:40, func:behaviors.FEEDPIXEL },
	},
	category: "Bundle",
	state: "solid",
	hardness:30,
	breakInto: "Crodium",
}


elements.adult_Crodium_Bugs = {
	color: "#b27615",
	behavior: behaviors.FLY,
	reactions: {
		"head": {elem2:null, chance:40, func:behaviors.FEEDPIXEL },
		"body": {elem2:null, chance:40, func:behaviors.FEEDPIXEL },
		"Crodium": {elem2:null, chance:40, func:behaviors.FEEDPIXEL },
	},
	category: "Bundle",
	state: "solid",
	hardness:300,
	breakInto: "Crodium",
}

elements.King_Crodium_Bugs = {
	color: "#b27615",
	behavior: behaviors.FLY,
	reactions: {
		"head": {elem2:null, chance:40, func:behaviors.FEEDPIXEL },
		"body": {elem2:null, chance:40, func:behaviors.FEEDPIXEL },
		"Crodium": {elem2:null, chance:40, func:behaviors.FEEDPIXEL },
	},
	category: "Bundle",
	state: "solid",
	hardness:10000,
	breakInto: "Crodium",
}

elements.Female_Crodium_Bugs = {
	color: "#b27615",
	behavior: behaviors.FLY,
	reactions: {
		"head": {elem2:null, chance:40, func:behaviors.FEEDPIXEL },
		"body": {elem2:null, chance:40, func:behaviors.FEEDPIXEL },
		"Crodium_Repros": {elem2:null, chance:40, func:behaviors.FEEDPIXEL },
		"Crodium": {elem2:null, chance:40, func:behaviors.FEEDPIXEL },
	},
	egg: "Humans",
    foodNeed: 10,
	category: "Bundle",
	state: "solid",
	hardness:20,
	breakInto: "Crodium",
}

elements.Crodium_Repros = {
	color: "#ede7c0",
	behavior: [
		"XX|XX|XX",
		"XX|XX|XX",
		"XX|M1|XX",
	],
	category: "Bundle",
	state: "solid",
	breakInto: "Crodium",
	isFood: true
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
        "XX|EX:40>plasma,fire,nuke,plasma,fire,nuke,plasma,fire,nuke,|XX",
        "EX:40>plasma,fire,nuke,plasma,fire,nuke,plasma,fire,nuke,|XX|EX:40>plasma,fire,nuke,plasma,fire,nuke,plasma,fire,nuke,",
        "M1|M2 AND EX:40>plasma,fire,nuke,plasma,fire,nuke,plasma,fire,nuke,|M1",
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
		"Crodium_Powder": { elem2:["Crodium_energy"], chance:0.5, elem1: "ash"},
		"Crodium_energy": { elem2:["Crodium Power"], chance:0.5 },
		"Crodium_power": { elem2:["Crodium_explosion"], chance:0.5 },
	},
	category: "Bundle",
	state: "solid",
	breakInto: "ash",
}

elements.Cup_of_water = {
	color: "#2687fb",
	behavior: [
		"XX|XX|XX",
		"XX|XX|XX",
		"XX|M1|XX",
	],
	category: "Bundle",
	state: "solid",
	breakInto:"Smashed_cup_of_water",
	hidden:1,
}

elements.Cup = {
	color: "#9c9c9c",
	behavior: [
		"XX|XX|XX",
		"XX|XX|XX",
		"XX|M1|XX",
	],
	category: "Bundle",
	state: "solid",
	breakInto:"Smashed_cup",
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

elements.Leather = {
	color: "#664400",
	behavior: [
		"XX|XX|XX",
		"XX|XX|XX",
		"XX|M1|XX",
	],
	reactions: {
		"Fire": {elem2:null, chance:40, func:behaviors.KILLPIXEL1 },
	},
	category: "Bundle",
	state: "solid",
}

elements.Leaf_leather_Sack = {
	color: "#09a74a",
	behavior: [
		"XX|XX|XX",
		"XX|XX|XX",
		"XX|M1|XX",
	],
	reactions: {
		"fire": {elem2:null, chance:40, func:behaviors.KILLPIXEL1 },
		"Powderlizer": {elem2:null, chance:40, func:behaviors.KILLPIXEL1, elem1: "LL_Sack_Powderlizer"},
		"meat": {elem2:null, chance:40, func:behaviors.KILLPIXEL1, elem1: "LL_Sack_meat"},
		"cooked_meat": {elem2:null, chance:40, func:behaviors.KILLPIXEL1, elem1: "LL_Sack_cooked_meat"},
		"grass": {elem2:null, chance:40, func:behaviors.KILLPIXEL1, elem1: "LL_Sack_grass"},
		"sand": {elem2:null, chance:40, func:behaviors.KILLPIXEL1, elem1: "LL_Sack_sand"},
		"water": {elem2:null, chance:40, func:behaviors.KILLPIXEL1, elem1: "LL_Sack_water"},
		"tnt": {elem2:null, chance:100, func:behaviors.KILLPIXEL1, elem1: "LL_Sack_tnt"},
		"tnt": {elem2:null, chance:100, func:behaviors.KILLPIXEL1, elem1: "LL_Sack_tnt"},
		"magma": {elem2:null, chance:100, func:behaviors.KILLPIXEL1, elem1: "LL_Sack_magma"},
	},
	category: "Bundle",
	state: "solid",
}

elements.LL_Sack_meat = {
	color: "#09a74a",
	behavior: [
		"XX|XX|XX",
		"XX|XX|XX",
		"XX|M1|XX",
	],
	reactions: {
		"Fire": {elem2:null, chance:40, func:behaviors.KILLPIXEL1 },
		"zipper": {elem2:null, chance:40, func:behaviors.KILLPIXEL1, elem1: "meat"},
	},
	category: "Bundle",
	state: "solid",
	hidden:1,
}

elements.LL_Sack_cooked_meat = {
	color: "#09a74a",
	behavior: [
		"XX|XX|XX",
		"XX|XX|XX",
		"XX|M1|XX",
	],
	reactions: {
		"Fire": {elem2:null, chance:40, func:behaviors.KILLPIXEL1 },
		"zipper": {elem2:null, chance:40, func:behaviors.KILLPIXEL1, elem1: "cooked_meat"},
	},
	category: "Bundle",
	state: "solid",
	hidden:1,
}

elements.LL_Sack_grass = {
	color: "#09a74a",
	behavior: [
		"XX|XX|XX",
		"XX|XX|XX",
		"XX|M1|XX",
	],
	reactions: {
		"Fire": {elem2:null, chance:40, func:behaviors.KILLPIXEL1 },
		"zipper": {elem2:null, chance:40, func:behaviors.KILLPIXEL1, elem1: "grass"},
	},
	category: "Bundle",
	state: "solid",
	hidden:1,
}

elements.LL_Sack_sand = {
	color: "#09a74a",
	behavior: [
		"XX|XX|XX",
		"XX|XX|XX",
		"XX|M1|XX",
	],
	reactions: {
		"Fire": {elem2:null, chance:40, func:behaviors.KILLPIXEL1 },
		"zipper": {elem2:null, chance:40, func:behaviors.KILLPIXEL1, elem1: "sand"},
	},
	category: "Bundle",
	state: "solid",
	hidden:1,
}

elements.LL_Sack_water = {
	color: "#09a74a",
	behavior: [
		"XX|XX|XX",
		"XX|XX|XX",
		"XX|M1|XX",
	],
	reactions: {
		"Fire": {elem2:null, chance:40, func:behaviors.KILLPIXEL1 },
		"Cup": {elem2:null, chance:40, func:behaviors.KILLPIXEL1, elem1: "LL_Sack_cupofwater"},
		"zipper": {elem2:null, chance:40, func:behaviors.KILLPIXEL1, elem1: "water"},
	},
	category: "Bundle",
	state: "solid",
	hidden:1,
}

elements.LL_Sack_cupofwater = {
	color: "#09a74a",
	behavior: [
		"XX|XX|XX",
		"XX|XX|XX",
		"XX|M1|XX",
	],
	reactions: {
		"Fire": {elem2:null, chance:40, func:behaviors.KILLPIXEL1 },
		"zipper": {elem2:null, chance:40, func:behaviors.KILLPIXEL1, elem1: "cup_of_water"},
	},
	category: "Bundle",
	state: "solid",
	breakInto:"LL_Sack_SCOW",
	hidden:1,
}

elements.LL_Sack_SCOW = {
	color: "#09a74a",
	behavior: [
		"XX|XX|XX",
		"XX|XX|XX",
		"XX|M1|XX",
	],
	reactions: {
		"Fire": {elem2:null, chance:40, func:behaviors.KILLPIXEL1 },
		"zipper": {elem2:null, chance:40, func:behaviors.KILLPIXEL1, elem1: "Smashed_cup_of_water"},
	},
	category: "Bundle",
	state: "solid",
	hidden:1,
}


elements.LL_Sack_dynamite = {
	color: "#09a74a",
	behavior: [
		"XX|XX|XX",
		"XX|XX|XX",
		"XX|M1|XX",
	],
	reactions: {
		"Fire": {elem2:null, chance:40, func:behaviors.KILLPIXEL1 },
		"zipper": {elem2:null, chance:40, func:behaviors.KILLPIXEL1, elem1: "dynamite"},
	},
	category: "Bundle",
	state: "solid",
	stateHigh:"bomb",
	tempHigh:400,
	templow:0,
	stateLow:"ash",
	hidden:1,
}

elements.zipper = {
	color: "#787878",
	behavior: [
		"XX|XX|XX",
		"XX|XX|XX",
		"XX|M1|XX",
	],
	category: "Bundle",
	state: "solid",
}

elements.Smashed_cup_of_water = {
	color: "#9c9c9c",
	behavior: [
		"XX|XX|XX",
		"CH:water|XX|XX",
		"M2|M1|M2",
	],
	category: "Bundle",
	state: "solid",
	hidden:1,
}

elements.Smashed_cup = {
	color: "#9c9c9c",
	behavior: [
		"XX|XX|XX",
		"XX|XX|XX",
		"M2|M1|M2",
	],
	category: "Bundle",
	state: "solid",
	hidden:1,
}

elements.Obomanation = {
	color: "#4e3077",
	behavior: [
		"XX|M1%20|XX",
		"M1%50|XX|M1%50",
		"XX|M1|XX",
	],
	reactions: {
		"head": {elem2:null, chance:40, func:behaviors.KILLPIXEL2 },
	},
	category: "Bundle",
	state: "solid",
}
