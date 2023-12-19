const router = require('express').Router();
const { Settings, Printer, Filament, Material } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
   
    const allSettings = await Settings.findAll({
      where:{
        userId: req.session.user_id
      },
      include:[Printer, Filament]
      //include:[Printer, Filament, Material]
      //   include: [{
      //   model: Printer,
      //   as: 'printer',
      //   include: [{
      //     model: Filament,
      //     as: 'filament',
      //   }]
      // }]
    });
    //console.log(allSettings)
    //console.log(allSettings.dataValues.printTemperature)
    //console.log("foo")
    /*const settings = allSettings.map((setting) => {
      return {
        "printTemperature" : setting.printTemperature,
        "initialLayerTemperature": setting.initialLayerTemperature,
        "buildPlateTemperature": setting.buildPlateTemperature,
        "retractionDistance": setting.retractionDistance,
        "retractionSpeed": setting.retractionSpeed,
        "maxRetractionCount": setting.maxRetractionCount,
        "printer": setting.printer[0].printer,
        "filament": setting.filament[0].filament
      }
    })
    */  
    const setting = allSettings.map((setting) => setting.get( {setting: true }));

    const settingArr = setting.map((setting) => {
      return {
        "printTemperature": setting.printTemperature,
        "initialLayerTemperature": setting.initialLayerTemperature,
        "buildPlateTemperature": setting.buildPlateTemperature,
        "retractionDistance": setting.retractionDistance,
        "retractionSpeed": setting.retractionSpeed,
        "maxRetractionCount": setting.maxRetractionCount,
        "printerName": setting.printer.dataValues.name,
        "printerManufacturer": setting.printer.dataValues.manufacturer,
        "printerModel": setting.printer.dataValues.model,
        "filamentManufacturer": setting.filament.dataValues.manufacturer,
        "filamentColor": setting.filament.dataValues.color,
        "filamentDiameter": setting.filament.dataValues.diameter
        //"materialType": setting.material.dataValues.materialType
      }
    })
      //setting.get({ setting: true }));

    //console.log(settings, "this is line 24");
    res.render('settings', { settingArr });
    
  } catch (error) {
    console.error('Error fetching settings:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;