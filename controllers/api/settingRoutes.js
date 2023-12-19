const router = require('express').Router();
const { Settings, Printer, Filament, Material } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const materialData = await Material.findAll();
    const materials = materialData.map( (material) => material.get( {material : true}))
    const materialsArr = materials.map( (material) => material.materialType)

    const allSettings = await Settings.findAll({
      where:{
        userId: req.session.user_id
      },
      include:[Printer, Filament]
    });

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
        "filamentDiameter": setting.filament.dataValues.diameter,
        "materialType": materialsArr[setting.filament.dataValues.materialId-1]
      }
    })

    res.render('settings', { settingArr });
    
  } catch (error) {
    console.error('Error fetching settings:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;