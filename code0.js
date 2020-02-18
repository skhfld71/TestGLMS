gdjs.SettingsCode = {};
gdjs.SettingsCode.GDNewObjectObjects1= [];

gdjs.SettingsCode.conditionTrue_0 = {val:false};
gdjs.SettingsCode.condition0IsTrue_0 = {val:false};


gdjs.SettingsCode.userFunc0x680d00 = function(runtimeScene) {
"use strict";
runtimeScene.setBackgroundColor(255,255,255);

};
gdjs.SettingsCode.eventsList0xb4be0 = function(runtimeScene) {

{


gdjs.SettingsCode.userFunc0x680d00(runtimeScene);

}


}; //End of gdjs.SettingsCode.eventsList0xb4be0


gdjs.SettingsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SettingsCode.GDNewObjectObjects1.length = 0;

gdjs.SettingsCode.eventsList0xb4be0(runtimeScene);
return;

}
gdjs['SettingsCode'] = gdjs.SettingsCode;
