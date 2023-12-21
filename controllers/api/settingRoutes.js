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

    console.log(req.session.printers)
    console.log(req.session.filaments)

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

    res.render('settings', { 
      settingArr,
      printers: req.session.printers,
      filaments: req.session.filaments,
      logged_in: req.session.logged_in 
    });
    
  } catch (error) {
    console.error('Error fetching settings:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.post('/', withAuth, async (req, res) => {
  try {
    const { filamentId, printerId, printTemperature, initialLayerTemperature, buildPlateTemperature, retractionDistance, retractionSpeed, maxRetractionCount } = req.body;
    console.log('ADD SETTING')
    console.log(req.body);
    console.log(printTemperature)
    console.log(initialLayerTemperature)
    // Create a new settings
    const newSettings = await Settings.create({
      filamentId: filamentId,
      printerId: printerId,
      printTemperature: printTemperature,
      initialLayerTemperature: initialLayerTemperature,
      buildPlateTemperature: buildPlateTemperature,
      retractionDistance: retractionDistance,
      retractionSpeed: retractionSpeed,
      maxRetractionCount: maxRetractionCount,
      userId: req.session.user_id,
    });

    res.status(200).json(newSettings);
  } catch (err) {
    
    res.status(500).json({ error: 'hellooooo ' + err.message });
  }
});

module.exports = router;