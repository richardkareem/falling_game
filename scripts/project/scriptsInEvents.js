
// Put imports here that you wish to use for script blocks in event sheets, e.g.:

// import * as myModule from "./mymodule.js";

// Then you can use 'myModule' in script blocks in event sheets.


const scriptsInEvents = {

	async My_event_sheet_Event1_Act1(runtime, localVars)
	{
		
	},

	async My_event_sheet_Event1_Act10(runtime, localVars)
	{
		
	},

	async My_event_sheet_Event1_Act11(runtime, localVars)
	{
			const sessionScore = sessionStorage.getItem("score");
			const currScore = runtime.globalVars.Score;
		
			if(!sessionScore){
			  sessionStorage.setItem("score", 0)
			  runtime.globalVars.highestScore = 0;
			}else{
			 if(sessionScore >= currScore){
				 runtime.globalVars.highestScore = sessionScore
			 
			 }else{
				 runtime.globalVars.highestScore = currScore
			 }
			}
		
	},

	async My_event_sheet_Event1_Act12(runtime, localVars)
	{
		// console.log("X: ", runtime.objects.objectCollision.getFirstInstance()?.x)
		// console.log( runtime.objects.objectCollision2.getFirstInstance().instVars.xSpawn)
		
		
	},

	async My_event_sheet_Event2_Act1(runtime, localVars)
	{
		// runtime.globalVars.XPositionCharacter = 
	},

	async My_event_sheet_Event2_Act6(runtime, localVars)
	{
		runtime.globalVars.screenWidth = runtime.viewportWidth;
		runtime.globalVars.screenHeight = runtime.viewportHeight;
	},

	async My_event_sheet_Event2_Act7(runtime, localVars)
	{
		const pembatasRight = runtime.objects.pembatas2.getFirstInstance()?.x
		const pembatasLeft = runtime.objects.pembatas.getFirstInstance()?.x
		runtime.globalVars.pembatasWIdth = pembatasRight - pembatasLeft;
	},

	async My_event_sheet_Event4_Act5(runtime, localVars)
	{
		sessionStorage.setItem("score", runtime.globalVars.highestScore);
	},

	async My_event_sheet_Event5_Act1(runtime, localVars)
	{
		const result = Math.floor(Math.random() * (10-1) + 1);
		if(result % 2 === 0){
		 runtime.objects.objectCollision.getFirstInstance().instVars.xSpawn = runtime.objects.pembatas?.getFirstInstance()?.x
		 runtime.objects.objectCollision2.getFirstInstance().instVars.xSpawn = runtime.objects.pembatas2?.getFirstInstance()?.x
		}else{
		 runtime.objects.objectCollision.getFirstInstance().instVars.xSpawn = runtime.objects.pembatas2?.getFirstInstance()?.x
		 runtime.objects.objectCollision2.getFirstInstance().instVars.xSpawn = runtime.objects.pembatas?.getFirstInstance()?.x
		}
	},

	async My_event_sheet_Event8_Act5(runtime, localVars)
	{
		sessionStorage.setItem("score", runtime.globalVars.highestScore);
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

